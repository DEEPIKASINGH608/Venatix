import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

export default function LocationSection() {
  return (
    <section className="py-16 bg-white border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-navy-900 mb-2">हमारा स्थान</h2>
        <p className="text-gray-600 flex items-center justify-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-gold-500" />
          {businessConfig.address}
        </p>

        <a
          href={businessConfig.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-gold-500 font-semibold px-6 py-3 rounded-xl border border-gold-500/40 shadow-md transition"
        >
          <Navigation className="w-5 h-5" />
          मानचित्र में देखें
        </a>
      </div>
    </section>
  );
}
