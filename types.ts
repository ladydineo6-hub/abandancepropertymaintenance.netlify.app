
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
