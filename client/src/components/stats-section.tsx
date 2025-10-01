import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { value: "500+", label: "Weddings Captured" },
    { value: "15", label: "Countries Covered" },
    { value: "25+", label: "Awards Won" },
    { value: "100%", label: "Happy Clients" }
  ];

  return (
    <section className="py-20 bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-1000`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="font-heading text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
              <p className="meta-text text-sm uppercase tracking-wider text-primary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
