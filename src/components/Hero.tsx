import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative text-white border-b-2 border-slate-900 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1920&q=80"
          alt="Heavy-Duty Agricultural Tractor and Machinery"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-125 saturate-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70"></div>
        <div className="hero-pattern opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 text-left space-y-5">
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-700 px-3 py-1 rounded-[3px]">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 font-mono">
                CENTRAL INDIA DISTRIBUTOR HUB • KABRAI
              </span>
            </div>

            <h1 id="hero-headline" className="font-industrial text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.05] tracking-tight">
              STOP THE DOWNTIME.<br />
              <span className="text-white">START THE ENGINE.</span>
            </h1>

            <p id="hero-subheadline" className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              Central India’s massive inventory for Tractor and Bolero spares.{' '}
              <span className="text-orange-500 font-bold">Rapid Pan-India dispatch.</span>
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="https://wa.me/918707826228" target="_blank" rel="noopener noreferrer" className="accent-btn">
                <i className="fa-brands fa-whatsapp text-lg mr-2"></i> Message on WhatsApp
              </a>
              <a href="tel:+918707826228" className="accent-btn !bg-transparent border border-slate-300 !text-white hover:!bg-white/10">
                <i className="fa-solid fa-phone text-sm mr-2 text-orange-400"></i> Call 087078 26228
              </a>
            </div>

            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="bg-slate-900/90 rounded-[4px] p-2.5 border border-slate-800">
                <div className="text-orange-500 font-industrial text-lg font-bold">1997</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Est. Legacy</div>
              </div>
              <div className="bg-slate-900/90 rounded-[4px] p-2.5 border border-slate-800">
                <div className="text-orange-500 font-industrial text-lg font-bold">100%</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">OEM Fitment</div>
              </div>
              <div className="bg-slate-900/90 rounded-[4px] p-2.5 border border-slate-800">
                <div className="text-orange-500 font-industrial text-lg font-bold">READY STOCK</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Fast Dispatch</div>
              </div>
              <div className="bg-slate-900/90 rounded-[4px] p-2.5 border border-slate-800">
                <div className="text-amber-400 font-industrial text-lg font-bold flex items-center">
                  5.0 <i className="fa-solid fa-star text-[11px] ml-1"></i>
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Google Rated</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-slate-900 rounded-[4px] border border-slate-700 shadow-xl relative overflow-hidden">
              <div className="absolute top-2.5 right-2.5 z-20 bg-orange-600 text-white font-industrial font-bold uppercase tracking-wider text-[10px] px-2.5 py-0.5 rounded-[2px] shadow-sm">
                Live Inventory
              </div>

              <div className="relative h-28 w-full overflow-hidden border-b border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="Patel Tractor Parts Warehouse Storage Shelves"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-60 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-[3px] bg-slate-900/90 border border-slate-700 flex items-center justify-center text-orange-400 shrink-0">
                    <i className="fa-solid fa-warehouse text-xs"></i>
                  </div>
                  <div>
                    <h3 className="font-industrial text-sm font-bold text-white uppercase tracking-wide">
                      Kabrai Hub Warehouse
                    </h3>
                    <p className="text-[10px] text-emerald-400 font-mono font-semibold flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1 animate-pulse"></span>
                      15,000+ LINE ITEMS IN STOCK
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-2.5 text-xs">
                <div className="bg-slate-950 p-2.5 rounded-[3px] border-l-3 border-orange-500">
                  <span className="text-[10px] uppercase tracking-wider text-orange-400 font-bold block mb-0.5 font-mono">Tractor Spares in Stock:</span>
                  <p className="text-slate-300 text-[11px] font-mono leading-tight">Swaraj • Mahindra • Sonalika • Eicher • Kubota • Powertrac</p>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-[3px] border-l-3 border-slate-600">
                  <span className="text-[10px] uppercase tracking-wider text-slate-300 font-bold block mb-0.5 font-mono">Commercial Vehicle Spares:</span>
                  <p className="text-slate-300 text-[11px] font-mono leading-tight">Mahindra Jeep • Bolero Pik-Up • Maxi Truck • Camper</p>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-[3px] border border-slate-800">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5 font-mono">Dispatch Coverage:</span>
                  <p className="text-slate-300 text-[11px]">Pan-India Road Transport, Bus Cargo & Express Logistics</p>
                </div>
                <div className="pt-2">
                  <a href="https://wa.me/918707826228?text=Hello%20Patel%20Tractor%20Parts,%20I%20need%20spares%20for%20my%20tractor/vehicle" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center !bg-[#25d366] hover:!bg-[#20ba5a] text-slate-950 font-bold text-xs py-2.5 px-3 rounded-[3px] transition-colors uppercase tracking-wider font-mono">
                    <i className="fa-brands fa-whatsapp text-sm mr-2"></i> Send Part Photo / Inquire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};