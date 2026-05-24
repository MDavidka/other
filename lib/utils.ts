import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CartItem, Phone } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calculateCartItemCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function calculateShipping(subtotal: number): number {
  return subtotal > 0 ? 9.99 : 0;
}

export function calculateTax(subtotal: number, taxRate: number = 0.08): number {
  return subtotal * taxRate;
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateOrderNumber(): string {
  return `ORD-${Date.now().toString().slice(-8)}`;
}

export function getCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  
  try {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
  }
  return [];
}

export function saveCartToStorage(items: CartItem[]): void {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem("cart", JSON.stringify(items));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
}

export function addToCart(items: CartItem[], phone: Phone): CartItem[] {
  const existingItemIndex = items.findIndex(
    (item) => item.id === phone.id
  );

  if (existingItemIndex !== -1) {
    const updatedItems = [...items];
    updatedItems[existingItemIndex] = {
      ...updatedItems[existingItemIndex],
      quantity: updatedItems[existingItemIndex].quantity + 1,
    };
    return updatedItems;
  }

  const newItem: CartItem = {
    id: phone.id,
    name: phone.name,
    price: phone.price,
    image: phone.image,
    brand: phone.brand,
    storage: phone.storage,
    color: phone.color,
    quantity: 1,
  };

  return [...items, newItem];
}

export function updateCartItemQuantity(
  items: CartItem[],
  id: string,
  quantity: number
): CartItem[] {
  if (quantity < 1) return items;

  return items.map((item) =>
    item.id === id ? { ...item, quantity } : item
  );
}

export function removeFromCart(items: CartItem[], id: string): CartItem[] {
  return items.filter((item) => item.id !== id);
}

export function clearCart(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("cart");
}

export function filterPhones(
  phones: Phone[],
  selectedBrands: string[],
  priceRange: [number, number],
  selectedStorage: number[]
): Phone[] {
  return phones.filter((phone) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(phone.brand);

    const matchesPrice =
      phone.price >= priceRange[0] && phone.price <= priceRange[1];

    const matchesStorage =
      selectedStorage.length === 0 || selectedStorage.includes(phone.storage);

    return matchesBrand && matchesPrice && matchesStorage;
  });
}

export function sortPhones(
  phones: Phone[],
  sortBy: "price-low" | "price-high" | "rating" | "newest"
): Phone[] {
  const sorted = [...phones];

  switch (sortBy) {
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "newest":
      return sorted.sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return b.rating - a.rating;
      });
    default:
      return sorted;
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

lib/utils.ts[usedfor]Utility functions: Price formatting, cart calculations, slug generation and common helpers[/usedfor]