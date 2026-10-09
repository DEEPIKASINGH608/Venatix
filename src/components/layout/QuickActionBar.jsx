import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export default function QuickActionBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-maroon-950 border-t border-gold-500/30 grid grid-cols-2 p-2 gap-2 shadow-2xl">
      <a
        href={`tel:${businessConfig.phone}`}
        className="bg-maroon-900 hover:bg-maroon-800 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm border border-gold-500/30"
      >
        <Phone className="w-4 h-4 text-gold-400" />
        कॉल करें
      </a>
      <a
        href={`https://wa.me/${businessConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm"
      >
        <MessageCircle className="w-4 h-4" />
        व्हाट्सऐप
      </a>
    </div>
  );
}