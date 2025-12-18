import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import CyberButton from './CyberButton';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    gameId: '',
    email: '',
    phone: '',
    reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Configurar número y mensaje
    const targetNumber = '18094312981'; // Código de área 809 (Rep. Dom / USA convention)
    const message = `*SOLICITUD DE INGRESO - BLACK RONINS* 🥷\n\n` +
      `🆔 *ID:* ${formData.gameId}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Tel:* ${formData.phone}\n` +
      `📝 *Motivo:* ${formData.reason}`;

    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');

    // Mostrar estado de éxito
    setTimeout(() => {
      setFormState('success');
      setFormData({ gameId: '', email: '', phone: '', reason: '' });
    }, 1000);
  };

  const resetForm = () => {
    setFormState('idle');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Contenedor del Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-gray-900 border border-gray-800 shadow-[0_0_30px_rgba(220,38,38,0.2)] overflow-hidden clip-corner-reverse"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Línea superior decorativa */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-purple-600 to-red-600" />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              {formState === 'success' ? (
                <div className="text-center py-10">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="font-cyber text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h3>
                  <p className="text-gray-400 mb-8">Te hemos redirigido a WhatsApp para finalizar tu solicitud. Un oficial te responderá pronto.</p>
                  <CyberButton onClick={resetForm} className="w-full">Entendido</CyberButton>
                </div>
              ) : (
                <>
                  <h2 className="font-cyber text-2xl font-bold text-white mb-1">
                    RECLUTAMIENTO <span className="text-red-600">ACTIVO</span>
                  </h2>
                  <p className="text-gray-400 text-sm mb-6">Completa el formulario para enviar tu solicitud vía WhatsApp.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-cyber text-gray-500 uppercase tracking-widest mb-2">ID de Free Fire</label>
                      <input 
                        required
                        name="gameId"
                        value={formData.gameId}
                        onChange={handleChange}
                        type="text" 
                        placeholder="Ej: 1234567890"
                        className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 focus:border-red-600 focus:outline-none transition-colors placeholder-gray-700 font-mono"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-cyber text-gray-500 uppercase tracking-widest mb-2">Correo</label>
                        <input 
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email" 
                          placeholder="tucorreo@email.com"
                          className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 focus:border-red-600 focus:outline-none transition-colors placeholder-gray-700"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-cyber text-gray-500 uppercase tracking-widest mb-2">WhatsApp / Cel</label>
                        <input 
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel" 
                          placeholder="+1 809..."
                          className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 focus:border-red-600 focus:outline-none transition-colors placeholder-gray-700 font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-cyber text-gray-500 uppercase tracking-widest mb-2">¿Por qué quieres unirte?</label>
                      <textarea 
                        required
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Quiero competir en torneos, mejorar mi nivel..."
                        className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 focus:border-red-600 focus:outline-none transition-colors placeholder-gray-700 resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <CyberButton className="w-full flex justify-center">
                        {formState === 'submitting' ? 'Abriendo WhatsApp...' : 'Enviar a WhatsApp'}
                      </CyberButton>
                    </div>
                  </form>
                </>
              )}
            </div>
            
            {/* Esquina decorativa */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600 opacity-50" />
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-600/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default JoinModal;