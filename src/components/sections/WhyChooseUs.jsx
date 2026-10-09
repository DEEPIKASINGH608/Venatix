import React from 'react';
import { Sparkles, Layers, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: Sparkles, title: "आकर्षक सजावट", desc: "हर आयोजन के अनुरूप सुंदर और प्रभावशाली सजावट।" },
    { icon: Layers, title: "संपूर्ण व्यवस्था", desc: "टेंट, मंडप, स्टेज, लाइटिंग और कैटरिंग की सुविधाएँ।" },
    { icon: HeartHandshake, title: "आपकी पसंद का सम्मान", desc: "आयोजन और बजट के अनुसार व्यवस्था पर चर्चा।" },
    { icon: ShieldCheck, title: "भरोसेमंद सेवा", desc: "आयोजन को व्यवस्थित और यादगार बनाने का प्रयास।" },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">हमें क्यों चुनें?</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-cream border border-gold-500/20 text-center hover:shadow-xl transition">
                <div className="w-14 h-14 bg-navy-900 text-gold-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}