import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUpRight, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBudgetModal: (serviceTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBudgetModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços & Preços', href: '#servicos' },
    { label: 'Chatbots com IA', href: '#chatbots' },
    { label: 'Portfólio / Se Vira AI', href: '#portfolio' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Fundadores', href: '#fundadores' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/90'
            : 'bg-black/50 backdrop-blur-md border-b border-white/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            id="nav-logo-btn"
            className="flex items-center group focus:outline-none"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
              <img
                src="https://i.ibb.co/ffp4qg4/Gemini-Generated-Image-removebg-preview.png"
                alt="Sonho Studio Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(250,204,21,0.5)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href="https://wa.me/5511911617151?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20com%20a%20Sonho%20Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 bg-white/5 border border-white/10 rounded-sm text-xs font-mono text-gray-300 hover:border-yellow-400/50 hover:text-yellow-400 transition-all"
              title="Atendimento via WhatsApp"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span>(11) 91161-7151</span>
            </a>

            <button
              onClick={() => onOpenBudgetModal()}
              id="nav-budget-cta-btn"
              className="bg-yellow-400 text-black px-6 py-2.5 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm cursor-pointer shadow-md shadow-yellow-400/20 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Falar com Especialista</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2 rounded-sm bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 mb-8">
            <span className="font-mono text-xs text-yellow-400 uppercase tracking-[0.25em] border-b border-white/10 pb-2">
              Navegação
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-bebas text-2xl text-gray-300 hover:text-yellow-400 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-gray-600" />
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBudgetModal();
              }}
              className="w-full py-3.5 bg-yellow-400 text-black font-mono text-xs font-bold uppercase tracking-widest text-center hover:bg-white transition-colors rounded-sm"
            >
              Falar com Especialista
            </button>
            <a
              href="https://wa.me/5511911617151?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Sonho%20Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-white/5 border border-white/10 text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 text-center rounded-sm hover:border-yellow-400/40"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Chamar no WhatsApp (+55 11 91161-7151)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

