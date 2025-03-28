
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "799",
    description: "Perfecto para pequeñas empresas que buscan iniciarse en el marketing con IA",
    features: [
      { included: true, text: "Automatización básica de email y RRSS" },
      { included: true, text: "Optimización de 3 campañas publicitarias" },
      { included: true, text: "Chatbot básico para sitio web" },
      { included: true, text: "Generación de 20 contenidos mensuales" },
      { included: true, text: "Análisis de datos básico" },
      { included: false, text: "Personalización avanzada" },
      { included: false, text: "Segmentación predictiva" },
      { included: false, text: "SEO con IA avanzado" }
    ],
    popular: false,
    color: "bg-gray-100 dark:bg-gray-800"
  },
  {
    name: "Professional",
    price: "1.499",
    description: "Ideal para empresas en crecimiento que necesitan escalabilidad y personalización",
    features: [
      { included: true, text: "Automatización avanzada de marketing" },
      { included: true, text: "Optimización de 10 campañas publicitarias" },
      { included: true, text: "Chatbot personalizado multi-plataforma" },
      { included: true, text: "Generación de 50 contenidos mensuales" },
      { included: true, text: "Análisis predictivo de datos" },
      { included: true, text: "Personalización avanzada" },
      { included: true, text: "Segmentación predictiva" },
      { included: false, text: "SEO con IA avanzado" }
    ],
    popular: true,
    color: "bg-gradient-to-r from-agency-blue to-agency-turquoise"
  },
  {
    name: "Enterprise",
    price: "2.999",
    description: "Solución completa para grandes empresas que buscan maximizar resultados",
    features: [
      { included: true, text: "Automatización completa y personalizada" },
      { included: true, text: "Optimización ilimitada de campañas" },
      { included: true, text: "Asistentes IA personalizados" },
      { included: true, text: "Generación ilimitada de contenidos" },
      { included: true, text: "Dashboard personalizado en tiempo real" },
      { included: true, text: "Personalización por micro-segmentos" },
      { included: true, text: "Segmentación predictiva avanzada" },
      { included: true, text: "SEO con IA avanzado" }
    ],
    popular: false,
    color: "bg-gray-100 dark:bg-gray-800"
  }
];

const Pricing = () => {
  return (
    <section id="precios" className="section-padding bg-agency-blue/5 dark:bg-agency-dark">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Planes <span className="heading-gradient">adaptados</span> a tus necesidades
          </h2>
          <p className="section-subtitle">
            Soluciones escalables que crecen con tu negocio, con precios transparentes y sin costes ocultos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 ${
                plan.popular ? 'shadow-lg md:-mt-4 md:mb-4' : 'shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-agency-blue to-agency-turquoise"></div>
              )}
              
              <div className={`p-8 ${
                plan.popular 
                  ? 'bg-white dark:bg-agency-dark border-2 border-agency-turquoise/30' 
                  : 'bg-white dark:bg-agency-dark border border-gray-100 dark:border-gray-800'
              }`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full bg-agency-turquoise/10 text-agency-turquoise text-xs font-medium">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Más popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}€</span>
                  <span className="text-muted-foreground ml-1">/mes</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>
                
                <Button
                  asChild
                  className={`w-full mb-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-agency-blue to-agency-turquoise hover:from-agency-turquoise hover:to-agency-blue text-white' 
                      : 'bg-agency-blue hover:bg-agency-turquoise text-white'
                  }`}
                >
                  <a href="#contacto">Comenzar ahora</a>
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0 mr-3" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white dark:bg-agency-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">¿Necesitas una solución personalizada?</h3>
              <p className="text-muted-foreground mb-6">
                Contamos con planes personalizados para empresas con necesidades específicas. 
                Nuestro equipo de expertos en IA y marketing digital diseñará una solución a medida para ti.
              </p>
              <Button asChild className="bg-agency-blue hover:bg-agency-turquoise text-white">
                <a href="#contacto">Solicitar propuesta a medida</a>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <Check className="h-4 w-4 text-agency-turquoise" />
                </div>
                <div>
                  <p className="font-medium">Consultoría estratégica</p>
                  <p className="text-sm text-muted-foreground">Asesoramiento personalizado para definir la mejor estrategia para tu negocio</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <Check className="h-4 w-4 text-agency-turquoise" />
                </div>
                <div>
                  <p className="font-medium">Desarrollo a medida</p>
                  <p className="text-sm text-muted-foreground">Soluciones tecnológicas adaptadas a tus procesos existentes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <Check className="h-4 w-4 text-agency-turquoise" />
                </div>
                <div>
                  <p className="font-medium">Formación para tu equipo</p>
                  <p className="text-sm text-muted-foreground">Capacitación de tu personal para maximizar el potencial de las herramientas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
