import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background with Overlay */}
      <div className="absolute inset-0 parallax" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', backgroundPosition: 'center' }}>
        <div className="hero-overlay absolute inset-0"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center animate-fadeInUp">
        <p className="meta-text text-xs md:text-sm text-white/90 mb-6 tracking-widest">Luxury Wedding Cinematography</p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">Anant Parinay Collective</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 font-body leading-relaxed">
          Capturing timeless love stories through cinematic artistry and refined elegance. We transform your special moments into eternal memories.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/contact">
            <a className="btn-primary bg-primary text-primary-foreground px-10 py-4 meta-text text-sm hover:bg-opacity-90 transition-all duration-300" data-testid="button-book-story">
              Book Your Story
            </a>
          </Link>
          <Link href="/experience">
            <a className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 meta-text text-sm hover:bg-white/20 transition-all duration-300" data-testid="button-view-portfolio-hero">
              View Portfolio
            </a>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-fadeIn">
        <div className="flex flex-col items-center">
          <p className="meta-text text-xs text-white/80 mb-4">Scroll to Explore</p>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
