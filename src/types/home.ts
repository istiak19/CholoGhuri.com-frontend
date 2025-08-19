export interface FaqItem {
  id: string;
  question: string;
  answer: string;
};

export interface Faq3Props {
  heading?: string;
  description?: string;
  items?: FaqItem[];
};