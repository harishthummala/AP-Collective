import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  image: string | null;
  onClose: () => void;
}

export default function Lightbox({ isOpen, image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      data-testid="lightbox-overlay"
    >
      <button
        className="absolute top-8 right-8 text-white text-4xl hover:text-primary transition-colors z-10"
        onClick={onClose}
        data-testid="button-close-lightbox"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img
        src={image}
        alt="Lightbox"
        className="max-w-full max-h-full object-contain animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
        data-testid="lightbox-image"
      />
    </div>
  );
}
