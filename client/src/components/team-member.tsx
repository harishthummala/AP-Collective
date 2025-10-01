import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
  delay?: number;
}

export default function TeamMember({ image, name, role, description, delay = 0 }: TeamMemberProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center group transition-all duration-1000`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="overflow-hidden rounded-lg mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <h4 className="font-heading text-xl mb-2">{name}</h4>
      <p className="meta-text text-xs text-secondary mb-3">{role}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
