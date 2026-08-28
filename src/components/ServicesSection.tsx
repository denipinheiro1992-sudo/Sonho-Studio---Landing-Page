import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  Layout, 
  Globe, 
  LockKeyhole, 
  Cpu, 
  Bot, 
  UtensilsCrossed, 
  Video, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Layers 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBudgetModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenBudgetModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ia' | 'automation' | 'video'>('all');

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : servicesData.filter((s) => s.category === activeFilter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'LockKeyhole':
        return <LockKeyhole className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-black relative overflow-hidden border-b border-white/10">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-yellow-400/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-yellow-400 font-bold">
                Soluções & Preços Sugeridos
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase italic leading-none text-white tracking-tight">
              ECOSSISTEMA COMPLETO DE <br />
              <span className="text-yellow-400">ALTA CONVERSÃO</span>
            </h2>
            <div className="w-16 h-0.5 bg-yellow-400 mt-4"></div>
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-md border-l-2 border-yellow-400/50 pl-4">
            Da concepção visual à engenharia de software e inteligência artificial: entregamos produtos digitais prontos para gerar caixa no mundo real.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {[
            { id: 'all', label: 'Todos os Serviços (07)' },
            { id: 'web', label: 'Web & Landing Pages' },
            { id: 'ia', label: 'Chatbots com IA' },
            { id: 'automation', label: 'Sistemas & Automações' },
            { id: 'video', label: 'Audiovisual & Vídeos' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-yellow-400 text-black font-bold shadow-md shadow-yellow-400/20'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-yellow-400/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden shadow-xl"
            >
              <div>
                {/* Top Row: Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    {service.badge && (
                      <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono font-bold uppercase bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                        {service.badge}
                      </span>
                    )}
                    <span className="font-bebas text-2xl text-gray-600 group-hover:text-yellow-400 transition-colors">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide leading-tight mb-2 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Price Block */}
                <div className="p-3.5 rounded-sm bg-black/60 border border-white/10 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 block mb-1">
                    Preço Sugerido a Partir de:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bebas text-3xl sm:text-4xl text-yellow-400 tracking-wide">
                      {service.suggestedPrice}
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-mono block mt-0.5">
                    {service.priceNote}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-2 pt-2 border-t border-white/10 font-mono">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{service.deliveryTime}</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                    O que está incluso:
                  </span>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal for pills */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-1.5">
                    Ideal para:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.idealFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-xs bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => onOpenBudgetModal(service.title)}
                  className="w-full py-3 px-4 rounded-sm bg-yellow-400 hover:bg-white text-black font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-md shadow-yellow-400/20"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <a
                  href={`https://wa.me/5511911617151?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}%20(Pre%C3%A7o%20sugerido%20${encodeURIComponent(service.suggestedPrice)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-sm bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-mono text-[11px] text-center border border-white/5 hover:border-yellow-400/30 transition-colors"
                >
                  Tirar Dúvidas Rápidas no WhatsApp
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Scope */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-white/5 border border-yellow-400/30 flex flex-col md:flex-row items-center justify-between gap-6 yellow-glow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-yellow-400/10 border border-yellow-400/40 flex items-center justify-center text-yellow-400 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bebas text-2xl text-white tracking-wide">
                PRECISA DE UM PACOTE OU PROJETO PERSONALIZADO?
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Combinamos Landing Pages, Chatbots com IA, Delivery e Vídeos com descontos progressivos especiais.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBudgetModal('Pacote Personalizado 360°')}
            className="shrink-0 px-6 py-3.5 rounded-sm bg-yellow-400 hover:bg-white text-black font-mono text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-yellow-400/20"
          >
            Falar com Especialista
          </button>
        </div>

      </div>
    </section>
  );
};

