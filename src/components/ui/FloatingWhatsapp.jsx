import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export default function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent('नमस्ते! मुझे आपके टेंट और कैटरिंग सेवाओं के बारे में पूछताछ करनी है।')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-8 right-8 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl items-center gap-3 transition transform hover:scale-105 border-2 border-white"
      aria-label="व्हाट्सऐप पर संपर्क करें"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="font-bold pr-2">व्हाट्सऐप पर बात करें</span>
    </a>
  );
}