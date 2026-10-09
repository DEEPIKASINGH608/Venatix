import React, { useState } from 'react';
import { MessageCircle, Phone, Sparkles, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';

const servicesData = [
  {
    id: "wedding",
    title: "शुभ विवाह समारोह",
    image: "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "विवाह के शुभ अवसर के लिए शाही मंडप, जयमाला स्टेज, वर-वधू एंट्री और संपूर्ण टेंट व्यवस्था।",
    features: ["शाही मंडप एवं स्टेज", "वर-वधू भव्य एंट्री व्यवस्था", "अतिथियों के लिए वीआईपी टेंट"],
    fullDetails: "हमारे यहाँ विवाह समारोह को अत्यंत भव्य और शाही बनाने के लिए अत्याधुनिक टेंट, आकर्षक जयमाला स्टेज, फूलों से सजा मंडप, और वीआईपी अतिथियों के बैठने की उत्तम व्यवस्था की जाती है। आपकी पसंद के अनुसार कस्टमाइज्ड थीम्स उपलब्ध हैं।"
  },
  {
    id: "haldi",
    title: "हल्दी समारोह",
    image: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "हल्दी रस्म के लिए विशेष पीले रंग की थीम, ट्रेडिशनल गेंदा फूल सजावट और फोटो-बूथ सेट-अप।",
    features: ["येलो एवं ओरेंज थीम डेकोर", "ट्रेडिशनल हल्दी उबटन सेट-अप", "आकर्षक फोटो बूथ"],
    fullDetails: "हल्दी की रस्म को रंगीन और यादगार बनाने के लिए विशेष रूप से गेंदा और पीले फूलों की सजावट, आकर्षक कुशन सिटिंग, और खूबसूरत सेल्फी पॉइंट्स तैयार किए जाते हैं।"
  },
  {
    id: "sangeet",
    title: "संगीत समारोह",
    image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "धमाकेदार संगीत और डांस परफॉर्मेंस के लिए विशेष एलईडी स्टेज, डीजे एवं रंगीन लाइटिंग ट्रस।",
    features: ["डांस फ्लोर एवं एलईडी स्टेज", "प्रोफेशनल डीजे एवं साउंड", "पार्टी एवं एम्बिएंट लाइटिंग"],
    fullDetails: "संगीत नाइट के लिए हाई-क्वालिटी साउंड सिस्टम, प्रोफेशनल डीजे सेटअप, और रंग-बिरंगी मूविंग लाइट्स के साथ शानदार डांस फ्लोर की संपूर्ण व्यवस्था।"
  },
  {
    id: "birthday",
    title: "जन्मदिन समारोह",
    image: "https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "बच्चों और बड़ों के जन्मदिन के लिए बैलून डेकोरेशन, थीम बेस्ड केक कटिंग टेबल और लाइटिंग।",
    features: ["3D/2D बैलून थीम डेकोर", "आकर्षक केक कटिंग बैकड्रॉप", "बच्चों के लिए फन सिटिंग"],
    fullDetails: "बर्थडे पार्टी को बच्चों और मेहमानों के लिए खास बनाने के लिए आकर्षक गुब्बारा सजावट, कार्टून थीम, और शानदार केक टेबल डेकोरेशन।"
  },
  {
    id: "flowers",
    title: "फूलों की आकर्षक सजावट",
    image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "ताज़े देशी और विदेशी (इंपोर्टेड) फूलों से मुख्य द्वार, मंडप और कार की विशेष पुष्प सजावट।",
    features: ["ऑर्किड, गुलाब एवं गेंदा डेकोर", "कार सजावट व्यवस्था", "ताज़े फूलों की जयमाला"],
    fullDetails: "ताज़े फूलों की खुशबू और उनकी कलात्मक सजावट आपके वेन्यू में चार चांद लगा देती है। मुख्य प्रवेश द्वार, मंडप, और विदाई कार की विशेष सजावट।"
  },
  {
    id: "catering",
    title: "कैटरिंग एवं भोजन व्यवस्था",
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "स्वादिष्ट और शुद्ध शाकाहारी व्यंजनों की बफे व्यवस्था, आधुनिक स्टॉल्स एवं ट्रेंड सर्विस स्टाफ।",
    features: ["स्वादिष्ट शाकाहारी व्यंजन", "आधुनिक बफे एवं चाट स्टॉल्स", "यूनिफॉर्म में दक्ष कैटरिंग स्टाफ"],
    fullDetails: "अनुभवी शेफ द्वारा तैयार स्वादिष्ट और शुद्ध शाकाहारी भोजन, चाट-पकौड़ी काउंटर, मीठे के स्टॉल और प्रशिक्षित वेटर स्टाफ की बेहतरीन सेवा।"
  },
  {
    id: "lighting-sound",
    title: "लाइटिंग एवं साउंड",
    image: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "पूरे वेन्यू के लिए जगमगाती प्रवेश द्वार लाइटिंग, एम्बिएंट फोकस लाइट्स और पावरफुल साउंड।",
    features: ["एलईडी एवं शैंडेलियर लाइटिंग", "डिजिटल साउंड सिस्टम", "पावर बैकअप जेनसेट"],
    fullDetails: "रात के आयोजनों के लिए चमचमाती लाइटिंग, जनरेटर बैकअप, और गूँजते हुए स्पष्ट साउंड सिस्टम की फुल गारंटी।"
  },
  {
    id: "other-events",
    title: "अन्य शुभ अवसरों की व्यवस्था",
    image: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "मुंडन, सगाई, गृह प्रवेश, और धार्मिक अनुष्ठानों के लिए अनुकूलित (Customized) टेंट एवं सजावट।",
    features: ["गृह प्रवेश एवं मुंडन टेंट", "धार्मिक कथा एवं पूजा पंडाल", "कस्टम बजट पैकेज"],
    fullDetails: "हर प्रकार के छोटे-बड़े पारिवारिक आयोजनों, कथा, पूजा, और मुंडन संस्कारों के लिए किफायती और सुंदर व्यवस्था।"
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/10 text-maroon-900 text-sm font-bold mb-3 border border-maroon-900/20">
            <Sparkles className="w-4 h-4 text-gold-600" />
            हमारी सेवाएँ (Our Services)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-maroon-950 mb-4 tracking-tight">
            आपके हर शुभ अवसर के लिए संपूर्ण व्यवस्था
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 text-base sm:text-lg font-medium">
            किसी भी सेवा पर क्लिक करके उसकी पूरी जानकारी देखें।
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gold-500/30 flex flex-col justify-between hover:shadow-2xl transition duration-300 hover:-translate-y-1.5 group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-maroon-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent"></div>
                  <h3 className="absolute bottom-3 left-4 right-4 text-lg font-bold text-gold-300 drop-shadow-md">
                    {service.title}
                  </h3>
                </div>

                <div className="p-5">
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-maroon-950 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {}
              <div className="p-5 pt-0">
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
                  className="w-full mb-3 text-maroon-900 font-bold text-xs flex items-center justify-center gap-1 bg-gold-500/20 py-2 rounded-lg hover:bg-gold-500/30 transition"
                >
                  विस्तृत जानकारी देखें <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                  <a
                    href={`tel:${businessConfig.phone}`}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-maroon-900 hover:bg-maroon-800 text-gold-300 font-bold py-2 px-2 rounded-lg text-xs flex items-center justify-center gap-1 transition border border-gold-500/30"
                  >
                    <Phone className="w-3 h-3" /> कॉल करें
                  </a>
                  <a
                    href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(`नमस्ते, मुझे ${service.title} के बारे में जानकारी चाहिए।`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded-lg text-xs flex items-center justify-center gap-1 transition"
                  >
                    <MessageCircle className="w-3 h-3 fill-current" /> व्हाट्सऐप
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-4 border-gold-500/40 relative animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col">

            {}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 bg-maroon-950 text-gold-400 p-2 rounded-full hover:bg-maroon-900 transition shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {}
            <div className="relative h-64 sm:h-72 w-full">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/40 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-2xl sm:text-3xl font-extrabold text-gold-300">
                {selectedService.title}
              </h3>
            </div>

            {}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">सेवा विवरण</h4>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">
                  {selectedService.fullDetails}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">मुख्य विशेषताएँ</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-gold-500/10 p-3 rounded-xl border border-gold-500/30">
                      <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0" />
                      <span className="text-maroon-950 font-bold text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {}
              <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(`नमस्ते, मुझे '${selectedService.title}' की बुकिंग के लिए जानकारी चाहिए।`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-lg text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  व्हाट्सऐप पर बुक करें
                </a>
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="flex-1 bg-maroon-900 hover:bg-maroon-800 text-gold-300 font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-lg text-base border border-gold-500/30"
                >
                  <Phone className="w-5 h-5" />
                  अभी कॉल करें ({businessConfig.phone})
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
