import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

// System instruction with deep knowledge of Sonho Studio
const SONHO_STUDIO_KNOWLEDGE = `
Você é o "Consultor Virtual Inteligente da Sonho Studio" (agência de Marketing 360°, Tecnologia, Automações e IA fundada por Denison Limeira e Vinicius Cunha).
Seu objetivo é tirar dúvidas de potenciais clientes com simpatia, persuasão elegante, agilidade e objetividade, além de direcioná-los para fechar negócio ou agendar pelo WhatsApp (+55 11 91161-7151).

NOSSOS SERVIÇOS E PREÇOS ACESSÍVEIS PARA PEQUENOS NEGÓCIOS & MEI:
1. Criação de Landing Pages de Alta Conversão (Copy persuasiva, design moderno preto e dourado/amarelo, carregamento ultra-rápido, integração com WhatsApp e CRM) -> Sugerido a partir de R$ 497,00 (ou em até 12x de R$ 49,90).
2. Sites Institucionais & Portais Corporativos (Arquitetura moderna, SEO otimizado, multi-páginas, credibilidade total) -> Sugerido a partir de R$ 980,00 (ou 12x de R$ 98,00).
3. Área de Membros & Plataformas de Cursos/Exclusivas (Ambiente seguro de vídeos, controle de alunos, gamificação e checkout) -> Sugerido a partir de R$ 1.290,00.
4. Sistemas Personalizados de Automação & Aplicações Web Completas (SaaS sob medida, dashboards, integração de pagamentos, automação de funis e CRM para escalar vendas) -> Sugerido a partir de R$ 1.890,00.
5. Chatbots Inteligentes para Atendimento 24/7 com IA (Personalizados por nicho: Nutricionistas, Advogados, Dentistas, Clínicas, Restaurantes, Imobiliárias, E-commerce) -> Implantação a partir de R$ 590,00 e manutenção/servidores a partir de R$ 149,00/mês.
6. Cardápio Digital & Plataforma de Delivery Própria para Restaurantes (Sem taxas de 27% de apps tradicionais, impressão automática, pagamentos Pix/cartão, WhatsApp marketing) -> Implantação a partir de R$ 690,00 e manutenção a partir de R$ 97,00/mês.
7. Criação e Edição de Vídeos Promocionais para Pequenos Negócios (Reels, TikTok, anúncios em vídeo cinematográficos de alta conversão) -> Pacotes com 3 a 5 vídeos a partir de R$ 390,00.

PORTFÓLIO E PROVA SOCIAL DE EXPERTISE EM IA:
- "Se Vira AI" (https://seviraai.vercel.app/): Plataforma e ecossistema criado pela Sonho Studio que capacita empreendedores a usarem IA e demonstra nossa vanguarda técnica em Inteligência Artificial.
- Clientes que confiam: Brás na Mão, Aliraju Baby, Brookleen Ótica, além de dezenas de profissionais liberais e restaurantes.

SOBRE OS FUNDADORES:
- Denison Limeira: Especialista em Estratégia, Design e IA. +15 anos em Customer Experience (CX), treinou mais de 500 líderes em marcas como Starbucks, Subway e Atento.
- Vinicius Cunha: Videomaker e Produtor Audiovisual de alto impacto desde 2018, com experiência internacional e atuação prévia na Meta (Facebook) e Airbnb.

DIRETRIZES DE RESPOSTA:
- Responda em português brasileiro com tom profissional, acolhedor e focado em valor e retorno sobre investimento (ROI).
- Seja direto e pontue benefícios reais (ex: economizar tempo, aumentar vendas, atender 24h sem perder lead).
- Ao final de cada resposta, convide o cliente para conversar diretamente no WhatsApp (+55 11 91161-7151) ou simular o orçamento na página.
- Mantenha as respostas concisas (2 a 4 parágrafos curtos ou tópicos limpos).
`;

// API routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Mensagem obrigatória." });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Intelligent fallback responses when API key is not yet set
      const lower = message.toLowerCase();
      let reply = "";

      if (lower.includes("preço") || lower.includes("quanto custa") || lower.includes("valor")) {
        reply = "Nossos serviços foram desenhados sob medida para serem extremamente acessíveis a pequenos negócios! As **Landing Pages de Alta Conversão** começam a partir de R$ 497, **Vídeos Promocionais para Reels/TikTok** a partir de R$ 390, **Chatbots com IA para seu nicho** a partir de R$ 590, e nossa **Plataforma de Delivery para Restaurantes** a partir de R$ 690. Quer que eu faça uma simulação exata para o seu projeto no WhatsApp?";
      } else if (lower.includes("chatbot") || lower.includes("atendimento") || lower.includes("ia") || lower.includes("advogado") || lower.includes("nutri") || lower.includes("dentista")) {
        reply = "Nossos chatbots inteligentes com IA são treinados especificamente para a rotina do seu negócio (nutricionistas, advogados, dentistas, clínicas, restaurantes e lojas). Eles respondem dúvidas frequentes, qualificam leads, agendam horários e enviam para o seu WhatsApp 24h por dia sem você perder nenhum cliente!";
      } else if (lower.includes("restaurante") || lower.includes("cardapio") || lower.includes("cardápio") || lower.includes("delivery")) {
        reply = "Com a nossa Plataforma de Cardápio Digital e Delivery Próprio, seu restaurante se livra das taxas abusivas dos marketplaces (que chegam a 27%). O pedido chega organizado direto no WhatsApp e no painel da sua cozinha com pagamentos Pix e cartão integrados!";
      } else if (lower.includes("video") || lower.includes("vídeo") || lower.includes("reels") || lower.includes("tiktok")) {
        reply = "Criamos e editamos vídeos promocionais cinematográficos pensados especificamente para chamar atenção nos primeiros 3 segundos e converter seguidores em compradores no Instagram e TikTok. O Vinicius Cunha lidera nossa produção audiovisual com padrão de grandes marcas!";
      } else {
        reply = "Olá! Seja muito bem-vindo à **Sonho Studio**. Unimos estratégia digital, audiovisual cinematográfico e Inteligência Artificial para acelerar o faturamento do seu negócio. Como podemos te ajudar hoje? (Você também pode falar com a nossa equipe no WhatsApp +55 11 91161-7151).";
      }

      return res.json({ reply, source: "knowledge-base" });
    }

    // Format chat contents
    const contents: any[] = [];
    if (Array.isArray(conversationHistory)) {
      conversationHistory.slice(-6).forEach((item) => {
        if (item.role && item.text) {
          contents.push({
            role: item.role === "user" ? "user" : "model",
            parts: [{ text: item.text }],
          });
        }
      });
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: contents,
      config: {
        systemInstruction: SONHO_STUDIO_KNOWLEDGE,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "Estou à disposição para responder qualquer dúvida sobre nossos serviços na Sonho Studio!";
    return res.json({ reply: replyText, source: "gemini-ai" });
  } catch (error: any) {
    console.error("Erro na rota /api/chat:", error);
    return res.json({
      reply: "Olá! Nossos consultores da Sonho Studio estão prontos para analisar o seu projeto. Você pode nos chamar direto no WhatsApp (+55 11 91161-7151) ou nos mandar um e-mail em adm.studiosonho@gmail.com para um atendimento imediato!",
      source: "fallback",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Sonho Studio Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
