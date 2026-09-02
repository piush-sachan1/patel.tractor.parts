import React from 'react';

export const WhyChooseUsSection: React.FC = () => {
  const items = [
    { id: 'zero-downtime', icon: 'fa-regular fa-clock', title: 'Zero Downtime Guarantee', description: 'We stock ready-to-fit spares so your agricultural tractors and transport vehicles never stay halted in fields or transit.', highlight: 'Continuous Operation' },
    { id: 'pan-india-dispatch', icon: 'fa-solid fa-truck-fast', title: 'Rapid Pan-India Dispatch', description: 'Strategically connected logistics hub in Central India ensuring same-day dispatch via express courier, cargo, and freight networks.', highlight: 'Express Delivery' },
    { id: 'oem-fitment', icon: 'fa-solid fa-wrench', title: 'Exact OEM Fitment', description: 'Factory calibrated dimensions and high metallurgical standards prevent premature wear, misalignment, and repeat repairs.', highlight: '100% Genuine Specs' },
    { id: 'google-reviews', icon: 'fa-solid fa-star', title: '5.0 Google Reviews', description: 'Highest customer satisfaction from tractor workshops, fleet owners, mechanics, and farmers across Uttar Pradesh and beyond.', highlight: 'Verified Feedback' },
  ];

  return (
    <section id="why-us" className="py-14 sm:py-18 bg-slate-900 text-white border-b-2 border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="section-title">RELIABLE LOGISTICS & STANDARDS</div>
          <h2 className="font-industrial text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">Why Choose Us</h2>
          <p className="text-slate-400 mt-1 text-sm max-w-2xl">Decades of trust, massive ready inventory, and uncompromised parts quality.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, index) => (
            <div key={item.id} id={`why-choose-${item.id}`} className="bg-slate-950 rounded-[4px] p-5 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-[3px] bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400">
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <span className="text-slate-500 font-mono text-xs font-bold">0{index + 1}</span>
                </div>
                <div className="text-[10px] font-mono uppercase font-bold tracking-widest text-orange-400 mb-1">{item.highlight}</div>
                <h3 className="font-industrial text-lg font-bold uppercase text-white mb-2 tracking-wide">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-normal">{item.description}</p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>SYSTEM VERIFIED</span>
                <span className="text-orange-500 font-bold">✓</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-slate-950 rounded-[4px] p-5 sm:p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="text-left">
            <h4 className="font-industrial text-xl font-bold uppercase text-white">Need urgent spares dispatched to your location?</h4>
            <p className="text-slate-400 text-xs mt-1">Send your part photo, part number, or vehicle model on WhatsApp for instant quote & same-day dispatch.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a href="https://wa.me/918707826228" target="_blank" rel="noopener noreferrer" className="accent-btn">
              <i className="fa-brands fa-whatsapp text-base mr-2"></i> WhatsApp 087078 26228
            </a>
            <a
              href="tel:+918707826228"
              className="accent-btn !bg-transparent border border-slate-600 !text-slate-50 hover:!bg-slate-800"
            >
              <i className="fa-solid fa-phone text-xs mr-2 text-orange-400"></i> Call Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};