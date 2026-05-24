import { z } from "zod";

export const PhoneSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  brand: z.string(),
  price: z.number().positive(),
  originalPrice: z.number().positive().optional(),
  storage: z.number().positive(),
  color: z.string(),
  image: z.string().url().optional(),
  rating: z.number().min(0).max(5),
  reviewCount: z.number().int().nonnegative(),
  stock: z.number().int().nonnegative(),
  isNew: z.boolean().optional(),
  specs: z.object({
    display: z.string(),
    processor: z.string(),
    camera: z.string(),
    battery: z.string(),
    os: z.string(),
  }),
  description: z.string().optional(),
  createdAt: z.string().optional(),
});

export type Phone = z.infer<typeof PhoneSchema>;

export const CartItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  image: z.string().url().optional(),
  brand: z.string(),
  storage: z.number().positive(),
  color: z.string(),
  quantity: z.number().int().positive(),
});

export type CartItem = z.infer<typeof CartItemSchema>;

export const OrderItemSchema = z.object({
  phoneId: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  storage: z.number().positive(),
  color: z.string(),
});

export type OrderItem = z.infer<typeof OrderItemSchema>;

export const OrderSchema = z.object({
  id: z.string(),
  orderNumber: z.string(),
  userId: z.string().optional(),
  items: z.array(OrderItemSchema),
  subtotal: z.number().positive(),
  shipping: z.number().nonnegative(),
  tax: z.number().nonnegative(),
  total: z.number().positive(),
  status: z.enum(["pending", "processing", "shipped", "delivered", "cancelled"]),
  shippingAddress: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    country: z.string(),
  }),
  paymentMethod: z.enum(["card", "paypal", "applepay"]),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
});

export type Order = z.infer<typeof OrderSchema>;

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
});

export type User = z.infer<typeof UserSchema>;

export const FilterStateSchema = z.object({
  selectedBrands: z.array(z.string()),
  priceRange: z.tuple([z.number(), z.number()]),
  selectedStorage: z.array(z.number()),
  sortBy: z.enum(["price-low", "price-high", "rating", "newest"]).optional(),
});

export type FilterState = z.infer<typeof FilterStateSchema>;

export const CheckoutFormDataSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zipCode: z.string().min(1),
  country: z.string(),
  paymentMethod: z.enum(["card", "paypal", "applepay"]),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
  nameOnCard: z.string().optional(),
  notes: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof CheckoutFormDataSchema>;

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface PhoneStoreConfig {
  currency: string;
  shippingCost: number;
  taxRate: number;
  freeShippingThreshold: number;
}