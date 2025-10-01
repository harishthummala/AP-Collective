import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/moodboard", label: "Moodboard" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 nav-backdrop border-b border-border transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center space-x-3" data-testid="link-home">
                <h3 className="font-heading text-2xl lg:text-3xl text-foreground">Anant Parinay</h3>
              </a>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`meta-text text-xs uppercase tracking-wider transition-colors duration-300 ${
                      location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    data-testid={`nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full md:w-96 bg-card z-50 p-8 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-8 right-8 text-foreground"
          onClick={() => setIsOpen(false)}
          data-testid="button-close-mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col space-y-8 mt-20">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`meta-text text-lg uppercase tracking-wider transition-colors duration-300 ${
                  location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
