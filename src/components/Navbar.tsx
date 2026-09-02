import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Featured Products', href: '#featured-products' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

  return (
    <header id="navbar" className={`sticky top-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b-2 border-slate-900' : 'bg-white border-b-2 border-slate-900'}`}>
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-orange-400 font-semibold tracking-wide uppercase text-[11px]"><i className="fa-solid fa-location-dot mr-1.5"></i>Central India Inventory Hub • Kabrai, UP</span>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center text-slate-300 text-[11px]"><i className="fa-solid fa-truck-fast mr-1.5 text-orange-400"></i>Rapid Pan-India Dispatch</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+918707826228" className="hover:text-orange-400 transition-colors flex items-center text-slate-200"><i className="fa-solid fa-phone mr-1.5 text-orange-400 text-[11px]"></i>Direct Desk: <strong className="ml-1 text-white font-mono">087078 26228</strong></a>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center text-amber-400 font-bold text-[11px]">★★★★★ <span className="text-white ml-1 font-mono">5.0</span></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <a href="#home" id="brand-logo" className="flex items-center group text-left focus:outline-none py-1">
            <span className="bg-slate-900 text-white font-industrial font-black text-xl sm:text-2xl px-2.5 py-1 mr-2 rounded-[3px] tracking-wider uppercase inline-block shadow-xs group-hover:bg-orange-600 transition-colors">PATEL</span>
            <span className="font-industrial text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-900">TRACTOR PARTS</span>
          </a>

          <nav className="hidden lg:flex items-center space-x-6 font-semibold text-[14px]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-900 hover:text-orange-600 transition-colors font-medium">{link.name}</a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-whatsapp-cta"
              href="https://wa.me/918707826228"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-btn !bg-[#25d366] hover:!bg-[#20ba5a]"
            >
              <i className="fa-brands fa-whatsapp text-base mr-2"></i> Order on WhatsApp
            </a>
          </div>

          <div className="flex sm:hidden items-center space-x-2">
            <a href="https://wa.me/918707826228" target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp" className="bg-[#25d366] text-white p-2 rounded text-base flex items-center justify-center shadow-xs"><i className="fa-brands fa-whatsapp"></i></a>
            <button type="button" id="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 hover:text-orange-600 p-2 rounded border border-slate-300 focus:outline-none" aria-expanded={mobileMenuOpen} aria-label="Toggle navigation menu"><i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg w-5 h-5 flex items-center justify-center`}></i></button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b-2 border-slate-900 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm font-bold text-slate-900 hover:text-orange-600 hover:bg-slate-50 uppercase tracking-wide">{link.name}</a>
          ))}
          <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
            <a
              id="mobile-menu-whatsapp-btn"
              href="https://wa.me/918707826228"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="accent-btn w-full !bg-[#25d366] hover:!bg-[#20ba5a]"
            >
              <i className="fa-brands fa-whatsapp text-lg mr-2"></i> Order on WhatsApp
            </a>
            <a id="mobile-menu-call-btn" href="tel:+918707826228" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded font-bold text-xs uppercase tracking-wider text-center"><i className="fa-solid fa-phone mr-2 text-orange-400"></i> Call 087078 26228</a>
          </div>
        </div>
      )}
    </header>
  );
};