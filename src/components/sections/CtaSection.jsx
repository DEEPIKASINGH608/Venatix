import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export default function CtaSection() {
  return (
    <section className="py-20 bg-ivory border-t border-gold-500/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">

        {/* मुख्य हेडिंग (गहरे मैरून रंग में स्पष्ट और पढ़ने में आसान) */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-maroon-900 mb-4 tracking-tight">
          आपका आयोजन, हमारी विशेष तैयारी
        </h2>

        {/* सब-हेडिंग (हाई-कॉन्ट्रास्ट चारकोल रंग) */}
        <p className="text-gray-800 text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-medium">
          अपने अगले शुभ अवसर की सजावट और व्यवस्था के लिए आज ही हमसे संपर्क करें।
        </p>

        {/* सजावटी गोल्ड बॉर्डर डिफ़रेंशिएटर */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-gold-500"></div>
          <span className="text-gold-500 text-lg">✦</span>
          <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-gold-500"></div>
        </div>

        {/* बटन्स */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* कॉल करें बटन */}
          <a
            href={`tel:${businessConfig.phone}`}
            className="w-full sm:w-auto bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-maroon-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-gold-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-base"
          >
            <Phone className="w-5 h-5 fill-current" />
            अभी कॉल करें
          </a>

          {/* व्हाट्सऐप बटन */}
          <a
            href={`https://wa.me/${businessConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-900/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-base border border-emerald-400/30"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            व्हाट्सऐप पर संपर्क करें
          </a>
        </div>

      </div>
    </section>
  );
}