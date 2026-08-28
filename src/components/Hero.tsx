import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Bot, Star, Play, ExternalLink } from 'lucide-react';

interface HeroProps {
  onOpenBudgetModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBudgetModal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-black">
      {/* Background Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Copy (Left) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Animated Blinking Welcome Badge / Text */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-yellow-400/10 border border-yellow-400/40 mb-4 shadow-[0_0_18px_rgba(250,204,21,0.25)] max-w-full">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
              </span>
              <span className="font-['Courier_New',monospace] text-[14px] leading-[54.75px] text-center italic font-normal no-underline text-[#fdc000] w-[628.353px] max-w-full h-[74.5186px] inline-flex items-center justify-center animate-pulse drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]">
                Bem vindo ao Sonho Studio. Aqui você transforma seu sonho em realidade!
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.4rem] font-black leading-[0.92] uppercase italic text-white mb-6">
              O FUTURO DA SUA <br />
              <span className="text-yellow-400 drop-shadow-[0_0_35px_rgba(250,204,21,0.3)]">
                MARCA & VENDAS
              </span> <br />
              COMEÇA AQUI.
            </h1>

            {/* Subhead with vertical yellow accent line */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed border-l-2 border-yellow-400 pl-5 max-w-2xl mb-8">
              Estratégia de alto impacto, sites ultra-rápidos, chatbots com Inteligência Artificial para o seu nicho, delivery próprio sem taxas abusivas e vídeos cinematográficos. <strong className="text-white font-semibold">Nascidos no campo de batalha para gerar lucro real.</strong>
            </p>

            {/* Benefit Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-gray-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Landing Pages que convertem cliques em clientes</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Chatbots de IA com a regra do seu negócio</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Delivery próprio livre dos 27% de comissão</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Vídeos cinematográficos para Reels e TikTok</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBudgetModal}
                id="hero-primary-cta-btn"
                className="bg-yellow-400 text-black px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm cursor-pointer shadow-xl shadow-yellow-400/20 active:scale-95 flex items-center justify-center gap-3"
              >
                <span>Falar com Especialista</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <a
                href="#servicos"
                id="hero-secondary-cta-btn"
                className="border border-white/20 px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white/10 text-white transition-colors rounded-sm flex items-center justify-center gap-3"
              >
                <span>Ver Serviços & Preços</span>
              </a>
            </div>

            {/* Social Proof Mini Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Cliente Sonho Studio" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Cliente Sonho Studio" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Cliente Sonho Studio" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Cliente Sonho Studio" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9/5.0</span>
                </div>
                <span className="text-[12px] text-gray-400">
                  Mais de 500 profissionais e marcas aceleradas
                </span>
              </div>
            </div>

          </div>

          {/* Right Visual Bento Box */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white/5 p-6 border border-white/10 rounded-lg space-y-4 shadow-2xl backdrop-blur-md yellow-glow">
              
              {/* Top Header Card */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                  <span className="font-mono text-[11px] text-gray-400 ml-2">sonhostudio.com.br/ecossistema</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-xs text-[10px] font-mono font-bold uppercase bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                  360° LIVE
                </span>
              </div>

              {/* Central Dynamic Showcase */}
              <div className="space-y-3">
                
                {/* Showcase Item 1: Se Vira AI Prova Social */}
                <div className="p-4 rounded-lg bg-black/70 border border-yellow-400/50 hover:border-yellow-400 transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-yellow-400/10 rounded-full border border-yellow-400/30 text-yellow-400">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-xs text-white uppercase tracking-wider font-mono">
                        PROVA SOCIAL DE IA: SE VIRA AI
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300">
                    Nosso ecossistema proprietário de IA (<span className="text-yellow-400 font-mono">seviraai.vercel.app</span>). Tecnologia desenvolvida por nós rodando ao vivo!
                  </p>
                  <a
                    href="https://seviraai.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-yellow-400 text-black px-4 py-2 font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-colors rounded-xs font-mono"
                  >
                    <span>VER PROVA SOCIAL</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Showcase Item 2: Chatbot com IA */}
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Chatbot Inteligente 24/7</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-xs">Ativo</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      "Olá! Qual consulta você gostaria de agendar para esta semana?"
                    </p>
                  </div>
                </div>

                {/* Showcase Item 3: Delivery Sem Taxas */}
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-xs">
                    0%
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Delivery Direto & Pix</span>
                      <span className="text-[10px] font-mono text-yellow-400">+R$ 4.200/mês economizados</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Pedido recebido, frete calculado e impresso direto na cozinha.
                    </p>
                  </div>
                </div>

                {/* Showcase Item 4: Vídeos Promocionais */}
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Audiovisual Padrão Cinema</span>
                      <span className="text-[10px] font-mono text-gray-400">Reels & TikTok</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Ganchos de 3s e legendas animadas sob direção de Vinicius Cunha.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Callout */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-400 font-mono">Garantia total de entrega</span>
                <span className="text-yellow-400 font-bold font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-yellow-400" /> 100% Suporte
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

