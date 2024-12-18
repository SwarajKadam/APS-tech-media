
import { BarChart2, Code, Brain } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';

const services = [
  {
    icon: <BarChart2 className="w-12 h-12 text-cyan-400" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to boost your online presence and drive growth."
  },
  {
    icon: <Code className="w-12 h-12 text-purple-500" />,
    title: "Web Development",
    description: "Custom, responsive websites built with cutting-edge technologies."
  },
  {
    icon: <Brain className="w-12 h-12 text-cyan-400" />,
    title: "AI Solutions",
    description: "Intelligent automation and data-driven decision making tools."
  }
];

export const Services = () => (
  <section className="py-20 px-6 bg-black/50" id="services">
    <div className="container mx-auto">
      <AnimatedSection animation="fade-in">
        <h2 className="text-4xl font-bold text-center mb-16 neon-text animate-neon-pulse">
          Our Services
        </h2>
      </AnimatedSection>
      
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedSection
            key={index}
            animation="scale-in"
            delay={index * 200}
          >
            <div className="p-8 rounded-2xl glass-effect hover:scale-105 transition-transform duration-300 animate-border-glow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);