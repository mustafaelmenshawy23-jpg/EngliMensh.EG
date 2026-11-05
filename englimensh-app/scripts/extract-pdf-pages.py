#!/usr/bin/env python3
"""Extract searchable, page-addressable text from the source PDF books.

The output is deliberately source-first: every page keeps its exact PDF path,
page number, and extracted text. No curriculum units or questions are generated.
"""
from __future__ import annotations

import json
import re
from pathlib import Path
import fitz  # PyMuPDF

ROOT = Path(__file__).resolve().parents[1]
BOOKS = ROOT / "public" / "books"
OUT = ROOT / "src" / "data" / "extracted"
OUT.mkdir(parents=True, exist_ok=True)

def clean(text: str) -> str:
    text = text.replace("\x00", " ")
    text = re.sub(r"[\t\u00a0 ]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()

pdfs = sorted(p for p in BOOKS.rglob("*") if p.is_file() and p.suffix.lower() == ".pdf")
summary = []
for pdf in pdfs:
    rel = pdf.relative_to(ROOT).as_posix()
    target = OUT / (pdf.stem.replace("/", "_") + ".jsonl")
    page_count = 0
    nonempty = 0
    with fitz.open(pdf) as doc, target.open("w", encoding="utf-8") as out:
        page_count = len(doc)
        for page_no, page in enumerate(doc, start=1):
            text = clean(page.get_text("text", sort=True))
            if text:
                nonempty += 1
            record = {"source": rel, "page": page_no, "text": text}
            out.write(json.dumps(record, ensure_ascii=False) + "\n")
    summary.append({
        "source": rel,
        "pages": page_count,
        "pages_with_text": nonempty,
        "extracted_file": target.relative_to(ROOT).as_posix(),
        "status": "text_extracted" if nonempty else "image_only_or_no_text"
    })
    print(f"{rel}: {page_count} pages, {nonempty} with text")

(OUT / "manifest.json").write_text(
    json.dumps({"schemaVersion": 1, "method": "PyMuPDF page text extraction", "books": summary},
               ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8"
)
print(f"Completed {len(summary)} PDFs.")
