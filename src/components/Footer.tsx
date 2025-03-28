
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-agency-blue text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-6">
              <a href="#" className="flex items-center">
                <span className="text-2xl font-display font-bold text-white">
                  NEXUS<span className="text-agency-green">AI</span>
                </span>
              </a>
            </div>
            <p className="text-white/70 mb-6">
              Automatización, optimización y personalización de tu marketing digital con 
              soluciones innovadoras basadas en IA avanzada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agency-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agency-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agency-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agency-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Automatización de Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Optimización de Anuncios
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Generación de Contenido con IA
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Análisis de Datos Avanzado
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Chatbots y Asistentes Virtuales
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  SEO impulsado por IA
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces útiles</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Servicios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Casos de éxito
                </a>
              </li>
              <li>
                <a href="#precios" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/70 hover:text-agency-green flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Suscríbete para recibir las últimas novedades sobre marketing digital e inteligencia artificial
            </p>
            <form className="flex mb-6">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="flex-grow px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-agency-green text-gray-900" 
              />
              <button 
                type="submit" 
                className="bg-agency-green hover:bg-agency-blue transition-colors px-4 py-2 rounded-r-md"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </form>
            <p className="text-white/50 text-sm">
              Al suscribirte, aceptas nuestra política de privacidad y términos de servicio.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NexusAI. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/50">
            <a href="#" className="hover:text-white">Políticas de Privacidad</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
