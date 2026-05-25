"use client"

import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Phone, ProductFilter } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Star, Search, Filter, ArrowRight } from 'lucide-react'

const allPhones: Phone[] = [
  {
    id: '1',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    price: 1199,
    originalPrice: 1299,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.3" Super Retina XDR',
      processor: 'A18 Pro',
      ram: '8GB',
      storage: '128GB',
      camera: '48MP + 48MP + 12MP',
      battery: '3582mAh',
      os: 'iOS 18'
    },
    inStock: true,
    rating: 4.9,
    reviewCount: 1247,
    colors: ['Natural Titanium', 'Blue Titanium', 'Black Titanium', 'White Titanium'],
    category: 'flagship'
  },
  {
    id: '2',
    name: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    price: 1299,
    originalPrice: 1399,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 4',
      ram: '12GB',
      storage: '256GB',
      camera: '200MP + 50MP + 12MP + 10MP',
      battery: '5000mAh',
      os: 'Android 15'
    },
    inStock: true,
    rating: 4.8,
    reviewCount: 892,
    colors: ['Titanium Black', 'Titanium Gray', 'Titanium Silver', 'Titanium Blue'],
    category: 'flagship'
  },
  {
    id: '3',
    name: 'Pixel 9 Pro',
    brand: 'Google',
    price: 999,
    originalPrice: 1099,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.3" LTPO OLED',
      processor: 'Google Tensor G4',
      ram: '16GB',
      storage: '128GB',
      camera: '50MP + 48MP + 48MP',
      battery: '4700mAh',
      os: 'Android 15'
    },
    inStock: true,
    rating: 4.7,
    reviewCount: 634,
    colors: ['Obsidian', 'Porcelain', 'Hazel', 'Rose Quartz'],
    category: 'flagship'
  },
  {
    id: '4',
    name: 'iPhone 16',
    brand: 'Apple',
    price: 799,
    originalPrice: 899,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.1" Super Retina XDR',
      processor: 'A18',
      ram: '8GB',
      storage: '128GB',
      camera: '48MP + 12MP',
      battery: '3561mAh',
      os: 'iOS 18'
    },
    inStock: true,
    rating: 4.6,
    reviewCount: 1089,
    colors: ['Black', 'White', 'Pink', 'Teal', 'Ultramarine'],
    category: 'mid-range'
  },
  {
    id: '5',
    name: 'Galaxy S25',
    brand: 'Samsung',
    price: 799,
    originalPrice: 899,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.2" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 4',
      ram: '12GB',
      storage: '128GB',
      camera: '50MP + 12MP + 10MP',
      battery: '4000mAh',
      os: 'Android 15'
    },
    inStock: true,
    rating: 4.5,
    reviewCount: 567,
    colors: ['Navy', 'Silver Shadow', 'Icy Blue', 'Mint'],
    category: 'mid-range'
  },
  {
    id: '6',
    name: 'Pixel 9',
    brand: 'Google',
    price: 799,
    originalPrice: 899,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.3" Actua OLED',
      processor: 'Google Tensor G4',
      ram: '12GB',
      storage: '128GB',
      camera: '50MP + 48MP',
      battery: '4700mAh',
      os: 'Android 15'
    },
    inStock: true,
    rating: 4.4,
    reviewCount: 423,
    colors: ['Obsidian', 'Porcelain', 'Hazel'],
    category: 'mid-range'
  },
  {
    id: '7',
    name: 'Galaxy A55',
    brand: 'Samsung',
    price: 449,
    originalPrice: 499,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '6.6" Super AMOLED',
      processor: 'Exynos 1480',
      ram: '8GB',
      storage: '128GB',
      camera: '50MP + 12MP + 5MP',
      battery: '5000mAh',
      os: 'Android 14'
    },
    inStock: true,
    rating: 4.2,
    reviewCount: 312,
    colors: ['Awesome Navy', 'Awesome Lemon', 'Awesome Lilac', 'Awesome Iceblue'],
    category: 'budget'
  },
  {
    id: '8',
    name: 'iPhone SE (2025)',
    brand: 'Apple',
    price: 429,
    originalPrice: 479,
    image: 'https://placehold.co/800x600.png',
    specs: {
      display: '4.7" Retina HD',
      processor: 'A18',
      ram: '4GB',
      storage: '64GB',
      camera: '12MP',
      battery: '2018mAh',
      os: 'iOS 18'
    },
    inStock: false,
    rating: 4.3,
    reviewCount: 756,
    colors: ['Midnight', 'Starlight', 'Red'],
    category: 'budget'
  }

const brands = ['Apple', 'Samsung', 'Google']
const categories = ['flagship', 'mid-range', 'budget']

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'rating' | 'name'>('price-low')
  const [showFilters, setShowFilters] = useState(false)

  const filteredAndSortedPhones = useMemo(() => {
    let result = [...allPhones]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(phone =>
        phone.name.toLowerCase().includes(query) ||
        phone.brand.toLowerCase().includes(query)
      )
    }

    if (selectedBrands.length > 0) {
      result = result.filter(phone => selectedBrands.includes(phone.brand))
    }

    if (selectedCategories.length > 0) {
      result = result.filter(phone => selectedCategories.includes(phone.category))
    }

    result = result.filter(phone =>
      phone.price >= priceRange[0] && phone.price <= priceRange[1]
    )

    if (inStockOnly) {
      result = result.filter(phone => phone.inStock)
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return result
  }, [searchQuery, selectedBrands, selectedCategories, priceRange, inStockOnly, sortBy])

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedBrands([])
    setSelectedCategories([])
    setPriceRange([0, 2000])
    setInStockOnly(false)
    setSortBy('price-low')
  }

  const activeFilterCount = selectedBrands.length + selectedCategories.length + (inStockOnly ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 2000 ? 1 : 0)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">All Phones</h1>
            <p className="text-muted-foreground mt-2">Browse our complete collection of premium smartphones</p>
          </div>
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search phones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-2">{activeFilterCount}</Badge>
              )}
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className={cn(
            "lg:w-72 space-y-6",
            showFilters ? "block" : "hidden lg:block"
          )}>
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Filters</CardTitle>
                  {activeFilterCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear all
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-3 block">Brand</Label>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <Label htmlFor={`brand-${brand}`} className="text-sm font-normal cursor-pointer">
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">Category</Label>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer capitalize">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">Price Range</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-20"
                    />
                    <span className="text-muted-foreground">to</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])}
                      className="w-20"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="in-stock"
                    checked={inStockOnly}
                    onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
                  />
                  <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
                    In stock only
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="text-sm text-muted-foreground">
                Showing {filteredAndSortedPhones.length} of {allPhones.length} phones
              </div>
              <div className="flex items-center gap-2">
                <Label className="text-sm whitespace-nowrap">Sort by:</Label>
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredAndSortedPhones.length === 0 ? (
              <Card className="p-12 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No phones found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                <Button variant="outline" onClick={clearFilters}>Clear all filters</Button>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedPhones.map((phone) => (
                  <Card key={phone.id} className="group overflow-hidden transition-all hover:shadow-lg flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      {!phone.inStock && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                      {phone.originalPrice && (
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">Save ${phone.originalPrice - phone.price}</Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-2 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{phone.brand}</p>
                          <CardTitle className="text-xl mt-1">{phone.name}</CardTitle>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">${phone.price}</div>
                          {phone.originalPrice && (
                            <div className="text-sm text-muted-foreground line-through">${phone.originalPrice}</div>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-4 w-4",
                                i < Math.floor(phone.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                              )}