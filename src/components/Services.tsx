
import React from 'react';
import { 
  Bot, Zap, BarChart, Mail, LineChart, 
  MessageSquare, Search, Layout, Video 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Zap className="h-6 w-6 text-agency-green" />,
    title: "Automatización de Marketing",
    description: "Flujos inteligentes para email, CRM y redes sociales que mejoran la eficiencia y reducen costes operativos.",
    features: ["Automatización de email marketing", "Gestión inteligente de CRM", "Programación de contenido en redes sociales"]
  },
  {
    icon: <LineChart className="h-6 w-6 text-agency-green" />,
    title: "Optimización de Anuncios",
    description: "Análisis predictivo para optimizar campañas en Google Ads, Meta Ads y TikTok Ads con mayor ROI.",
    features: ["Análisis predictivo de rendimiento", "Optimización automatizada de pujas", "Segmentación avanzada de audiencias"]
  },
  {
    icon: <Layout className="h-6 w-6 text-agency-green" />,
    title: "Generación de Contenido",
    description: "Creación de copywriting, imágenes y vídeos personalizados mediante algoritmos avanzados de IA.",
    features: ["Copywriting adaptado a tu marca", "Creación de imágenes personalizadas", "Edición y generación de vídeos"]
  },
  {
    icon: <BarChart className="h-6 w-6 text-agency-green" />,
    title: "Análisis de Datos Avanzado",
    description: "Segmentación de audiencias e identificación de patrones para mejorar la toma de decisiones y el ROI.",
    features: ["Dashboard personalizado en tiempo real", "Predicción de comportamiento", "Recomendaciones basadas en datos"]
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-agency-green" />,
    title: "Chatbots y Asistentes Virtuales",
    description: "Mejora la experiencia del cliente y automatiza el soporte con asistentes conversacionales inteligentes.",
    features: ["Configuración personalizada", "Integración con WhatsApp y web", "Aprendizaje continuo y mejora"]
  },
  {
    icon: <Search className="h-6 w-6 text-agency-green" />,
    title: "SEO impulsado por IA",
    description: "Generación de contenido optimizado y estrategias SEO automatizadas para mejorar tu posicionamiento.",
    features: ["Investigación de palabras clave", "Contenido optimizado para SEO", "Análisis de competencia"]
  }
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-white dark:bg-agency-dark/80">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nuestros <span className="heading-gradient">Servicios</span>
          </h2>
          <p className="section-subtitle">
            Soluciones avanzadas de marketing digital potenciadas por inteligencia artificial 
            para impulsar el crecimiento de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-agency-dark border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-12 w-12 rounded-lg bg-agency-blue/10 dark:bg-agency-blue/20 flex items-center justify-center mb-5 group-hover:bg-agency-green/20 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-agency-green/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-agency-green"></span>
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost" className="text-agency-green hover:text-agency-blue hover:bg-agency-green/10 w-full mt-auto">
                Saber más
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-agency-blue hover:bg-agency-green text-white">
            <a href="#contacto">Solicitar consulta gratuita</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
