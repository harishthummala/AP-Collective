import { useState } from "react";
import Lightbox from "@/components/lightbox";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const moodboardImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Soft pastel wedding colors"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Elegant table setting"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Bridal bouquet"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Ceremony arch"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Wedding stationery"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Bride silhouette"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Wedding cake"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Wedding rings"
  }
];

export default function MoodboardGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setLightboxOpen(true);
  };

  return (
    <>
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {moodboardImages.map((image, index) => (
          <div
            key={image.id}
            className={`group overflow-hidden rounded-lg aspect-square cursor-pointer transition-all duration-1000`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.95)'
            }}
            onClick={() => openLightbox(image.src)}
            data-testid={`moodboard-item-${image.id}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        image={selectedImage}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
