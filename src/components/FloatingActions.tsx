import React from 'react';

export const FloatingActions: React.FC = () => {
  return (
    <aside aria-label="Quick contact buttons" className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-2.5">
      <a
        id="floating-call-btn"
        href="tel:+918707826228"
        aria-label="Call Patel Tractor Parts directly at 087078 26228"
        className="sm:hidden w-11 h-11 rounded-[3px] bg-slate-900 text-white flex items-center justify-center shadow-lg border border-slate-700 active:scale-95 transition-transform"
      >
        <i className="fa-solid fa-phone text-orange-400 text-base"></i>
      </a>

      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/918707826228?text=Hello%20Patel%20Tractor%20Parts,%20I%20need%20urgent%20spare%20parts%20support."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="group relative flex items-center bg-[#25d366] hover:bg-[#20ba5a] text-slate-950 font-bold rounded-[3px] p-3 sm:px-4 sm:py-2.5 shadow-xl border border-emerald-600 transition-all font-mono text-xs uppercase tracking-wider"
      >
        <i className="fa-brands fa-whatsapp text-xl sm:mr-2"></i>
        <span className="hidden sm:inline-block font-industrial font-bold uppercase tracking-wider text-xs text-slate-950">
          Order on WhatsApp
        </span>
        
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-600 text-[8px] font-bold text-white items-center justify-center font-mono">
            !
          </span>
        </span>
      </a>
    </aside>
  );
};