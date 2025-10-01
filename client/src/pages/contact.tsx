import ContactForm from "@/components/contact-form";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="meta-text text-xs text-secondary mb-6">Get In Touch</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to capture your love story? Reach out and let's discuss how we can bring your vision to life
          </p>
        </div>
        
        {/* Contact Info Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div
            className={`bg-card p-8 rounded-lg text-center group hover:shadow-xl transition-all duration-500 ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h4 className="font-heading text-xl mb-3">Email Us</h4>
            <a href="mailto:hello@anantparinay.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
              hello@anantparinay.com
            </a>
          </div>
          
          <div
            className={`bg-card p-8 rounded-lg text-center group hover:shadow-xl transition-all duration-500 delay-100 ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h4 className="font-heading text-xl mb-3">Call Us</h4>
            <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-phone">
              +91 98765 43210
            </a>
          </div>
          
          <div
            className={`bg-card p-8 rounded-lg text-center group hover:shadow-xl transition-all duration-500 delay-200 ${
              cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-heading text-xl mb-3">Visit Studio</h4>
            <p className="text-muted-foreground">Mumbai, Maharashtra</p>
          </div>
        </div>
        
        {/* Dual Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ContactForm type="couple" />
          <ContactForm type="planner" />
        </div>
        
        {/* Interactive Map */}
        <div
          ref={mapRef}
          className={`bg-card p-4 rounded-lg shadow-xl transition-all duration-1000 ${
            mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571984106!2d72.71637028359374!3d19.08219778554659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              title="Anant Parinay Collective Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
