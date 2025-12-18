import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg backdrop-blur-sm hover:border-red-500/50 transition-colors group"
  >
    <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
      <Icon className="text-red-500 w-6 h-6 group-hover:text-red-400" />
    </div>
    <h3 className="font-cyber text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-cyber text-4xl md:text-5xl font-bold text-white mb-6">
            SOBRE EL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">CLAN</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            <span className="text-red-500 font-bold">BLACK RONINS</span> no es solo un equipo, es una hermandad forjada en el fuego de la batalla. 
            Nacimos para dominar el campo de Free Fire con precisión táctica y coordinación absoluta.
            Buscamos la excelencia competitiva sin olvidar nuestros valores de lealtad y respeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <FeatureCard 
            icon={Target} 
            title="Competitivo" 
            desc="Participamos en los torneos más exigentes de la región, siempre buscando el Top 1 con estrategias avanzadas."
            delay={0.1}
          />
          <FeatureCard 
            icon={Zap} 
            title="Disciplina" 
            desc="Entrenamientos semanales, análisis de partidas y mejora continua son los pilares de nuestro crecimiento."
            delay={0.2}
          />
          <FeatureCard 
            icon={Shield} 
            title="Hermandad" 
            desc="Más que jugadores, somos una familia. Nos apoyamos dentro y fuera del juego para alcanzar la grandeza."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default About;