import React, { useState } from 'react';
import { X, Send, Sparkles, Check, MessageCircle, ShieldCheck } from 'lucide-react';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BudgetModal: React.FC<BudgetModalProps> = ({ isOpen, onClose, initialService = '' }) => {
  const [name, setName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || 'Landing Page de Alta Conversão');
  const [urgency, setUrgency] = useState('Quero iniciar esta semana');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Ol%C3%A1%20Sonho%20Studio!%20Gostaria%20de%20solicitar%20uma%20proposta:%0A%0A*Nome:*%20${encodeURIComponent(name || 'Cliente')}%0A*Tipo%20de%20Neg%C3%B3cio:*%20${encodeURIComponent(businessType || 'N%C3%A3o%20informado')}%0A*Servi%C3%A7o%20de%20Interesse:*%20${encodeURIComponent(selectedService)}%0A*Prazo%20Desejado:*%20${encodeURIComponent(urgency)}%0A*Observa%C3%A7%C3%B5es:*%20${encodeURIComponent(notes || 'Nenhuma')}%0A%0APodemos%20conversar?`;

    window.open(`https://wa.me/5511911617151?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0a0a0a] border-2 border-[#facc15]/70 p-6 sm:p-8 shadow-2xl yellow-glow-lg overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#facc15]/10 border border-[#facc15]/30 text-[#facc15] font-mono-code text-[10px] uppercase font-bold mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Atendimento Prioritário</span>
          </div>
          <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none">
            SOLICITAR PROPOSTA PERSONALIZADA
          </h3>
          <p className="text-zinc-400 text-xs mt-1">
            Preencha os dados abaixo e você será direcionado para o WhatsApp com a proposta pronta para os fundadores analisarem.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-mono-code text-[11px] uppercase tracking-wider text-zinc-300 mb-1.5 font-semibold">
              Seu Nome ou Nome da Empresa *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Dra. Camila / Felipe Burger"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#facc15]"
            />
          </div>

          <div>
            <label className="block font-mono-code text-[11px] uppercase tracking-wider text-zinc-300 mb-1.5 font-semibold">
              Seu Segmento / Tipo de Negócio *
            </label>
            <input
              type="text"
              required
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              placeholder="Ex: Nutricionista, Advocacia, Restaurante, E-commerce, Clínica..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#facc15]"
            />
          </div>

          <div>
            <label className="block font-mono-code text-[11px] uppercase tracking-wider text-zinc-300 mb-1.5 font-semibold">
              Serviço Principal de Interesse *
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#facc15]"
            >
              <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão (A partir de R$ 497)</option>
              <option value="Site Institucional Corporativo">Site Institucional Corporativo (A partir de R$ 980)</option>
              <option value="Área de Membros / Cursos">Área de Membros & Cursos (A partir de R$ 1.290)</option>
              <option value="Sistema de Automação / Web App">Sistema Personalizado de Automação & App (A partir de R$ 1.890)</option>
              <option value="Chatbot com IA para Atendimento 24/7">Chatbot com IA para Atendimento 24/7 (A partir de R$ 590)</option>
              <option value="Cardápio Digital & Delivery para Restaurante">Cardápio Digital & Delivery Próprio (A partir de R$ 690)</option>
              <option value="Criação e Edição de Vídeos Promocionais">Criação e Edição de Vídeos Promocionais (A partir de R$ 390)</option>
              <option value="Pacote Completo 360°">Pacote Completo de Marketing 360° & IA</option>
            </select>
          </div>

          <div>
            <label className="block font-mono-code text-[11px] uppercase tracking-wider text-zinc-300 mb-1.5 font-semibold">
              Quando você precisa do projeto no ar?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Quero iniciar esta semana',
                'Nos próximos 15 dias',
                'No próximo mês',
                'Estou pesquisando orçamentos',
              ].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setUrgency(opt)}
                  className={`p-2 rounded-xl text-[10px] font-mono-code transition-all text-left ${
                    urgency === opt
                      ? 'bg-[#facc15] text-black font-bold'
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-mono-code text-[11px] uppercase tracking-wider text-zinc-300 mb-1.5">
              Detalhes ou Dúvidas Adicionais (Opcional):
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Descreva brevemente o que você gostaria no projeto..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#facc15]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-black font-mono-code text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 yellow-glow cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black text-[#facc15]" />
            <span>Abrir WhatsApp com a Proposta Pronta</span>
          </button>
        </form>

      </div>
    </div>
  );
};
