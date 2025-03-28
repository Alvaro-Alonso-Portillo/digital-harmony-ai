
import React from 'react';
import { 
  Brain, Cpu, LineChart, RefreshCcw, Shield, Clock, 
  Users, Award, Target, Zap 
} from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-agency-turquoise" />,
    title: "IA de Última Generación",
    description: "Utilizamos los modelos de IA más avanzados para ofrecer resultados excepcionales y precisos."
  },
  {
    icon: <LineChart className="h-8 w-8 text-agency-turquoise" />,
    title: "Análisis Predictivo",
    description: "Anticipamos tendencias y comportamientos para optimizar estrategias antes de implementarlas."
  },
  {
    icon: <Cpu className="h-8 w-8 text-agency-turquoise" />,
    title: "Automatización Completa",
    description: "Reduce hasta un 70% el tiempo dedicado a tareas repetitivas con nuestros sistemas de automatización."
  },
  {
    icon: <RefreshCcw className="h-8 w-8 text-agency-turquoise" />,
    title: "Mejora Continua",
    description: "Nuestros algoritmos aprenden constantemente para mejorar los resultados a lo largo del tiempo."
  },
  {
    icon: <Shield className="h-8 w-8 text-agency-turquoise" />,
    title: "Seguridad de Datos",
    description: "Protocolos avanzados de seguridad que garantizan la protección de todos tus datos."
  },
  {
    icon: <Clock className="h-8 w-8 text-agency-turquoise" />,
    title: "Ahorro de Tiempo",
    description: "Reduce hasta un 70% el tiempo dedicado a gestionar tus campañas de marketing."
  },
  {
    icon: <Users className="h-8 w-8 text-agency-turquoise" />,
    title: "Personalización Avanzada",
    description: "Experiencias únicas para cada cliente basadas en su comportamiento e intereses."
  },
  {
    icon: <Award className="h-8 w-8 text-agency-turquoise" />,
    title: "Expertos en Marketing",
    description: "Combinamos IA con el conocimiento de especialistas con más de 10 años de experiencia."
  },
  {
    icon: <Target className="h-8 w-8 text-agency-turquoise" />,
    title: "Resultados Medibles",
    description: "Métricas claras y dashboards en tiempo real para monitorizar el éxito de tus campañas."
  },
  {
    icon: <Zap className="h-8 w-8 text-agency-turquoise" />,
    title: "Implementación Rápida",
    description: "Ponemos en marcha nuestras soluciones en semanas, no meses, para acelerar tu crecimiento."
  }
];

const Features = () => {
  return (
    <section id="caracteristicas" className="section-padding bg-agency-blue/5 dark:bg-agency-dark">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-title">
            ¿Por qué <span className="heading-gradient">elegirnos</span>?
          </h2>
          <p className="section-subtitle">
            Nuestra plataforma combina tecnología de punta, experiencia en marketing 
            y soluciones personalizadas para impulsar tu crecimiento
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 rounded-full bg-white dark:bg-agency-dark/80 shadow-md flex items-center justify-center mb-4 group-hover:bg-agency-turquoise/20 transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-gradient-to-r from-agency-blue to-agency-turquoise rounded-2xl text-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Aumenta tus resultados con soluciones de IA personalizadas
              </h3>
              <p className="text-white/80 mb-6">
                Nuestros clientes experimentan un incremento promedio del 35% en su ROI 
                después de 3 meses utilizando nuestras soluciones de marketing basadas en IA.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">+35%</p>
                  <p className="text-sm text-white/80">ROI</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">-40%</p>
                  <p className="text-sm text-white/80">Tiempo</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">+65%</p>
                  <p className="text-sm text-white/80">Conversiones</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 rounded-xl"></div>
              <div className="relative p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <Users className="h-5 w-5 text-agency-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Mayor captación de clientes</p>
                      <p className="text-sm text-white/80">Campañas optimizadas con IA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <Clock className="h-5 w-5 text-agency-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Ahorro de tiempo y recursos</p>
                      <p className="text-sm text-white/80">Automatización de procesos</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <LineChart className="h-5 w-5 text-agency-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Decisiones basadas en datos</p>
                      <p className="text-sm text-white/80">Análisis predictivo avanzado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
