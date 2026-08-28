import React, { useState, useMemo } from 'react';
import { Calculator, Check, Sparkles, ArrowRight, MessageCircle, ShieldCheck, Flame, Percent } from 'lucide-react';

interface CalculatorItem {
  id: string;
  name: string;
  price: number;
  category: string;
  note: string;
}

const CALCULATOR_SERVICES: CalculatorItem[] = [
  { id: 'lp', name: 'Landing Page de Alta Conversão', price: 497, category: 'Web', note: 'Copywriting + Design + Pixel + WhatsApp' },
  { id: 'site', name: 'Site Institucional Corporativo', price: 980, category: 'Web', note: 'Até 6 páginas completas + SEO Google' },
  { id: 'membros', name: 'Área de Membros / Cursos', price: 1290, category: 'Web', note: 'Ambiente seguro estilo streaming' },
  { id: 'automacao', name: 'Sistema Personalizado / Web App', price: 1890, category: 'Sistemas', note: 'Painel sob medida + banco de dados + API' },
  { id: 'chatbot', name: 'Chatbot Inteligente com IA 24/7', price: 590, category: 'IA', note: 'Treinado para seu nicho + agendamento' },
  { id: 'delivery', name: 'Cardápio Digital & Delivery Próprio', price: 690, category: 'Gastronomia', note: '0% comissões + Pix automático + Cozinha' },
  { id: 'videos', name: 'Pacote Vídeos Promocionais (3 a 5)', price: 390, category: 'Vídeo', note: 'Reels/TikTok de alta conversão cinema' },
];

const ADDONS = [
  { id: 'trafego', name: 'Setup & Gestão Inicial de Tráfego Pago (Meta/Google Ads)', price: 390 },
  { id: 'hospedagem', name: 'Configuração de Servidor Cloud de Alta Velocidade + SSL', price: 97 },
  { id: 'crm', name: 'Integração de CRM e Disparo Automático de WhatsApp', price: 190 },
];

export const CalculatorSection: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['lp', 'chatbot']);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<'normal' | 'express'>('normal');

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    let subtotalServices = selectedServices.reduce((sum, id) => {
      const item = CALCULATOR_SERVICES.find((s) => s.id === id);
      return sum + (item ? item.price : 0);
    }, 0);

    let subtotalAddons = selectedAddons.reduce((sum, id) => {
      const item = ADDONS.find((a) => a.id === id);
      return sum + (item ? item.price : 0);
    }, 0);

    let rawTotal = subtotalServices + subtotalAddons;

    // Progressive combo discount
    let discountPercent = 0;
    if (selectedServices.length >= 3) {
      discountPercent = 0.15; // 15% OFF for 3+ services
    } else if (selectedServices.length >= 2) {
      discountPercent = 0.10; // 10% OFF for 2 services
    }

    const discountAmount = rawTotal * discountPercent;
    let finalTotal = rawTotal - discountAmount;

    if (urgency === 'express') {
      finalTotal = finalTotal * 1.15; // Express delivery surcharge
    }

    const parcelas = Math.round((finalTotal * 1.12) / 12);

    return {
      rawTotal,
      discountPercent: discountPercent * 100,
      discountAmount,
      finalTotal: Math.round(finalTotal),
      parcelas,
      count: selectedServices.length,
    };
  }, [selectedServices, selectedAddons, urgency]);

  const generateWhatsAppMessage = () => {
    const serviceNames = selectedServices
      .map((id) => CALCULATOR_SERVICES.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const addonNames = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Ol%C3%A1%20Sonho%20Studio!%20Fiz%20uma%20simula%C3%A7%C3%A3o%20de%20or%C3%A7amento%20no%20site:%0A%0A*Servi%C3%A7os%20selecionados:*%20${encodeURIComponent(serviceNames || 'Nenhum')}%0A*Adicionais:*%20${encodeURIComponent(addonNames || 'Nenhum')}%0A*Total%20Estimado:*%20R$%20${calculation.finalTotal},00%0A%0AGostaria%20de%20conversar%20sobre%20os%20detalhes%20do%20meu%20projeto!`;

    return `https://wa.me/5511911617151?text=${text}`;
  };

  return (
    <section id="calculadora" className="py-24 bg-zinc-950 border-b border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#facc15]/30 mb-4 yellow-glow">
            <Calculator className="w-3.5 h-3.5 text-[#facc15]" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#facc15] font-semibold">
              Transparência & Estimativa em Tempo Real
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-tight leading-none uppercase mb-4">
            CALCULADORA DE INVESTIMENTO <br />
            <span className="text-[#facc15]">& PACOTE PERSONALIZADO</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Selecione as soluções que o seu negócio precisa hoje. Quanto mais serviços integrados, maior o desconto progressivo aplicado no pacote!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Service Selection List */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="font-mono-code text-xs text-[#facc15] uppercase tracking-widest block mb-3 font-semibold">
                1. Selecione os Serviços Desejados:
              </span>
              <div className="space-y-2.5">
                {CALCULATOR_SERVICES.map((service) => {
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-zinc-900 border-[#facc15] text-white shadow-md shadow-[#facc15]/10'
                          : 'bg-zinc-900/40 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/70'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all ${
                            isSelected
                              ? 'bg-[#facc15] border-[#facc15] text-black font-bold'
                              : 'border-zinc-700 bg-black/40'
                          }`}
                        >
                          {isSelected && <Check className="w-4 h-4" />}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm leading-tight">{service.name}</h4>
                          <span className="text-[11px] text-zinc-400 font-mono-code block mt-0.5">{service.note}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0 pl-3">
                        <span className="font-bebas text-xl text-[#facc15]">R$ {service.price},00</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Addons Selection */}
            <div>
              <span className="font-mono-code text-xs text-zinc-400 uppercase tracking-widest block mb-3 font-semibold">
                2. Adicionais Estratégicos (Opcional):
              </span>
              <div className="space-y-2">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between text-xs ${
                        isSelected
                          ? 'bg-zinc-900/90 border-[#facc15]/60 text-white'
                          : 'bg-zinc-900/30 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isSelected ? 'bg-[#facc15] border-[#facc15] text-black font-bold' : 'border-zinc-700'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-mono-code text-zinc-300 font-bold">+R$ {addon.price},00</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Real-Time Summary & WhatsApp Dispatch */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl bg-[#0a0a0a] border-2 border-[#facc15]/60 p-6 sm:p-7 shadow-2xl yellow-glow relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-5">
                <span className="font-bebas text-2xl text-white tracking-wide">
                  RESUMO DA PROPOSTA
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono-code font-bold uppercase bg-[#facc15]/20 text-[#facc15] border border-[#facc15]/40">
                  {calculation.count} {calculation.count === 1 ? 'Serviço' : 'Serviços'}
                </span>
              </div>

              {/* Discount Notice Banner */}
              {calculation.discountPercent > 0 ? (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code flex items-center gap-2 mb-5">
                  <Percent className="w-4 h-4 shrink-0" />
                  <span>
                    Combo Ativo! Você ganhou <strong>{calculation.discountPercent}% OFF</strong> de desconto progressivo.
                  </span>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono-code mb-5">
                  💡 Dica: Selecione 2 ou mais serviços para liberar até 15% de desconto no combo!
                </div>
              )}

              {/* Breakdown */}
              <div className="space-y-2.5 text-xs text-zinc-300 mb-6">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Subtotal Bruto:</span>
                  <span className="font-mono-code">R$ {calculation.rawTotal},00</span>
                </div>

                {calculation.discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto Combo ({calculation.discountPercent}%):</span>
                    <span className="font-mono-code">- R$ {Math.round(calculation.discountAmount)},00</span>
                  </div>
                )}

                <div className="pt-3 border-t border-zinc-800 flex justify-between items-baseline">
                  <div>
                    <span className="text-zinc-400 uppercase text-[10px] font-mono-code block">Investimento Total Sugerido:</span>
                    <span className="font-bebas text-4xl sm:text-5xl text-[#facc15] tracking-wide">
                      R$ {calculation.finalTotal},00
                    </span>
                  </div>
                </div>

                <span className="text-zinc-400 font-mono-code text-[11px] block">
                  ou em até 12x de ~R$ {calculation.parcelas},00 no cartão de crédito.
                </span>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 p-3 rounded-xl bg-black/60 border border-zinc-800 text-[11px] text-zinc-400 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#facc15]" />
                  <span>30 dias de garantia e suporte dedicado após entrega</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
                  <span>Contrato transparente sem letras miúdas</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-black font-mono-code text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#facc15]/25 hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-black text-[#facc15]" />
                <span>Enviar Esta Proposta para o WhatsApp</span>
              </a>

              <span className="text-[10px] font-mono-code text-zinc-500 text-center block mt-3">
                Atendimento direto com os fundadores Denison e Vinicius.
              </span>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
