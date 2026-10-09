import React from 'react';
import { Phone, MapPin, ChevronUp } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-maroon-950 text-white border-t border-gold-500/30 pt-12 pb-24 sm:pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="text-xl font-bold text-gold-400 mb-3">{businessConfig.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              आपके शुभ अवसरों को खास और यादगार बनाने के लिए टेंट, सजावट और कैटरिंग की बेहतरीन व्यवस्था।
            </p>
            <p className="text-gold-300 font-semibold">{businessConfig.owner}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">नेविगेशन</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#hero" className="hover:text-gold-400 transition">मुख्य पृष्ठ</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition">हमारी सेवाएँ</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition">गैलरी</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition">संपर्क करें</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">संपर्क विवरण</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                {businessConfig.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <a href={`tel:${businessConfig.phone}`} className="hover:text-gold-400">{businessConfig.phone}</a>
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-maroon-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {businessConfig.name}। सर्वाधिकार सुरक्षित।</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-2 bg-gold-500/20 text-gold-400 hover:bg-gold-500 hover:text-maroon-950 rounded-full transition"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
