import MoodboardGrid from "@/components/moodboard-grid";
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Moodboard() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="moodboard" className="py-24 lg:py-32 bg-background mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="meta-text text-xs text-secondary mb-6">Visual Inspiration</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8">Our Moodboard</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A glimpse into our creative vision—the colors, textures, and moments that inspire our work
          </p>
        </div>
        
        <MoodboardGrid />
        
        <div className="text-center mt-16">
          <Link href="/contact">
            <a className="inline-block btn-primary bg-primary text-primary-foreground px-12 py-5 meta-text text-sm" data-testid="button-create-together">
              Let's Create Together
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
