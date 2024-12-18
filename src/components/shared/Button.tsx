import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'outline';
  onClick?: () => void;
  className?: string;
}

export const Button = ({ 
  children, 
  variant = 'gradient', 
  onClick,
  className = '' 
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-full transition-all duration-300 flex items-center";
  const variants = {
    gradient: "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-cyan-500 text-white",
    outline: "border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};