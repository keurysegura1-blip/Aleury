import React from 'react';
import { motion } from 'framer-motion';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const CyberButton: React.FC<CyberButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "relative px-8 py-3 font-cyber font-bold uppercase tracking-wider text-sm overflow-hidden group transition-all duration-300 clip-corner";
  
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 border-l-4 border-red-400",
    secondary: "bg-transparent border border-red-600 text-red-500 hover:bg-red-600/10 hover:text-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Glitch Effect Element */}
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12 origin-bottom-left z-0" />
    </motion.button>
  );
};

export default CyberButton;