
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Implementar las soluciones de IA de NexusAI transformó completamente nuestras campañas. Aumentamos nuestro ROAS en un 47% y redujimos el tiempo dedicado a gestión de anuncios en un 70%.",
    author: "María Rodríguez",
    position: "Directora de Marketing, E-commerce Moda",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150",
    initials: "MR",
    stars: 5
  },
  {
    quote: "Los chatbots y asistentes virtuales que implementamos con NexusAI incrementaron nuestra tasa de conversión en un 32%. El equipo entendió perfectamente nuestras necesidades.",
    author: "Carlos Mendoza",
    position: "CEO, Startup SaaS",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=150&h=150",
    initials: "CM",
    stars: 5
  },
  {
    quote: "La automatización de nuestras campañas de email marketing nos permitió incrementar nuestras ventas en un 28% mientras reducíamos los costes operativos. Excelente servicio.",
    author: "Laura Gómez",
    position: "Directora Digital, Retail",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150",
    initials: "LG",
    stars: 5
  },
  {
    quote: "La generación de contenido con IA nos ha permitido escalar nuestra producción sin perder calidad ni personalización. Una herramienta invaluable para nuestro equipo.",
    author: "Javier López",
    position: "Director Creativo, Agencia Creativa",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150",
    initials: "JL",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 bg-white dark:bg-agency-dark/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Testimonios</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8">
            Historias de <span className="heading-gradient">éxito</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Descubre cómo nuestras soluciones de IA han transformado los negocios de nuestros clientes
          </p>
        </div>

        <div className="relative">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group h-full">
                    <div className="border border-border bg-background/50 dark:bg-black/20 backdrop-blur-sm rounded-xl p-8 h-full hover:border-agency-green transition-colors duration-300">
                      <div className="flex items-center mb-6">
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
                      
                      <blockquote className="text-lg text-foreground/90 italic mb-8">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center mt-auto">
                        <Avatar className="h-14 w-14 mr-4 border-2 border-transparent group-hover:border-agency-green transition-colors duration-300">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                          <AvatarFallback className="bg-agency-blue text-white">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static transform-none border-agency-green hover:border-agency-green hover:bg-agency-green/10 text-agency-green" />
              <CarouselNext className="static transform-none border-agency-green hover:border-agency-green hover:bg-agency-green/10 text-agency-green" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <div className="flex flex-col">
            <p className="text-4xl md:text-5xl font-bold tracking-tighter text-agency-turquoise mb-2">+35%</p>
            <p className="text-muted-foreground">Incremento en ROI</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl md:text-5xl font-bold tracking-tighter text-agency-turquoise mb-2">-42%</p>
            <p className="text-muted-foreground">Reducción en CPA</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl md:text-5xl font-bold tracking-tighter text-agency-turquoise mb-2">+67%</p>
            <p className="text-muted-foreground">Aumento en conversiones</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl md:text-5xl font-bold tracking-tighter text-agency-turquoise mb-2">-70%</p>
            <p className="text-muted-foreground">Reducción de tiempo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
