export interface Product {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Google' | 'OnePlus';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  colors: { name: string; hex: string }[];
  storage: string[]; // e.g. ["128GB", "256GB", "512GB", "1TB"]
  specs: {
    screen: string;
    processor: string;
    camera: string;
    battery: string;
    weight: string;
    os: string;
  };
  tags: string[];
  description: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviewsCount: 342,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600",
    colors: [
      { name: "Titanium Gray", hex: "#8A8D8F" },
      { name: "Titanium Black", hex: "#232426" },
      { name: "Titanium Blue", hex: "#2F4452" },
      { name: "Titanium White", hex: "#F2F1ED" }
    ],
    storage: ["256GB", "512GB", "1TB"],
    specs: {
      screen: "6.7-inch Super Retina XDR OLED, 120Hz",
      processor: "A17 Pro Chip (3nm) with 6-core GPU",
      camera: "48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto",
      battery: "4441 mAh with 25W Fast Charging",
      weight: "221g",
      os: "iOS 17 (Upgradable to iOS 18)"
    },
    tags: ["Flagship", "Titanium", "5x Zoom"],
    description: "Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.",
    featured: true
  },
  {
    id: "galaxy-s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1249,
    originalPrice: 1379,
    rating: 4.8,
    reviewsCount: 289,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600",
    colors: [
      { name: "Titanium Yellow", hex: "#E9E3CE" },
      { name: "Titanium Violet", hex: "#463E52" },
      { name: "Titanium Gray", hex: "#7E8083" },
      { name: "Titanium Black", hex: "#212224" }
    ],
    storage: ["256GB", "512GB", "1TB"],
    specs: {
      screen: "6.8-inch Dynamic AMOLED 2X, QHD+, 120Hz",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      camera: "200MP Main + 50MP + 12MP + 10MP Quad Camera with 100x Zoom",
      battery: "5000 mAh with 45W Fast Charging",
      weight: "232g",
      os: "Android 14 with One UI 6.1"
    },
    tags: ["AI Built-in", "S-Pen", "200MP Camera"],
    description: "Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility.",
    featured: true
  },
  {
    id: "pixel-8-pro",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 899,
    originalPrice: 999,
    rating: 4.7,
    reviewsCount: 194,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600",
    colors: [
      { name: "Bay Blue", hex: "#97B6D1" },
      { name: "Porcelain", hex: "#F3EFE9" },
      { name: "Obsidian", hex: "#2E2F30" }
    ],
    storage: ["128GB", "256GB", "512GB"],
    specs: {
      screen: "6.7-inch Super Actua Display, LTPO OLED, 120Hz",
      processor: "Google Tensor G3 (4nm) with Titan M2 security",
      camera: "50MP Main + 48MP Ultra Wide + 48MP 5x Zoom",
      battery: "5050 mAh with 30W Fast Charging",
      weight: "213g",
      os: "Android 14 (Pure Pixel Experience)"
    },
    tags: ["Best Camera AI", "Pure Android", "Magic Eraser"],
    description: "The all-pro phone engineered by Google. It has the best of Google AI, the most advanced Pixel Camera ever, and can even help you screen spam calls.",
    featured: true
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 799,
    originalPrice: 899,
    rating: 4.7,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&q=80&w=600",
    colors: [
      { name: "Flowy Emerald", hex: "#4A6E5D" },
      { name: "Silky Black", hex: "#222325" }
    ],
    storage: ["256GB", "512GB"],
    specs: {
      screen: "6.82-inch 2K Oriental AMOLED, 120Hz, ProXDR",
      processor: "Snapdragon 8 Gen 3 (4nm)",
      camera: "50MP Sony LYT-808 + 64MP 3x Periscope + 48MP Ultra Wide",
      battery: "5400 mAh with 100W SUPERVOOC Charging",
      weight: "220g",
      os: "OxygenOS based on Android 14"
    },
    tags: ["100W Fast Charge", "Hasselblad", "Value Flagship"],
    description: "Redefined flagship specs. Powered by Snapdragon 8 Gen 3, Hasselblad 4th Gen Camera, and a monstrous 5400mAh battery with ultra-fast 100W wired charging.",
    featured: true
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    price: 799,
    originalPrice: 849,
    rating: 4.6,
    reviewsCount: 122,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600",
    colors: [
      { name: "Black", hex: "#222222" },
      { name: "Blue", hex: "#D2E5F1" },
      { name: "Green", hex: "#D6ECE3" },
      { name: "Yellow", hex: "#FCF3CF" },
      { name: "Pink", hex: "#FADBD8" }
    ],
    storage: ["128GB", "256GB", "512GB"],
    specs: {
      screen: "6.1-inch Super Retina XDR OLED",
      processor: "A16 Bionic chip with 5-core GPU",
      camera: "48MP Dual Camera system with 2x Telephoto",
      battery: "3349 mAh with 20W Fast Charging",
      weight: "171g",
      os: "iOS 17"
    },
    tags: ["Compact", "Dynamic Island"],
    description: "Features Dynamic Island, a 48MP Main camera, and USB-C, all in a durable color-infused glass and aluminum design.",
    featured: false
  },
  {
    id: "galaxy-s24-plus",
    name: "Galaxy S24+",
    brand: "Samsung",
    price: 999,
    originalPrice: 1049,
    rating: 4.7,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600",
    colors: [
      { name: "Onyx Black", hex: "#292A2D" },
      { name: "Marble Gray", hex: "#8F9194" },
      { name: "Cobalt Violet", hex: "#48435C" },
      { name: "Amber Yellow", hex: "#EADFB8" }
    ],
    storage: ["256GB", "512GB"],
    specs: {
      screen: "6.7-inch Dynamic AMOLED 2X, QHD+, 120Hz",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      camera: "50MP Main + 10MP + 12MP Triple Camera",
      battery: "4900 mAh with 45W Fast Charging",
      weight: "196g",
      os: "Android 14 with One UI"
    },
    tags: ["Sleek", "QHD+ Screen"],
    description: "The perfect middle ground. Experience the incredible power of Galaxy AI, a beautiful QHD+ screen, and long-lasting battery life in a slim frame.",
    featured: false
  }
];

export const REPAIR_SERVICES = [
  {
    id: "screen-replacement",
    name: "OLED/LCD Screen Replacement",
    description: "Restore your vibrant display and touch responsiveness. We use certified OEM-grade high-fidelity glass panels.",
    basePrice: 129,
    duration: "30-45 Mins",
    popular: true
  },
  {
    id: "battery-replacement",
    name: "Ultra-Life Battery Swap",
    description: "Swap out your degraded battery for a brand-new, high-density cell with original capacity and health calibration.",
    basePrice: 69,
    duration: "20-30 Mins",
    popular: false
  },
  {
    id: "charging-port",
    name: "USB-C / Lightning Port Repair",
    description: "Fix loose connections, slow charging speeds, or unresponsive ports with a complete dock assembly swap.",
    basePrice: 59,
    duration: "40 Mins",
    popular: false
  },
  {
    id: "camera-repair",
    name: "Hasselblad/Leica Lens & Sensor Realignment",
    description: "Fix blurry cameras, broken lens covers, or faulty optical image stabilization (OIS) mechanisms.",
    basePrice: 99,
    duration: "1 Hour",
    popular: true
  },
  {
    id: "water-damage",
    name: "Liquid Damage Diagnostics & Sonic Wash",
    description: "Deep ultrasonic cleaning, moisture extraction, and board-level micro-soldering to recover dead devices.",
    basePrice: 149,
    duration: "24-48 Hours",
    popular: false
  }
];

export const STORE_LOCATIONS = [
  {
    id: "neo-tokyo-flagship",
    name: "Phonix Neo-Tokyo Flagship",
    address: "7-14 Akihabara, Chiyoda City, Tokyo 101-0021",
    phone: "+81 3-5555-0199",
    hours: "10:00 AM - 10:00 PM",
    isFeatured: true,
    latLng: "35.6997° N, 139.7715° E"
  },
  {
    id: "neon-grid-la",
    name: "Phonix Los Angeles Hub",
    address: "808 South Broadway, Los Angeles, CA 90014",
    phone: "+1 (213) 555-0142",
    hours: "09:00 AM - 09:00 PM",
    isFeatured: false,
    latLng: "34.0430° N, 118.2558° W"
  },
  {
    id: "cyber-hub-london",
    name: "Phonix London Tech-Base",
    address: "24 Shoreditch High St, London E1 6PG",
    phone: "+44 20 7946 0958",
    hours: "10:00 AM - 08:30 PM",
    isFeatured: false,
    latLng: "51.5229° N, 0.0786° W"
  }
];
