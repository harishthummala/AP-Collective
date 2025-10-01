import { Link } from "wouter";
import HeroSection from "@/components/hero-section";
import StoryCard from "@/components/story-card";
import VideoCard from "@/components/video-card";
import TestimonialCarousel from "@/components/testimonial-carousel";
import StatsSection from "@/components/stats-section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Home() {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: storiesRef, isVisible: storiesVisible } = useScrollAnimation();
  const { ref: videosRef, isVisible: videosVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <main id="home" className="overflow-hidden">
      <HeroSection />
      
      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              ref={introRef}
              className={`transition-all duration-1000 ${
                introVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="meta-text text-sm text-secondary mb-4">Welcome to Our World</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Every Love Story is Beautiful,<br />
                But Yours is Our Favorite
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                At Anant Parinay Collective, we believe that every wedding is a unique tapestry of emotions, traditions, and unforgettable moments. Our team of passionate photographers and videographers specializes in capturing the essence of your special day with an artistic touch that transcends ordinary documentation.
              </p>
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                With years of experience and hundreds of celebrations captured, we've perfected the art of being invisible observers while creating cinematic masterpieces that you'll cherish forever.
              </p>
              <Link href="/about">
                <a className="inline-flex items-center meta-text text-sm text-primary uppercase tracking-wider hover:text-primary/80 transition-colors group" data-testid="link-about">
                  Learn More About Us
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                </a>
              </Link>
            </div>
            
            <div
              className={`transition-all duration-1000 delay-200 ${
                introVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
                  alt="Wedding couple portrait" 
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={storiesRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              storiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="meta-text text-sm text-primary uppercase tracking-widest mb-4">Our Recent Work</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Featured Love Stories</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Each wedding we capture tells a unique story of love, commitment, and celebration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StoryCard
              image="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
              location="Mumbai"
              date="December 2023"
              title="Priya & Arjun's Royal Affair"
              description="A magnificent celebration of love set against the backdrop of Mumbai's grandest palace. Three days of vibrant ceremonies, emotional moments, and unforgettable memories captured in breathtaking detail."
              delay={100}
            />
            <StoryCard
              image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
              location="Goa"
              date="November 2023"
              title="Aisha & Rohan's Beach Paradise"
              description="An intimate beachside celebration where waves whispered blessings and the sunset painted the perfect backdrop. Their love story came alive through candid moments and dreamy cinematography."
              delay={200}
            />
            <StoryCard
              image="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
              location="Jaipur"
              date="October 2023"
              title="Kavya & Vikram's Heritage Wedding"
              description="A fairy tale come true in the pink city's most majestic palace. Traditional rituals merged with contemporary elegance, creating memories that will be treasured for generations to come."
              delay={300}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/experience">
              <a className="btn-primary inline-block px-8 py-4 bg-primary text-primary-foreground meta-text text-sm uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-all duration-300" data-testid="button-view-portfolio">
                View Full Portfolio
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={videosRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              videosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="meta-text text-sm text-primary uppercase tracking-widest mb-4">Cinematic Excellence</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Our Signature Films</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the magic of cinematic wedding videography that tells your story like never before
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoCard
              thumbnail="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              title="The Royal Chronicles"
              duration="4 Min 32 Sec"
              category="Wedding Film"
              description="A breathtaking journey through an opulent wedding celebration, featuring aerial cinematography, emotional vows, and spectacular dance sequences."
              delay={100}
            />
            <VideoCard
              thumbnail="https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              title="Whispers of Love"
              duration="3 Min 45 Sec"
              category="Highlight Reel"
              description="An intimate portrayal of tender moments, stolen glances, and heartfelt emotions captured in stunning slow motion and artistic framing."
              delay={200}
            />
            <VideoCard
              thumbnail="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              title="Eternal Vows"
              duration="5 Min 12 Sec"
              category="Cinematic Short"
              description="A masterfully edited celebration of commitment, family bonds, and joyous festivities that capture the essence of a perfect union."
              delay={300}
            />
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div
          ref={ctaRef}
          className={`max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="font-heading text-4xl md:text-5xl mb-8 text-primary-foreground">Ready to Begin Your Story?</h3>
          <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90">
            Let's create something extraordinary together. Whether you're planning an intimate elopement or a grand celebration, we're here to capture every precious moment.
          </p>
          <Link href="/contact">
            <a className="inline-block bg-background text-foreground px-12 py-5 meta-text text-sm hover:bg-opacity-90 transition-all duration-300 shadow-2xl" data-testid="button-start-journey">
              Start Your Journey
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
