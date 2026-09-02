import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-18 bg-[#f8fafc] border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="section-title">
            ESTABLISHED 1997 • INVENTORY HUB
          </div>
          <h2 className="font-industrial text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-slate-900">
            About Patel Tractor Parts
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-[4px] border border-slate-300 relative shadow-xs">
              <p
                id="about-exact-text"
                className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal"
              >
                Since 1997, Patel Tractor Parts has been Central India’s most trusted distributor for genuine and aftermarket agricultural and commercial vehicle spares. Operating with a massive, ready-to-install inventory, we specialize in top tractor brands including Swaraj, Mahindra & Mahindra, Sonalika, Eicher, Escorts Kubota, Powertrac, and Farmtrac. Beyond agriculture, we are a primary supplier of high-quality components for Mahindra Jeep and Bolero commercial fleets. Backed by decades of experience, we guarantee exact OEM fitment, rapid dispatch, and zero downtime—because we know your machinery cannot afford to stop.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-slate-900 text-orange-400 flex items-center justify-center font-bold text-[10px] rounded-[2px]">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-900 uppercase">Exact OEM & Heavy Duty Fitment</span>
                </div>
                <div className="flex items-center space-x-1.5 text-slate-700">
                  <i className="fa-solid fa-map-pin text-orange-600"></i>
                  <span className="uppercase font-semibold">Kabrai, Mahoba (UP)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-[4px] border border-slate-300 shadow-xs">
                <div className="w-8 h-8 rounded-[3px] bg-slate-900 text-orange-400 flex items-center justify-center mb-2.5">
                  <i className="fa-solid fa-boxes-stacked text-sm"></i>
                </div>
                <h4 className="font-industrial text-base font-bold uppercase text-slate-900">Massive Ready Stock</h4>
                <p className="text-xs text-slate-600 mt-1 leading-normal">Critical engine, transmission, steering, and body spares in stock.</p>
              </div>

              <div className="bg-white p-4 rounded-[4px] border border-slate-300 shadow-xs">
                <div className="w-8 h-8 rounded-[3px] bg-slate-900 text-orange-400 flex items-center justify-center mb-2.5">
                  <i className="fa-solid fa-shield-halved text-sm"></i>
                </div>
                <h4 className="font-industrial text-base font-bold uppercase text-slate-900">Exact OEM Fitment</h4>
                <p className="text-xs text-slate-600 mt-1 leading-normal">100% factory specifications to prevent wear, vibration, and breakdown.</p>
              </div>

              <div className="bg-white p-4 rounded-[4px] border border-slate-300 shadow-xs">
                <div className="w-8 h-8 rounded-[3px] bg-slate-900 text-orange-400 flex items-center justify-center mb-2.5">
                  <i className="fa-solid fa-paper-plane text-sm"></i>
                </div>
                <h4 className="font-industrial text-base font-bold uppercase text-slate-900">Zero Downtime Speed</h4>
                <p className="text-xs text-slate-600 mt-1 leading-normal">Swift dispatch so farmers, workshops, and fleets stay moving.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 rounded-[4px] border border-slate-800 overflow-hidden shadow-md">
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
                  alt="Patel Tractor Parts Central Warehouse Racks"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-75 contrast-110 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute top-2.5 left-2.5 bg-slate-900/90 border border-slate-700 text-orange-400 font-mono font-bold text-[10px] uppercase px-2 py-0.5 rounded-[2px]">
                  CENTRAL WAREHOUSE
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white font-mono text-[11px]">
                  <span className="font-bold flex items-center text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1"></span>
                    Kabrai, Uttar Pradesh
                  </span>
                  <span className="text-slate-300">15,000+ Parts</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-[4px] border border-slate-800 shadow-md">
              <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest block mb-1 font-mono">CENTRAL INDIA SUPPLY</span>
              <h3 className="font-industrial text-2xl font-bold uppercase leading-tight text-white mb-2">27+ Years Mechanical Legacy</h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">Connecting agricultural heartlands and commercial corridors with dependable spare parts since 1997.</p>

              <div className="space-y-3 border-t border-slate-800 pt-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono uppercase text-[11px]">Experience</span>
                  <span className="font-industrial text-lg font-bold text-white">27+ Years (Est. 1997)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono uppercase text-[11px]">Google Rating</span>
                  <span className="font-industrial text-lg font-bold text-amber-400 flex items-center">5.0 <i className="fa-solid fa-star text-[10px] ml-1"></i></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono uppercase text-[11px]">Dispatch Coverage</span>
                  <span className="font-industrial text-lg font-bold text-orange-400">Pan-India Freight</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800">
                <a href="https://wa.me/918707826228" target="_blank" rel="noopener noreferrer" className="accent-btn w-full">
                  <i className="fa-brands fa-whatsapp text-base mr-2"></i> Connect with Specialist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};