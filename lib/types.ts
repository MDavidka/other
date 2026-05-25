import { ReactNode } from 'react';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  specs: {
    display: string;
    processor: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    os: string;
  };
  inStock: boolean;
  rating: number;
  reviewCount: number;
  colors: string[];
  category: 'flagship' | 'mid-range' | 'budget';
}

export interface CartItem extends Phone {
  quantity: number;
  selectedColor: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (phone: Phone, color: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export interface ProductFilter {
  brands: string[];
  categories: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
  sortBy: 'price-low' | 'price-high' | 'rating' | 'name';
}

export interface SearchParams {
  query: string;
  filters: ProductFilter;
}