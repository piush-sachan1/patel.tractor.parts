export interface SpareCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  brands: string[];
  keyComponents: string[];
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string;
  whatsappUrl: string;
  address: string;
  hours: string;
  rating: string;
  reviewsCount: string;
  establishedYear: number;
}
