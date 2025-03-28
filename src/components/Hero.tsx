
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot, BarChart, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white to-blue-50 dark:from-agency-dark dark:to-agency-blue/20 overflow-hidden relative grid-pattern">
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-agency-turquoise/10 text-agency-turquoise text-sm font-medium mb-6">
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
              <Button asChild size="lg" className="bg-agency-blue hover:bg-agency-turquoise text-white w-full sm:w-auto">
                <a href="#contacto">
                  Solicitar demostración
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="#servicios">Descubrir servicios</a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mt-8 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Bot className="h-4 w-4 mr-1 text-agency-turquoise" />
                Asistentes IA
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <BarChart className="h-4 w-4 mr-1 text-agency-turquoise" />
                Análisis predictivo
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Zap className="h-4 w-4 mr-1 text-agency-turquoise" />
                Automatización
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-agency-dark/80 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-800 animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-agency-blue/5 to-agency-turquoise/5 rounded-2xl"></div>
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
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-sm font-medium">Análisis de campaña completado</p>
                    <div className="mt-2 h-2 bg-agency-turquoise/20 rounded-full overflow-hidden">
                      <div className="h-full bg-agency-turquoise w-3/4 rounded-full animate-pulse-slow"></div>
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <span>ROI: +27%</span>
                      <span>CPA: -18%</span>
                      <span>CTR: +32%</span>
                    </div>
                  </div>
                  
                  <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <p className="text-sm">Recomendaciones de optimización:</p>
                    <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-agency-turquoise mr-1"></span>
                        Incrementar presupuesto en campañas de alto rendimiento
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-agency-turquoise mr-1"></span>
                        Optimizar landing page para mejorar conversión
                      </li>
                      <li className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-agency-turquoise mr-1"></span>
                        Segmentar audiencia por comportamiento de compra
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-agency-blue/10 dark:bg-agency-blue/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-agency-blue flex items-center justify-center">
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
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-agency-turquoise/20 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-agency-blue rounded-full blur-2xl opacity-20 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-agency-turquoise rounded-full blur-2xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
