import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Sparkles, Zap, ShieldCheck, ArrowUpRight, CheckCircle2, Globe } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenBudgetModal: (serviceTitle?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBudgetModal }) => {
  const seViraAi = portfolioData.find((p) => p.isSeViraAI) || portfolioData[0];
  const otherProjects = portfolioData.filter((p) => !p.isSeViraAI);

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-zinc-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#facc15]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-[#facc15]/30 mb-3">
              <Zap className="w-3.5 h-3.5 text-[#facc15]" />
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#facc15]">
                Portfólio & Prova Social
              </span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase">
              PROJETOS REAIS & <br />
              <span className="text-[#facc15]">EXPERTISE TÉCNICA EM IA</span>
            </h2>
            <div className="w-16 h-1 bg-[#facc15] mt-4"></div>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md">
            Não vendemos promessas teóricas. Construímos plataformas robustas, automações e ecossistemas digitais que rodam em produção com milhões de requisições.
          </p>
        </div>

        {/* FEATURED SPOTLIGHT: SE VIRA AI (https://seviraai.vercel.app/) */}
        <div className="mb-14 rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border-2 border-[#facc15]/70 p-6 sm:p-10 shadow-2xl relative overflow-hidden yellow-glow-lg">
          
          {/* Top Banner Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#facc15] text-black font-mono-code text-xs font-black uppercase tracking-wider shadow-lg shadow-[#facc15]/30">
              <Sparkles className="w-4 h-4" />
              <span>DESTAQUE MÁXIMO · PROVA SOCIAL DE IA</span>
            </div>
            <span className="font-mono-code text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Site No Ar & Validado
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="font-bebas text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-3">
                  SE VIRA AI — <span className="text-[#facc15]">ECOSSISTEMA & PLATAFORMA</span>
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  {seViraAi.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {seViraAi.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-black/60 border border-zinc-800">
                      <span className="font-bebas text-2xl text-[#facc15] block leading-none mb-1">
                        {m.value}
                      </span>
                      <span className="text-[10px] font-mono-code uppercase text-zinc-400 block leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {seViraAi.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-xs font-mono-code text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://seviraai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-black font-mono-code text-xs font-bold uppercase tracking-wider transition-all duration-200 yellow-glow"
                >
                  <Globe className="w-4 h-4" />
                  <span>Acessar Se Vira AI Ao Vivo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenBudgetModal('Ecossistema Similar ao Se Vira AI')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono-code text-xs uppercase tracking-wider transition-all hover:text-white"
                >
                  <span>Quero um Projeto com Essa Tecnologia</span>
                </button>
              </div>
            </div>

            {/* Right Mockup Preview Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-black border border-zinc-700 p-2 shadow-2xl relative overflow-hidden group">
                
                {/* Browser bar */}
                <div className="bg-zinc-900 px-4 py-2.5 rounded-t-xl flex items-center justify-between border-b border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-[11px] font-mono-code text-zinc-400 truncate max-w-[200px]">
                    https://seviraai.vercel.app/
                  </span>
                  <a
                    href="https://seviraai.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#facc15] hover:text-white text-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Preview Graphic / Image with NanoBanana aesthetic overlay */}
                <div className="relative h-64 sm:h-72 rounded-b-xl overflow-hidden bg-zinc-950">
                  <img
                    src={seViraAi.image}
                    alt="Se Vira AI Platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-5">
                    <span className="font-bebas text-2xl text-white tracking-wide">
                      MÉTODO & PLATAFORMA DE AUTONOMIA EM IA
                    </span>
                    <span className="text-xs text-[#facc15] font-mono-code">
                      Desenvolvido e mantido por Sonho Studio
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Additional Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#facc15]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:shadow-black/80"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono-code text-[#facc15] border border-[#facc15]/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="font-bebas text-2xl text-white tracking-wide group-hover:text-[#facc15] transition-colors leading-tight mb-2">
                    {project.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                    {project.subtitle}
                  </p>

                  {/* Highlights Metric */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-black/50 border border-zinc-800/80 mb-4">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400 text-[11px]">{m.label}:</span>
                        <span className="font-mono-code font-bold text-[#facc15]">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded bg-zinc-800 text-[9px] font-mono-code text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenBudgetModal(`Projeto similar a ${project.title}`)}
                  className="w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-[#facc15] text-zinc-200 hover:text-black font-mono-code text-xs uppercase font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Orçar Projeto Similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
