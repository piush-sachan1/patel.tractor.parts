import React, { useState } from 'react';

interface ProductItem {
  id: string;
  title: string;
  category: 'engine' | 'brake' | 'filters' | 'transmission' | 'body';
  badge: string;
  icon: string;
  description: string;
  keyItems: string[];
  compatibility: string;
  partNoSample: string;
  imageUrl: string;
}

export const FeaturedProducts: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'tractor' | 'commercial'>('all');

  const products: ProductItem[] = [
    {
      id: 'engine-parts',
      title: 'Engine Parts & Assemblies',
      category: 'engine',
      badge: 'OEM SPEC READY',
      icon: 'fa-gears',
      description: 'Heavy-duty engine sleeves, piston rings, crankshafts, camshafts, and complete multi-cylinder overhaul gasket kits.',
      keyItems: ['Cylinder Liner Kits', 'Piston & Pin Sets', 'Main & Big End Bearings', 'Head Gaskets & Valves'],
      compatibility: 'Swaraj 744/855, Mahindra 575/275, Sonalika DI, Eicher 242/380, Bolero M2DiCR',
      partNoSample: 'ENG-HY-9842',
      imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'brake-systems',
      title: 'Brake Systems & Hydraulics',
      category: 'brake',
      badge: 'ZERO DEFECT FIT',
      icon: 'fa-shield-halved',
      description: 'Precision hydraulic lift pumps, master brake cylinders, heavy-duty brake drums, calipers, and lining assemblies.',
      keyItems: ['Hydraulic Lift Control Valves', 'Brake Master & Wheel Cylinders', 'Heavy Brake Shoes & Drums', 'Pressure Boosters & Oil Seals'],
      compatibility: 'Mahindra DI Fleets, Bolero Pik-Up & Maxi Truck, Swaraj, Kubota, Farmtrac',
      partNoSample: 'BRK-HYD-5410',
      imageUrl: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'filters',
      title: 'Filters & Lubrication Protection',
      category: 'filters',
      badge: 'HIGH EFFICIENCY',
      icon: 'fa-filter',
      description: 'Engine oil filters, primary/secondary diesel fuel filter elements, air pre-cleaner bowls, and water separators.',
      keyItems: ['Spin-on Diesel Fuel Filters', 'Engine Oil Full Flow Filters', 'Dual Element Air Filters', 'Sedimenter & Water Traps'],
      compatibility: 'All Tractor Models (Swaraj, Mahindra, Sonalika, Eicher) & Bolero Commercial Fleet',
      partNoSample: 'FLT-SEC-1092',
      imageUrl: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'transmission-gears',
      title: 'Transmission & Clutch Systems',
      category: 'transmission',
      badge: 'HIGH TORQUE RATED',
      icon: 'fa-cog',
      description: 'Crown wheel & pinion matched sets, dual clutch assemblies, PTO shafts, synchro cones, and differential gear kits.',
      keyItems: ['Heavy-Duty Clutch Plates', 'Crown Wheel Pinion Pairs', 'PTO Drive Shafts', 'Differential Bevel Gears'],
      compatibility: 'Swaraj 855/744, Mahindra 475/575, Sonalika Tiger, Bolero Camper & Pickup',
      partNoSample: 'TRN-CLT-7721',
      imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredProducts = products.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'tractor') return p.compatibility.includes('Swaraj') || p.compatibility.includes('Eicher');
    if (activeFilter === 'commercial') return p.compatibility.includes('Bolero') || p.compatibility.includes('Maxi Truck');
    return true;
  });

  return (
    <section id="featured-products" className="relative py-14 sm:py-18 bg-slate-950 text-white border-b-2 border-slate-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
          alt="Patel Tractor Parts Warehouse Background"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-15 contrast-125 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950"></div>
        <div className="hero-pattern opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="section-title text-orange-400">OUR FEATURED PRODUCTS</div>
            <h2 className="font-industrial text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">Explore Our Inventory</h2>
            <p className="text-slate-400 mt-1 text-sm max-w-2xl">Factory-grade replacement parts and heavy-duty assemblies ready for same-day dispatch across Central India and nationwide.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">QUICK FILTERS:</span>
            <button onClick={() => setActiveFilter('all')} className={`px-3 py-1 text-xs font-mono font-bold uppercase rounded-[2px] border transition-colors ${activeFilter === 'all' ? 'bg-orange-600 text-white border-orange-600' : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'}`}>All Spares</button>
            <button onClick={() => setActiveFilter('tractor')} className={`px-3 py-1 text-xs font-mono font-bold uppercase rounded-[2px] border transition-colors ${activeFilter === 'tractor' ? 'bg-orange-600 text-white border-orange-600' : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'}`}>Tractor</button>
            <button onClick={() => setActiveFilter('commercial')} className={`px-3 py-1 text-xs font-mono font-bold uppercase rounded-[2px] border transition-colors ${activeFilter === 'commercial' ? 'bg-orange-600 text-white border-orange-600' : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'}`}>Bolero / Commercial</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <div key={product.id} className="bg-slate-900/90 backdrop-blur-xs rounded-[4px] border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-orange-500 transition-all duration-200 shadow-lg group">
              <div>
                <div className="relative h-48 bg-slate-950 border-b border-slate-800 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter brightness-80 contrast-115 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between">
                    <span className="bg-orange-600 text-white font-mono font-bold text-[10px] uppercase px-2 py-0.5 rounded-[2px] tracking-wider shadow-xs">{product.badge}</span>
                    <span className="text-[10px] font-mono text-slate-300 bg-slate-900/90 border border-slate-700 px-1.5 py-0.5 rounded-[2px]">REF #{product.partNoSample}</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="flex items-center text-emerald-400 font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1.5 animate-pulse"></span>In Stock: Kabrai</span>
                    <span className="text-slate-400">Category 0{idx + 1}</span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-industrial text-lg font-bold uppercase text-white tracking-wide group-hover:text-orange-400 transition-colors">{product.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-normal">{product.description}</p>
                  <div className="pt-2">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">Ready Components:</span>
                    <ul className="space-y-1 text-xs text-slate-300 font-mono">
                      {product.keyItems.map((item, i) => (
                        <li key={i} className="flex items-center space-x-1.5"><span className="text-orange-500 font-bold">›</span><span className="truncate">{item}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-orange-400 font-bold block mb-0.5">Fitment Compatibility:</span>
                    <p className="text-slate-400 text-[11px] font-mono leading-tight">{product.compatibility}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a href={`https://wa.me/918707826228?text=Hello%20Patel%20Tractor%20Parts,%20I%20am%20inquiring%20about%20${encodeURIComponent(product.title)}%20(Ref:%20${product.partNoSample}).`} target="_blank" rel="noopener noreferrer" className="accent-btn w-full text-xs py-2.5">
                  <i className="fa-brands fa-whatsapp text-sm mr-1.5"></i> Inquire Spares
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-900/90 backdrop-blur-xs p-4 rounded-[4px] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2 text-slate-300">
            <i className="fa-solid fa-boxes-packing text-orange-500 text-base"></i>
            <span>Need specialized parts not listed in featured categories? Over 15,000+ line items cataloged in Kabrai.</span>
          </div>
          <a href="tel:+918707826228" className="text-orange-400 hover:text-orange-300 font-bold underline whitespace-nowrap">
            Direct Desk: 087078 26228 →
          </a>
        </div>
      </div>
    </section>
  );
};