import React from 'react';
import { Button } from '../shared/Button';
import { ArrowRight, Code, Brain, BarChart2 } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';
import vid from '../../assets/vid.mp4';
// import MorphingCircle from './morphingCircleText';


export const Hero = () => {
  const features = [
    { icon: <Brain className="w-6 h-6" />, text: "AI Solutions" },
    { icon: <BarChart2 className="w-6 h-6" />, text: "Digital Marketing" },
    { icon: <Code className="w-6 h-6" />, text: "Web Development" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden glass-effect ">
     
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-slate-900 to-black" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex min-h-screen  items-center justify-center gap-12 py-20 lg:py-0">
          
          {/* <AnimatedSection animation="slide-in" className=" space-y-8 pt-20 lg:pt-0">
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Transform</span> Your
                <br className="hidden sm:block" /> Digital Presence
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl">
                Empowering businesses with innovative solutions in web development, 
                AI integration, and digital marketing strategies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="gradient" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline">View Portfolio</Button>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-in"
                  delay={index * 200}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="p-2 rounded-lg bg-white/5">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection> */}

          {/* 3D Grid */}
          {/* <AnimatedSection animation="fade-in" className="flex-1 w-full max-w-xl">
            <div className="relative aspect-square">
              <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
                {[...Array(9)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-4 backdrop-blur-sm 
                             border border-white/10 hover:scale-105 
                             transition-transform duration-300"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection> */}
          <AnimatedSection animation="fade-in" className=" w-full max-w-xl">
            <div className="absolute p-[0px] right-8 sm:right-16 lg:right-32 top-1/2 transform -translate-y-1/2 -z-10">
              {/* <div className="absolute inset-0 rounded-full bg-blue-400 blur-xl opacity-50 -z-20"></div> */}
                <div className="relative p-[0px] w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden">
                  {/* Outer Glow */}
                  

                  {/* Radial Gradient for Globe Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black opacity-20 z-10"></div>

                  {/* Video */}
                  <video
                    src={vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full p-[-0px] object-cover blur-lg opacity-50"
                  />

                  {/* Overlay for Curvature */}
                  <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/10 via-transparent to-black/50 opacity-50 z-20"></div>

                  {/* Subtle Inner Glow */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-400/50 blur-md"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};