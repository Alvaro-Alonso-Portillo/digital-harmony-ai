
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot, BarChart, Zap } from 'lucide-react';
import HologramSphere from './HologramSphere';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-background to-background/80 overflow-hidden relative grid-pattern">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,87,243,0.1)_0%,transparent_65%)]"></div>
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Marketing Digital Potenciado por IA
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforma tu marketing con 
              <span className="heading-gradient"> inteligencia artificial</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Automatiza, optimiza y personaliza tus estrategias de marketing digital con soluciones innovadoras basadas en IA avanzada.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-primary hover:bg-secondary text-white w-full sm:w-auto">
                <a href="#contacto">
                  Solicitar demostración
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-secondary/50 hover:bg-secondary/10">
                <a href="#servicios">Descubrir servicios</a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mt-8 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Bot className="h-4 w-4 mr-1 text-secondary" />
                Asistentes IA
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <BarChart className="h-4 w-4 mr-1 text-secondary" />
                Análisis predictivo
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Zap className="h-4 w-4 mr-1 text-secondary" />
                Automatización
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-card/90 shadow-xl rounded-2xl p-6 border border-muted dark:border-muted animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl"></div>
              <div className="relative">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">Asistente de Marketing IA</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm font-medium">Análisis de campaña completado</p>
                    <div className="mt-2 h-2 bg-secondary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-3/4 rounded-full animate-pulse-slow"></div>
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <span>ROI: +27%</span>
                      <span>CPA: -18%</span>
                      <span>CTR: +32%</span>
                    </div>
                  </div>
                  
                  <div className="p-3 border border-muted rounded-lg">
                    <p className="text-sm">Recomendaciones de optimización:</p>
                    <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-1"></span>
                        Incrementar presupuesto en campañas de alto rendimiento
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-1"></span>
                        Optimizar landing page para mejorar conversión
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-1"></span>
                        Segmentar audiencia por comportamiento de compra
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium">Asistente IA</p>
                        <p className="text-xs text-muted-foreground">Generando contenido personalizado...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 3D Hologram Sphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[280px] max-h-[280px] -z-10">
              <HologramSphere />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-secondary/80 blur-xl opacity-20 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-primary/80 blur-xl opacity-20 animate-pulse-slow"></div>
            
            {/* Orbital decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] -z-20">
              <div className="absolute w-4 h-4 bg-secondary rounded-full animate-orbit origin-center"></div>
              <div className="absolute w-3 h-3 bg-primary rounded-full animate-orbit origin-center" style={{animationDelay: "-5s"}}></div>
              <div className="absolute w-2 h-2 bg-white/50 rounded-full animate-orbit origin-center" style={{animationDelay: "-10s"}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
