
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "IA Essentials",
    price: "1.500",
    description: "Ideal para startups y pequeñas empresas que buscan iniciar su transformación digital con IA.",
    features: [
      { included: true, text: "Automatización básica de marketing con flujos para email y redes sociales" },
      { included: true, text: "Optimización de anuncios en una plataforma (Google Ads o Meta Ads)" },
      { included: true, text: "Generación de contenido básico con IA (4 piezas mensuales)" },
      { included: true, text: "Dashboard de análisis de datos con KPIs esenciales" },
      { included: true, text: "Chatbot básico para atención al cliente" },
      { included: true, text: "Optimización SEO mensual con IA" },
      { included: false, text: "Análisis predictivo de audiencias" },
      { included: false, text: "Personalización de experiencia de usuario basada en IA" }
    ],
    popular: false,
    color: "bg-gray-100 dark:bg-gray-800",
    commitment: "Compromiso mínimo de 3 meses"
  },
  {
    name: "Crecimiento de IA",
    price: "3.000",
    description: "Para empresas en crecimiento con presencia digital establecida que buscan escalar.",
    features: [
      { included: true, text: "Automatización avanzada de marketing con integración CRM" },
      { included: true, text: "Optimización de anuncios en múltiples plataformas (Google, Meta, TikTok)" },
      { included: true, text: "Generación de contenido avanzado con IA (10 piezas mensuales)" },
      { included: true, text: "Análisis predictivo de audiencias y segmentación avanzada" },
      { included: true, text: "Chatbot personalizado con integración a sistemas internos" },
      { included: true, text: "SEO técnico y de contenidos impulsado por IA" },
      { included: true, text: "Personalización de experiencia de usuario basada en IA" },
      { included: false, text: "Ecosistema completo de automatización omnicanal" }
    ],
    popular: true,
    color: "bg-gradient-to-r from-agency-blue to-agency-green",
    commitment: "Compromiso mínimo de 6 meses"
  },
  {
    name: "IA Enterprise",
    price: "6.000",
    description: "Solución completa para empresas medianas y grandes con necesidades complejas.",
    features: [
      { included: true, text: "Ecosistema completo de automatización de marketing omnicanal" },
      { included: true, text: "Optimización programática de campañas en tiempo real" },
      { included: true, text: "Estudio de contenido con IA (producción ilimitada)" },
      { included: true, text: "Sistema de análisis predictivo avanzado con recomendaciones" },
      { included: true, text: "Suite completa de asistentes virtuales personalizados" },
      { included: true, text: "SEO predictivo y generación automática de contenido optimizado" },
      { included: true, text: "Personalización 1:1 en todos los puntos de contacto" },
      { included: true, text: "Plan estratégico de transformación digital con IA" }
    ],
    popular: false,
    color: "bg-gray-100 dark:bg-gray-800",
    commitment: "Compromiso mínimo de 12 meses"
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
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-agency-blue to-agency-green"></div>
              )}
              
              <div className={`p-8 ${
                plan.popular 
                  ? 'bg-white dark:bg-agency-dark border-2 border-agency-green/30' 
                  : 'bg-white dark:bg-agency-dark border border-gray-100 dark:border-gray-800'
              }`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full bg-agency-green/10 text-agency-green text-xs font-medium">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Más popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}€</span>
                  <span className="text-muted-foreground ml-1">/mes</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {plan.description}
                </p>
                <p className="text-xs text-muted-foreground mb-6">
                  {plan.commitment}
                </p>
                
                <Button
                  asChild
                  className={`w-full mb-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-agency-blue to-agency-green hover:from-agency-green hover:to-agency-blue text-white' 
                      : 'bg-agency-blue hover:bg-agency-green text-white'
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
              <h3 className="text-2xl font-bold mb-4">Servicios complementarios</h3>
              <p className="text-muted-foreground mb-6">
                Además de nuestros planes principales, ofrecemos servicios complementarios personalizados 
                como desarrollo tecnológico, consultoría estratégica y generación de contenido especializado.
              </p>
              <Button asChild className="bg-agency-blue hover:bg-agency-green text-white">
                <a href="#contacto">Solicitar propuesta a medida</a>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <Check className="h-4 w-4 text-agency-green" />
                </div>
                <div>
                  <p className="font-medium">Desarrollo tecnológico</p>
                  <p className="text-sm text-muted-foreground">Implementación de plataformas personalizadas e integración con sistemas existentes</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <Check className="h-4 w-4 text-agency-green" />
                </div>
                <div>
                  <p className="font-medium">Consultoría estratégica</p>
                  <p className="text-sm text-muted-foreground">Auditorías, planes estratégicos y formación en herramientas de IA</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <Check className="h-4 w-4 text-agency-green" />
                </div>
                <div>
                  <p className="font-medium">Generación de contenido especializado</p>
                  <p className="text-sm text-muted-foreground">Creación de contenido visual, vídeos personalizados y sistemas de recomendación</p>
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
