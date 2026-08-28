import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', ...Array.from(new Set(faqData.map((f) => f.category)))];

  const filteredFaq = selectedCategory === 'Todas'
    ? faqData
    : faqData.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a] border-b border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#facc15]/30 mb-4 yellow-glow">
            <HelpCircle className="w-3.5 h-3.5 text-[#facc15]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#facc15] font-semibold">
              Tire Suas Dúvidas
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase mb-4">
            PERGUNTAS <span className="text-[#facc15]">FREQUENTES</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Tudo o que você precisa saber sobre nosso processo de trabalho, prazos, suporte e implementação.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#facc15] text-black font-bold shadow-md shadow-[#facc15]/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaq.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-900/90 border-[#facc15]/60 shadow-lg shadow-black/80'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-black/60 border border-zinc-800 flex items-center justify-center text-[11px] font-mono-code text-[#facc15] shrink-0">
                      ?
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-zinc-400">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#facc15]" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/60 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[10px] font-mono-code uppercase tracking-wider text-zinc-500">
                      Categoria: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for Unanswered Question */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bebas text-xl text-white">AINDA TEM ALGUMA DÚVIDA ESPECÍFICA?</h4>
            <p className="text-zinc-400 text-xs">Fale diretamente com nossa equipe no WhatsApp agora mesmo.</p>
          </div>
          <a
            href="https://wa.me/5511911617151?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20sobre%20os%20servi%C3%A7os%20da%20Sonho%20Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-black font-mono-code text-xs font-bold uppercase tracking-wider transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-black text-[#facc15]" />
            <span>Falar com Consultor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
