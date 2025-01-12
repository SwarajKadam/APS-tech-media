import { GlareCard } from "./glare-card";
import React from "react";

export function GlareCardDemo({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <GlareCard className="flex flex-col items-center justify-center">
      <div
        className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-lg   h-full 
                                     transition-all duration-500 hover:border-gray-700 hover:-translate-y-2"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-blue-500/10 rounded-3xl text-blue-400 flex items-center justify-center h-20 w-20">
              {icon}
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-3 flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-400 mb-4 text-center text-lg">
            {description}
          </p>
        </div>
      </div>
    </GlareCard>
  );
}
