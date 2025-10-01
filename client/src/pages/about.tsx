import TeamMember from "@/components/team-member";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="meta-text text-xs text-secondary mb-6">Our Story</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8">About Anant Parinay</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a passion for storytelling and refined by years of dedication to the craft of visual artistry
          </p>
        </div>
        
        {/* Brand Story */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              ref={storyRef}
              className={`transition-all duration-1000 ${
                storyVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="font-heading text-4xl md:text-5xl font-bold mb-8">Where Art Meets Emotion</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Anant Parinay Collective was founded on the belief that wedding cinematography is more than just capturing moments—it's about preserving the essence of love in its purest form. Our name, derived from Sanskrit, means "Eternal Union," reflecting our commitment to creating timeless visual narratives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience across continents, from intimate garden ceremonies to grand palace celebrations, we've refined our approach to blend cinematic excellence with genuine emotional connection. Every project is a unique canvas where technical mastery meets creative vision.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our philosophy is simple: invisible presence, unforgettable results. We work seamlessly in the background, allowing your day to unfold naturally while capturing every tear, every laugh, every stolen glance that makes your story uniquely yours.
              </p>
            </div>
            <div
              className={`transition-all duration-1000 delay-200 ${
                storyVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team at Work" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-32">
          <h3
            ref={valuesRef}
            className={`font-heading text-4xl md:text-5xl text-center mb-16 transition-all duration-1000 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div
              className={`text-center transition-all duration-1000 delay-100 ${
                valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-heading text-2xl mb-4">Authenticity</h4>
              <p className="text-muted-foreground leading-relaxed">
                We believe in capturing genuine emotions and real moments, not staged perfection. Your true story, beautifully told.
              </p>
            </div>
            <div
              className={`text-center transition-all duration-1000 delay-200 ${
                valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h4 className="font-heading text-2xl mb-4">Artistry</h4>
              <p className="text-muted-foreground leading-relaxed">
                Every frame is composed with intention, every sequence edited with precision. Cinema-grade quality in every project.
              </p>
            </div>
            <div
              className={`text-center transition-all duration-1000 delay-300 ${
                valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h4 className="font-heading text-2xl mb-4">Connection</h4>
              <p className="text-muted-foreground leading-relaxed">
                Building relationships with our clients ensures we understand and capture what matters most to you.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div>
          <h3
            ref={teamRef}
            className={`font-heading text-4xl md:text-5xl text-center mb-16 transition-all duration-1000 ${
              teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Rajesh Sharma"
              role="Creative Director"
              description="15 years crafting visual stories"
              delay={100}
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Priya Desai"
              role="Lead Cinematographer"
              description="Award-winning filmmaker"
              delay={200}
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Arjun Patel"
              role="Senior Photographer"
              description="Master of light & emotion"
              delay={300}
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Anika Singh"
              role="Post-Production Lead"
              description="Color grading specialist"
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
