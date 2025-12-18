import React from 'react';
import { motion } from 'framer-motion';
import { Member } from '../types';
import { Crown, ShieldCheck, Shield, User } from 'lucide-react';

const members: Member[] = [
  {
    id: '1',
    nickname: 'BR RINO',
    role: 'Líder',
    roleColor: 'text-yellow-500 border-yellow-500',
    avatarUrl: 'https://picsum.photos/200/200?random=1',
  },
  {
    id: '2',
    nickname: 'BR CRISX',
    role: 'Co-líder',
    roleColor: 'text-orange-500 border-orange-500',
    avatarUrl: 'https://picsum.photos/200/200?random=2',
  },
  {
    id: '3',
    nickname: 'BR BANDI2',
    role: 'Moderador',
    roleColor: 'text-blue-500 border-blue-500',
    avatarUrl: 'https://picsum.photos/200/200?random=3',
  },
  {
    id: '4',
    nickname: 'BR TOJI',
    role: '2do Moderador',
    roleColor: 'text-purple-500 border-purple-500',
    avatarUrl: 'https://picsum.photos/200/200?random=4',
  }
];

const RoleIcon = ({ role }: { role: string }) => {
  if (role === 'Líder') return <Crown className="w-5 h-5 text-yellow-500" />;
  if (role === 'Co-líder') return <ShieldCheck className="w-5 h-5 text-orange-500" />;
  return <Shield className="w-5 h-5 text-blue-500" />;
};

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative group bg-gray-900 border border-gray-800 p-1 w-full max-w-sm mx-auto clip-corner-reverse overflow-hidden"
    >
      {/* Holographic BG Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      
      <div className="bg-black/90 relative z-10 p-6 flex flex-col items-center h-full">
        {/* Avatar Container */}
        <div className="relative mb-6">
          <div className={`absolute -inset-1 rounded-full border-2 border-dashed ${member.roleColor.split(' ')[0]} animate-[spin_10s_linear_infinite] opacity-50`}></div>
          <img 
            src={member.avatarUrl} 
            alt={member.nickname} 
            className="w-24 h-24 rounded-full border-2 border-gray-800 object-cover"
          />
          <div className="absolute -bottom-2 -right-2 bg-black border border-gray-700 rounded-full p-1.5">
            <RoleIcon role={member.role} />
          </div>
        </div>

        <h3 className="font-cyber text-2xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
          {member.nickname}
        </h3>
        
        <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 border rounded-full ${member.roleColor} bg-opacity-10 bg-gray-800 mb-6`}>
          {member.role}
        </div>

        {/* Fake Stats HUD */}
        <div className="w-full grid grid-cols-2 gap-2 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
          <div>
            <span className="block text-white font-bold text-lg">4.5</span>
            KD RATIO
          </div>
          <div>
            <span className="block text-white font-bold text-lg">68%</span>
            HEADSHOT
          </div>
        </div>
      </div>
      
      {/* Decorative corner lines */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const Members: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl md:text-6xl font-black text-white mb-4">
            MIEMBROS DE <span className="text-red-600">ELITE</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;