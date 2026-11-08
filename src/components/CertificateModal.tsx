import React from 'react';
import { Award, X } from 'lucide-react';
import { BaroqueCertificate, BaroqueCertificateData } from './BaroqueCertificate.tsx';

export type CertificateData = BaroqueCertificateData;

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CertificateData;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div className="bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-amber-500/30 animate-in fade-in zoom-in duration-200 my-auto">
        {/* MODAL CONTROLS BAR (Hidden on Print) */}
        <div className="px-5 py-3.5 bg-slate-950 text-white flex items-center justify-between gap-4 border-b border-slate-800 no-print">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white">
                Official Baroque Certificate of Excellence
              </h3>
              <p className="text-[10px] text-amber-300/80 hidden sm:block">
                Ministry Specifications · Supervised by Mr. Mohammad El-Menshawy
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Close Certificate Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL BODY CONTAINING THE HIGH-RES BAROQUE CERTIFICATE */}
        <div className="p-3 sm:p-5 md:p-6 overflow-x-auto">
          <BaroqueCertificate
            data={data}
            showActions={true}
          />
        </div>
      </div>
    </div>
  );
};
