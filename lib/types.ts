export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  navItems: NavItem[];
  socialLinks?: { name: string; href: string }[];
}