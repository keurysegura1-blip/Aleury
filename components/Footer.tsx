import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Twitch } from 'lucide-react';

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
        
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} BLACK RONINS CLAN. Todos los derechos reservados.
          <br />
          Diseñado para la élite de Free Fire.
        </p>
      </div>
    </footer>
  );
};

export default Footer;