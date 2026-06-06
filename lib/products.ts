export interface Product {
  id: string;
  name: string;
  tagline: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  colors: { name: string; hex: string }[];
  storage: string[]; // e.g. ["128GB", "256GB", "512GB", "1TB"]
  os: "iOS" | "Android";
  chipset: string;
  camera: string;
  battery: string;
  display: string;
  weight: string;
  stock: number;
  isFlagship?: boolean;
  isTrending?: boolean;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "aero-15-pro",
    name: "Aero 15 Pro",
    tagline: "The Ultimate Titanium Flagship",
    brand: "AeroPhone",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviewsCount: 312,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&auto=format&fit=crop&q=80",
    colors: [
      { name: "Titanium Cyber", hex: "#707072" },
      { name: "Neon Obsidian", hex: "#1c1c1e" },
      { name: "Aurora Cyan", hex: "#06b6d4" }
    ],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    os: "Android",
    chipset: "Aero Quantum X4 (3nm)",
    camera: "200MP Triple-Lens OIS System with 10x Optical Zoom",
    battery: "5200 mAh with 120W HyperCharge",
    display: "6.8\" LTPO OLED, 144Hz, HDR10+, 3000 nits peak",
    weight: "204g",
    stock: 15,
    isFlagship: true,
    isTrending: true,
    features: [
      "Titanium Alloy Exoskeleton",
      "Quantum Neural Engine for AI photography",
      "Integrated Holographic Projection Assist",
      "Under-display Ultra-sonic fingerprint reader"
    ]
  },
  {
    id: "aero-15-air",
    name: "Aero 15 Air",
    tagline: "Featherlight Speed. Infinite Style.",
    brand: "AeroPhone",
    price: 899,
    rating: 4.7,
    reviewsCount: 184,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    colors: [
      { name: "Sleek Platinum", hex: "#cbd5e1" },
      { name: "Electric Blue", hex: "#2563eb" },
      { name: "Mint Spark", hex: "#34d399" }
    ],
    storage: ["128GB", "256GB", "512GB"],
    os: "Android",
    chipset: "Aero Quantum Light V2",
    camera: "108MP Dual-Lens with Cinematic Stabilization",
    battery: "4600 mAh with 67W SuperCharge",
    display: "6.5\" AMOLED, 120Hz, 2000 nits peak",
    weight: "168g",
    stock: 24,
    isFlagship: false,
    isTrending: true,
    features: [
      "Ultra-slim 6.9mm chassis",
      "Dual Stereo Audio by Harman",
      "Recycled aerospace-grade aluminum",
      "Next-Gen 5G Multi-Band Antenna"
    ]
  },
  {
    id: "quantum-fold-x",
    name: "Quantum Fold X",
    tagline: "Bend the Rules of Reality",
    brand: "AeroPhone",
    price: 1799,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    colors: [
      { name: "Midnight Nebula", hex: "#0f172a" },
      { name: "Gold Dust", hex: "#fbbf24" }
    ],
    storage: ["512GB", "1TB"],
    os: "Android",
    chipset: "Aero Quantum Fold Pro",
    camera: "50MP Triple-Lens Seamless Dual-Screen Camera",
    battery: "5000 mAh Dual-Cell with 80W Charge",
    display: "7.9\" Foldable Dynamic AMOLED 2X, 120Hz / 6.2\" Cover Display",
    weight: "239g",
    stock: 5,
    isFlagship: true,
    isTrending: false,
    features: [
      "Zero-Gap Fluid Hinge System",
      "Multitasking Dashboard with 4-App split screen",
      "Stylus Pen support embedded in chassis",
      "Ultra-Thin Glass (UTG) 3.0 protection"
    ]
  },
  {
    id: "apex-nova-ultra",
    name: "Apex Nova Ultra",
    tagline: "The Pro Photographer's Dream",
    brand: "Apex",
    price: 1099,
    rating: 4.9,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    colors: [
      { name: "Carbon Fiber", hex: "#1e293b" },
      { name: "Sunset Copper", hex: "#ea580c" }
    ],
    storage: ["256GB", "512GB", "1TB"],
    os: "Android",
    chipset: "Snapdragon 8 Gen 4 Extreme",
    camera: "50MP 1-inch Leica Main Sensor + 48MP Zoom",
    battery: "5400 mAh with 100W Charge",
    display: "6.73\" QHD+ Curved AMOLED, 120Hz",
    weight: "212g",
    stock: 8,
    isFlagship: false,
    isTrending: true,
    features: [
      "1-inch Premium Camera Sensor",
      "Custom Matte Ceramic Back",
      "IP69 Dust and Deep-Water Proofing",
      "Symmetric Quad-Speakers"
    ]
  },
  {
    id: "lumia-pro-16",
    name: "Lumia Pro 16",
    tagline: "Pure Simplicity, Pure Power",
    brand: "Lumia",
    price: 999,
    rating: 4.6,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80",
    colors: [
      { name: "Alabaster White", hex: "#f8fafc" },
      { name: "Mystic Violet", hex: "#7c3aed" }
    ],
    storage: ["128GB", "256GB", "512GB"],
    os: "iOS",
    chipset: "A18 Pro Bionic",
    camera: "48MP Dual Fusion Camera with Cinematic mode",
    battery: "4400 mAh with 45W Charge",
    display: "6.7\" Super Retina XDR OLED, 120Hz",
    weight: "199g",
    stock: 12,
    isFlagship: false,
    isTrending: false,
    features: [
      "Seamless iOS Dynamic Island Integration",
      "Action Smart-Key with Tactile Feedback",
      "Micro-crystalline Ceramic Shield glass",
      "Spatial Video Capture for Vision headsets"
    ]
  },
  {
    id: "aero-lite-15",
    name: "Aero Lite 15",
    tagline: "Essential Power for Everyone",
    brand: "AeroPhone",
    price: 499,
    rating: 4.5,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=600&auto=format&fit=crop&q=80",
    colors: [
      { name: "Space Gray", hex: "#475569" },
      { name: "Ocean Blue", hex: "#0284c7" }
    ],
    storage: ["128GB", "256GB"],
    os: "Android",
    chipset: "Aero Quantum Lite V1",
    camera: "64MP Quad-pixel Dual Camera",
    battery: "5000 mAh with 33W Charge",
    display: "6.4\" FHD+ IPS LCD, 90Hz",
    weight: "180g",
    stock: 30,
    isFlagship: false,
    isTrending: false,
    features: [
      "Outstanding 2-day battery life",
      "Expandable MicroSD Slot up to 1TB",
      "3.5mm Audiophile Headphone Jack",
      "Ergonomic curved glass back"
    ]
  }
];
