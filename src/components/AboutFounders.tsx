import React from 'react';
import { Award, Briefcase, Sparkles, Users, Video, ShieldCheck } from 'lucide-react';

export const AboutFounders: React.FC = () => {
  return (
    <section id="fundadores" className="py-24 bg-zinc-950 border-b border-zinc-800/80 relative overflow-hidden">
      {/* Background Big Typography Graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-bebas text-[18vw] text-[#facc15]/[0.02] pointer-events-none select-none tracking-widest whitespace-nowrap">
        SONHO STUDIO
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Manifesto Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#facc15]/30 mb-4 yellow-glow">
            <Award className="w-3.5 h-3.5 text-[#facc15]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#facc15] font-semibold">
              Manifesto & Fundadores
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase mb-6">
            QUEM ESTÁ POR TRÁS <br />
            <span className="text-[#facc15]">DA SONHO STUDIO</span>
          </h2>
          <div className="w-16 h-1 bg-[#facc15] mb-6"></div>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            A Sonho Studio não nasceu de teorias vazias de agências tradicionais. Somos o resultado da união de duas bagagens profissionais complementares, movidas por um único propósito: <strong className="text-white">entregar inovação, estética de vanguarda e resultados financeiros reais</strong> para pequenos e médios negócios.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Denison Limeira */}
          <div className="rounded-3xl bg-[#0a0a0a] border border-zinc-800 hover:border-[#facc15]/60 transition-all p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start yellow-glow">
            <div className="w-full sm:w-48 h-60 rounded-2xl overflow-hidden bg-zinc-900 shrink-0 border border-zinc-800 relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="Denison Limeira"
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono-code text-[#facc15]">
                  Estratégia & IA
                </span>
              </div>
            </div>

            <div className="flex-1">
              <span className="font-mono-code text-xs text-[#facc15] uppercase tracking-widest block mb-1">
                Estratégia · Design · Inteligência Artificial
              </span>
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none mb-3">
                DENISON LIMEIRA
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                Especialista em Criação de Conteúdo com IA, Designer e Instrutor de Treinamento Corporativo. Com mais de 15 anos de vivência em Customer Experience (CX), possui uma base sólida em decifrar o comportamento do consumidor e criar jornadas de alta conversão.
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                Capacitou mais de 500 profissionais e líderes em gigantes do mercado. Autodidata em tecnologia e design desde 2005, é a mente estratégica que concebeu o ecossistema <strong>Se Vira AI</strong>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800/80 mb-3">
                <div>
                  <span className="font-bebas text-2xl text-[#facc15] block leading-none">15+ ANOS</span>
                  <span className="text-[10px] font-mono-code uppercase text-zinc-400">Em Customer Experience</span>
                </div>
                <div>
                  <span className="font-bebas text-2xl text-[#facc15] block leading-none">500+</span>
                  <span className="text-[10px] font-mono-code uppercase text-zinc-400">Líderes Treinados</span>
                </div>
              </div>

              <span className="text-[10px] font-mono-code text-zinc-500 block">
                Bagagem corporativa: Starbucks · Subway · Atento
              </span>
            </div>
          </div>

          {/* Vinicius Cunha */}
          <div className="rounded-3xl bg-[#0a0a0a] border border-zinc-800 hover:border-[#facc15]/60 transition-all p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start yellow-glow">
            <div className="w-full sm:w-48 h-60 rounded-2xl overflow-hidden bg-zinc-900 shrink-0 border border-zinc-800 relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Vinicius Cunha"
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono-code text-[#facc15]">
                  Audiovisual & Direção
                </span>
              </div>
            </div>

            <div className="flex-1">
              <span className="font-mono-code text-xs text-[#facc15] uppercase tracking-widest block mb-1">
                Audiovisual · Produção · Dinamismo
              </span>
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none mb-3">
                VINICIUS CUNHA
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                Cinegrafista, Videomaker e Produtor Audiovisual. Desde 2018 atua na linha de frente da produção de materiais de alto impacto para eventos corporativos, publicidade digital e anúncios em vídeo.
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                Fluente em inglês e com visão estética apurada, acumula experiência em gigantes da tecnologia como Meta (Facebook) na moderação de conteúdo e no atendimento bilíngue de padrão ouro para o Airbnb.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800/80 mb-3">
                <div>
                  <span className="font-bebas text-2xl text-[#facc15] block leading-none">DESDE 2018</span>
                  <span className="text-[10px] font-mono-code uppercase text-zinc-400">No Audiovisual</span>
                </div>
                <div>
                  <span className="font-bebas text-2xl text-[#facc15] block leading-none">2X</span>
                  <span className="text-[10px] font-mono-code uppercase text-zinc-400">Idiomas & Padrão Global</span>
                </div>
              </div>

              <span className="text-[10px] font-mono-code text-zinc-500 block">
                Experiência em tecnologia: Meta (Facebook) · Airbnb
              </span>
            </div>
          </div>

        </div>

        {/* Agency Pillars Checklist */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-l-2 border-[#facc15] pl-4">
            <h4 className="font-bebas text-xl text-white mb-1">INTEGRAÇÃO FULL-SERVICE</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Do copywriting e design à codificação do software e IA, cuidamos de cada detalhe.
            </p>
          </div>
          <div className="border-l-2 border-[#facc15] pl-4">
            <h4 className="font-bebas text-xl text-white mb-1">IA COMO ACELERADORA</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Automações inteligentes que economizam horas e promovem seu negócio 24 horas.
            </p>
          </div>
          <div className="border-l-2 border-[#facc15] pl-4">
            <h4 className="font-bebas text-xl text-white mb-1">PADRÃO CINEMA</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Conteúdo audiovisual envolvente projetado para viralizar e prender a atenção.
            </p>
          </div>
          <div className="border-l-2 border-[#facc15] pl-4">
            <h4 className="font-bebas text-xl text-white mb-1">TRANSPARÊNCIA CRUA</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sem enrolação de agência. Prazos cumpridos, suporte honesto e foco no ROI.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
