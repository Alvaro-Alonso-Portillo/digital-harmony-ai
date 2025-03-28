
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Check, ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
    presupuesto: 'medio',
    loading: false,
    submitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });
    
    // Simular envío del formulario
    setTimeout(() => {
      setFormState({ 
        ...formState, 
        loading: false, 
        submitted: true,
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        mensaje: ''
      });
      
      toast({
        title: "Formulario enviado correctamente",
        description: "Nos pondremos en contacto contigo lo antes posible.",
        variant: "default",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <section id="contacto" className="section-padding bg-white dark:bg-agency-dark/80">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Potencia tu marketing con <span className="heading-gradient">inteligencia artificial</span>
          </h2>
          <p className="section-subtitle">
            Contáctanos para descubrir cómo nuestras soluciones de IA pueden transformar 
            tu estrategia digital y aumentar tus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-agency-blue to-agency-turquoise relative p-8 flex flex-col justify-end">
              <div className="absolute inset-0 opacity-20 grid-pattern"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-2">Hablemos sobre tu proyecto</h3>
                <p className="text-white/80">
                  Completa el formulario y te contactaremos en menos de 24 horas 
                  para discutir cómo podemos ayudarte
                </p>
              </div>
            </div>
            
            <div className="p-8 bg-white dark:bg-agency-dark border border-gray-100 dark:border-gray-800">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input 
                      id="nombre" 
                      name="nombre" 
                      placeholder="Tu nombre" 
                      value={formState.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email profesional</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="tu@empresa.com" 
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input 
                      id="telefono" 
                      name="telefono" 
                      placeholder="Tu teléfono" 
                      value={formState.telefono}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input 
                      id="empresa" 
                      name="empresa" 
                      placeholder="Nombre de tu empresa" 
                      value={formState.empresa}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="mensaje">¿En qué podemos ayudarte?</Label>
                  <Textarea 
                    id="mensaje" 
                    name="mensaje" 
                    placeholder="Cuéntanos sobre tu proyecto y objetivos" 
                    rows={4}
                    value={formState.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <Label>Presupuesto aproximado mensual</Label>
                  <RadioGroup 
                    defaultValue="medio" 
                    onValueChange={(value) => setFormState({ ...formState, presupuesto: value })}
                    className="flex flex-col space-y-1 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bajo" id="presupuesto-bajo" />
                      <Label htmlFor="presupuesto-bajo">Menos de 1.000€/mes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medio" id="presupuesto-medio" />
                      <Label htmlFor="presupuesto-medio">Entre 1.000€ y 3.000€/mes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="alto" id="presupuesto-alto" />
                      <Label htmlFor="presupuesto-alto">Más de 3.000€/mes</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={formState.loading || formState.submitted}
                  className="w-full bg-agency-blue hover:bg-agency-turquoise text-white"
                >
                  {formState.loading ? (
                    "Enviando..."
                  ) : formState.submitted ? (
                    <span className="flex items-center">
                      <Check className="mr-2 h-4 w-4" /> Formulario enviado
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Solicitar información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-agency-blue/5 dark:bg-agency-blue/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <Mail className="h-5 w-5 text-agency-turquoise" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@nexusai.es" className="text-agency-turquoise hover:text-agency-blue">
                      info@nexusai.es
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <Phone className="h-5 w-5 text-agency-turquoise" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <a href="tel:+34911234567" className="text-agency-turquoise hover:text-agency-blue">
                      +34 91 123 45 67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <MapPin className="h-5 w-5 text-agency-turquoise" />
                  </div>
                  <div>
                    <p className="font-medium">Oficina central</p>
                    <p className="text-muted-foreground">
                      Calle Gran Vía 28, 28013<br />
                      Madrid, España
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <Clock className="h-5 w-5 text-agency-turquoise" />
                  </div>
                  <div>
                    <p className="font-medium">Horario de atención</p>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábado y Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-agency-blue to-agency-turquoise rounded-2xl p-8 text-white flex-grow">
              <h3 className="text-2xl font-bold mb-6">¿Por qué elegir NexusAI?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-white/90">
                    <span className="font-medium">Tecnología de vanguardia</span> - Utilizamos los modelos de IA más avanzados del mercado
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-white/90">
                    <span className="font-medium">Equipo experto</span> - Especialistas en marketing digital con más de 10 años de experiencia
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-white/90">
                    <span className="font-medium">Soluciones personalizadas</span> - Adaptamos nuestras herramientas a tus necesidades específicas
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-white/90">
                    <span className="font-medium">Resultados garantizados</span> - Nos comprometemos a mejorar tus KPIs en los primeros 90 días
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="font-medium text-lg mb-2">¿Listo para transformar tu marketing?</p>
                <p className="text-white/80">
                  Agenda una consulta gratuita de 30 minutos con uno de nuestros especialistas 
                  para analizar tu caso particular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
