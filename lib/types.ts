import { z } from "zod"

export interface NavItem {
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  nav: NavItem[]
}

export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  description: string
  specs: {
    display: string
    processor: string
    ram: string
    storage: string
    camera: string
    battery: string
    os: string
  }
  inStock: boolean
  rating: number
  reviewCount: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  brand: z.string(),
  price: z.number(),
  originalPrice: z.number().optional(),
  image: z.string(),
  images: z.array(z.string()),
  description: z.string(),
  specs: z.object({
    display: z.string(),
    processor: z.string(),
    ram: z.string(),
    storage: z.string(),
    camera: z.string(),
    battery: z.string(),
    os: z.string(),
  }),
  inStock: z.boolean(),
  rating: z.number(),
  reviewCount: z.number(),
})

export const CartItemSchema = z.object({
  product: ProductSchema,
  quantity: z.number().min(1),
})

export const CartSchema = z.object({
  items: z.array(CartItemSchema),
  total: z.number(),
})