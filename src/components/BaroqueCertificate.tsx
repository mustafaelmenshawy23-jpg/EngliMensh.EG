import React, { useRef, useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Download, Star, Award, CheckCircle2 } from 'lucide-react';

export interface BaroqueCertificateData {
  studentName: string;
  studentSchool: string;
  studentGrade: string;
  examTitle: string;
  score: number;
  maxMarks: number;
  percentage: number;
  dateStr: string;
}

interface BaroqueCertificateProps {
  data: BaroqueCertificateData;
  onPrint?: () => void;
  showActions?: boolean;
}

export const BaroqueCertificate: React.FC<BaroqueCertificateProps> = ({
  data,
  onPrint,
  showActions = true,
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [isGeneratingPng, setIsGeneratingPng] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate QR code for verification
  useEffect(() => {
    const verificationText =
      `Official EngliMensh Certificate of Excellence\n` +
      `Student: ${data.studentName}\n` +
      `Exam: ${data.examTitle}\n` +
      `Score: ${data.score}/${data.maxMarks} (${data.percentage}%)\n` +
      `Teacher: Mr. Mohammad El-Menshawy\n` +
      `Issued: ${data.dateStr}\n` +
      `Platform: EngliMensh MOE Exam Engine`;

    QRCode.toDataURL(verificationText, {
      width: 240,
      margin: 1,
      color: {
        dark: '#0a192f',
        light: '#ffffff',
      },
    })
      .then(setQrDataUrl)
      .catch((e) => console.error('Error generating QR:', e));
  }, [data]);

  // High-Resolution 1920x1080 (16:9) PNG Rasterizer via Canvas API
  const handleSavePdf = async () => {
    setIsGeneratingPng(true);
    try {
      const canvas = canvasRef.current || document.createElement('canvas');
      canvas.width = 1920;
      canvas.height = 1080;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      // 1. Aged Parchment Background
      const bgGrad = ctx.createRadialGradient(960, 540, 100, 960, 540, 1100);
      bgGrad.addColorStop(0, '#fdfbf7');
      bgGrad.addColorStop(0.5, '#f8f4eb');
      bgGrad.addColorStop(0.85, '#f1e7d0');
      bgGrad.addColorStop(1, '#e3d4b6');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1920, 1080);

      // Faint aged paper grain / texture lines
      ctx.fillStyle = 'rgba(180, 140, 80, 0.03)';
      for (let i = 0; i < 1080; i += 4) {
        ctx.fillRect(0, i, 1920, 1.5);
      }

      // 2. Ornate Baroque Navy & Gold Borders
      // Outer Navy Band
      ctx.lineWidth = 14;
      ctx.strokeStyle = '#0a192f';
      ctx.strokeRect(40, 40, 1840, 1000);

      // Outer Gold Filigree Line
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#d4af37';
      ctx.strokeRect(55, 55, 1810, 970);

      // Inner Navy Inset
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#1e3a8a';
      ctx.strokeRect(70, 70, 1780, 940);

      // Inner Thin Gold Line
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#f59e0b';
      ctx.strokeRect(78, 78, 1764, 924);

      // Draw Baroque Corner Ornaments
      const drawCorner = (x: number, y: number, scaleX: number, scaleY: number) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scaleX, scaleY);
        ctx.strokeStyle = '#d4af37';
        ctx.fillStyle = '#d4af37';
        ctx.lineWidth = 3;

        // Corner L-Bracket
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(80, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 80);
        ctx.stroke();

        // Corner Rosette Circle
        ctx.beginPath();
        ctx.arc(35, 35, 12, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(35, 35, 6, 0, Math.PI * 2);
        ctx.fill();

        // Little leaf curl
        ctx.beginPath();
        ctx.arc(20, 20, 8, 0, Math.PI);
        ctx.stroke();

        ctx.restore();
      };

      drawCorner(90, 90, 1, 1);
      drawCorner(1830, 90, -1, 1);
      drawCorner(90, 990, 1, -1);
      drawCorner(1830, 990, -1, -1);

      // 3. Top Emblem Crest
      ctx.save();
      ctx.translate(960, 160);
      // Crest Outer Circle
      ctx.beginPath();
      ctx.arc(0, 0, 42, 0, Math.PI * 2);
      ctx.fillStyle = '#0a192f';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#d4af37';
      ctx.stroke();

      // Golden Star in Crest
      ctx.fillStyle = '#f59e0b';
      ctx.font = '36px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('★', 0, -2);
      ctx.restore();

      // 4. Header: CERTIFICATE OF EXCELLENCE
      ctx.fillStyle = '#0a192f';
      ctx.font = 'bold 54px Georgia, "Times New Roman", serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '8px';
      ctx.fillText('CERTIFICATE OF EXCELLENCE', 960, 250);

      // Gold Divider under Header
      const lineGrad = ctx.createLinearGradient(600, 275, 1320, 275);
      lineGrad.addColorStop(0, 'rgba(212, 175, 55, 0)');
      lineGrad.addColorStop(0.5, '#d4af37');
      lineGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');
      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(600, 278);
      ctx.lineTo(1320, 278);
      ctx.stroke();

      // 5. Subtitle: This certificate is proudly awarded to
      ctx.fillStyle = '#64748b';
      ctx.font = 'italic 24px Georgia, "Times New Roman", serif';
      ctx.letterSpacing = '2px';
      ctx.fillText('This certificate is proudly awarded to', 960, 335);

      // 6. Student Name: Explicitly shifted downwards to height * 0.505 = 545px (+45px offset)
      // Centered directly above horizontal underline and completely clearing the subtitle
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 64px Georgia, "Times New Roman", serif';
      ctx.letterSpacing = '1px';
      ctx.textAlign = 'center';
      ctx.fillText(data.studentName || 'Student Name', 960, 545);

      // Horizontal Golden Rule directly under Student Name
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(540, 575);
      ctx.lineTo(1380, 575);
      ctx.stroke();

      // Small Diamond Accent on Name line
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(960, 568);
      ctx.lineTo(968, 575);
      ctx.lineTo(960, 582);
      ctx.lineTo(952, 575);
      ctx.closePath();
      ctx.fill();

      // Student Metadata (Grade & School)
      ctx.fillStyle = '#475569';
      ctx.font = '600 20px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.letterSpacing = '1px';
      ctx.fillText(
        `${data.studentGrade || '1st Secondary'} • ${data.studentSchool || 'Egyptian Secondary School'}`,
        960,
        615
      );

      // 7. Achievement Description
      ctx.fillStyle = '#334155';
      ctx.font = '22px Georgia, "Times New Roman", serif';
      ctx.letterSpacing = '0.5px';
      ctx.fillText(
        'In recognition of outstanding academic performance and exceptional results in the',
        960,
        665
      );

      // Exam Title highlighted in Navy & Bold
      ctx.fillStyle = '#0a192f';
      ctx.font = 'bold 28px Georgia, "Times New Roman", serif';
      ctx.fillText(`"${data.examTitle}"`, 960, 705);

      // Score Ribbon Badge
      ctx.fillStyle = '#0a192f';
      ctx.fillRect(760, 735, 400, 52);
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 2;
      ctx.strokeRect(760, 735, 400, 52);

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 22px "Plus Jakarta Sans", monospace';
      ctx.letterSpacing = '2px';
      ctx.fillText(
        `SCORE: ${data.score} / ${data.maxMarks}  (${data.percentage}%)`,
        960,
        768
      );

      // 8. Bottom Footer Layout: Clean Separation with no overlap
      // Left Anchor: Cleanly positioned at width * 0.08 (154px), height * 0.952 (1028px)
      if (qrDataUrl) {
        const qrImg = new Image();
        qrImg.src = qrDataUrl;
        await new Promise((resolve) => {
          qrImg.onload = resolve;
          qrImg.onerror = resolve;
        });
        ctx.drawImage(qrImg, 154, 840, 115, 115);
      }

      ctx.textAlign = 'left';
      ctx.fillStyle = '#047857';
      ctx.font = 'bold 15px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText('✓ OFFICIAL VERIFIED CERTIFICATE', 285, 875);

      ctx.fillStyle = '#64748b';
      ctx.font = '13px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText('ENGLIMENSH MOE MASTERY ENGINE', 285, 905);

      // Date string anchored cleanly to bottom-left corner at width * 0.08, height * 0.952
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 14px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText(`DATE ISSUED: ${data.dateStr || 'October 21, 2026'}`, 154, 1028);

      // Center: Gold Star Accent Seal (Centered at X: 960, Y: 960 with ample breathing space)
      ctx.save();
      ctx.translate(960, 960);
      ctx.beginPath();
      ctx.arc(0, 0, 46, 0, Math.PI * 2);
      ctx.fillStyle = '#d4af37';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, 0, 38, 0, Math.PI * 2);
      ctx.fillStyle = '#0a192f';
      ctx.fill();
      ctx.fillStyle = '#f59e0b';
      ctx.font = '32px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('★', 0, 0);
      ctx.restore();

      // Right Anchor: Cleanly positioned at width * 0.92 (1766px), height * 0.952 (1028px)
      ctx.textAlign = 'right';
      ctx.strokeStyle = '#0a192f';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(1440, 920);
      ctx.lineTo(1766, 920);
      ctx.stroke();

      ctx.fillStyle = '#0a192f';
      ctx.font = 'bold 24px Georgia, "Times New Roman", serif';
      ctx.fillText('Teacher: Mr. Mohammad El-Menshawy', 1766, 955);

      ctx.fillStyle = '#64748b';
      ctx.font = 'italic 16px Georgia, serif';
      ctx.fillText('Senior English Specialist & Exam Assessor', 1766, 985);

      // Honors string anchored cleanly to bottom-right corner at width * 0.92, height * 0.952
      ctx.fillStyle = '#b45309';
      ctx.font = 'bold 13px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.letterSpacing = '2px';
      ctx.fillText('EngliMensh Official Honors', 1766, 1028);

      // 9. Trigger Instant Download
      // Build a real one-page PDF from the high-resolution certificate image.
      // This does not invoke window.print() or the Android print service.
      const jpegUrl = canvas.toDataURL('image/jpeg', 0.96);
      const base64 = jpegUrl.split(',')[1] || '';
      const binary = atob(base64);
      const imageBytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) imageBytes[i] = binary.charCodeAt(i);

      const encoder = new TextEncoder();
      const chunks: Uint8Array[] = [];
      const offsets: number[] = [0];
      let byteLength = 0;
      const push = (part: Uint8Array | string) => {
        const bytes = typeof part === 'string' ? encoder.encode(part) : part;
        chunks.push(bytes);
        byteLength += bytes.length;
      };
      push('%PDF-1.4\\n% EngliMensh certificate\\n');
      const addObject = (id: number, body: string, stream?: Uint8Array) => {
        offsets[id] = byteLength;
        if (stream) {
          push(`${id} 0 obj\\n${body}\\nstream\\n`);
          push(stream);
          push('\\nendstream\\nendobj\\n');
        } else {
          push(`${id} 0 obj\\n${body}\\nendobj\\n`);
        }
      };
      addObject(1, '<< /Type /Catalog /Pages 2 0 R >>');
      addObject(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
      addObject(3, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 960 540] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>');
      addObject(4, `<< /Type /XObject /Subtype /Image /Width 1920 /Height 1080 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imageBytes.length} >>`, imageBytes);
      const pageStream = encoder.encode('q\\n960 0 0 540 0 0 cm\\n/Im0 Do\\nQ');
      addObject(5, `<< /Length ${pageStream.length} >>`, pageStream);
      const xrefOffset = byteLength;
      push(`xref\\n0 6\\n0000000000 65535 f \\n`);
      for (let id = 1; id <= 5; id++) push(`${String(offsets[id]).padStart(10, '0')} 00000 n \\n`);
      push(`trailer\\n<< /Size 6 /Root 1 0 R >>\\nstartxref\\n${xrefOffset}\\n%%EOF`);

      const pdfBlob = new Blob(chunks, { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `EngliMensh_Certificate_${(data.studentName || 'Student').replace(/[^a-z0-9_-]+/gi, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(pdfUrl), 30000);
    } catch (err) {
      console.error('Failed to export certificate canvas:', err);
    } finally {
      setIsGeneratingPng(false);
    }
  };

  return (
    <div className="space-y-4" dir="ltr">
      {/* Hidden high-res canvas for 1920x1080 raster export */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Action Toolbar */}
      {showActions && (
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 text-white p-3.5 sm:p-4 rounded-2xl no-print shadow-md">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-xs sm:text-sm font-bold">
              Custom Baroque Certificate (شهادة التميز الملكية)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSavePdf}
              disabled={isGeneratingPng}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-xs flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingPng ? 'Preparing PDF...' : 'Save PDF'}</span>
            </button>
          </div>
        </div>
      )}

      {/* 16:9 Landscape Responsive Baroque Certificate Container */}
      <div
        id="englimensh-printable-certificate"
        className="w-full aspect-[16/9] relative overflow-hidden rounded-2xl sm:rounded-3xl border-4 border-slate-900 bg-[#fbf9f4] shadow-2xl flex flex-col justify-between p-4 sm:p-8 md:p-10 select-none text-slate-900"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, #ffffff 0%, #fbf8f0 60%, #f4ebd6 100%)',
        }}
      >
        {/* Ornate Navy & Gold Baroque Double Border */}
        <div className="absolute inset-2 sm:inset-3 border-2 border-amber-600/70 pointer-events-none rounded-xl" />
        <div className="absolute inset-3 sm:inset-4 border border-blue-950/40 pointer-events-none rounded-lg" />

        {/* Four Corner Baroque Flourishes */}
        <div className="absolute top-4 left-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-amber-600 pointer-events-none flex items-start justify-start p-1">
          <span className="text-amber-600 text-xs sm:text-base leading-none">✦</span>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-amber-600 pointer-events-none flex items-start justify-end p-1">
          <span className="text-amber-600 text-xs sm:text-base leading-none">✦</span>
        </div>
        <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-amber-600 pointer-events-none flex items-end justify-start p-1">
          <span className="text-amber-600 text-xs sm:text-base leading-none">✦</span>
        </div>
        <div className="absolute bottom-4 right-4 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-amber-600 pointer-events-none flex items-end justify-end p-1">
          <span className="text-amber-600 text-xs sm:text-base leading-none">✦</span>
        </div>

        {/* TOP SECTION: Emblem Crest & Calligraphic Header */}
        <div className="text-center space-y-1 relative z-10 pt-1 sm:pt-2">
          {/* Top Emblem Crest */}
          <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center shadow-md mb-1 sm:mb-2">
            <Star className="w-5 h-5 sm:w-7 sm:h-7 text-amber-400 fill-amber-400" />
          </div>

          <h2 className="font-serif font-black tracking-widest text-base sm:text-2xl md:text-3xl text-blue-950 uppercase leading-tight drop-shadow-xs">
            CERTIFICATE OF EXCELLENCE
          </h2>

          <div className="w-32 sm:w-56 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />

          <p className="font-serif italic text-[11px] sm:text-sm text-slate-500 pt-0.5 sm:pt-1">
            This certificate is proudly awarded to
          </p>
        </div>

        {/* CENTER SECTION: Student Name shifted vertically downwards directly above the underline */}
        <div className="text-center space-y-1 sm:space-y-1.5 relative z-10 px-4 mt-2 sm:mt-4">
          <div className="inline-block border-b-2 border-amber-500 pb-0.5 sm:pb-1 px-4 sm:px-12 max-w-full">
            <h1 className="text-lg sm:text-2xl md:text-4xl font-serif font-black text-slate-950 tracking-tight truncate">
              {data.studentName || 'Student Name'}
            </h1>
          </div>

          <div className="text-[10px] sm:text-xs font-semibold text-slate-600">
            {data.studentGrade || '1st Secondary'} • {data.studentSchool || 'General Secondary School'}
          </div>

          <p className="text-[10px] sm:text-xs md:text-sm font-serif text-slate-700 max-w-xl mx-auto leading-relaxed pt-0.5">
            In recognition of outstanding academic performance and exceptional results in the{' '}
            <strong className="text-blue-950 block text-xs sm:text-sm md:text-base font-bold mt-0.5">
              "{data.examTitle}"
            </strong>
          </p>

          {/* Score Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-[10px] sm:text-xs font-bold font-mono">
            <span>Score: {data.score} / {data.maxMarks}</span>
            <span>•</span>
            <span className="text-blue-900 font-black">{data.percentage}%</span>
          </div>
        </div>

        {/* BOTTOM SECTION: Date/QR anchored to left: 8%, Star center, Teacher & Honors anchored to right: 8% */}
        <div className="relative z-10 w-full pt-2 border-t border-amber-200/60 pb-1 sm:pb-2">
          <div className="flex items-end justify-between px-[6%] sm:px-[8%]">
            {/* Left Corner Anchor: Date & QR Code */}
            <div className="flex items-center gap-2 sm:gap-3 text-left">
              {qrDataUrl && (
                <img
                  src={qrDataUrl}
                  alt="Verification QR"
                  className="w-10 h-10 sm:w-13 sm:h-13 p-0.5 border border-slate-300 rounded-md bg-white shrink-0 shadow-2xs"
                />
              )}
              <div className="text-[9px] sm:text-xs text-slate-600">
                <span className="block font-mono text-[9px] text-slate-400">DATE ISSUED</span>
                <span className="font-bold text-slate-800">{data.dateStr || 'October 21, 2026'}</span>
                <span className="hidden sm:flex items-center gap-1 text-[9px] text-emerald-700 font-bold mt-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Verified Official
                </span>
              </div>
            </div>

            {/* Center Gold Star Emblem Seal with clear breathing room */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md border-2 border-slate-900">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950" />
              </div>
              <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-amber-800 mt-0.5">
                Official Seal
              </span>
            </div>

            {/* Right Corner Anchor: Teacher Signature & Honors */}
            <div className="text-right">
              <div className="w-24 sm:w-36 border-b-2 border-slate-900 ml-auto mb-1" />
              <div className="font-serif font-black text-xs sm:text-sm text-slate-950">
                Teacher: Mr. Mohammad El-Menshawy
              </div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium">
                Senior English Specialist & Assessor
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold text-amber-700 tracking-wider">
                EngliMensh Official Honors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
