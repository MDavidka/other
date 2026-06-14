export interface Building {
  id: string;
  name: string;
  description: string;
  baseCost: number;
  baseCps: number;
  quantity: number;
  icon: string;
}

export interface Upgrade {
  id: string;
  name: string;
  description: string;
  cost: number;
  purchased: boolean;
  effect: string; // e.g. "click_x2", "cursor_x2", "grandma_x2", "all_cps_plus_5"
  icon: string;
  category: 'click' | 'cursor' | 'grandma' | 'farm' | 'mine' | 'factory' | 'global';
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  conditionType: 'cookies_baked' | 'cookies_ps' | 'clicks' | 'buildings_owned' | 'upgrades_purchased';
  conditionValue: number;
  targetId?: string; // e.g., if checking quantity of a specific building like 'grandma'
  icon: string;
}

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  history: number[]; // Last 20 prices for charting
  sharesOwned: number;
  volatility: number; // How much it tends to jump
  trend: number; // Current market momentum (-1 to 1)
}

export interface ActiveBuff {
  id: string; // "frenzy", "click_frenzy", "lucky"
  name: string;
  multiplier: number;
  duration: number; // In seconds
  maxDuration: number;
  color: string;
}

export interface GameStats {
  totalCookiesBaked: number;
  currentCookies: number;
  totalClicks: number;
  timePlayed: number; // in seconds
  goldenCookiesClicked: number;
  spinWheelCount: number;
}

export interface SaveData {
  cookies: number;
  totalCookiesBaked: number;
  totalClicks: number;
  timePlayed: number;
  goldenCookiesClicked: number;
  spinWheelCount: number;
  buildings: { id: string; quantity: number }[];
  upgrades: string[]; // ids of purchased upgrades
  achievements: string[]; // ids of unlocked achievements
  stockPrices: { symbol: string; price: number; history: number[]; owned: number }[];
  bakeryName: string;
  cookieFlavor: string;
  theme: string;
  soundVolume: number;
}

export const INITIAL_BUILDINGS: Building[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'Autoclicks once every 10 seconds. Keep those fingers resting!',
    baseCost: 15,
    baseCps: 0.1,
    quantity: 0,
    icon: 'MousePointerClick',
  },
  {
    id: 'grandma',
    name: 'Grandma',
    description: 'A nice grandma to bake more cookies. She smells of vanilla.',
    baseCost: 100,
    baseCps: 1,
    quantity: 0,
    icon: 'UserRound',
  },
  {
    id: 'farm',
    name: 'Cookie Farm',
    description: 'Grows cookie plants from cookie seeds in rich chocolate soil.',
    baseCost: 1100,
    baseCps: 8,
    quantity: 0,
    icon: 'Sprout',
  },
  {
    id: 'mine',
    name: 'Cookie Mine',
    description: 'Mines deep into the earth for chocolate chips and cookie dough.',
    baseCost: 12000,
    baseCps: 47,
    quantity: 0,
    icon: 'Pickaxe',
  },
  {
    id: 'factory',
    name: 'Cookie Factory',
    description: 'A massive industrial assembly line mass-producing sweet treats.',
    baseCost: 130000,
    baseCps: 260,
    quantity: 0,
    icon: 'Factory',
  },
  {
    id: 'temple',
    name: 'Cookie Temple',
    description: 'A holy place dedicated to worshiping the ancient Cookie Gods.',
    baseCost: 1400000,
    baseCps: 1400,
    quantity: 0,
    icon: 'Church',
  },
  {
    id: 'wizard_tower',
    name: 'Wizard Tower',
    description: 'Summons cookies out of thin air using ancient cookie spells.',
    baseCost: 17000000,
    baseCps: 7800,
    quantity: 0,
    icon: 'Flame',
  },
  {
    id: 'shipment',
    name: 'Shipment',
    description: 'Brings fresh cookies straight from the Cookie Planet in space.',
    baseCost: 260000000,
    baseCps: 44000,
    quantity: 0,
    icon: 'Rocket',
  },
  {
    id: 'alchemy_lab',
    name: 'Alchemy Lab',
    description: 'Transmutes raw gold directly into delicious, edible cookies.',
    baseCost: 3100000000,
    baseCps: 260000,
    quantity: 0,
    icon: 'FlaskConical',
  },
  {
    id: 'portal',
    name: 'Cookie Portal',
    description: 'Opens a dimensional rift to the infinite Cookie Dimension.',
    baseCost: 75000000000,
    baseCps: 1600000,
    quantity: 0,
    icon: 'Infinity',
  },
  {
    id: 'time_machine',
    name: 'Time Machine',
    description: 'Brings cookies from the past, before they were even baked or eaten.',
    baseCost: 1000000000000,
    baseCps: 10000000,
    quantity: 0,
    icon: 'Timer',
  }
];

export const INITIAL_UPGRADES: Upgrade[] = [
  {
    id: 'reinforced_cursors',
    name: 'Reinforced Cursors',
    description: 'Cursors are twice as efficient.',
    cost: 150,
    purchased: false,
    effect: 'cursor_x2',
    icon: 'MousePointerClick',
    category: 'cursor',
  },
  {
    id: 'carpal_tunnel_prevention',
    name: 'Carpal Tunnel Shield',
    description: 'Cursors are twice as efficient. +1 cookies per manual click.',
    cost: 500,
    purchased: false,
    effect: 'cursor_x2_click_plus1',
    icon: 'ShieldAlert',
    category: 'cursor',
  },
  {
    id: 'ambidextrous',
    name: 'Ambidextrous Clicking',
    description: 'Manual clicking is twice as powerful.',
    cost: 10000,
    purchased: false,
    effect: 'click_x2',
    icon: 'Hand',
    category: 'click',
  },
  {
    id: 'thousand_fingers',
    name: 'Thousand Fingers',
    description: 'The mouse and cursors gain +0.1 cookies per click for each non-cursor building owned.',
    cost: 100000,
    purchased: false,
    effect: 'thousand_fingers',
    icon: 'Sparkles',
    category: 'cursor',
  },
  {
    id: 'forwards_from_grandma',
    name: 'Forwards from Grandma',
    description: 'Grandmas are twice as efficient.',
    cost: 1000,
    purchased: false,
    effect: 'grandma_x2',
    icon: 'Mail',
    category: 'grandma',
  },
  {
    id: 'steel_plated_rolling_pins',
    name: 'Steel Rolling Pins',
    description: 'Grandmas are twice as efficient.',
    cost: 5000,
    purchased: false,
    effect: 'grandma_x2',
    icon: 'Hammer',
    category: 'grandma',
  },
  {
    id: 'cheap_hoe',
    name: 'Slightly Better Hoe',
    description: 'Cookie Farms are twice as efficient.',
    cost: 11000,
    purchased: false,
    effect: 'farm_x2',
    icon: 'Sprout',
    category: 'farm',
  },
  {
    id: 'fertilizer',
    name: 'Organic Fertilizer',
    description: 'Cookie Farms are twice as efficient.',
    cost: 55000,
    purchased: false,
    effect: 'farm_x2',
    icon: 'Biohazard',
    category: 'farm',
  },
  {
    id: 'sugar_rush',
    name: 'Sugar Rush',
    description: 'Increases your global cookie production (CPS) by 5%.',
    cost: 500000,
    purchased: false,
    effect: 'global_cps_plus_5',
    icon: 'Zap',
    category: 'global',
  },
  {
    id: 'chocolate_chip_infusion',
    name: 'Chocolate Chip Infusion',
    description: 'Increases your global cookie production (CPS) by 10%.',
    cost: 5000000,
    purchased: false,
    effect: 'global_cps_plus_10',
    icon: 'Cookie',
    category: 'global',
  },
  {
    id: 'golden_chime',
    name: 'Golden Cookie Alert Chime',
    description: 'Golden cookies appear twice as often and stay on screen twice as long.',
    cost: 7777777,
    purchased: false,
    effect: 'golden_cookie_boost',
    icon: 'Bell',
    category: 'global',
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'wake_and_bake',
    name: 'Wake and Bake',
    description: 'Bake your first cookie.',
    unlocked: false,
    conditionType: 'cookies_baked',
    conditionValue: 1,
    icon: 'Sun',
  },
  {
    id: 'clicky_click',
    name: 'Clicky Click',
    description: 'Click the big cookie 100 times.',
    unlocked: false,
    conditionType: 'clicks',
    conditionValue: 100,
    icon: 'MousePointerClick',
  },
  {
    id: 'cookie_enthusiast',
    name: 'Cookie Enthusiast',
    description: 'Reach 100 Cookies Per Second (CPS).',
    unlocked: false,
    conditionType: 'cookies_ps',
    conditionValue: 100,
    icon: 'Flame',
  },
  {
    id: 'grandma_friend',
    name: 'Grandma\'s Little Helper',
    description: 'Own 5 Grandmas.',
    unlocked: false,
    conditionType: 'buildings_owned',
    conditionValue: 5,
    targetId: 'grandma',
    icon: 'UserRound',
  },
  {
    id: 'industrial_revolution',
    name: 'Industrial Revolution',
    description: 'Own 3 Cookie Factories.',
    unlocked: false,
    conditionType: 'buildings_owned',
    conditionValue: 3,
    targetId: 'factory',
    icon: 'Factory',
  },
  {
    id: 'cookie_millionaire',
    name: 'Cookie Millionaire',
    description: 'Bake 1,000,000 cookies in total.',
    unlocked: false,
    conditionType: 'cookies_baked',
    conditionValue: 1000000,
    icon: 'Gem',
  },
  {
    id: 'cookie_billionaire',
    name: 'Cookie Billionaire',
    description: 'Bake 1,000,000,000 cookies in total.',
    unlocked: false,
    conditionType: 'cookies_baked',
    conditionValue: 1000000000,
    icon: 'Crown',
  },
  {
    id: 'upgrade_collector',
    name: 'Upgrade Collector',
    description: 'Purchase 5 upgrades.',
    unlocked: false,
    conditionType: 'upgrades_purchased',
    conditionValue: 5,
    icon: 'Award',
  }
];

export const INITIAL_STOCKS: Stock[] = [
  {
    symbol: 'CHOC',
    name: 'Cocoa Futures',
    price: 10,
    history: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    sharesOwned: 0,
    volatility: 0.12,
    trend: 0.02,
  },
  {
    symbol: 'SUGR',
    name: 'Refined Sugar Corp',
    price: 35,
    history: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
    sharesOwned: 0,
    volatility: 0.08,
    trend: 0.01,
  },
  {
    symbol: 'FLUR',
    name: 'Gluten-Free Flour Ltd',
    price: 60,
    history: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    sharesOwned: 0,
    volatility: 0.05,
    trend: -0.01,
  },
  {
    symbol: 'BUTR',
    name: 'Golden Butter Co.',
    price: 120,
    history: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
    sharesOwned: 0,
    volatility: 0.18,
    trend: 0.03,
  },
  {
    symbol: 'YST',
    name: 'Royal Yeast Trust',
    price: 210,
    history: [210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210],
    sharesOwned: 0,
    volatility: 0.25,
    trend: -0.02,
  }
];

export const FLAVORS = [
  { id: 'chocolate_chip', name: 'Chocolate Chip', color: 'bg-[#8B5A2B]', text: 'text-[#8B5A2B]', desc: 'The classic golden-brown cookie with rich dark chocolate chips.' },
  { id: 'double_chocolate', name: 'Double Chocolate', color: 'bg-[#3D2314]', text: 'text-[#3D2314]', desc: 'Rich chocolate dough loaded with milk chocolate chunks.' },
  { id: 'matcha', name: 'Matcha Green Tea', color: 'bg-[#4F7942]', text: 'text-[#4F7942]', desc: 'Earthy Japanese matcha dough with sweet white chocolate chips.' },
  { id: 'macadamia', name: 'White Macadamia', color: 'bg-[#D2B48C]', text: 'text-[#D2B48C]', desc: 'Buttery, soft cookie with roasted macadamia nuts and white chocolate.' },
  { id: 'sugar', name: 'Frosted Sugar', color: 'bg-[#FFC0CB]', text: 'text-[#FFC0CB]', desc: 'Sweet, pillowy sugar cookie topped with pink frosting and sprinkles.' }
];

export const THEMES = [
  { id: 'classic', name: 'Classic Bakery', bg: 'bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950 dark:to-stone-900 border-amber-200 dark:border-amber-900' },
  { id: 'cosmic', name: 'Cosmic Nebula', bg: 'bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 border-purple-900' },
  { id: 'neon', name: 'Cyberpunk Neon', bg: 'bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 border-cyan-900' },
  { id: 'retro', name: '8-Bit Retro', bg: 'bg-gradient-to-br from-green-950 via-stone-900 to-green-950 border-green-800' }
];
