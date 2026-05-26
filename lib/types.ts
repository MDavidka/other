export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string; // URL to the product image
  category: string;
  brand: string;
  storageOptions: string[]; // e.g., ['128GB', '256GB', '512GB']
  colorOptions: string[]; // e.g., ['Black', 'White', 'Blue']
  displaySize: string; // e.g., '6.1-inch'
  cameraSpecs: string; // e.g., 'Dual 12MP'
  batteryLife: string; // e.g., 'Up to 20 hours video playback'
  inStock: boolean;
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
  links: {
    twitter?: string;
    github?: string;
  };