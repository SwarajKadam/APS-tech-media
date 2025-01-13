import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Waves from "../shared/Waves";
import {Link} from 'react-router-dom'
const Hero = () => {
  // @ts-ignore
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
      <div
        // style={{ opacity: waveOpacity }}
        className="absolute inset-0 transition-opacity duration-300"
      >
        <Waves
          backgroundColor="rgba(15, 23, 42, 0.8)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center  px-6">
        <div className="`space-y-8 max-w-2xl w-full text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-7xl font-bold text-white leading-tight">
              Your Vision
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x">
                  {" "}
                  Powered by Tech{" "}
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </span>
              and AI
            </h1>

            <p className="text-xl sm:text-lg lg:text-2xl text-slate-300">
              We deliver handcrafted websites and intelligent AI solutions to
              elevate your business. Unleash the potential of tech-driven
              innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to='/'><button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center">
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button></Link>
              <Link to='/portfolio'><button className="group px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white font-medium hover:bg-slate-800 transition-all hover:scale-105 flex items-center justify-center">
                View Our Work
                <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button></Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes dash {
          0% {
            stroke-dasharray: 0, 1500;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 750, 750;
            stroke-dashoffset: -750;
          }
          100% {
            stroke-dasharray: 0, 1500;
            stroke-dashoffset: -1500;
          }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-dash {
          animation: dash 15s linear infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 200% 200%;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
