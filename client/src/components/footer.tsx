import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl mb-6">Anant Parinay</h3>
            <p className="text-background/70 leading-relaxed mb-6">
              Capturing eternal love stories through cinematic artistry.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-background/30 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                data-testid="link-instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-background/30 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                data-testid="link-facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-background/30 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                data-testid="link-youtube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-background/30 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                data-testid="link-vimeo"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-background/70 hover:text-primary transition-colors" data-testid="footer-link-home">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                  <a className="text-background/70 hover:text-primary transition-colors" data-testid="footer-link-portfolio">Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-background/70 hover:text-primary transition-colors" data-testid="footer-link-about">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/moodboard">
                  <a className="text-background/70 hover:text-primary transition-colors" data-testid="footer-link-moodboard">Moodboard</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-background/70 hover:text-primary transition-colors" data-testid="footer-link-contact">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-heading text-xl mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-background/70">Wedding Photography</li>
              <li className="text-background/70">Cinematic Videography</li>
              <li className="text-background/70">Destination Weddings</li>
              <li className="text-background/70">Pre-Wedding Shoots</li>
              <li className="text-background/70">Albums & Prints</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-xl mb-6">Stay Connected</h4>
            <p className="text-background/70 mb-6">Subscribe for wedding inspiration and exclusive updates</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/50 focus:outline-none focus:border-primary"
                required
                data-testid="input-newsletter-email"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 meta-text text-xs hover:bg-opacity-90 transition-all duration-300"
                data-testid="button-subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="meta-text text-xs text-background/50">© 2024 Anant Parinay Collective. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="meta-text text-xs text-background/50 hover:text-primary transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="meta-text text-xs text-background/50 hover:text-primary transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
