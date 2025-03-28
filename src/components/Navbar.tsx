
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-agency-dark/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl md:text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-agency-blue to-agency-turquoise">
                NEXUS<span className="text-agency-turquoise">AI</span>
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-sm font-medium hover:text-agency-turquoise transition-colors">
              Servicios
            </a>
            <a href="#caracteristicas" className="text-sm font-medium hover:text-agency-turquoise transition-colors">
              ¿Por qué nosotros?
            </a>
            <a href="#testimonios" className="text-sm font-medium hover:text-agency-turquoise transition-colors">
              Testimonios
            </a>
            <a href="#precios" className="text-sm font-medium hover:text-agency-turquoise transition-colors">
              Precios
            </a>
            <Button asChild size="sm" className="bg-agency-turquoise hover:bg-agency-blue text-white">
              <a href="#contacto">Contactar</a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-agency-dark p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#servicios" 
              className="text-sm font-medium hover:text-agency-turquoise transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#caracteristicas" 
              className="text-sm font-medium hover:text-agency-turquoise transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ¿Por qué nosotros?
            </a>
            <a 
              href="#testimonios" 
              className="text-sm font-medium hover:text-agency-turquoise transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#precios" 
              className="text-sm font-medium hover:text-agency-turquoise transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Precios
            </a>
            <Button 
              asChild 
              size="sm" 
              className="bg-agency-turquoise hover:bg-agency-blue text-white w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#contacto">Contactar</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
