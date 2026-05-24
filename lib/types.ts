export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  keywords?: string[];
}

export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  authorId: string;
}

lib/types.ts[usedfor]shared types[/usedfor]