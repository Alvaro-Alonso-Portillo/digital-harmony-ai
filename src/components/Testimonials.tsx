
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Implementar las soluciones de IA de NexusAI transformó completamente nuestras campañas. Aumentamos nuestro ROAS en un 47% y redujimos el tiempo dedicado a gestión de anuncios en un 70%.",
    author: "María Rodríguez",
    position: "Directora de Marketing, E-commerce Moda",
    avatar: "/placeholder.svg",
    initials: "MR",
    stars: 5
  },
  {
    quote: "Los chatbots y asistentes virtuales que implementamos con NexusAI incrementaron nuestra tasa de conversión en un 32%. El equipo entendió perfectamente nuestras necesidades.",
    author: "Carlos Mendoza",
    position: "CEO, Startup SaaS",
    avatar: "/placeholder.svg",
    initials: "CM",
    stars: 5
  },
  {
    quote: "La automatización de nuestras campañas de email marketing nos permitió incrementar nuestras ventas en un 28% mientras reducíamos los costes operativos. Excelente servicio.",
    author: "Laura Gómez",
    position: "Directora Digital, Retail",
    avatar: "/placeholder.svg",
    initials: "LG",
    stars: 5
  },
  {
    quote: "La generación de contenido con IA nos ha permitido escalar nuestra producción sin perder calidad ni personalización. Una herramienta invaluable para nuestro equipo.",
    author: "Javier López",
    position: "Director Creativo, Agencia Creativa",
    avatar: "/placeholder.svg",
    initials: "JL",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="section-padding bg-white dark:bg-agency-dark/80">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Lo que <span className="heading-gradient">dicen</span> nuestros clientes
          </h2>
          <p className="section-subtitle">
            Descubre cómo nuestras soluciones de marketing basadas en IA han ayudado a empresas 
            como la tuya a alcanzar sus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-agency-dark border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.stars 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-agency-turquoise/20 -translate-x-4 -translate-y-4" />
                <p className="text-muted-foreground relative z-10">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback className="bg-agency-blue text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-agency-blue/5 dark:bg-agency-blue/20 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Resultados que nuestros clientes obtienen
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estos son los promedios de mejora que experimentan nuestros clientes tras 
              implementar nuestras soluciones de marketing con IA
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white dark:bg-agency-dark rounded-xl shadow-sm">
              <p className="text-4xl font-bold text-agency-turquoise mb-2">+35%</p>
              <p className="text-sm text-muted-foreground">Incremento en ROI</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-agency-dark rounded-xl shadow-sm">
              <p className="text-4xl font-bold text-agency-turquoise mb-2">-42%</p>
              <p className="text-sm text-muted-foreground">Reducción en CPA</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-agency-dark rounded-xl shadow-sm">
              <p className="text-4xl font-bold text-agency-turquoise mb-2">+67%</p>
              <p className="text-sm text-muted-foreground">Aumento en conversiones</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-agency-dark rounded-xl shadow-sm">
              <p className="text-4xl font-bold text-agency-turquoise mb-2">-70%</p>
              <p className="text-sm text-muted-foreground">Reducción de tiempo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
