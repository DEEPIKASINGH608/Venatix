import React from 'react';
import { MessageCircle, Sparkles, Eye } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';
import { images } from '../../config/imageConfig';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-maroon-950 overflow-hidden">
      {/* Background Image with Deep Maroon Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Royal Wedding Stage"
          className="w-full h-full object-cover opacity-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/90 via-maroon-900/70 to-maroon-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-maroon-950/60 to-maroon-950"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center text-white">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-sm font-medium mb-8 backdrop-blur-md shadow-lg">
          <Sparkles className="w-4 h-4 text-gold-400" />
          आपके हर शुभ अवसर का भरोसेमंद साथी
        </div>

        {/* Heading with Gold Gradient */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
          आपके सपनों के समारोह को दें <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent drop-shadow-md">
            शाही अंदाज़
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-gray-200/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          शादी-विवाह से लेकर जन्मदिन और अन्य शुभ अवसरों तक, आकर्षक सजावट, शानदार मंडप और स्वादिष्ट कैटरिंग की संपूर्ण व्यवस्था।
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${businessConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-emerald-950/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-base border border-emerald-400/30"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            व्हाट्सऐप पर पूछताछ करें
          </a>

          <a
            href="#gallery"
            className="w-full sm:w-auto bg-maroon-900/80 hover:bg-gold-500 hover:text-maroon-950 text-gold-300 border border-gold-500/50 font-semibold px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <Eye className="w-5 h-5" />
            हमारी सजावट देखें
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-gold-500/20 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gold-300/80 font-medium">
          <span className="flex items-center gap-2">✨ शानदार सजावट</span>
          <span className="hidden sm:inline text-gold-500/40">•</span>
          <span className="flex items-center gap-2">🍽️ बेहतर कैटरिंग व्यवस्था</span>
          <span className="hidden sm:inline text-gold-500/40">•</span>
          <span className="flex items-center gap-2">🎉 यादगार आयोजन</span>
        </div>

      </div>
    </section>
  );
}