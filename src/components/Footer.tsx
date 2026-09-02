import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 text-white border-t-2 border-slate-900">
      <div className="bg-slate-900 border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-slate-950 p-5 rounded-[4px] border border-slate-800 flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-[3px] bg-slate-900 border border-slate-700 flex items-center justify-center text-orange-400 shrink-0 mt-0.5"><i className="fa-solid fa-location-dot text-base"></i></div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-orange-400 font-bold block mb-1">HUB & WAREHOUSE LOCATION</span>
                <p id="footer-address" className="text-xs sm:text-sm text-slate-200 leading-snug">Infront of Nagar Panchayat, near Chhanga Tiraha, Kabrai, Uttar Pradesh 210424.</p>
                <a href="https://maps.google.com/?q=Infront+of+Nagar+Panchayat+near+Chhanga+Tiraha+Kabrai+Uttar+Pradesh+210424" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[11px] text-orange-400 hover:text-orange-300 font-semibold mt-1.5 underline uppercase tracking-wider font-mono"><i className="fa-solid fa-diamond-turn-right mr-1"></i> Get Google Map Directions</a>
              </div>
            </div>

            <div className="bg-slate-950 p-5 rounded-[4px] border border-slate-800 flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-[3px] bg-slate-900 border border-slate-700 flex items-center justify-center text-orange-400 shrink-0 mt-0.5"><i className="fa-solid fa-phone text-base"></i></div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-orange-400 font-bold block mb-1">DIRECT PHONE SUPPORT</span>
                <p className="text-slate-400 text-xs mb-0.5">Call for part stock check & orders:</p>
                <a id="footer-phone" href="tel:+918707826228" className="font-industrial text-xl font-bold text-white hover:text-orange-400 transition-colors block font-mono">087078 26228</a>
                <span className="text-[10px] text-emerald-400 block mt-1 font-mono uppercase font-semibold">● HELPLINE ACTIVE</span>
              </div>
            </div>

            <div className="bg-slate-950 p-5 rounded-[4px] border border-slate-800 flex items-start space-x-3.5">
              <div className="w-10 h-10 rounded-[3px] bg-slate-900 border border-slate-700 flex items-center justify-center text-orange-400 shrink-0 mt-0.5"><i className="fa-solid fa-clock text-base"></i></div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-orange-400 font-bold block mb-1">OPERATING TIMINGS</span>
                <p id="footer-hours" className="text-sm sm:text-base font-industrial uppercase font-bold text-white leading-snug">Open Daily from 9:00 AM</p>
                <div className="mt-2 inline-flex items-center bg-slate-900 px-2.5 py-0.5 rounded-[2px] border border-slate-800">
                  <span id="footer-reviews-badge" className="flex items-center text-amber-400 text-[11px] font-bold font-mono uppercase tracking-wider">★ 5.0 Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center">
              <span className="bg-slate-900 text-white font-industrial font-black text-xl px-2 py-0.5 mr-2 rounded-[2px] tracking-wider uppercase border border-slate-700">PATEL</span>
              <span className="font-industrial text-xl font-bold uppercase tracking-tight text-white">TRACTOR PARTS</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed pr-4">Central India's trusted distributor for genuine and aftermarket agricultural and commercial vehicle spares since 1997. Zero downtime guarantee with rapid Pan-India dispatch from Kabrai, Uttar Pradesh.</p>
            <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-[2px]">Swaraj</span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-[2px]">Mahindra</span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-[2px]">Sonalika</span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-[2px]">Eicher</span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-[2px]">Bolero Fleet</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-industrial text-base font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li><a href="#home" className="hover:text-orange-400 transition-colors">› Home</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">› About Us (Est. 1997)</a></li>
              <li><a href="#featured-products" className="hover:text-orange-400 transition-colors">› Featured Products</a></li>
              <li><a href="#specialties" className="hover:text-orange-400 transition-colors">› Agricultural & Fleet Spares</a></li>
              <li><a href="#why-us" className="hover:text-orange-400 transition-colors">› Why Choose Us</a></li>
              <li><a href="#contact-us" className="hover:text-orange-400 transition-colors">› Contact Us</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-industrial text-base font-bold uppercase tracking-wider text-white">Order Channels</h4>
            <p className="text-slate-400 text-xs">Mechanics, workshops, and fleet owners: order spares directly via WhatsApp or direct desk call.</p>
            <div className="space-y-2">
              <a
                href="https://wa.me/918707826228"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-btn w-full !bg-[#25d366] hover:!bg-[#20ba5a]"
              >
                <i className="fa-brands fa-whatsapp text-base mr-2"></i> Order on WhatsApp
              </a>
              <a
                href="tel:+918707826228"
                className="accent-btn w-full !bg-transparent border border-slate-600 !text-slate-50 hover:!bg-slate-800"
              >
                <i className="fa-solid fa-phone text-xs mr-2 text-orange-400"></i> Call 087078 26228
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 font-mono">
          <p>© {currentYear} PATEL TRACTOR PARTS • CENTRAL INDIA DISTRIBUTOR HUB</p>
          <div className="flex items-center space-x-3">
            <span className="text-slate-400">OEM FITMENT GUARANTEED</span>
            <span className="text-slate-700">|</span>
            <span className="text-orange-400 font-bold">PAN-INDIA DISPATCH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};