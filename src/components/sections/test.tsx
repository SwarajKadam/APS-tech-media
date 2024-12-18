import React, { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState<
    { x: number; y: number; targetX: number; targetY: number; size: number; speedX: number; speedY: number }[]
  >([]);

  useEffect(() => {
    const textShape = [
      // Coordinates for particles to form the text "AI"
      { x: window.innerWidth / 2 - 100, y: window.innerHeight / 2 - 50 },
      { x: window.innerWidth / 2 - 90, y: window.innerHeight / 2 - 30 },
      { x: window.innerWidth / 2 - 80, y: window.innerHeight / 2 - 10 },
      { x: window.innerWidth / 2 - 70, y: window.innerHeight / 2 - 30 },
      { x: window.innerWidth / 2 - 60, y: window.innerHeight / 2 - 50 },
      { x: window.innerWidth / 2 - 50, y: window.innerHeight / 2 - 30 },
      { x: window.innerWidth / 2 - 40, y: window.innerHeight / 2 - 10 },
      { x: window.innerWidth / 2, y: window.innerHeight / 2 - 50 },
      { x: window.innerWidth / 2 + 40, y: window.innerHeight / 2 - 10 },
      { x: window.innerWidth / 2 + 50, y: window.innerHeight / 2 - 30 },
    ];

    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: textShape[i % textShape.length].x,
      targetY: textShape[i % textShape.length].y,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    }));
    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          const dx = particle.targetX - particle.x;
          const dy = particle.targetY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const speed = 0.05; // Smooth animation speed

          return {
            ...particle,
            x: particle.x + dx * speed,
            y: particle.y + dy * speed,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 16); // ~60 FPS
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setParticles((prevParticles) =>
      prevParticles.map((particle) => {
        const dx = particle.x - clientX;
        const dy = particle.y - clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          return {
            ...particle,
            x: particle.x + dx * 0.1,
            y: particle.y + dy * 0.1,
          };
        }
        return particle;
      })
    );
  };

  return (
    <div
      className="relative w-full h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
          }}
        ></div>
      ))}

      {/* Centralized Tagline */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          <br /> 
        </h1>
      </div>
    </div>
  );
};

export default ParticleBackground;
