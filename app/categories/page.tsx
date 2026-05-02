import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Categories | Vibrators, Bondage, Lingerie",
  description: "Shop by category: vibrators, anal toys, bondage gear, lingerie, lubricants and more.",
}

export default function CategoriesPage() {
  return (
    <>
<section id="hero-categories" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="items-center space-y-6 text-center py-24"><h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Shop by Category</h2>
<p className="text-muted-foreground max-w-md">Find exactly what you're craving</p></div></div></section>

<section id="categories-grid" className="relative w-full py-20 md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid-cols-2 lg:grid-cols-4 gap-8"></div></div></section>
    </>
  )
}
