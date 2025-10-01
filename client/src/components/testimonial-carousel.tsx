import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    quote: "Anant Parinay didn't just photograph our wedding—they captured the soul of our celebration. Every glance, every tear, every smile was preserved with such artistry that looking at our photos feels like reliving those precious moments all over again.",
    author: "Sarah & Marco",
    location: "Tuscany, Italy",
    date: "May 2024"
  },
  {
    quote: "From our first consultation to the final film delivery, the team was professional, creative, and incredibly attentive to our vision. They made us feel comfortable and captured moments we didn't even know happened. Absolute perfection!",
    author: "Emma & Alexander",
    location: "Santorini, Greece",
    date: "June 2024"
  },
  {
    quote: "The level of artistry and dedication is unmatched. Our wedding film is a masterpiece that we'll treasure forever. Every time we watch it, we discover new beautiful details. Thank you for giving us this timeless gift.",
    author: "Priya & Arjun",
    location: "Udaipur, India",
    date: "March 2024"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="meta-text text-sm text-primary uppercase tracking-widest mb-4">Client Love</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">What Couples Say About Us</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            The greatest reward is seeing our couples relive their special day through our films
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-card p-12 rounded-lg shadow-xl max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                      <svg className="w-12 h-12 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl text-center text-foreground leading-relaxed mb-8 italic font-body">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-center">
                      <p className="font-heading text-xl text-foreground">{testimonial.author}</p>
                      <p className="meta-text text-xs text-secondary mt-2">{testimonial.location} • {testimonial.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-testid="button-testimonial-prev"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-testid="button-testimonial-next"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
