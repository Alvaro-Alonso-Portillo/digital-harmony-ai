
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-wide py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold">
              Optimiz<span className="text-agency-green">IA</span> Servicios
            </span>
          </a>
          
          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          ) : (
            <ul className="hidden md:flex items-center space-x-8">
              <li><a href="#servicios" className="text-foreground hover:text-agency-green transition-colors">Servicios</a></li>
              <li><a href="#caracteristicas" className="text-foreground hover:text-agency-green transition-colors">Características</a></li>
              <li><a href="#testimonios" className="text-foreground hover:text-agency-green transition-colors">Testimonios</a></li>
              <li><a href="#precios" className="text-foreground hover:text-agency-green transition-colors">Precios</a></li>
              <li><a href="#contacto" className="text-foreground hover:text-agency-green transition-colors">Contacto</a></li>
            </ul>
          )}
          
          <div className="hidden md:block">
            <Button asChild className="bg-agency-blue hover:bg-agency-green text-white">
              <a href="#contacto">
                Solicitar demo
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </nav>
        
        {isMobile && isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <ul className="space-y-4">
              <li><a href="#servicios" className="block text-foreground hover:text-agency-green transition-colors" onClick={toggleMenu}>Servicios</a></li>
              <li><a href="#caracteristicas" className="block text-foreground hover:text-agency-green transition-colors" onClick={toggleMenu}>Características</a></li>
              <li><a href="#testimonios" className="block text-foreground hover:text-agency-green transition-colors" onClick={toggleMenu}>Testimonios</a></li>
              <li><a href="#precios" className="block text-foreground hover:text-agency-green transition-colors" onClick={toggleMenu}>Precios</a></li>
              <li><a href="#contacto" className="block text-foreground hover:text-agency-green transition-colors" onClick={toggleMenu}>Contacto</a></li>
              <li className="pt-4">
                <Button asChild className="w-full bg-agency-blue hover:bg-agency-green text-white">
                  <a href="#contacto" onClick={toggleMenu}>
                    Solicitar demo
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
