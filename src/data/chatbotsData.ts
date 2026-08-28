import { NicheChatbotDemo } from '../types';

export const nicheChatbots: NicheChatbotDemo[] = [
  {
    id: 'nutricao',
    niche: 'Nutricionista / Clínica de Saúde',
    icon: 'Apple',
    description: 'Atendimento humanizado para esclarecer planos alimentares, exames e agendar consultas presenciais ou online.',
    clientExample: 'Dra. Camila Nutrição Integrativa',
    welcomeMessage: 'Olá! Sou a assistente virtual da Dra. Camila. Como posso te ajudar hoje? Deseja saber sobre a consulta nutricional, exames de bioimpedância ou agendar um horário?',
    sampleQuestions: [
      'Como funciona a primeira consulta nutricional?',
      'Qual o valor da consulta e formas de pagamento?',
      'Vocês atendem por convênio ou emitem recibo?',
      'Gostaria de agendar uma consulta online para esta semana.',
    ],
    sampleResponses: {
      'Como funciona a primeira consulta nutricional?':
        'Na primeira consulta (duração de 1h15), a Dra. realiza uma anamnese clínica completa, avaliação de bioimpedância e monta um plano alimentar individualizado alinhado à sua rotina e preferências. Quer verificar os horários livres desta semana?',
      'Qual o valor da consulta e formas de pagamento?':
        'A consulta completa com acompanhamento no app e retorno em 30 dias está por R$ 350,00 no Pix ou em até 3x no cartão. Você gostaria de reservar um horário preferencial?',
      'Vocês atendem por convênio ou emitem recibo?':
        'Atendemos de forma particular com dedicação exclusiva, e emitimos nota fiscal e relatório médico detalhado para reembolso no seu plano de saúde (com taxa de aprovação de até 100%).',
      'Gostaria de agendar uma consulta online para esta semana.':
        'Excelente! Temos horários disponíveis na Quarta-feira às 14:30 e Quinta-feira às 10:00. Qual opção fica melhor para você? Posso enviar o link direto para o seu WhatsApp!',
    },
  },
  {
    id: 'advocacia',
    niche: 'Advocacia & Escritório Jurídico',
    icon: 'Scale',
    description: 'Triagem jurídica prévia por área do direito (Trabalhista, Família, Tributário) e agendamento de reuniões qualificadas.',
    clientExample: 'Veiga & Associados Advocacia',
    welcomeMessage: 'Olá! Bem-vindo ao escritório Veiga & Associados. Sou o assistente jurídico virtual. Em qual área jurídica podemos defender seus direitos hoje?',
    sampleQuestions: [
      'Fui demitido sem justa causa e não recebi meus direitos.',
      'Como funciona o processo de divórcio e partilha de bens?',
      'Quero uma consultoria preventiva para a minha empresa.',
      'Qual o valor da consulta jurídica e como agendar com o Dr. Marcos?',
    ],
    sampleResponses: {
      'Fui demitido sem justa causa e não recebi meus direitos.':
        'Entendido. Para o Dr. Marcos analisar seu caso com prioridade, você trabalhou quanto tempo na empresa e qual era sua função média? Vamos verificar o cálculo rescisório completo sem custos iniciais!',
      'Como funciona o processo de divórcio e partilha de bens?':
        'Nosso núcleo de Direito de Família conduz divórcios consensuais e litigiosos com total discrição e agilidade. Se houver acordo mútuo, o processo pode ser feito em cartório em poucos dias. Gostaria de falar com um especialista em sigilo?',
      'Quero uma consultoria preventiva para a minha empresa.':
        'Ótimo! Oferecemos assessoria jurídica contínua (compliance, contratos e blindagem trabalhista) sob medida para PMEs. Podemos marcar uma videoconferência de 20 minutos com nosso sócio?',
      'Qual o valor da consulta jurídica e como agendar com o Dr. Marcos?':
        'A consulta diagnóstica de 45 minutos permite analisar documentos e definir a melhor estratégia jurídica. Clique abaixo para escolher o horário diretamente na agenda do Dr. Marcos no WhatsApp!',
    },
  },
  {
    id: 'odontologia',
    niche: 'Dentista & Clínica Odontológica',
    icon: 'Smile',
    description: 'Agendamento de avaliações, esclarecimento sobre implantes, facetas, ortodontia e lembretes automáticos.',
    clientExample: 'Studio Oral Odontologia Avançada',
    welcomeMessage: 'Olá! Sou a assistente do Studio Oral. Está buscando avaliação para implantes, alinhadores invisíveis, clareamento ou limpeza dental?',
    sampleQuestions: [
      'Quanto custa colocar alinhador invisível?',
      'Estou com dor de dente e preciso de urgência hoje.',
      'Como funciona a avaliação para implante dental?',
      'Quero fazer clareamento a laser para um evento.',
    ],
    sampleResponses: {
      'Quanto custa colocar alinhador invisível?':
        'O tratamento com alinhadores invisíveis varia conforme o tempo de correção. Na avaliação com escaneamento digital 3D gratuito, mostramos como ficará o seu sorriso antes de começar! Quer agendar sua avaliação para esta semana?',
      'Estou com dor de dente e preciso de urgência hoje.':
        'Lamentamos o desconforto! Separamos encaixes diários para urgências. Nossa clínica fica aberta até as 19h. Deseja que eu passe seu contato agora para a recepcionista te priorizar?',
      'Como funciona a avaliação para implante dental?':
        'Realizamos tomografia digital no próprio consultório com sedação consciente para seu total conforto e sem dor. Temos planos facilitados em até 24x. Vamos agendar seu diagnóstico?',
      'Quero fazer clareamento a laser para um evento.':
        'Perfeito! Nosso clareamento a laser em consultório proporciona resultados visíveis já na primeira sessão de 50 minutos. Temos vagas para amanhã à tarde!',
    },
  },
  {
    id: 'restaurante',
    niche: 'Restaurante & Hamburgueria / Delivery',
    icon: 'Utensils',
    description: 'Envio rápido do cardápio digital, acompanhamento do status do pedido e reservas de mesa.',
    clientExample: 'Santo Burger & Pizzaria Artesanal',
    welcomeMessage: 'Fala, amante de um bom burger! 🍔 Sou o bot do Santo Burger. Quer dar uma olhada no cardápio de hoje, ver a promo do dia ou fazer uma reserva de mesa?',
    sampleQuestions: [
      'Qual a promoção especial de hoje?',
      'Gostaria de ver o cardápio completo com preços.',
      'Vocês entregam no meu bairro e qual a taxa de frete?',
      'Quero reservar uma mesa para 6 pessoas no sábado.',
    ],
    sampleResponses: {
      'Qual a promoção especial de hoje?':
        'Hoje temos o clássico **Combo Smash Triplo + Batata Rústica + Refri Lata** com 20% OFF por apenas R$ 38,90! Quer que eu te envie o link direto com o cupom aplicado?',
      'Gostaria de ver o cardápio completo com preços.':
        'Aqui está nosso cardápio digital com fotos em alta definição: [Abrir Cardápio Santo Burger]. O pedido chega quentinho na sua porta em média de 30 a 40 minutos!',
      'Vocês entregam no meu bairro e qual a taxa de frete?':
        'Entregamos em um raio de 12km com taxa calculada automaticamente pelo seu CEP na hora de finalizar o pedido. Se passar de R$ 90,00 o frete sai grátis!',
      'Quero reservar uma mesa para 6 pessoas no sábado.':
        'Excelente! Nossas mesas de sábado costumam lotar cedo. Para qual horário gostaria: 19h30 ou 21h00? Vou deixar seu nome na lista VIP da recepção!',
    },
  },
];
