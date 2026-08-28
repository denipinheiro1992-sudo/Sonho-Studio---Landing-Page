import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuthorityTicker } from './components/AuthorityTicker';
import { ServicesSection } from './components/ServicesSection';
import { ChatbotPlayground } from './components/ChatbotPlayground';
import { PortfolioSection } from './components/PortfolioSection';
import { CalculatorSection } from './components/CalculatorSection';
import { AboutFounders } from './components/AboutFounders';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AiChatWidget } from './components/AiChatWidget';
import { BudgetModal } from './components/BudgetModal';
import { ServiceItem } from './types';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');

  const handleOpenBudgetModal = (serviceTitle?: string) => {
    setSelectedServiceTitle(serviceTitle || '');
    setBudgetModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceTitle(service.title);
    setBudgetModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f2ee] selection:bg-[#facc15] selection:text-black relative">
      {/* Navigation */}
      <Navbar onOpenBudgetModal={() => handleOpenBudgetModal()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBudgetModal={() => handleOpenBudgetModal()} />

        {/* 2. Authority & Client Logos Bar */}
        <AuthorityTicker />

        {/* 3. Core Services & Suggested Prices */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenBudgetModal={handleOpenBudgetModal}
        />

        {/* 4. Interactive Chatbot Simulator (Nutricionistas, Advogados, Dentistas, Restaurantes) */}
        <ChatbotPlayground onOpenBudgetModal={handleOpenBudgetModal} />

        {/* 5. Featured Portfolio & AI Proof of Expertise (Se Vira AI - https://seviraai.vercel.app/) */}
        <PortfolioSection onOpenBudgetModal={handleOpenBudgetModal} />

        {/* 6. Real-Time Budget & ROI Calculator */}
        <CalculatorSection />

        {/* 7. Client Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 8. Who is Behind (Founders: Denison Limeira & Vinicius Cunha) */}
        <AboutFounders />

        {/* 9. Interactive FAQ Accordion */}
        <FaqSection />

        {/* 10. High Conversion Final CTA */}
        <CtaSection onOpenBudgetModal={handleOpenBudgetModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Real-Time AI Chatbot Support Widget */}
      <AiChatWidget />

      {/* Custom Budget / Proposal Request Modal */}
      <BudgetModal
        isOpen={budgetModalOpen}
        onClose={() => setBudgetModalOpen(false)}
        initialService={selectedServiceTitle}
      />

      {/* Mobile Sticky Quick CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-zinc-800 flex gap-2">
        <a
          href="https://wa.me/5511911617151?text=Ol%C3%A1%20Sonho%20Studio!%20Gostaria%20de%20um%20or%C3%A7amento%20r%C3%A1pido"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded-xl bg-[#facc15] text-black font-mono-code text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-[#facc15]/20"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>Falar no WhatsApp</span>
        </a>
        <button
          onClick={() => handleOpenBudgetModal()}
          className="px-3.5 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-mono-code text-xs font-semibold flex items-center justify-center"
        >
          <Sparkles className="w-4 h-4 text-[#facc15]" />
        </button>
      </div>
    </div>
  );
}
