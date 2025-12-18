import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Twitch } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="font-cyber text-4xl font-bold text-white mb-2 tracking-widest">
          BLACK RONINS
        </h2>
        <p className="text-red-600 font-cyber uppercase tracking-[0.5em] text-sm mb-8">
          Dominando el campo de batalla
        </p>
        
        <div className="flex gap-6 mb-12">
          {[Facebook, Instagram, Youtube, Twitch].map((Icon, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300 border border-gray-800 hover:border-red-500"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />
        
        <div className="text-center mb-12">
          <p className="text-gray-600 text-xs mb-2">
            © {new Date().getFullYear()} BLACK RONINS CLAN. Todos los derechos reservados.
          </p>
          <p className="text-gray-700 text-[10px] uppercase tracking-[0.2em]">
            Diseñado para la élite de Free Fire.
          </p>
        </div>

        {/* Garena Logo Animation at the very bottom */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="text-[10px] font-cyber text-gray-600 mb-4 tracking-[0.5em] uppercase">
            Official Partner Content
          </div>
          <div className="relative group">
            {/* Glow Effect Background */}
            <div className="absolute -inset-4 bg-red-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Garena_logo.svg/1200px-Garena_logo.svg.png" 
              alt="Garena Logo" 
              className="h-12 md:h-16 w-auto grayscale brightness-150 contrast-125 hover:grayscale-0 transition-all duration-500 relative z-10"
            />
            
            {/* Animated Line under logo */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] bg-red-600 mt-2 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;