import React from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { Star, Quote, CheckCircle2, MessageSquare, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#0a0a0a] border-b border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#facc15]/30 mb-4 yellow-glow">
            <Quote className="w-3.5 h-3.5 text-[#facc15]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#facc15] font-semibold">
              Histórias Reais de Sucesso
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase mb-4">
            O QUE NOSSOS CLIENTES DIZEM <br />
            <span className="text-[#facc15]">SOBRE A SONHO STUDIO</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Profissionais liberais, restaurantes, consultórios e e-commerces que escalaram suas operações com as nossas soluções.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#facc15]/50 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/80"
            >
              <div>
                {/* Top: Stars & Metric Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#facc15]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#facc15]" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {test.metric}
                  </span>
                </div>

                {/* Highlight Quote */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{test.comment}"
                </p>

                {/* Service Tag */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-zinc-500 block mb-1">
                    Solução contratada:
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/60 border border-zinc-800 text-[11px] font-mono-code text-[#facc15]">
                    {test.serviceUsed}
                  </span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover ring-1 ring-[#facc15]/30"
                />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-semibold text-xs sm:text-sm text-white truncate">
                      {test.name}
                    </h4>
                    {test.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#facc15] shrink-0" title="Cliente Verificado" />
                    )}
                  </div>
                  <span className="text-[11px] text-zinc-400 block truncate">
                    {test.role} · {test.company}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono-code block">
                    {test.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
