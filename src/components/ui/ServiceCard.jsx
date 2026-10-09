import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export default function ServiceCard({ title, desc, image }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`नमस्ते, मुझे ${title} सेवा के बारे में जानकारी चाहिए।`);
    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gold-500/20 hover:border-gold-500 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className="h-48 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
      <div className="p-5 pt-0">
        <button
          onClick={handleWhatsApp}
          className="w-full bg-cream hover:bg-gold-500 text-navy-900 hover:text-white font-semibold py-2.5 px-4 rounded-lg border border-gold-500/40 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 text-sm"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-white" />
          जानकारी प्राप्त करें
        </button>
      </div>
    </div>
  );
}