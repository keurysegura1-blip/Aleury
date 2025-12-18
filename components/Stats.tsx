import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ value, label, suffix = "", color = "text-white" }: { value: number, label: string, suffix?: string, color?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = 20;
      const step = end / (duration / incrementTime);

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 bg-gray-900/30 border-y border-gray-800 relative group overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className={`font-cyber text-5xl md:text-6xl font-black ${color} mb-2 relative z-10`}>
        {displayValue}{suffix}
      </div>
      <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold relative z-10">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-black relative border-y border-gray-900">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-cyber text-3xl font-bold mb-12 text-left border-l-4 border-red-600 pl-4"
        >
          ESTADÍSTICAS DEL CLAN
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatItem value={1240} label="Partidas Jugadas" color="text-red-500" />
          <StatItem value={856} label="Victorias" color="text-white" />
          <StatItem value={42} label="Torneos Ganados" color="text-yellow-500" />
          <StatItem value={5} label="Nivel del Clan" suffix="" color="text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default Stats;