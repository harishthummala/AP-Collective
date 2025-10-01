import { useState } from "react";
import Lightbox from "@/components/lightbox";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: "photography" | "videography" | "destination";
  type: "image" | "video";
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "First Dance",
    category: "photography",
    type: "image"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Beach Romance",
    category: "destination",
    type: "image"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Sacred Vows",
    category: "videography",
    type: "video"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "The Details",
    category: "photography",
    type: "image"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Alpine Elegance",
    category: "destination",
    type: "image"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Preparation Moments",
    category: "photography",
    type: "image"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Sunset Embrace",
    category: "videography",
    type: "video"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Reception Dreams",
    category: "photography",
    type: "image"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Castle Romance",
    category: "destination",
    type: "image"
  }
];

interface PortfolioGridProps {
  activeFilter: "all" | "photography" | "videography" | "destination";
}

export default function PortfolioGrid({ activeFilter }: PortfolioGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  return (
    <>
      <div ref={ref} className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className={`break-inside-avoid mb-6 transition-all duration-1000`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div 
              className="group cursor-pointer overflow-hidden rounded-lg relative"
              onClick={() => openLightbox(item.image)}
              data-testid={`portfolio-item-${item.id}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <p className="meta-text text-xs mb-2">{item.category}</p>
                  <h4 className="font-heading text-xl">{item.title}</h4>
                </div>
              </div>
              {item.type === "video" && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
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
