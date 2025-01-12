// import React from 'react';
import { Code2, Cpu, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-12 h-12 text-blue-500" />,
      title: "Custom Web Development",
      description:
        "We craft tailored web solutions that align perfectly with your business goals, utilizing cutting-edge technologies and best practices in development.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      title: "AI Integration",
      description:
        "Transform your business with our AI solutions. From chatbots to predictive analytics, we help you leverage the power of artificial intelligence.",
    },

    {
      icon: <Rocket className="w-12 h-12 text-blue-500" />,
      title: "Innovation First",
      description:
        "We stay ahead of the curve by continuously adopting new technologies and methodologies to provide you with future-proof solutions.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-80 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute bottom-60 right-20 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl  animate-float  "></div>
        <div className="absolute bottom-10 left-40 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl  animate-float " />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fade-in">
            About Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-2xl mb-16 animate-fade-in">
            We are a team of passionate developers and AI specialists dedicated
            to transforming businesses through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 z-20 animate-fade-in"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-lg text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-4xl font-bold mb-4 animate-fade-in">
            Our Mission
          </h3>
          <p className="text-gray-400 from-blue-400 via-purple-500 to-pink-500 max-w-3xl mx-auto text-2xl animate-fade-in">
            To empower businesses with cutting-edge web development and AI
            solutions that drive growth, efficiency, and innovation. We're
            committed to delivering excellence through technology while
            maintaining strong partnerships with our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
