import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageCircle, ArrowRight, Minimize2, Maximize2, ShieldCheck, User } from 'lucide-react';
import { ChatMessage } from '../types';

export const AiChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      text: 'Olá! Sou o Consultor Inteligente da Sonho Studio ⚡ Como posso te ajudar hoje? Posso tirar dúvidas sobre preços sugeridos, chatbots para o seu nicho, sites, delivery ou te conectar com os fundadores no WhatsApp!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'Quanto custa uma Landing Page?',
    'Como funciona o Chatbot com IA?',
    'Como é o Delivery sem taxas de 27%?',
    'Fazer simulação de orçamento',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || input.trim();
    if (!messageText || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          conversationHistory: updatedMessages.map((m) => ({
            role: m.role,
            text: m.text,
          })),
        }),
      });

      const data = await response.json();
      const botReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: data.reply || 'Estou à disposição para analisar seu projeto na Sonho Studio! Vamos conversar no WhatsApp?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error('Chat error:', error);
      const fallbackReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: 'Nossa equipe está disponível agora mesmo no WhatsApp (+55 11 91161-7151) para te passar um orçamento detalhado sem compromisso!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackReply]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Floating Trigger Button with Ping Indicator */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          id="open-ai-chat-btn"
          className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-[#0a0a0a] border-2 border-[#facc15] text-white shadow-2xl yellow-glow hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          {/* Notification Ping */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#facc15] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#facc15]"></span>
          </span>

          <div className="w-8 h-8 rounded-full bg-[#facc15] flex items-center justify-center text-black font-bold">
            <Bot className="w-5 h-5" />
          </div>

          <div className="text-left hidden sm:block">
            <span className="font-mono-code text-[10px] text-[#facc15] uppercase tracking-wider block leading-none font-bold">
              Suporte em Tempo Real
            </span>
            <span className="font-bebas text-lg text-white tracking-wide block leading-none mt-0.5">
              CONSULTOR IA · ONLINE
            </span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`rounded-3xl bg-[#0a0a0a] border-2 border-[#facc15]/70 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 yellow-glow-lg ${
            isExpanded
              ? 'w-[95vw] sm:w-[540px] h-[85vh] max-h-[720px]'
              : 'w-[92vw] sm:w-[390px] h-[540px]'
          }`}
        >
          
          {/* Header */}
          <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 p-4 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#facc15] flex items-center justify-center text-black font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-black absolute bottom-0 right-0"></span>
              </div>
              <div>
                <h3 className="font-bebas text-xl text-white tracking-wide leading-none flex items-center gap-1.5">
                  SONHO BOT <span className="text-[10px] font-mono-code text-[#facc15] px-1.5 py-0.5 rounded bg-[#facc15]/10 border border-[#facc15]/30">IA 360°</span>
                </h3>
                <span className="font-mono-code text-[10px] text-zinc-400 block mt-0.5">
                  Consultor Oficial Sonho Studio
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors hidden sm:block"
                title={isExpanded ? 'Diminuir' : 'Expandir'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                id="close-ai-chat-btn"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Fechar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-black/70">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#facc15] flex items-center justify-center text-black font-bold text-xs shrink-0 mt-0.5">
                    S
                  </div>
                )}
                
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#facc15] text-black font-medium rounded-tr-none'
                      : 'bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-tl-none shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`text-[9px] font-mono-code block mt-1.5 ${
                      msg.role === 'user' ? 'text-black/60 text-right' : 'text-zinc-500'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 text-xs shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-zinc-400 text-xs">
                <div className="w-7 h-7 rounded-full bg-[#facc15] flex items-center justify-center text-black font-bold text-xs">
                  S
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 flex items-center gap-1.5">
                  <span className="text-[11px] font-mono-code text-zinc-400">Digitando resposta</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Chips */}
          <div className="p-2.5 bg-zinc-950 border-t border-zinc-900 overflow-x-auto">
            <div className="flex gap-1.5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-[#facc15] hover:text-black border border-zinc-800 text-[10px] font-mono-code text-zinc-300 transition-all cursor-pointer disabled:opacity-50 shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input & WhatsApp Transfer */}
          <div className="p-3 bg-zinc-900 border-t border-zinc-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2 mb-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tire sua dúvida ou peça um orçamento..."
                className="flex-1 bg-black border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#facc15]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-4 py-2.5 bg-[#facc15] hover:bg-[#eab308] text-black font-bold rounded-xl text-xs flex items-center justify-center transition-all disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <a
              href="https://wa.me/5511911617151?text=Ol%C3%A1%2C%20estava%20conversando%20com%20o%20assistente%20no%20site%20da%20Sonho%20Studio%20e%20gostaria%20de%20um%20atendimento%20humano"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-400 font-mono-code text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors text-center"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Transferir para Atendimento Humano no WhatsApp</span>
            </a>
          </div>

        </div>
      )}
    </div>
  );
};
