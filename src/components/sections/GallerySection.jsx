import React, { useState } from 'react';
import LightboxModal from '../ui/LightboxModal';

// 100% वर्किंग इमेज URLs
const galleryImages = [
  {
    id: 1,
    title: "टेबल व्यवस्था एवं सजावट",
    category: "wedding",
    url: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 2,
    title: "पारंपरिक विवाह मंडप एवं स्टेज",
    category: "mandap",
    url: "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 3,
    title: "ताज़े फूलों की सजावट",
    category: "flowers",
    url: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 4,
    title: "स्वादिष्ट व्यंजन एवं कैटरिंग स्टॉल",
    category: "catering",
    url: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 5,
    title: "डीजे साउंड एवं पार्टी लाइटिंग",
    category: "lighting",
    url: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 6,
    title: "शादी समारोह एवं जयमाला",
    category: "wedding",
    url: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1000",
  }
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'सभी तस्वीरें' },
    { id: 'wedding', label: 'विवाह समारोह' },
    { id: 'mandap', label: 'मंडप एवं स्टेज' },
    { id: 'flowers', label: 'फूलों की सजावट' },
    { id: 'catering', label: 'कैटरिंग' },
    { id: 'lighting', label: 'लाइटिंग' },
  ];

  const filteredGallery = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* हेडिंग */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-maroon-900 mb-3">हमारे आयोजनों की झलकियाँ</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-3 rounded-full"></div>
          <p className="text-gray-700 font-medium">हमारी सजावट और व्यवस्थाओं की कुछ खूबसूरत तस्वीरें</p>
        </div>

        {/* कैटेगरी फ़िल्टर बटन्स */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                activeCategory === cat.id
                  ? 'bg-maroon-900 text-gold-400 shadow-md'
                  : 'bg-white text-gray-800 hover:bg-gold-500/20 border border-gold-500/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* इमेजेस ग्रिड */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer border-2 border-gold-500/30 bg-maroon-950"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1000";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/20 to-transparent opacity-90 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white font-bold text-sm sm:text-base drop-shadow-md">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* लाइटबॉक्स मोडल */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={filteredGallery}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(prev => (prev > 0 ? prev - 1 : filteredGallery.length - 1))}
          onNext={() => setLightboxIndex(prev => (prev < filteredGallery.length - 1 ? prev + 1 : 0))}
        />
      )}
    </section>
  );
}