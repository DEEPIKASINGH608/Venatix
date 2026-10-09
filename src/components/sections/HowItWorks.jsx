import React from 'react';

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "हमसे संपर्क करें", desc: "फोन या व्हाट्सऐप के माध्यम से हमें कॉल करें।" },
    { num: "02", title: "अपनी आवश्यकता बताएँ", desc: "तारीख, स्थान और सर्विस की जानकारी साझा करें।" },
    { num: "03", title: "व्यवस्था एवं बजट पर चर्चा करें", desc: "सजावट के डिज़ाइन और थीम का चयन करें।" },
    { num: "04", title: "अपने आयोजन की तैयारी करें", desc: "निश्चिंत होकर अपने खास दिन का आनंद लें।" },
  ];

  return (
    <section className="py-20 bg-maroon-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold-400 mb-4">आयोजन की योजना बनाएँ, आसानी से</h2>
          <p className="text-gray-300">चार सरल चरणों में अपने कार्यक्रम की बुकिंग करें</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center p-6 bg-maroon-900/80 rounded-2xl border border-gold-500/30">
              <span className="text-4xl font-extrabold text-gold-400 block mb-3">{step.num}</span>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
