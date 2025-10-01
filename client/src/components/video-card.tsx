import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  duration: string;
  category: string;
  description: string;
  delay?: number;
}

export default function VideoCard({ thumbnail, title, duration, category, description, delay = 0 }: VideoCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="group cursor-pointer transition-all duration-1000"
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
      data-testid={`video-card-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
    >
      <div className="relative overflow-hidden rounded-lg aspect-video mb-4 shadow-xl">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
          <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>
      <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="meta-text text-xs text-muted-foreground uppercase tracking-wider mb-3">{duration} • {category}</p>
      <p className="font-body text-muted-foreground">{description}</p>
    </div>
  );
}
