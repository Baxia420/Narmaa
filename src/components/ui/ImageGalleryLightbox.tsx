import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type ImageGalleryLightboxProps = {
  images: string[];
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
};

export default function ImageGalleryLightbox({
  images,
  isOpen,
  initialIndex,
  onClose,
}: ImageGalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Derived state: when isOpen transitions to true, reset to the requested index without an effect
  const [lastIsOpen, setLastIsOpen] = useState(false);
  if (lastIsOpen !== isOpen) {
    setLastIsOpen(isOpen);
    if (isOpen) setCurrentIndex(initialIndex);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors"
        aria-label="Close gallery"
      >
        <X className="h-10 w-10" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 md:left-10 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-10 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
        </>
      )}

      <div
        className="relative w-full max-w-6xl h-[80vh] px-4 md:px-24 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain drop-shadow-2xl select-none"
        />
        
        {images.length > 1 && (
          <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white/60 font-medium tracking-wide">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
