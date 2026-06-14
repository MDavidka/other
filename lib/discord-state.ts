'use client';

export interface UserProfile {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  status: 'online' | 'idle' | 'dnd' | 'offline';
  customStatus?: string;
  bannerColor: string;
  bio: string;
  themeColor: string; // hex color for discord theme
}

export interface Member {
  id: string;
  username: string;
  avatar: string;
  status: 'online' | 'idle' | 'dnd' | 'offline';
  customStatus?: string;
  role: 'Owner' | 'Admin' | 'Member' | 'Bot';
  roleColor: string;
  bannerColor: string;
  bio: string;
  activity?: {
    name: string;
    type: 'playing' | 'listening' | 'streaming';
    details?: string;
    state?: string;
  };
}

export interface Channel {
  id: string;
  name: string;
  type: 'text' | 'voice';
  description?: string;
  unread?: boolean;
}

export interface Server {
  id: string;
  name: string;
  icon: string; // emoji or initials
  color: string; // Tailwind bg color
  channels: Channel[];
  members: Member[];
  isDm?: boolean;
}

export interface Message {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
  isBot?: boolean;
  roleColor?: string;
  attachments?: string[];
  reactions?: { emoji: string; count: number; users: string[] }[];
}

export interface Friend {
  id: string;
  username: string;
  avatar: string;
  status: 'online' | 'idle' | 'dnd' | 'offline';
  customStatus?: string;
  activity?: {
    name: string;
    type: 'playing' | 'listening' | 'streaming';
    details?: string;
    state?: string;
  };
  dmChannelId: string;
}

export const MOCK_MEMBERS: Member[] = [
  {
    id: 'wumpus',
    username: 'Wumpus',
    avatar: '👾',
    status: 'online',
    customStatus: 'Looking for berries 🍓',
    role: 'Admin',
    roleColor: 'text-indigo-400',
    bannerColor: 'bg-indigo-600',
    bio: 'The official Discord mascot. I love berries, hide-and-seek, and warm hugs!',
    activity: { name: 'Hide and Seek', type: 'playing', details: 'In the Whispering Woods' }
  },
  {
    id: 'syra',
    username: 'Syra AI',
    avatar: '🤖',
    status: 'online',
    customStatus: 'Type /help in chat!',
    role: 'Bot',
    roleColor: 'text-discord-brand',
    bannerColor: 'bg-discord-brand',
    bio: 'An elite AI assistant built by Sycord. I can tell jokes, search memes, roll dice, and talk to you!',
    activity: { name: 'Coding Simulator', type: 'playing', details: 'Refactoring Next.js' }
  },
  {
    id: 'nelly',
    username: 'Nelly',
    avatar: '🐹',
    status: 'online',
    customStatus: 'Studying for finals...',
    role: 'Member',
    roleColor: 'text-emerald-400',
    bannerColor: 'bg-emerald-600',
    bio: 'Just a hamster spinning on a wheel of life. Lofi beats are my jam.',
    activity: { name: 'Spotify', type: 'listening', details: 'Lofi Hip Hop Radio', state: 'by ChilledCow' }
  },
  {
    id: 'clyde',
    username: 'Clyde',
    avatar: '👑',
    status: 'idle',
    customStatus: 'AFK eating pizza 🍕',
    role: 'Owner',
    roleColor: 'text-amber-400',
    bannerColor: 'bg-amber-600',
    bio: 'Server owner and retro gaming enthusiast. Ping me for Minecraft sessions.',
    activity: { name: 'Minecraft', type: 'playing', details: 'Building a Redstone Castle' }
  },
  {
    id: 'mee6',
    username: 'MEE6',
    avatar: '🛡️',
    status: 'online',
    role: 'Bot',
    roleColor: 'text-blue-400',
    bannerColor: 'bg-blue-600',
    bio: 'The ultimate moderation bot. Keeping servers clean and levels high.'
  },
  {
    id: 'kaptain_cookie',
    username: 'Captain Cookie',
    avatar: '🍪',
    status: 'offline',
    role: 'Member',
    roleColor: 'text-gray-400',
    bannerColor: 'bg-yellow-800',
    bio: 'I am the captain of the cookie ship. Currently sailing the milk seas.'
  }
];

export const INITIAL_SERVERS: Server[] = [
  {
    id: 'sycord-community',
    name: 'Sycord Community',
    icon: '⚡',
    color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    channels: [
      { id: 'sc-welcome', name: 'welcome', type: 'text', description: 'Welcome to the Sycord Community! Say hello here.' },
      { id: 'sc-general', name: 'general-chat', type: 'text', description: 'The main hub for discussion, coding, and hanging out.' },
      { id: 'sc-memes', name: 'memes', type: 'text', description: 'Post your funniest tech and developer memes here.' },
      { id: 'sc-resources', name: 'resources', type: 'text', description: 'Useful links, articles, and design assets.' },
      { id: 'sc-bot-commands', name: 'bot-commands', type: 'text', description: 'Interact with Syra AI and other bots here.' },
      { id: 'sc-lounge', name: 'Lounge', type: 'voice' },
      { id: 'sc-gaming', name: 'Gaming Duo', type: 'voice' },
      { id: 'sc-music', name: 'Music Room', type: 'voice' }
    ],
    members: MOCK_MEMBERS
  },
  {
    id: 'gamer-guild',
    name: 'Gamer Guild',
    icon: '🎮',
    color: 'bg-gradient-to-br from-red-500 to-orange-500',
    channels: [
      { id: 'gg-welcome', name: 'rules-and-info', type: 'text', description: 'Guild rules and announcements.' },
      { id: 'gg-general', name: 'gaming-chat', type: 'text', description: 'Chat about console, PC, and mobile games.' },
      { id: 'gg-clips', name: 'clips-and-highlights', type: 'text', description: 'Share your epic plays and funny fails.' },
      { id: 'gg-squad-up', name: 'looking-for-group', type: 'text', description: 'Find teammates for multiplayer games.' },
      { id: 'gg-squad-voice', name: 'Squad Voice 1', type: 'voice' },
      { id: 'gg-duo-voice', name: 'Duo Voice 2', type: 'voice' }
    ],
    members: [MOCK_MEMBERS[0], MOCK_MEMBERS[2], MOCK_MEMBERS[3], MOCK_MEMBERS[5]] // Wumpus, Nelly, Clyde, Cookie
  },
  {
    id: 'lofi-lounge',
    name: 'Lofi Study Lounge',
    icon: '☕',
    color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    channels: [
      { id: 'lf-welcome', name: 'intro', type: 'text', description: 'Introduce yourself and share your study goals!' },
      { id: 'lf-general', name: 'chill-chat', type: 'text', description: 'A cozy corner to talk about life, tea, and study habits.' },
      { id: 'lf-playlist', name: 'lofi-playlists', type: 'text', description: 'Share your favorite music tracks and ambient sounds.' },
      { id: 'lf-study-1', name: 'Study Session 1 ☕', type: 'voice' },
      { id: 'lf-study-2', name: 'Silent Study 🤫', type: 'voice' }
    ],
    members: [MOCK_MEMBERS[1], MOCK_MEMBERS[2], MOCK_MEMBERS[4]] // Syra, Nelly, Mee6
  }
];

export const INITIAL_MESSAGES: Record<string, Message[]> = {
  'sc-welcome': [
    { id: 'm1', userId: 'clyde', username: 'Clyde', avatar: '👑', content: 'Welcome to Sycord Community! We are glad you are here. Feel free to explore and ask questions.', timestamp: 'Yesterday at 4:12 PM', roleColor: 'text-amber-400' },
    { id: 'm2', userId: 'mee6', username: 'MEE6', avatar: '🛡️', content: 'Welcome @Wumpus to the server! Go to #general-chat to get started.', timestamp: 'Yesterday at 4:13 PM', isBot: true, roleColor: 'text-blue-400' },
    { id: 'm3', userId: 'wumpus', username: 'Wumpus', avatar: '👾', content: 'Hi everyone! Happy to be here! 🍓', timestamp: 'Yesterday at 4:15 PM', roleColor: 'text-indigo-400' }
  ],
  'sc-general': [
    { id: 'm4', userId: 'clyde', username: 'Clyde', avatar: '👑', content: 'Has anyone tried building with Next.js 15 yet? The App Router speedups look crazy.', timestamp: 'Today at 10:05 AM', roleColor: 'text-amber-400' },
    { id: 'm5', userId: 'nelly', username: 'Nelly', avatar: '🐹', content: 'I built a small dashboard with it yesterday! The Server Actions are so clean, no need for API route boilerplate.', timestamp: 'Today at 10:07 AM', roleColor: 'text-emerald-400' },
    { id: 'm6', userId: 'syra', username: 'Syra AI', avatar: '🤖', content: 'Indeed! Next.js 15 introduces partial pre-rendering and async request APIs that make data fetching extremely optimized. Let me know if you need any help writing components!', timestamp: 'Today at 10:08 AM', isBot: true, roleColor: 'text-discord-brand' },
    { id: 'm7', userId: 'wumpus', username: 'Wumpus', avatar: '👾', content: 'I like cookies and berries, can we build a berry clicker in Next.js? 🍓', timestamp: 'Today at 10:10 AM', roleColor: 'text-indigo-400' }
  ],
  'sc-memes': [
    { id: 'm8', userId: 'nelly', username: 'Nelly', avatar: '🐹', content: 'Me: "I will write clean code today."\nAlso me: *creates a single index.js file with 5000 lines of nested callbacks*', timestamp: 'Today at 9:15 AM', roleColor: 'text-emerald-400', attachments: ['https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600'] },
    { id: 'm9', userId: 'wumpus', username: 'Wumpus', avatar: '👾', content: 'Hahaha! Classic. That is why we have AI assistants to refactor them now.', timestamp: 'Today at 9:18 AM', roleColor: 'text-indigo-400' }
  ],
  'sc-resources': [
    { id: 'm10', userId: 'syra', username: 'Syra AI', avatar: '🤖', content: 'Here are the top resources for learning Next.js App Router:\n1. official Next.js Learn: https://nextjs.org/learn\n2. Tailwind CSS Docs: https://tailwindcss.com/docs\n3. Shadcn UI Components: https://ui.shadcn.com', timestamp: 'Today at 8:00 AM', isBot: true, roleColor: 'text-discord-brand' }
  ],
  'sc-bot-commands': [
    { id: 'm11', userId: 'mee6', username: 'MEE6', avatar: '🛡️', content: 'Use `/` to see available bot commands. Type `/help` to interact with @Syra AI.', timestamp: 'Today at 11:00 AM', isBot: true, roleColor: 'text-blue-400' }
  ],
  'gg-general': [
    { id: 'm12', userId: 'clyde', username: 'Clyde', avatar: '👑', content: 'Who is down for some Minecraft tonight? I am building a giant castle with redstone gates.', timestamp: 'Today at 12:00 PM', roleColor: 'text-amber-400' },
    { id: 'm13', userId: 'wumpus', username: 'Wumpus', avatar: '👾', content: 'Count me in! I can gather wood and mine some coal.', timestamp: 'Today at 12:02 PM', roleColor: 'text-indigo-400' }
  ],
  'lf-general': [
    { id: 'm14', userId: 'nelly', username: 'Nelly', avatar: '🐹', content: 'Does anyone have a good lofi playlist? I need to focus on this design assignment.', timestamp: 'Today at 1:00 PM', roleColor: 'text-emerald-400' },
    { id: 'm15', userId: 'syra', username: 'Syra AI', avatar: '🤖', content: 'I highly recommend the "Lofi Girl - Study Beats" stream or "Chillhop Records" on YouTube. They have perfect BPMs for sustained concentration.', timestamp: 'Today at 1:01 PM', isBot: true, roleColor: 'text-discord-brand' }
  ]
};

export const MOCK_FRIENDS: Friend[] = [
  { id: 'wumpus', username: 'Wumpus', avatar: '👾', status: 'online', customStatus: 'Looking for berries 🍓', activity: { name: 'Hide and Seek', type: 'playing', details: 'In the Whispering Woods' }, dmChannelId: 'dm-wumpus' },
  { id: 'syra', username: 'Syra AI', avatar: '🤖', status: 'online', customStatus: 'Type /help in chat!', activity: { name: 'Coding Simulator', type: 'playing', details: 'Refactoring Next.js' }, dmChannelId: 'dm-syra' },
  { id: 'nelly', username: 'Nelly', avatar: '🐹', status: 'online', customStatus: 'Studying for finals...', activity: { name: 'Spotify', type: 'listening', details: 'Lofi Hip Hop Radio', state: 'by ChilledCow' }, dmChannelId: 'dm-nelly' },
  { id: 'clyde', username: 'Clyde', avatar: '👑', status: 'idle', customStatus: 'AFK eating pizza 🍕', activity: { name: 'Minecraft', type: 'playing', details: 'Building a Redstone Castle' }, dmChannelId: 'dm-clyde' },
  { id: 'kaptain_cookie', username: 'Captain Cookie', avatar: '🍪', status: 'offline', dmChannelId: 'dm-cookie' }
];

export const JOKES = [
  "Why do programmers wear glasses? Because they can't C#!",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
  "There are 10 types of people in the world: those who understand binary, and those who don't.",
  "['hip', 'hip'] (hip hip array!)",
  "Why did the React component break up with the HTML element? Because it felt like it wasn't getting enough 'props'!",
  "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'"
];

export const MEMES = [
  "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=600", // Coding screen
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600", // HTML code
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600", // Laptop
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600"  // Hacker theme
];
