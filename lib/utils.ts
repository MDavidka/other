import { CartItem, Phone } from '@/lib/types'

/**
 * Formats a number as a currency string using the user's locale.
 * @param amount - The numeric amount to format.
 * @returns A string formatted as currency (e.g., "$699").
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * Calculates the total price for an array of cart items.
 * @param items - Array of CartItem objects.
 * @returns The total price as a number.
 */
export function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

/**
 * Persists the cart to localStorage.
 * @param cart - Array of CartItem objects to persist.
 */
export function persistCart(cart: CartItem[]): void {
  try {
    const data = JSON.stringify(cart)
    localStorage.setItem('cart', data)
  } catch {
    // ignore persistence errors
  }
}

/**
 * Retrieves the cart from localStorage.
 * @returns An array of CartItem objects or an empty array if none exist.
 */
export function loadCart(): CartItem[] {
  try {
    const data = localStorage.getItem('cart')
    if (!data) return []
    return JSON.parse(data) as CartItem[]
  } catch {
    return []
  }
}

/**
 * Adds a phone to the cart, incrementing quantity if it already exists.
 * @param cart - Current cart items.
 * @param phone - Phone to add.
 * @returns Updated cart array.
 */
export function addToCart(cart: CartItem[], phone: Phone): CartItem[] {
  const existing = cart.find((item) => item.id === phone.id)
  if (existing) {
    return cart.map((item) =>
      item.id === phone.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  }
  return [...cart, { ...phone, quantity: 1 }]
}

/**
 * Removes a phone from the cart.
 * @param cart - Current cart items.
 * @param phoneId - ID of the phone to remove.
 * @returns Updated cart array.
 */
export function removeFromCart(cart: CartItem[], phoneId: string): CartItem[] {
  return cart.filter((item) => item.id !== phoneId)
}

/**
 * Updates the quantity of a cart item.
 * @param cart - Current cart items.
 * @param phoneId - ID of the phone to update.
 * @param quantity - New quantity (must be >= 1).
 * @returns Updated cart array.
 */
export function updateQuantity(
  cart: CartItem[],
  phoneId: string,
  quantity: number
): CartItem[] {
  if (quantity < 1) return cart
  return cart.map((item) =>
    item.id === phoneId ? { ...item, quantity } : item
  )
}

lib/utils.ts[usedfor]Utility functions for price formatting, cart persistence, and cart manipulation[/usedfor]