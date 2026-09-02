import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = () => {
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your Name, Phone Number, and Message.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Patel Tractor Parts,\nMy name is: ${formData.name || 'Customer'}\nPhone: ${formData.phone || 'N/A'}\nEmail: ${formData.email || 'N/A'}\n\nInquiry:\n${formData.message || 'I would like to inquire about spare parts availability.'}`;
    return `https://wa.me/918707826228?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact-us" className="py-14 sm:py-18 bg-[#f8fafc] border-b-2 border-slate-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="section-title">GET IN TOUCH • CENTRAL INDIA HUB</div>
          <h2 className="font-industrial text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-slate-900">Contact Us</h2>
          <p className="text-slate-600 mt-1 text-sm max-w-2xl">Have a question about part compatibility, stock availability, or bulk fleet orders? Send us a message and our inventory specialists will assist you right away.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-[4px] border border-slate-800 shadow-md">
              <span className="text-orange-400 text-[10px] font-bold font-mono uppercase tracking-widest block mb-1">PATEL TRACTOR PARTS • DESK</span>
              <h3 className="font-industrial text-xl sm:text-2xl font-bold uppercase text-white mb-4">Rapid Response Guarantee</h3>
              
              <div className="bg-slate-950 p-3.5 rounded-[3px] border-l-3 border-orange-500 mb-5">
                <p className="text-slate-300 text-xs leading-relaxed">
                  <strong className="text-orange-400 uppercase font-mono block mb-0.5">Prompt Inquiries:</strong>
                  All inquiries submitted through this form are responded to promptly by our dedicated inventory desk during operating hours.
                </p>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-[2px] bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-400 shrink-0 mt-0.5"><i className="fa-solid fa-phone text-xs"></i></div>
                  <div><span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Direct Calling Line:</span><a href="tel:+918707826228" className="text-white hover:text-orange-400 font-mono font-bold text-sm">087078 26228</a></div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#25d366]/20 border border-[#25d366]/40 flex items-center justify-center text-[#25d366] shrink-0 mt-0.5"><i className="fa-brands fa-whatsapp text-sm"></i></div>
                  <div><span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">WhatsApp Dispatch Desk:</span><a href="https://wa.me/918707826228" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-mono font-bold text-sm">+91 87078 26228 (24/7 Parts Inquiries)</a></div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-[2px] bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-400 shrink-0 mt-0.5"><i className="fa-solid fa-location-dot text-xs"></i></div>
                  <div><span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Physical Store & Hub:</span><p className="text-slate-200 leading-snug">Infront of Nagar Panchayat, near Chhanga Tiraha, Kabrai, Uttar Pradesh 210424.</p></div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-[2px] bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-400 shrink-0 mt-0.5"><i className="fa-solid fa-clock text-xs"></i></div>
                  <div><span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Business Hours:</span><p className="text-slate-200">Open Daily from 9:00 AM (Central India Standard Time)</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-[4px] border border-slate-300 p-6 sm:p-8 shadow-xs">
              <div className="border-b border-slate-200 pb-4 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-industrial text-xl font-bold uppercase text-slate-900">Send Us an Inquiry</h3>
                  <span className="inline-flex items-center text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-[2px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1.5 animate-pulse"></span>Prompt Response Guaranteed</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Please submit your machine model and spare parts requirements below. Inquiries will be responded to promptly by our technicians.</p>
              </div>

              {submitted ? (
                <div className="bg-slate-900 text-white p-6 rounded-[4px] border border-slate-800 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-2xl mx-auto font-bold shadow-md">✓</div>
                  <div>
                    <h4 className="font-industrial text-xl font-bold uppercase text-white">Message Received!</h4>
                    <p className="text-slate-300 text-xs mt-1 max-w-md mx-auto">Thank you, <strong className="text-orange-400">{formData.name}</strong>. Your inquiry has been submitted. Our inventory desk will respond to you promptly via phone/email.</p>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a href={generateWhatsAppMessage()} target="_blank" rel="noopener noreferrer" className="accent-btn text-xs w-full sm:w-auto !bg-[#25d366] hover:!bg-[#20ba5a]">
                      <i className="fa-brands fa-whatsapp text-sm mr-1.5"></i> Also Send on WhatsApp
                    </a>
                    <button type="button" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }); }} className="accent-btn text-xs w-full sm:w-auto !bg-slate-800 hover:!bg-slate-700 border border-slate-600">
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-[3px] font-medium flex items-center space-x-2">
                      <i className="fa-solid fa-triangle-exclamation text-sm text-red-600"></i><span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1 font-mono">Your Full Name <span className="text-orange-600">*</span></label>
                      <input type="text" id="contact-name" name="name" required placeholder="e.g. Ramesh Patel / Workshop Name" value={formData.name} onChange={handleChange} onFocus={handleFocus} className="w-full bg-slate-50 border border-slate-300 rounded-[3px] py-2.5 px-3 text-slate-900 focus:outline-none focus:border-slate-900 text-xs sm:text-sm transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1 font-mono">Phone Number <span className="text-orange-600">*</span></label>
                      <input type="tel" id="contact-phone" name="phone" required placeholder="e.g. 087078 26228 / Mobile" value={formData.phone} onChange={handleChange} onFocus={handleFocus} className="w-full bg-slate-50 border border-slate-300 rounded-[3px] py-2.5 px-3 text-slate-900 focus:outline-none focus:border-slate-900 text-xs sm:text-sm transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1 font-mono">Email Address <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input type="email" id="contact-email" name="email" placeholder="e.g. contact@yourworkshop.com" value={formData.email} onChange={handleChange} onFocus={handleFocus} className="w-full bg-slate-50 border border-slate-300 rounded-[3px] py-2.5 px-3 text-slate-900 focus:outline-none focus:border-slate-900 text-xs sm:text-sm transition-colors" />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-wider text-slate-700 font-bold mb-1 font-mono">Message / Parts Required <span className="text-orange-600">*</span></label>
                    <textarea id="contact-message" name="message" required rows={4} placeholder="Specify tractor/vehicle model..." value={formData.message} onChange={handleChange} onFocus={handleFocus} className="w-full bg-slate-50 border border-slate-300 rounded-[3px] py-2.5 px-3 text-slate-900 focus:outline-none focus:border-slate-900 text-xs sm:text-sm transition-colors"></textarea>
                  </div>

                  <div className="pt-2 space-y-3">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button type="submit" disabled={isSubmitting} id="send-message-btn" className="accent-btn flex-1 py-3 text-sm">
                        {isSubmitting ? <><i className="fa-solid fa-circle-notch fa-spin mr-2"></i>Sending...</> : <><i className="fa-solid fa-paper-plane mr-2"></i>Send Message</>}
                      </button>
                      <a href={generateWhatsAppMessage()} target="_blank" rel="noopener noreferrer" className="accent-btn py-3 text-xs sm:text-sm !bg-[#25d366] hover:!bg-[#20ba5a]">
                        <i className="fa-brands fa-whatsapp text-base mr-1.5"></i> Direct WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};