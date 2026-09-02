import React, { useState } from 'react';

export const QuickInquiry: React.FC = () => {
  const [vehicleType, setVehicleType] = useState('tractor');
  const [selectedBrand, setSelectedBrand] = useState('Swaraj 744 / 855 / 735');
  const [modelOrPart, setModelOrPart] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');

  const tractorOptions = ['Swaraj 744 / 855 / 735', 'Mahindra 575 DI / 275 / 475 / Arjun', 'Sonalika DI 745 / 750 / 35', 'Eicher 242 / 380 / 485 / 557', 'Escorts Kubota / Farmtrac 60 / 45', 'Powertrac Euro 50 / 439', 'Other Tractor Model'];
  const commercialOptions = ['Mahindra Bolero Pik-Up (1.3T / 1.7T / Maxx)', 'Mahindra Bolero Maxi Truck Plus', 'Mahindra Bolero Camper (4WD / 2WD)', 'Mahindra Commander / Major / Jeep', 'Mahindra DI Utility Vehicle Spares', 'Other Commercial Model'];

  const generateWhatsAppLink = () => {
    const brand = selectedBrand || (vehicleType === 'tractor' ? 'Tractor' : 'Bolero/Jeep');
    const partDetails = modelOrPart.trim() ? modelOrPart.trim() : 'Urgent Spare Parts Required';
    const loc = customerLocation.trim() ? `Location: ${customerLocation.trim()}` : '';
    const text = encodeURIComponent(`Hello Patel Tractor Parts,\n\nI need spare parts for my vehicle:\n- Category: ${vehicleType === 'tractor' ? 'Agricultural Tractor' : 'Commercial Vehicle'}\n- Model/Make: ${brand}\n- Part Needed: ${partDetails}\n${loc ? `- ${loc}\n` : ''}\nPlease let me know price and dispatch time.`);
    return `https://wa.me/918707826228?text=${text}`;
  };

  return (
    <section className="py-14 bg-[#f8fafc] border-b border-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[4px] shadow-xs border border-slate-300 overflow-hidden">
          
          <div className="bg-slate-900 px-6 py-5 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b-2 border-orange-500">
            <div>
              <div className="section-title text-orange-400 mb-1">FAST INQUIRY TOOL</div>
              <h3 className="font-industrial text-xl sm:text-2xl font-bold uppercase tracking-wide">Instant Parts Quotation via WhatsApp</h3>
              <p className="text-slate-300 text-xs mt-0.5">Select your machine or enter your required part to send a pre-filled WhatsApp message.</p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center px-2.5 py-1 rounded-[2px] bg-slate-950 text-emerald-400 text-xs font-mono border border-slate-700">
                <i className="fa-solid fa-bolt mr-1 text-orange-400"></i> DESK ACTIVE
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-7 space-y-5">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1.5 font-mono">1. Select Vehicle Category:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => { setVehicleType('tractor'); setSelectedBrand(tractorOptions[0]); }}
                  className={`py-2.5 px-3 rounded-[3px] font-industrial uppercase font-bold text-xs sm:text-sm border flex items-center justify-center space-x-2 transition-all ${vehicleType === 'tractor' ? 'border-orange-600 bg-slate-900 text-white shadow-xs' : 'border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                >
                  <i className="fa-solid fa-tractor text-base text-orange-400"></i><span>Agricultural Tractor</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setVehicleType('commercial'); setSelectedBrand(commercialOptions[0]); }}
                  className={`py-2.5 px-3 rounded-[3px] font-industrial uppercase font-bold text-xs sm:text-sm border flex items-center justify-center space-x-2 transition-all ${vehicleType === 'commercial' ? 'border-orange-600 bg-slate-900 text-white shadow-xs' : 'border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                >
                  <i className="fa-solid fa-truck-pickup text-base text-orange-400"></i><span>Mahindra Jeep / Bolero</span>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="model-select" className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1.5 font-mono">2. Select Vehicle / Tractor Model:</label>
              <select id="model-select" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="w-full bg-slate-50 border border-slate-300 rounded-[3px] py-2.5 px-3 text-slate-800 focus:outline-none focus:border-slate-900 font-medium text-xs sm:text-sm">
                {(vehicleType === 'tractor' ? tractorOptions : commercialOptions).map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="part-description" className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1.5 font-mono">3. Part Name / Problem:</label>
                <input id="part-description" type="text" placeholder="e.g. Clutch plate, Crown pinion, Hydraulic pump" value={modelOrPart} onChange={(e) => setModelOrPart(e.target.value)} className="w-full bg-slate-50 border border-slate-300 rounded-[3px] py-2.5 px-3 text-slate-800 focus:outline-none focus:border-slate-900 text-xs sm:text-sm" />
              </div>
              <div>
                <label htmlFor="customer-location" className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1.5 font-mono">4. Delivery City / District (Optional):</label>
                <input id="customer-location" type="text" placeholder="e.g. Mahoba, Banda, Jhansi, Kanpur" value={customerLocation} onChange={(e) => setCustomerLocation(e.target.value)} className="w-full bg-slate-50 border border-slate-300 rounded-[3px] py-2.5 px-3 text-slate-800 focus:outline-none focus:border-slate-900 text-xs sm:text-sm" />
              </div>
            </div>

            <div className="pt-2">
              <a
                id="inquiry-send-whatsapp-btn"
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-btn w-full !bg-[#25d366] hover:!bg-[#20ba5a]"
              >
                <i className="fa-brands fa-whatsapp text-lg mr-2"></i> Send Inquiry on WhatsApp (087078 26228)
              </a>
              <p className="text-center text-[11px] text-slate-500 mt-2 font-mono">Direct connection to Patel Tractor Parts inventory desk in Kabrai.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};