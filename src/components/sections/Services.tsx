// import { useState } from "react";
import {
  Code2,
  Database,
  Bot
} from "lucide-react";
import { GlareCardDemo } from "../shared/GlareCard";

const Services = () => {
  // const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Development",
      description:
        "We specialize in web development, creating custom web applications using modern technologies. Our services include responsive design for optimal viewing on any device, progressive web apps that offer an app-like experience, performance optimization to ensure fast load times, and SEO-friendly architecture to enhance visibility in search engines.",

      features: [],
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Solutions",
      description:
        "We offer AI solutions designed to enable intelligent automation and decision-making systems. Our expertise includes developing machine learning models, implementing natural language processing capabilities, leveraging computer vision technologies, and creating predictive analytics solutions to drive data-driven insights and innovation.",

      features: [],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Systems",
      description:
        "We provide backend system solutions to build scalable and secure server infrastructures tailored to your business needs. Our services include API development for seamless connectivity, database design for efficient data management, cloud integration to enhance flexibility, and microservices architecture for modular and robust applications.",

      features: [],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl " />
      </div>

      <div className="relative max-w-9xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fade-in">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-2xl animate-fade-in">
            Comprehensive solutions tailored to transform your digital presence
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-20 animate-fade-in">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              // onMouseEnter={() => setActiveService(index)}
              // onMouseLeave={() => setActiveService(null)}
            >
              <GlareCardDemo
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
