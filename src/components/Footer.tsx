import React from 'react';
import { ArrowUp, Heart, Zap, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-800/80 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Logo & Manifesto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                <img
                  src="https://i.ibb.co/ffp4qg4/Gemini-Generated-Image-removebg-preview.png"
                  alt="Sonho Studio Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(250,204,21,0.4)]"
                />
              </div>
              <span className="font-bebas text-2xl text-white tracking-wider">
                SONHO <span className="text-[#facc15]">STUDIO</span>
              </span>
            </div>
            <p className="font-mono-code text-[11px] text-zinc-500 max-w-sm">
              Ecossistema de Marketing 360°, Inteligência Artificial, Engenharia Web e Produção Audiovisual. Campo de batalha desde o início.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 font-mono-code text-[11px] uppercase tracking-wider">
            <a href="#servicos" className="hover:text-[#facc15] transition-colors">Serviços</a>
            <a href="#chatbots" className="hover:text-[#facc15] transition-colors">Chatbots IA</a>
            <a href="#portfolio" className="hover:text-[#facc15] transition-colors">Portfólio</a>
            <a href="https://seviraai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#facc15] hover:underline">
              Se Vira AI ↗
            </a>
            <a href="#calculadora" className="hover:text-[#facc15] transition-colors">Calculadora</a>
            <a href="#depoimentos" className="hover:text-[#facc15] transition-colors">Depoimentos</a>
            <a href="#fundadores" className="hover:text-[#facc15] transition-colors">Fundadores</a>
            <a href="#faq" className="hover:text-[#facc15] transition-colors">FAQ</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#facc15] hover:border-[#facc15] transition-all cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-zinc-500 font-mono-code text-[10px]">
          <div>
            © {new Date().getFullYear()} Sonho Studio · CNPJ & Operação Nacional · Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-3">
            <span>Fundada por Denison Limeira & Vinicius Cunha</span>
            <span>·</span>
            <span className="text-[#facc15]">Alta Conversão & IA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
