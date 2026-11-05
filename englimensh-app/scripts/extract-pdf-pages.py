#!/usr/bin/env python3
"""Extract page text from PDFs; OCR scanned pages and preserve page provenance."""
from __future__ import annotations
import json, re, subprocess, tempfile
from pathlib import Path
import fitz

ROOT = Path(__file__).resolve().parents[1]
BOOKS = ROOT / "public" / "books"
OUT = ROOT / "src" / "data" / "extracted"
OUT.mkdir(parents=True, exist_ok=True)

def clean(text: str) -> str:
    text = text.replace("\x00", " ")
    text = re.sub(r"[\t\u00a0 ]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()

def ocr_page(page: fitz.Page) -> str:
    pix = page.get_pixmap(matrix=fitz.Matrix(2.0, 2.0), alpha=False)
    with tempfile.NamedTemporaryFile(suffix=".png") as image_file:
        pix.save(image_file.name)
        outputs = []
        for lang in ("eng", "ara"):
            result = subprocess.run(
                ["tesseract", image_file.name, "stdout", "-l", lang, "--psm", "6"],
                capture_output=True, text=True, check=False
            )
            if result.returncode == 0 and result.stdout.strip():
                outputs.append(result.stdout)
        return clean("\n".join(outputs))

pdfs = sorted(p for p in BOOKS.rglob("*") if p.is_file() and p.suffix.lower() == ".pdf")
summary = []
for pdf in pdfs:
    rel = pdf.relative_to(ROOT).as_posix()
    target = OUT / (pdf.stem.replace("/", "_") + ".jsonl")
    counts = {"native": 0, "ocr": 0, "empty": 0}
    with fitz.open(pdf) as doc, target.open("w", encoding="utf-8") as out:
        for page_no, page in enumerate(doc, start=1):
            text = clean(page.get_text("text", sort=True))
            method = "native"
            if text:
                counts["native"] += 1
            else:
                text = ocr_page(page)
                method = "ocr" if text else "empty"
                counts[method] += 1
            out.write(json.dumps({
                "source": rel, "page": page_no, "method": method, "text": text
            }, ensure_ascii=False) + "\n")
    summary.append({
        "source": rel, "pages": sum(counts.values()),
        "pages_with_text": counts["native"] + counts["ocr"],
        "native_text_pages": counts["native"], "ocr_text_pages": counts["ocr"],
        "empty_pages": counts["empty"],
        "extracted_file": target.relative_to(ROOT).as_posix(),
        "status": "complete" if counts["empty"] == 0 else "needs_manual_review"
    })
    print(f"{rel}: native={counts['native']} OCR={counts['ocr']} empty={counts['empty']}")

(OUT / "manifest.json").write_text(json.dumps({
    "schemaVersion": 2, "method": "PyMuPDF native text + Tesseract OCR (English/Arabic)",
    "books": summary
}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Completed {len(summary)} PDFs.")
