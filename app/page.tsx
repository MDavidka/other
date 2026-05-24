import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { formatPrice } from '@/lib/utils'
import type { Phone, Category } from '@/lib/types'

export default function HomePage() {
  const [phones, setPhones] = useState<Phone[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>('All')
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    // Mock data; replace with real API call if needed
    const data: Phone[] = [
      { id: '1', name: 'Phone A', price: 699, image: 'https://placehold.co/400x600.png', category: 'Smartphone' },
      { id: '2', name: 'Phone B', price: 499, image: 'https://placehold.co/400x600.png', category: 'Feature Phone' },
      { id: '3', name: 'Phone C', price: 799, image: 'https://placehold.co/400x600.png', category: 'Smartphone' },
      { id: '4', name: 'Phone D', price: 299, image: 'https://placehold.co/400x600.png', category: 'Feature Phone' },

    setPhones(data)
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) setCart(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const filteredPhones = phones.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || p.category === category
    return matchesSearch && matchesCategory
  })

  const categories: Category[] = ['All', 'Smartphone', 'Feature Phone']

  const addToCart = (phone: Phone) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === phone.id)
      if (existing) {
        return prev.map((item) =>
          item.id === phone.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...phone, quantity: 1 }]
    })
  }

  return (
    <main className={cn('p-4 sm:p-6 lg:p-8')}>
      <section className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Input
            placeholder="Search phones..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
          <div className="flex gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhones.map((phone) => (
          <Card key={phone.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{phone.name}</CardTitle>
              <CardDescription>{phone.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center">
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-48 object-cover mb-4"
              />
              <Badge variant="secondary">{formatPrice(phone.price)}</Badge>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button onClick={() => addToCart(phone)} variant="outline">
                Add to Cart
              </Button>
              <Badge variant="outline">
                {cart.find((c) => c.id === phone.id)?.quantity ?? 0}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  )
}

app/page.tsx[usedfor]Home page displaying phones with search, filter, and cart functionality[/usedfor]