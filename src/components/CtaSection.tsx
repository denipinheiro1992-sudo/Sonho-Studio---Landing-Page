import React from 'react';
import { ArrowRight, MessageCircle, Mail, Phone, ShieldCheck, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface CtaSectionProps {
  onOpenBudgetModal: (serviceTitle?: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBudgetModal }) => {
  return (
    <section id="cta" className="py-28 bg-[#0a0a0a] relative overflow-hidden text-center">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(250,204,21,0.12)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#facc15]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-[#facc15]/40 mb-6 yellow-glow">
          <Zap className="w-4 h-4 text-[#facc15]" />
          <span className="font-mono-code text-xs uppercase tracking-widest text-[#facc15] font-bold">
            Vagas Limitadas para Novos Projetos Este Mês
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.92] uppercase mb-6">
          TRANSFORME SUA <br />
          <span className="text-[#facc15] drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]">
            PRESENÇA DIGITAL HOJE
          </span>
        </h2>

        {/* Subhead */}
        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Chega de métodos ultrapassados, sites lentos e perda diária de leads no WhatsApp. Use a inteligência artificial, design de alta conversão e audiovisual cinematográfico para multiplicar suas vendas.
        </p>

        {/* Main Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://wa.me/5511911617151?text=Ol%C3%A1%2C%20quero%20transformar%20a%20presen%C3%A7a%20digital%20da%20minha%20empresa%20com%20a%20Sonho%20Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-[#facc15] hover:bg-[#eab308] text-black font-mono-code text-sm font-bold uppercase tracking-wider transition-all duration-200 yellow-glow hover:scale-105 active:scale-95 shadow-xl shadow-[#facc15]/25"
          >
            <MessageCircle className="w-5 h-5 fill-black text-[#facc15]" />
            <span>Falar Agora no WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBudgetModal('Consultoria Geral')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-[#facc15] text-white font-mono-code text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#facc15]" />
            <span>Solicitar Orçamento Personalizado</span>
          </button>
        </div>

        {/* Direct Contacts Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono-code pb-10 border-b border-zinc-800">
          <a
            href="https://wa.me/5511911617151"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#facc15] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#facc15]" />
            <span>+55 (11) 91161-7151</span>
          </a>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <a
            href="mailto:adm.studiosonho@gmail.com"
            className="flex items-center gap-2 hover:text-[#facc15] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#facc15]" />
            <span>adm.studiosonho@gmail.com</span>
          </a>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <a
            href="https://seviraai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#facc15] transition-colors"
          >
            <Zap className="w-4 h-4 text-[#facc15]" />
            <span>seviraai.vercel.app</span>
          </a>
        </div>

        {/* Trust Badges Footer */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garantia de 30 dias de suporte</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Pagamento facilitado em até 12x</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Contrato e nota fiscal formal</span>
          </div>
        </div>

      </div>
    </section>
  );
};
