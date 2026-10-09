import React, { useState } from 'react';
import { Phone, Menu, X, Crown } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';
import { images } from '../../config/imageConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "मुख्य पृष्ठ", href: "#hero" },
    { name: "हमारी सेवाएँ", href: "#services" },
    { name: "गैलरी", href: "#gallery" },
    { name: "हमारे बारे में", href: "#why-us" },
    { name: "संपर्क करें", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-maroon-950/95 backdrop-blur-md border-b border-gold-500/30 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {}
          <a href="#hero" className="flex items-center gap-3 group">
            {images.logo ? (
              <img src={images.logo} alt={businessConfig.name} className="h-12 w-auto" />
            ) : (
              <div className="bg-gradient-to-br from-gold-400 to-gold-600 text-maroon-950 p-2.5 rounded-xl shadow-md group-hover:scale-105 transition">
                <Crown className="w-6 h-6" />
              </div>
            )}
            <div>
              <span className="text-xl font-extrabold tracking-wide text-gold-400 group-hover:text-gold-300 transition block">
                {businessConfig.name}
              </span>
              <span className="text-xs text-gold-300/80 block">{businessConfig.owner} • कुशीनगर</span>
            </div>
          </a>

          {}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-gold-400 font-medium transition duration-200 text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}

            <a
              href={`tel:${businessConfig.phone}`}
              className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-maroon-950 font-bold px-5 py-2.5 rounded-xl transition duration-300 flex items-center gap-2 shadow-lg shadow-gold-500/20 hover:scale-105 text-sm"
            >
              <Phone className="w-4 h-4 fill-current" />
              अभी संपर्क करें
            </a>
          </nav>

          {}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold-400 hover:text-white p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {}
      {isOpen && (
        <div className="md:hidden bg-maroon-950 border-b border-gold-500/30 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-200 hover:text-gold-400 py-2.5 text-base font-medium border-b border-maroon-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${businessConfig.phone}`}
            className="w-full mt-4 bg-gradient-to-r from-gold-400 to-gold-600 text-maroon-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="w-5 h-5 fill-current" />
            अभी संपर्क करें
          </a>
        </div>
      )}
    </header>
  );
}
