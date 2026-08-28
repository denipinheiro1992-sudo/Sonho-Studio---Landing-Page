import React from 'react';
import { Award, CheckCircle, Shield, TrendingUp, Users } from 'lucide-react';

export const AuthorityTicker: React.FC = () => {
  const clients = [
    { name: 'Brás na Mão', type: 'Moda Atacado & App' },
    { name: 'Aliraju Baby', type: 'Moda Infantil' },
    { name: 'Brookleen Ótica', type: 'Varejo & Saúde Visual' },
    { name: 'Santo Burger', type: 'Gastronomia & Delivery' },
    { name: 'LexJuris', type: 'Escritório Jurídico' },
    { name: 'Clínica Alvarenga', type: 'Saúde & Nutrição' },
  ];

  const badges = [
    '500+ Líderes e Profissionais Treinados',
    'Experiência em Gigantes: Starbucks · Subway · Meta · Airbnb',
    'Pioneiros no Ecossistema Se Vira AI',
    '15+ Anos de Excelência em Customer Experience',
    '99.4% de Satisfação e Retenção',
  ];

  return (
    <section className="bg-black border-y border-white/10 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Label */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-400">
              Marcas e Líderes que Confiam na Sonho Studio
            </span>
          </div>
          <span className="font-mono text-xs text-yellow-400 font-bold uppercase tracking-wider">
            Resultados Reais no Campo de Batalha ⚡
          </span>
        </div>

        {/* Client Logos / Names Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="p-4 rounded-sm bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-all flex flex-col items-center justify-center text-center group"
            >
              <span className="font-bebas text-xl sm:text-2xl text-gray-200 group-hover:text-yellow-400 transition-colors tracking-wide">
                {client.name}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 group-hover:text-gray-400 mt-1">
                {client.type}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Highlight Badges */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-gray-400 hover:border-yellow-400/30 transition-colors"
            >
              <CheckCircle className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

