import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface StoryCardProps {
  image: string;
  location: string;
  date: string;
  title: string;
  description: string;
  delay?: number;
}

export default function StoryCard({ image, location, date, title, description, delay = 0 }: StoryCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group transition-all duration-1000`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="image-hover rounded-lg overflow-hidden mb-4 shadow-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-96 object-cover"
        />
      </div>
      <p className="meta-text text-xs text-primary uppercase tracking-wider mb-2">{location} • {date}</p>
      <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="font-body text-muted-foreground leading-relaxed">{description}</p>
      <Link href="/experience">
        <a className="inline-flex items-center meta-text text-xs text-primary hover:text-accent transition-colors duration-300 mt-4" data-testid={`link-story-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
          Explore This Story <i className="fas fa-arrow-right ml-3"></i>
        </a>
      </Link>
    </div>
  );
}
