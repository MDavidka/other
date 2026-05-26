export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string; // URL to the product image
  category: string;
  brand: string;
  storageOptions: string[]; // e.g., ['128GB', '256GB', '512GB']
  colorOptions: string[]; // e.g., ['Black', 'White', 'Blue']
  displaySize: string; // e.g., '6.1-inch'
  cameraSpecs: string; // e.g., 'Dual 12MP'
  batteryLife: string; // e.g., 'Up to 20 hours video playback'
  inStock: boolean;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    description:
      "The latest iPhone with a powerful A17 Bionic chip, Pro camera system, and a durable titanium design.",
    price: 999.99,
    image: "https://placehold.co/800x600.png",
    category: "Smartphone",
    brand: "Apple",
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    colorOptions: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    displaySize: "6.1-inch Super Retina XDR",
    inStock: true,
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    description:
      "Experience the ultimate mobile innovation with the Galaxy S24 Ultra, featuring AI capabilities and an incredible camera.",
    price: 1199.99,
    image: "https://placehold.co/800x600.png",
    category: "Smartphone",
    brand: "Samsung",
    storageOptions: ["256GB", "512GB", "1TB"],
    colorOptions: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"],
    displaySize: "6.8-inch Dynamic AMOLED 2X",
    inStock: true,
  },
  {
    id: "3",
    name: "Google Pixel 8 Pro",
    slug: "google-pixel-8-pro",
    description:
      "Google's most advanced phone yet, powered by Google Tensor G3 for cutting-edge AI and photography.",
    price: 899.00,
    image: "https://placehold.co/800x600.png",
    category: "Smartphone",
    brand: "Google",
    storageOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Obsidian", "Porcelain", "Bay"],
    displaySize: "6.7-inch Super Actua",
    batteryLife: "Beyond 24 hours",
    inStock: true,
  },
  {
    id: "4",
    name: "OnePlus 12",
    slug: "oneplus-12",
    description:
      "Fast and fluid, the OnePlus 12 delivers flagship performance with a stunning display and powerful camera.",
    price: 799.00,
    image: "https://placehold.co/800x600.png",
    category: "Smartphone",
    brand: "OnePlus",
    storageOptions: ["256GB", "512GB"],
    colorOptions: ["Flowy Emerald", "Silky Black"],
    displaySize: "6.82-inch Fluid AMOLED",
    batteryLife: "All-day battery life",
    inStock: true,
  },
  {
    id: "5",
    name: "Xiaomi 14 Ultra",
    slug: "xiaomi-14-ultra",
    description:
      "Unleash your creativity with the Xiaomi 14 Ultra, co-engineered with Leica for professional-grade photography.",
    price: 1099.00,
    image: "https://placehold.co/800x600.png",
    category: "Smartphone",
    brand: "Xiaomi",
    storageOptions: ["256GB", "512GB", "1TB"],
    colorOptions: ["Black", "White", "Titanium Gray"],
    displaySize: "6.73-inch AMOLED",
    inStock: false,
  },
  {
    id: "6",
    name: "Sony Xperia 1 VI",
    slug: "sony-xperia-1-vi",
    description:
      "Designed for creators, the Sony Xperia 1 VI offers an immersive display and advanced camera features.",
    price: 1299.00,
    image: "https://placehold.co/800x600.png",
    category: "Smartphone",
    brand: "Sony",
    storageOptions: ["256GB", "512GB"],
    colorOptions: ["Black", "Khaki Green", "Platinum Silver"],
    displaySize: "6.5-inch 21:9 Wide OLED",
    batteryLife: "Long-lasting battery",
    inStock: true,
  },
];

export async function getProducts(): Promise<Product[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockProducts;
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockProducts.find((product) => product.slug === slug);