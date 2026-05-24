export interface PhoneProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  // Add more product-specific fields as needed
  storageOptions?: string[];
  colorOptions?: string[];
}

export interface NavigationLink {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavigationLink[];
  // Add other site-wide configuration properties
}

// Example type for a form submission
export interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

// Example type for a user profile
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}
lib/types.ts[usedfor]Centralized type definitions.[usedfor]