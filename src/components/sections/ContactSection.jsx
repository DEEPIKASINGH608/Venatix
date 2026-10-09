import React, { useState } from 'react';
import { Phone, MapPin, User, MessageCircle, Send, Sparkles } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'विवाह समारोह',
    eventDate: '',
    location: '',
    services: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('कृपया अपना नाम और मोबाइल नंबर दर्ज करें।');
      return;
    }

    const text = `*नई पूछताछ - शिवा टेंट हाउस*\n\n` +
      `👤 *नाम:* ${formData.name}\n` +
      `📞 *फोन:* ${formData.phone}\n` +
      `🎉 *आयोजन:* ${formData.eventType}\n` +
      `📅 *तारीख:* ${formData.eventDate || 'तय नहीं'}\n` +
      `📍 *स्थान:* ${formData.location || 'जोकवा बाजार'}\n` +
      `🛠️ *सेवाएँ:* ${formData.services || 'टेंट एवं कैटरिंग'}\n` +
      `💬 *संदेश:* ${formData.message || 'कोई संदेश नहीं'}`;

    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* हेडिंग */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/10 text-maroon-900 text-sm font-bold mb-3 border border-maroon-900/20">
            <Sparkles className="w-4 h-4 text-gold-600" />
            संपर्क एवं बुकिंग
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-maroon-950 mb-4 tracking-tight">
            अपने शुभ अवसर के लिए संपर्क करें
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* जानकारी कार्ड (रॉयल मैरून थीम) */}
          <div className="bg-maroon-950 text-white p-8 rounded-2xl border-2 border-gold-500/40 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-gold-400 mb-6 border-b border-gold-500/20 pb-4">
                {businessConfig.name}
              </h3>

              <div className="space-y-6 text-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-500/20 p-3 rounded-xl border border-gold-500/30 shrink-0 text-gold-400">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gold-300/80 uppercase tracking-wider">संस्थापक / प्रोप्राइटर</p>
                    <p className="text-lg font-bold text-white mt-0.5">{businessConfig.owner}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-500/20 p-3 rounded-xl border border-gold-500/30 shrink-0 text-gold-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gold-300/80 uppercase tracking-wider">संपर्क नंबर</p>
                    <a href={`tel:${businessConfig.phone}`} className="text-lg font-bold text-white hover:text-gold-400 transition mt-0.5 block">
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-500/20 p-3 rounded-xl border border-gold-500/30 shrink-0 text-gold-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gold-300/80 uppercase tracking-wider">पता</p>
                    <p className="text-base font-bold text-white mt-0.5 leading-snug">{businessConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-3 pt-6 border-t border-maroon-900">
              <a
                href={`tel:${businessConfig.phone}`}
                className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-maroon-950 font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-lg text-sm"
              >
                <Phone className="w-5 h-5 fill-current" />
                डायरेक्ट कॉल करें
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-700 hover:scale-[1.02] transition shadow-lg text-sm border border-emerald-400/30"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                व्हाट्सऐप चैट
              </a>
            </div>
          </div>

          {/* फॉर्म सेक्शन */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border-2 border-gold-500/30">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-maroon-950 mb-2">आपका नाम *</label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. राहुल वर्मा"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none text-gray-900 font-medium placeholder:text-gray-400 bg-gray-50/50 transition"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-maroon-950 mb-2">मोबाइल नंबर *</label>
                  <input
                    type="tel"
                    required
                    placeholder="उदा. 9839114571"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none text-gray-900 font-medium placeholder:text-gray-400 bg-gray-50/50 transition"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-maroon-950 mb-2">आयोजन का प्रकार</label>
                  <select
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none text-gray-900 font-medium bg-gray-50/50 transition cursor-pointer"
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  >
                    <option>विवाह समारोह</option>
                    <option>रिसेप्शन एवं सगाई</option>
                    <option>जन्मदिन की पार्टी</option>
                    <option>धार्मिक / पारिवारिक पूजा</option>
                    <option>अन्य शुभ अवसर</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-maroon-950 mb-2">आयोजन की तारीख</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none text-gray-900 font-medium bg-gray-50/50 transition"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-maroon-950 mb-2">आयोजन का स्थान</label>
                <input
                  type="text"
                  placeholder="उदा. कुशीनगर / जोकवा बाजार"
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none text-gray-900 font-medium placeholder:text-gray-400 bg-gray-50/50 transition"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-maroon-950 mb-2">आवश्यक सेवाएँ</label>
                <input
                  type="text"
                  placeholder="उदा. टेंट, स्टेज सजावट, कैटरिंग, लाइटिंग"
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none text-gray-900 font-medium placeholder:text-gray-400 bg-gray-50/50 transition"
                  value={formData.services}
                  onChange={(e) => setFormData({...formData, services: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-maroon-950 mb-2">आपका संदेश</label>
                <textarea
                  rows="3"
                  placeholder="अतिरिक्त विवरण या अपनी पसंद साझा करें..."
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 focus:outline-none text-gray-900 font-medium placeholder:text-gray-400 bg-gray-50/50 transition resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 rounded-xl shadow-xl shadow-emerald-950/20 hover:scale-[1.01] transition duration-300 flex items-center justify-center gap-2.5 text-base border border-emerald-400/30"
              >
                <Send className="w-5 h-5" />
                व्हाट्सऐप पर पूछताछ भेजें
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}