import React from 'react';
import { MessageCircle, CheckCircle, Sparkles } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';
import { images } from '../../config/imageConfig';

export default function FeaturedSection() {
  const stageImage = images.featuredStage || "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1200";

  return (
    <section id="featured" className="py-20 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-500/40 bg-maroon-950 min-h-[400px]">
              <img
                src={stageImage}
                alt="पारंपरिक विवाह मंडप संजावट"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {

                  e.target.onerror = null;
                  e.target.src = "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200";
                }}
              />

              {}
              <div className="absolute bottom-4 left-4 bg-maroon-950/80 backdrop-blur-md border border-gold-400/40 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-gold-300 shadow-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                पारंपरिक विवाह मंडप संजावट
              </div>
            </div>


            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-maroon-900 text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-gold-500/50 z-10 transition duration-300 group-hover:scale-105">
              <p className="text-2xl sm:text-3xl font-extrabold text-gold-400 mb-0.5">100%</p>
              <p className="text-xs sm:text-sm font-medium text-gray-200">संतुष्टि और विश्वसनीयता</p>
            </div>
          </div>

          {}
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-maroon-900 mb-6 leading-tight">
              शाही सजावट, <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">यादगार पल</span>
            </h2>

            <p className="text-gray-800 mb-8 text-base sm:text-lg leading-relaxed font-medium">
              आपकी पसंद और आयोजन की आवश्यकता के अनुसार सुंदर सजावट एवं आकर्षक स्टेज की व्यवस्था। हम हर छोटे-बड़े अवसर को खास बनाने के लिए समर्पित हैं।
            </p>

            {}
            <ul className="space-y-4 mb-10">
              {[
                "कस्टम मंडप और स्टेज थीम्स",
                "प्रीमियम फैब्रिक और लाइटिंग अरेंजमेंट",
                "हाई-क्वालिटी कैटरिंग और सर्विस स्टाफ"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-maroon-950 font-bold text-base">
                  <div className="bg-gold-500/20 p-1 rounded-full text-gold-600 shrink-0">
                    <CheckCircle className="w-5 h-5 fill-current" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {}
            <a
              href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent('नमस्ते, मुझे अपनी शादी की सजावट की योजना बनानी है।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-maroon-900 hover:bg-maroon-800 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-maroon-950/20 hover:scale-105 transition-all duration-300 border border-gold-500/30 text-base"
            >
              <MessageCircle className="w-5 h-5 text-gold-400 fill-current" />
              अपनी सजावट की योजना बनाएँ
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
