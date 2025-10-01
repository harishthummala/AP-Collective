import { useState } from "react";
import PortfolioGrid from "@/components/portfolio-grid";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type FilterType = "all" | "photography" | "videography" | "destination";

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: filtersRef, isVisible: filtersVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 lg:py-32 bg-background mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="meta-text text-xs text-secondary mb-6">Our Portfolio</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8">Visual Experience</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of our finest work—each image and film a testament to love, artistry, and the magic of celebration
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div
          ref={filtersRef}
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-100 ${
            filtersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`meta-text text-xs px-6 py-3 rounded-full transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
            data-testid="filter-all"
          >
            All Work
          </button>
          <button
            onClick={() => setActiveFilter("photography")}
            className={`meta-text text-xs px-6 py-3 rounded-full transition-all duration-300 ${
              activeFilter === "photography"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
            data-testid="filter-photography"
          >
            Photography
          </button>
          <button
            onClick={() => setActiveFilter("videography")}
            className={`meta-text text-xs px-6 py-3 rounded-full transition-all duration-300 ${
              activeFilter === "videography"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
            data-testid="filter-videography"
          >
            Videography
          </button>
          <button
            onClick={() => setActiveFilter("destination")}
            className={`meta-text text-xs px-6 py-3 rounded-full transition-all duration-300 ${
              activeFilter === "destination"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
            data-testid="filter-destination"
          >
            Destination
          </button>
        </div>
        
        <PortfolioGrid activeFilter={activeFilter} />
      </div>
    </section>
  );
}
