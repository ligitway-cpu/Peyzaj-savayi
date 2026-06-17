export interface Project {
  slug: string;
  title: string;
  turkishTitle: string;
  category: string;
  categorySlug: string;
  location: string;
  area: string;
  year: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  result?: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  date?: string;
  services?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
