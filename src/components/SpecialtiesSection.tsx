import React from 'react';

export const SpecialtiesSection: React.FC = () => {
  const tractorBrands = ['Swaraj', 'Mahindra & Mahindra', 'Sonalika', 'Eicher', 'Escorts Kubota', 'Powertrac', 'Farmtrac'];
  const commercialVehicles = ['Mahindra Jeep', 'Bolero Pik-Up', 'Bolero Maxi Truck Plus', 'Bolero Camper', 'Mahindra DI Fleets'];
  const tractorSparesList = ['Engine Sleeves, Pistons & Ring Sets', 'Hydraulic Lift Assemblies & Pumps', 'Clutch Plates & Pressure Assemblies', 'Crown Wheel & Pinion Sets', 'Steering Tie Rods & Gearboxes', 'Brake Shoes & Master Cylinders', 'PTO Shafts & Transmission Gears', 'Heavy-Duty Radiators & Cooling Units'];
  const commercialSparesList = ['Differential & Crown Pinion Sets', 'Gearbox Synchronizers & Bearings', 'Rear Axles & Propeller Shafts', 'Front & Rear Leaf Springs & Pins', 'Steering Draglinks & Ball Joints', 'Brake Drums, Calipers & Boosters', 'Cabin & Chassis Fitment Spares', 'Diesel Fuel Injection & Starter Parts'];

  return (
    <section id="specialties" className="py-14 sm:py-18 bg-white border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="section-title">DUAL INVENTORY LINES • COMPREHENSIVE STOCK</div>
          <h2 className="font-industrial text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-slate-900">Our Specialties</h2>
          <p className="text-slate-600 mt-1 text-sm max-w-2xl">Guaranteed OEM fitment and proven mechanical durability for agricultural tractors and commercial transport fleets.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div id="specialty-agricultural" className="bg-[#f8fafc] rounded-[4px] border border-slate-300 overflow-hidden flex flex-col justify-between shadow-xs hover:border-slate-400 transition-colors">
            <div className="relative h-40 w-full overflow-hidden bg-slate-900 border-b border-slate-300">
              <img
                src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80"
                alt="Agricultural Tractor Mechanical Spares Division"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center filter brightness-70 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-slate-900 text-orange-400 font-mono font-bold text-[10px] uppercase px-2.5 py-1 rounded-[2px] tracking-wider border border-slate-700">DIVISION 01</div>
              <div className="absolute bottom-3 left-4 flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-[3px] bg-slate-900/90 text-orange-400 flex items-center justify-center border border-slate-700"><i className="fa-solid fa-tractor text-base"></i></div>
                <h3 className="font-industrial text-lg sm:text-xl font-bold uppercase text-white tracking-wide">Agricultural Tractor Spares</h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-5">
              <p className="text-slate-700 text-sm leading-relaxed font-normal">Genuine & aftermarket parts for Swaraj, Mahindra, Sonalika, Eicher, Kubota, Powertrac, & Farmtrac.</p>
              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2 font-mono">Supported Tractor Models & Makes:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {tractorBrands.map((brand) => (
                    <span key={brand} className="bg-white text-slate-800 border border-slate-300 text-xs font-semibold px-2.5 py-1 rounded-[2px]">{brand}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-[3px] p-4 border border-slate-300">
                <h4 className="font-industrial text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center"><i className="fa-solid fa-gears text-orange-500 mr-2"></i>Key Ready-To-Install Components:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 font-mono">
                  {tractorSparesList.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5"><span className="text-orange-600 font-bold">›</span><span className="truncate">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <a href="https://wa.me/918707826228?text=Hello%20Patel%20Tractor%20Parts,%20I%20need%20Agricultural%20Tractor%20Spares." target="_blank" rel="noopener noreferrer" className="accent-btn w-full">
                  <i className="fa-brands fa-whatsapp text-base mr-2"></i> Inquire Tractor Spares on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div id="specialty-commercial" className="bg-[#f8fafc] rounded-[4px] border border-slate-300 overflow-hidden flex flex-col justify-between shadow-xs hover:border-slate-400 transition-colors">
            <div className="relative h-40 w-full overflow-hidden bg-slate-900 border-b border-slate-300">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                alt="Commercial Utility Vehicle Fleet Spares Division"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center filter brightness-70 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-orange-600 text-white font-mono font-bold text-[10px] uppercase px-2.5 py-1 rounded-[2px] tracking-wider">DIVISION 02</div>
              <div className="absolute bottom-3 left-4 flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-[3px] bg-slate-900/90 text-orange-400 flex items-center justify-center border border-slate-700"><i className="fa-solid fa-truck-pickup text-base"></i></div>
                <h3 className="font-industrial text-lg sm:text-xl font-bold uppercase text-white tracking-wide">Commercial Fleet Spares</h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-5">
              <p className="text-slate-700 text-sm leading-relaxed font-normal">Specialized components for Mahindra Jeep & Bolero.</p>
              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2 font-mono">Vehicle Applications & Fleets:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {commercialVehicles.map((model) => (
                    <span key={model} className="bg-white text-slate-800 border border-slate-300 text-xs font-semibold px-2.5 py-1 rounded-[2px]">{model}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-[3px] p-4 border border-slate-300">
                <h4 className="font-industrial text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center"><i className="fa-solid fa-wrench text-orange-500 mr-2"></i>Key Ready-To-Install Components:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 font-mono">
                  {commercialSparesList.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5"><span className="text-orange-600 font-bold">›</span><span className="truncate">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <a href="https://wa.me/918707826228?text=Hello%20Patel%20Tractor%20Parts,%20I%20need%20Mahindra%20Jeep%20/%20Bolero%20Fleet%20Spares." target="_blank" rel="noopener noreferrer" className="accent-btn w-full">
                  <i className="fa-brands fa-whatsapp text-base mr-2"></i> Inquire Bolero / Jeep Spares on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};