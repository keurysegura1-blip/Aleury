import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swords, Crosshair } from 'lucide-react';
import CyberButton from './CyberButton';
import JoinModal from './JoinModal';

const Hero: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Swords className="w-16 h-16 text-red-500 animate-pulse" />
          </div>
          
          <h1 className="font-cyber text-5xl md:text-8xl font-black tracking-tighter text-white mb-2 text-glow">
            BLACK <span className="text-red-600">RONINS</span>
          </h1>
          
          <p className="font-cyber text-lg md:text-2xl text-gray-400 tracking-[0.2em] mb-8 uppercase border-y border-gray-800 py-2 inline-block">
            Honor • Estrategia • Victoria
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
            <CyberButton variant="primary" onClick={() => setIsJoinModalOpen(true)}>
              <Crosshair className="w-4 h-4" />
              Unirse al Clan
            </CyberButton>
            <CyberButton variant="secondary">
              Ver Estadísticas
            </CyberButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-red-500 to-transparent"></div>
      </motion.div>

      {/* Join Modal Component */}
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </section>
  );
};

export default Hero;