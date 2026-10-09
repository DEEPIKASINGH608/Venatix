import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ image, onClose, onPrev, onNext }) {
  if (!image) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      {}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gold p-2 rounded-full bg-navy/60"
      >
        <X className="w-8 h-8" />
      </button>

      {}
      <button
        onClick={onPrev}
        className="absolute left-4 text-white hover:text-gold p-3 rounded-full bg-navy/60"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {}
      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img
          src={image.url}
          alt={image.title}
          className="max-h-[75vh] w-auto object-contain rounded-lg border-2 border-gold/40 shadow-2xl"
        />
        <p className="text-gold text-xl font-bold mt-4 text-center">{image.title}</p>
      </div>

      {}
      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gold p-3 rounded-full bg-navy/60"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
