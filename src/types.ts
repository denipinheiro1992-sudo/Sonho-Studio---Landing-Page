export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  badge?: string;
  category: 'web' | 'ia' | 'video' | 'automation';
  suggestedPrice: string;
  priceNote: string;
  deliveryTime: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  idealFor: string[];
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  url: string;
  isSeViraAI?: boolean;
  image: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  metric: string;
  metricLabel: string;
  comment: string;
  serviceUsed: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NicheChatbotDemo {
  id: string;
  niche: string;
  icon: string;
  description: string;
  clientExample: string;
  welcomeMessage: string;
  sampleQuestions: string[];
  sampleResponses: Record<string, string>;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
