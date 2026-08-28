import React, { useState } from 'react';
import { nicheChatbots } from '../data/chatbotsData';
import { NicheChatbotDemo } from '../types';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Apple, 
  Scale, 
  Smile, 
  Utensils, 
  CheckCircle, 
  RotateCcw, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface ChatbotPlaygroundProps {
  onOpenBudgetModal: (serviceTitle?: string) => void;
}

export const ChatbotPlayground: React.FC<ChatbotPlaygroundProps> = ({ onOpenBudgetModal }) => {
  const [selectedNiche, setSelectedNiche] = useState<NicheChatbotDemo>(nicheChatbots[0]);
  const [messages, setMessages] = useState<Array<{ role: 'bot' | 'user'; text: string }>>([
    { role: 'bot', text: nicheChatbots[0].welcomeMessage },
  ]);
  const [customInput, setCustomInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectNiche = (niche: NicheChatbotDemo) => {
    setSelectedNiche(niche);
    setMessages([{ role: 'bot', text: niche.welcomeMessage }]);
    setCustomInput('');
  };

  const handleAskQuestion = (question: string) => {
    if (isTyping) return;
    
    // Add user message
    const newMessages = [...messages, { role: 'user' as const, text: question }];
    setMessages(newMessages);
    setIsTyping(true);

    // Look up answer or generate intelligent contextual answer
    const response = selectedNiche.sampleResponses[question] || 
      `Entendido perfeitamente! Como assistente inteligente treinado para ${selectedNiche.niche}, posso processar esse pedido, tirar dúvidas de valores e agendar com você agora mesmo. Deseja falar com a equipe no WhatsApp?`;

    setTimeout(() => {
      setMessages([...newMessages, { role: 'bot' as const, text: response }]);
      setIsTyping(false);
    }, 600);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim() || isTyping) return;
    const text = customInput.trim();
    setCustomInput('');
    handleAskQuestion(text);
  };

  const getNicheIcon = (iconName: string) => {
    switch (iconName) {
      case 'Apple':
        return <Apple className="w-4 h-4" />;
      case 'Scale':
        return <Scale className="w-4 h-4" />;
      case 'Smile':
        return <Smile className="w-4 h-4" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4" />;
      default:
        return <Bot className="w-4 h-4" />;
    }
  };

  return (
    <section id="chatbots" className="py-24 bg-zinc-950 border-b border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#facc15]/30 mb-4 yellow-glow">
            <Bot className="w-3.5 h-3.5 text-[#facc15]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#facc15] font-semibold">
              Simulador Interativo em Tempo Real
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase mb-4">
            EXPERIMENTE O CHATBOT COM IA <br />
            <span className="text-[#facc15]">PARA O SEU NICHO</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Selecione uma das categorias abaixo e teste como um atendente com IA treinado pela Sonho Studio responde seus clientes instantaneamente 24 horas por dia.
          </p>
        </div>

        {/* Niche Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {nicheChatbots.map((niche) => (
            <button
              key={niche.id}
              onClick={() => handleSelectNiche(niche)}
              className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-all text-left cursor-pointer ${
                selectedNiche.id === niche.id
                  ? 'bg-zinc-900 border-[#facc15] text-[#facc15] shadow-lg shadow-[#facc15]/15 scale-[1.02]'
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                selectedNiche.id === niche.id ? 'bg-[#facc15] text-black' : 'bg-zinc-800 text-zinc-400'
              }`}>
                {getNicheIcon(niche.icon)}
              </div>
              <div className="overflow-hidden">
                <span className="font-bebas text-lg block truncate leading-none">
                  {niche.niche.split('/')[0]}
                </span>
                <span className="text-[10px] font-mono-code text-zinc-500 block truncate">
                  {niche.clientExample}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Simulator Grid (Playground + Features) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Chat Simulator Interface */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0a0a0a] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col h-[520px]">
            
            {/* Chat Top Bar */}
            <div className="bg-zinc-900 p-3.5 px-4 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-[#facc15] flex items-center justify-center text-black font-bold">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-zinc-900 absolute bottom-0 right-0"></span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    Assistente IA · {selectedNiche.niche}
                  </h4>
                  <span className="text-[10px] font-mono-code text-emerald-400">
                    Online 24/7 · Resposta Instantânea
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMessages([{ role: 'bot', text: selectedNiche.welcomeMessage }])}
                className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                title="Reiniciar conversa"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-black/60">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-[#facc15]/20 border border-[#facc15]/40 flex items-center justify-center text-[#facc15] shrink-0 text-xs mt-0.5">
                      IA
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl p-3 text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#facc15] text-black font-medium rounded-tr-none'
                        : 'bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                  <div className="w-7 h-7 rounded-full bg-[#facc15]/20 flex items-center justify-center text-[#facc15] shrink-0 text-xs">
                    IA
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-2.5 px-3 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Quick Questions */}
            <div className="p-2.5 bg-zinc-900/70 border-t border-zinc-800/80">
              <span className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-wider block mb-1.5 px-1">
                Perguntas Frequentes Simuladas (Clique para testar):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedNiche.sampleQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAskQuestion(q)}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-lg bg-zinc-800/90 hover:bg-[#facc15] hover:text-black border border-zinc-700 text-zinc-300 text-[11px] transition-all text-left cursor-pointer disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input Form */}
            <form onSubmit={handleSendCustom} className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Ou digite sua pergunta personalizada para o bot..."
                className="flex-1 bg-black border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#facc15]"
              />
              <button
                type="submit"
                disabled={!customInput.trim() || isTyping}
                className="px-4 py-2 bg-[#facc15] hover:bg-[#eab308] text-black font-bold rounded-xl text-xs flex items-center justify-center transition-all disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

          {/* Right: Why This Sells & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-7 yellow-glow">
              <span className="font-mono-code text-[11px] text-[#facc15] uppercase tracking-widest block mb-2 font-bold">
                POR QUE SUA EMPRESA PRECISA DISSO?
              </span>
              <h3 className="font-bebas text-3xl text-white tracking-wide mb-4">
                78% DOS CLIENTES COMPRAM DO PRIMEIRO QUE RESPONDE
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5">
                Se você demora mais de 5 minutos para responder no WhatsApp, seu concorrente já fechou o negócio. Nossos chatbots com IA eliminam essa perda de faturamento:
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <span><strong>Sem respostas robotizadas:</strong> O robô entende gírias, áudios e linguagem natural.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <span><strong>Triagem e Qualificação:</strong> Separa clientes prontos para comprar de curiosos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <span><strong>Agendamento Automático:</strong> Conecta com o Google Agenda do seu consultório ou equipe.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <span><strong>Integração com WhatsApp Oficial:</strong> Sem risco de banimento de número.</span>
                </div>
              </div>

              {/* Price Callout */}
              <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono-code text-zinc-400 uppercase">Implantação Completa:</span>
                  <div className="font-bebas text-3xl text-[#facc15]">R$ 590,00</div>
                </div>
                <span className="text-[11px] font-mono-code text-zinc-400 text-right">
                  + Manutenção a partir <br /> de R$ 149/mês
                </span>
              </div>

              <button
                onClick={() => onOpenBudgetModal(`Chatbot com IA para ${selectedNiche.niche}`)}
                className="w-full py-4 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-black font-mono-code text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#facc15]/20"
              >
                <span>Implantar Chatbot no Meu Negócio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-center gap-3 text-xs text-zinc-400">
              <Sparkles className="w-5 h-5 text-[#facc15] shrink-0" />
              <span>
                Também personalizamos chatbots para <strong>imobiliárias, academias, e-commerces, pet shops e concessionárias</strong>!
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
