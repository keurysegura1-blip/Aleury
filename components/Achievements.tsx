import React from 'react';
import { Trophy, Star, Medal } from 'lucide-react';
import { Tournament } from '../types';

const tournaments: Tournament[] = [
  { id: '1', name: 'Copa Latinoamericana FF', date: '2023', position: '1er Lugar', prize: '$500' },
  { id: '2', name: 'Liga de Leyendas Sur', date: '2023', position: '1er Lugar', prize: '$200' },
  { id: '3', name: 'Torneo Nocturno Elite', date: '2024', position: '2do Lugar' },
  { id: '4', name: 'Battle Royale Masters', date: '2024', position: '1er Lugar', prize: 'Diamantes' },
];

const AchievementRow = ({ tournament }: { tournament: Tournament }) => (
  <div className="flex items-center justify-between bg-black/50 border border-gray-800 hover:border-red-600 p-4 transition-all duration-300 group">
    <div className="flex items-center gap-4">
      <div className="bg-yellow-500/10 p-2 rounded-full border border-yellow-500/20 group-hover:border-yellow-500 transition-colors">
        {tournament.position.includes('1') ? (
          <Trophy className="w-6 h-6 text-yellow-500" />
        ) : (
          <Medal className="w-6 h-6 text-gray-400" />
        )}
      </div>
      <div>
        <h4 className="font-cyber font-bold text-white text-lg">{tournament.name}</h4>
        <p className="text-gray-500 text-sm">{tournament.date}</p>
      </div>
    </div>
    <div className="text-right">
      <span className={`font-cyber font-bold text-lg ${tournament.position.includes('1') ? 'text-yellow-500' : 'text-gray-300'}`}>
        {tournament.position}
      </span>
      {tournament.prize && (
        <p className="text-xs text-green-400 font-mono tracking-wider mt-1">REWARD: {tournament.prize}</p>
      )}
    </div>
  </div>
);

const Achievements: React.FC = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Visual/Text */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 border-t-4 border-l-4 border-red-600 opacity-20" />
          <h2 className="font-cyber text-4xl md:text-6xl font-black text-white mb-6 leading-none">
            HALL DE <br />
            <span className="text-red-600">VICTORIAS</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Nuestro legado se construye con cada victoria. Dominamos el servidor, partida tras partida.
          </p>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-yellow-500 font-bold font-cyber bg-yellow-500/10 px-4 py-2 rounded border border-yellow-500/20">
               <Star className="w-5 h-5 fill-current" />
               Nivel Competitivo: ALTO
             </div>
          </div>
        </div>

        {/* Right Side: List */}
        <div className="space-y-4">
          {tournaments.map((t) => (
            <AchievementRow key={t.id} tournament={t} />
          ))}
          <div className="text-center pt-4">
             <button className="text-gray-500 hover:text-white text-sm uppercase tracking-widest transition-colors">
               Ver historial completo &rarr;
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;