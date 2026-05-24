import type { ReactNode } from 'react'

/** Site configuration used for metadata and navigation */
export interface SiteConfig {
  title: string
  description: string
  url: string
  locale?: string
}

/** Navigation link item */
export interface NavItem {
  href: string
  label: string
  icon?: ReactNode
}

/** Phone product */
export interface Phone {
  id: string
  name: string
  price: number
  image: string
  category: Category
}

/** Category type – limited to known values */
export type Category = 'All' | 'Smartphone' | 'Feature Phone' | 'Tablet' | 'Accessory'

/** Cart item extends Phone with quantity */
export interface CartItem extends Phone {
  quantity: number
}

/** Utility type for mapping string keys to any value */
export type StringMap<T = any> = Record<string, T>

/** Generic API response wrapper */
export interface ApiResponse<T> {
  success: boolean
  data: T
  error?: string
}

/** Pagination parameters */
export interface PaginationParams {
  page: number
  perPage: number
}

/** Pagination result */
export interface PaginatedResult<T> {
  items: T[]
  total: number
  page: number
  perPage: number
}

lib/types.ts[usedfor]Global type definitions for the phone store application[/usedfor]