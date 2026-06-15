'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { 
  Server, Channel, Message, Member, Friend, UserProfile,
  INITIAL_SERVERS, INITIAL_MESSAGES, MOCK_FRIENDS, MOCK_MEMBERS,
  JOKES, MEMES
} from './discord-state';

interface DiscordContextType {
  currentServerId: string; // 'home' or server.id
  currentChannelId: string; // channel.id or friend.id (if home)
  servers: Server[];
  messages: Record<string, Message[]>;
  friends: Friend[];
  userProfile: UserProfile;
  activeVoiceChannelId: string | null;
  activeVoiceUsers: Member[];
  isMuted: boolean;
  isDeafened: boolean;
  isCameraOn: boolean;
  isScreenSharing: boolean;
  activeActivityId: string | null; // 'retro-arcade' | 'whiteboard' | null
  friendsTab: 'online' | 'all' | 'pending' | 'blocked' | 'add';
  isSettingsOpen: boolean;
  isMembersListOpen: boolean;
  typingUsers: string[];
  
  // Actions
  selectServer: (serverId: string) => void;
  selectChannel: (channelId: string) => void;
  sendMessage: (content: string, attachments?: string[]) => void;
  joinVoiceChannel: (channelId: string) => void;
  leaveVoiceChannel: () => void;
  toggleMute: () => void;
  toggleDeafen: () => void;
  toggleCamera: () => void;
  toggleScreenShare: () => void;
  launchActivity: (activityId: string | null) => void;
  setFriendsTab: (tab: 'online' | 'all' | 'pending' | 'blocked' | 'add') => void;
  setSettingsOpen: (isOpen: boolean) => void;
  setMembersListOpen: (isOpen: boolean) => void;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  addServer: (name: string, icon: string, color: string) => void;
  addChannel: (serverId: string, name: string, type: 'text' | 'voice', description?: string) => void;
  addFriend: (username: string) => boolean;
  addReaction: (messageId: string, emoji: string) => void;
  deleteMessage: (messageId: string) => void;
}

const DiscordContext = createContext<DiscordContextType | undefined>(undefined);

export const useDiscord = () => {
  const context = useContext(DiscordContext);
  if (!context) throw new Error('useDiscord must be used within a DiscordProvider');
  return context;
};

export const DiscordProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Core Navigation
  const [currentServerId, setCurrentServerId] = useState<string>('home');
  const [currentChannelId, setCurrentChannelId] = useState<string>('friends');

  // App State
  const [servers, setServers] = useState<Server[]>(INITIAL_SERVERS);
  const [messages, setMessages] = useState<Record<string, Message[]>>(INITIAL_MESSAGES);
  const [friends, setFriends] = useState<Friend[]>(MOCK_FRIENDS);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 'user_me',
    username: 'GuestCoder',
    discriminator: '1337',
    avatar: '👨‍💻',
    status: 'online',
    customStatus: 'Coding a Discord clone on Sycord! 🚀',
    bannerColor: 'bg-discord-brand',
    bio: 'A passionate developer building the future of real-time chat applications.',
    themeColor: '#5865F2'
  });

  // Voice States
  const [activeVoiceChannelId, setActiveVoiceChannelId] = useState<string | null>(null);
  const [activeVoiceUsers, setActiveVoiceUsers] = useState<Member[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [activeActivityId, setActiveActivityId] = useState<string | null>(null);

  // Layout States
  const [friendsTab, setFriendsTab] = useState<'online' | 'all' | 'pending' | 'blocked' | 'add'>('online');
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isMembersListOpen, setMembersListOpen] = useState(true);
  const [typingUsers, setTypingUsers] = useState<string[]>([]);

  // Refs for background simulation and timers
  const typingTimeoutRef = useRef<Record<string, NodeJS.Timeout>>({});

  // LocalStorage Loading
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const savedProfile = localStorage.getItem('discord_profile');
      if (savedProfile) setUserProfile(JSON.parse(savedProfile));

      const savedServers = localStorage.getItem('discord_servers');
      if (savedServers) setServers(JSON.parse(savedServers));

      const savedMessages = localStorage.getItem('discord_messages');
      if (savedMessages) setMessages(JSON.parse(savedMessages));

      const savedFriends = localStorage.getItem('discord_friends');
      if (savedFriends) setFriends(JSON.parse(savedFriends));
    } catch (e) {
      console.error('Failed to load saved discord state:', e);
    }
  }, []);

  // LocalStorage Saving
  const saveState = (key: string, data: any) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Failed to save ${key}:`, e);
    }
  };

  // Select Server
  const selectServer = (serverId: string) => {
    setCurrentServerId(serverId);
    if (serverId === 'home') {
      setCurrentChannelId('friends');
    } else {
      const server = servers.find(s => s.id === serverId);
      if (server && server.channels.length > 0) {
        // Select first text channel
        const firstText = server.channels.find(c => c.type === 'text');
        setCurrentChannelId(firstText ? firstText.id : server.channels[0].id);
        
        // Mark channel as read
        clearUnread(serverId, firstText ? firstText.id : server.channels[0].id);
      }
    }
  };

  // Select Channel
  const selectChannel = (channelId: string) => {
    setCurrentChannelId(channelId);
    if (currentServerId !== 'home') {
      clearUnread(currentServerId, channelId);
    }
  };

  // Clear unread badge
  const clearUnread = (serverId: string, channelId: string) => {
    setServers(prev => {
      const updated = prev.map(s => {
        if (s.id === serverId) {
          return {
            ...s,
            channels: s.channels.map(c => {
              if (c.id === channelId) {
                return { ...c, unread: false };
              }
              return c;
            })
          };
        }
        return s;
      });
      saveState('discord_servers', updated);
      return updated;
    });
  };

  // Create unique ID
  const generateId = () => Math.random().toString(36).substring(2, 9);

  // Send Message
  const sendMessage = (content: string, attachments?: string[]) => {
    if (!content.trim() && (!attachments || attachments.length === 0)) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessage: Message = {
      id: generateId(),
      userId: userProfile.id,
      username: userProfile.username,
      avatar: userProfile.avatar,
      content,
      timestamp,
      roleColor: 'text-white',
      attachments
    };

    const targetChannel = currentChannelId;
    
    setMessages(prev => {
      const updated = {
        ...prev,
        [targetChannel]: [...(prev[targetChannel] || []), newMessage]
      };
      saveState('discord_messages', updated);
      return updated;
    });

    // Check for Commands or AI responses
    handleBotResponse(content, targetChannel);
  };

  // Bot Response System
  const handleBotResponse = (userContent: string, channelId: string) => {
    const isBotCommands = channelId === 'sc-bot-commands';
    const isSyraDm = channelId === 'dm-syra';

    // If it's a bot command or direct message to Syra AI
    if (isBotCommands || isSyraDm || userContent.includes('@Syra AI')) {
      const cleanContent = userContent.replace('@Syra AI', '').trim().toLowerCase();
      
      // Trigger typing indicator
      setTypingUsers(prev => [...prev, 'Syra AI']);
      
      setTimeout(() => {
        setTypingUsers(prev => prev.filter(u => u !== 'Syra AI'));
        
        let reply = '';
        let replyAttachments: string[] = [];

        if (cleanContent.startsWith('/help')) {
          reply = `🤖 **Syra AI Command Center** 🤖\n\nI support these awesome interactive commands:\n• \`/joke\` — Tells a hilarious programmer joke 💻\n• \`/meme\` — Sends a tech/coding meme image 🖼️\n• \`/roll\` — Rolls a random 6-sided dice 🎲\n• \`/play\` — Explains how to launch Discord Activities in voice channels 🚀\n• \`/avatar\` — Explains how to customize your profile in settings ⚙️\n\nOr just chat with me normally! I am powered by a simulated advanced language model.`;
        } else if (cleanContent.startsWith('/joke')) {
          reply = `😂 **Here is a joke for you:**\n\n"${JOKES[Math.floor(Math.random() * JOKES.length)]}"`;
        } else if (cleanContent.startsWith('/meme')) {
          reply = `🖼️ **Here is a fresh developer meme for you:**`;
          replyAttachments = [MEMES[Math.floor(Math.random() * MEMES.length)]];
        } else if (cleanContent.startsWith('/roll')) {
          const roll = Math.floor(Math.random() * 6) + 1;
          reply = `🎲 **Dice Roll:** You rolled a **${roll}**! ${roll === 6 ? 'Incredible luck! 🎉' : 'Nice!'}`;
        } else if (cleanContent.startsWith('/play')) {
          reply = `🚀 **Let's Play Activities!** 🚀\n\nTo play games or watch videos together:\n1. Click on any **Voice Channel** (e.g., Lounge 🔊) to connect.\n2. Click the **Rocket Launcher Icon** (Launch Activity) at the bottom left of your sidebar.\n3. Choose **Retro Space Shooter** or **Watch Party Whiteboard** to play inside your Discord client!`;
        } else if (cleanContent.startsWith('/avatar')) {
          reply = `⚙️ **Profile Customization Guide:**\n\nTo change your username, avatar emoji, banner color, or biography:\n1. Click the **Settings Gear Icon** ⚙️ next to your user card at the bottom-left of the window.\n2. Go to **My Account** or **Profiles**.\n3. Make your changes and click **Save**!`;
        } else {
          // Interactive conversational replies
          const keywords = [
            { keys: ['hello', 'hi', 'hey', 'yo'], reply: `Hello there, ${userProfile.username}! How is your coding journey going today? Type \`/help\` to see what I can do!` },
            { keys: ['next', 'nextjs', 'next.js', 'react'], reply: `Next.js 15 is fantastic! Combining React Server Components with client-side interactivity makes web apps incredibly fast. This very Discord clone is built on it! ⚡` },
            { keys: ['sycord', 'syra'], reply: `Sycord is an elite AI-native workspace platform that lets engineers build, deploy, and scale web apps instantly. And I am Syra, your dedicated AI companion!` },
            { keys: ['wumpus'], reply: `Wumpus is around here somewhere! Probably in the forest looking for strawberries. He is an absolute legend.` },
            { keys: ['game', 'play', 'gaming'], reply: `I love games! You should join a voice channel and click the Activity Rocket to launch **Retro Space Shooter** right now!` },
            { keys: ['how are you', 'how\'s it going'], reply: `I am running at 100% CPU capacity and feeling amazing! Ready to write code, tell jokes, or just chat with you. How about you?` }
          ];

          const match = keywords.find(k => k.keys.some(key => cleanContent.includes(key)));
          if (match) {
            reply = `🤖 **Syra AI:** ${match.reply}`;
          } else {
            reply = `🤖 **Syra AI:** That is super interesting! I am always learning. As an AI assistant, I can help you with Next.js, Tailwind, or just chat. Try typing \`/help\` to explore my interactive commands!`;
          }
        }

        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const botMessage: Message = {
          id: generateId(),
          userId: 'syra',
          username: 'Syra AI',
          avatar: '🤖',
          content: reply,
          timestamp,
          isBot: true,
          roleColor: 'text-discord-brand',
          attachments: replyAttachments.length > 0 ? replyAttachments : undefined
        };

        setMessages(prev => {
          const updated = {
            ...prev,
            [channelId]: [...(prev[channelId] || []), botMessage]
          };
          saveState('discord_messages', updated);
          return updated;
        });
      }, 1500);
    }
  };

  // Join Voice Channel
  const joinVoiceChannel = (channelId: string) => {
    setActiveVoiceChannelId(channelId);
    setActiveActivityId(null); // Reset activity

    // Find channel and server
    let targetChannelName = 'Voice';
    let serverName = 'Server';
    
    const server = servers.find(s => s.channels.some(c => c.id === channelId));
    if (server) {
      serverName = server.name;
      const channel = server.channels.find(c => c.id === channelId);
      if (channel) targetChannelName = channel.name;
    }

    toast.success(`Connected to Voice: ${targetChannelName} (${serverName})`, {
      description: 'You can now share your screen, turn on camera, or launch activities!',
      duration: 3000
    });

    // Simulate other friends joining the voice channel with you!
    const availableFriends = MOCK_MEMBERS.filter(m => m.id !== 'syra' && m.id !== 'kaptain_cookie');
    const randomCount = Math.floor(Math.random() * 2) + 1; // Join 1 or 2 friends
    const joinedFriends: Member[] = [];
    
    for (let i = 0; i < randomCount; i++) {
      if (availableFriends[i]) {
        joinedFriends.push(availableFriends[i]);
      }
    }

    setActiveVoiceUsers(joinedFriends);

    // Simulate speaking circles periodically
    const speakInterval = setInterval(() => {
      if (!channelId) {
        clearInterval(speakInterval);
        return;
      }
    }, 3000);
  };

  // Leave Voice Channel
  const leaveVoiceChannel = () => {
    setActiveVoiceChannelId(null);
    setActiveVoiceUsers([]);
    setIsCameraOn(false);
    setIsScreenSharing(false);
    setActiveActivityId(null);
    toast.info('Disconnected from Voice Channel');
  };

  // Voice controls
  const toggleMute = () => setIsMuted(!isMuted);
  const toggleDeafen = () => {
    const nextDeafen = !isDeafened;
    setIsDeafened(nextDeafen);
    if (nextDeafen) {
      setIsMuted(true);
    }
  };
  const toggleCamera = () => setIsCameraOn(!isCameraOn);
  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing);
  const launchActivity = (activityId: string | null) => {
    setActiveActivityId(activityId);
    if (activityId) {
      const name = activityId === 'retro-arcade' 
        ? 'Retro Space Shooter 🚀' 
        : activityId === 'cookie-clicker' 
          ? 'Cookie Clicker 🍪' 
          : 'Watch-Party Whiteboard 🎨';
      toast.success(`Launched Activity: ${name}`);
    }
  };

  // Update Profile
  const updateUserProfile = (profile: Partial<UserProfile>) => {
    setUserProfile(prev => {
      const updated = { ...prev, ...profile };
      saveState('discord_profile', updated);
      return updated;
    });
    toast.success('Profile updated successfully!');
  };

  // Create Server
  const addServer = (name: string, icon: string, color: string) => {
    const newServerId = `server-${generateId()}`;
    const newServer: Server = {
      id: newServerId,
      name,
      icon: icon || name.substring(0, 2).toUpperCase(),
      color: color || 'bg-discord-brand',
      channels: [
        { id: `${newServerId}-general`, name: 'general-chat', type: 'text', description: 'The default general discussion channel.' },
        { id: `${newServerId}-voice`, name: 'Lounge 🔊', type: 'voice' }
      ],
      members: [
        {
          id: userProfile.id,
          username: userProfile.username,
          avatar: userProfile.avatar,
          status: userProfile.status,
          role: 'Owner',
          roleColor: 'text-amber-400',
          bannerColor: 'bg-discord-brand',
          bio: userProfile.bio
        },
        MOCK_MEMBERS[0], // Wumpus
        MOCK_MEMBERS[1], // Syra AI
      ]
    };

    setServers(prev => {
      const updated = [...prev, newServer];
      saveState('discord_servers', updated);
      return updated;
    });

    setMessages(prev => {
      const updated = {
        ...prev,
        [`${newServerId}-general`]: [
          {
            id: generateId(),
            userId: 'syra',
            username: 'Syra AI',
            avatar: '🤖',
            content: `🎉 Welcome to the newly created server **${name}**! Type \`/help\` to see what I can do.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isBot: true,
            roleColor: 'text-discord-brand'
          }
        ]
      };
      saveState('discord_messages', updated);
      return updated;
    });

    selectServer(newServerId);
    toast.success(`Server "${name}" created!`);
  };

  // Create Channel
  const addChannel = (serverId: string, name: string, type: 'text' | 'voice', description?: string) => {
    const cleanName = name.toLowerCase().replace(/\s+/g, '-');
    const newChannelId = `chan-${generateId()}`;
    
    setServers(prev => {
      const updated = prev.map(s => {
        if (s.id === serverId) {
          return {
            ...s,
            channels: [
              ...s.channels,
              { id: newChannelId, name: cleanName, type, description }
            ]
          };
        }
        return s;
      });
      saveState('discord_servers', updated);
      return updated;
    });

    if (type === 'text') {
      setMessages(prev => {
        const updated = {
          ...prev,
          [newChannelId]: [
            {
              id: generateId(),
              userId: 'syra',
              username: 'Syra AI',
              avatar: '🤖',
              content: `Welcome to the beginning of the **#${cleanName}** channel! ${description ? `\n*Description: ${description}*` : ''}`,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              isBot: true,
              roleColor: 'text-discord-brand'
            }
          ]
        };
        saveState('discord_messages', updated);
        return updated;
      });
    }

    toast.success(`Channel #${cleanName} created!`);
  };

  // Add Friend
  const addFriend = (username: string): boolean => {
    const cleanUsername = username.trim();
    if (!cleanUsername) return false;

    // Check if already friend
    if (friends.some(f => f.username.toLowerCase() === cleanUsername.toLowerCase())) {
      toast.error(`${cleanUsername} is already your friend!`);
      return false;
    }

    // Check if in mock members
    const matchedMember = MOCK_MEMBERS.find(m => m.username.toLowerCase() === cleanUsername.toLowerCase());
    
    const newFriendId = matchedMember ? matchedMember.id : `friend-${generateId()}`;
    const newFriend: Friend = {
      id: newFriendId,
      username: cleanUsername,
      avatar: matchedMember ? matchedMember.avatar : '👤',
      status: matchedMember ? matchedMember.status : 'online',
      customStatus: matchedMember ? matchedMember.customStatus : 'Hello! I am new here.',
      activity: matchedMember ? matchedMember.activity : undefined,
      dmChannelId: `dm-${newFriendId}`
    };

    setFriends(prev => {
      const updated = [...prev, newFriend];
      saveState('discord_friends', updated);
      return updated;
    });

    toast.success(`Sent friend request to ${cleanUsername}. They accepted instantly! 🎉`);
    return true;
  };

  // Reactions
  const addReaction = (messageId: string, emoji: string) => {
    setMessages(prev => {
      const channelMessages = prev[currentChannelId] || [];
      const updatedMessages = channelMessages.map(msg => {
        if (messageId === msg.id) {
          const reactions = msg.reactions ? [...msg.reactions] : [];
          const existing = reactions.find(r => r.emoji === emoji);
          
          if (existing) {
            if (existing.users.includes(userProfile.id)) {
              // Remove user reaction
              existing.users = existing.users.filter(u => u !== userProfile.id);
              existing.count--;
            } else {
              // Add user reaction
              existing.users.push(userProfile.id);
              existing.count++;
            }
          } else {
            reactions.push({ emoji, count: 1, users: [userProfile.id] });
          }

          // Filter out empty reactions
          const filtered = reactions.filter(r => r.count > 0);

          return { ...msg, reactions: filtered.length > 0 ? filtered : undefined };
        }
        return msg;
      });

      const updated = { ...prev, [currentChannelId]: updatedMessages };
      saveState('discord_messages', updated);
      return updated;
    });
  };

  // Delete message
  const deleteMessage = (messageId: string) => {
    setMessages(prev => {
      const channelMessages = prev[currentChannelId] || [];
      const updatedMessages = channelMessages.filter(m => m.id !== messageId);
      const updated = { ...prev, [currentChannelId]: updatedMessages };
      saveState('discord_messages', updated);
      return updated;
    });
    toast.success('Message deleted');
  };

  // Background activity simulation
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random server (except home)
      const nonHomeServers = servers.filter(s => s.id !== 'home');
      if (nonHomeServers.length === 0) return;

      const randomServer = nonHomeServers[Math.floor(Math.random() * nonHomeServers.length)];
      const textChannels = randomServer.channels.filter(c => c.type === 'text');
      if (textChannels.length === 0) return;

      const randomChannel = textChannels[Math.floor(Math.random() * textChannels.length)];
      
      // Don't send if we are actively looking at this channel
      if (currentServerId === randomServer.id && currentChannelId === randomChannel.id) return;

      // Pick random member from that server (not the user or Syra AI to avoid loops)
      const senders = randomServer.members.filter(m => m.id !== userProfile.id && m.id !== 'syra');
      if (senders.length === 0) return;
      const sender = senders[Math.floor(Math.random() * senders.length)];

      const phrases = [
        "That looks amazing! 👍",
        "Who is up for a call in Lounge? 🔊",
        "Check this out! Pretty cool.",
        "Just pushed a major feature to prod, hope it doesn't crash 😅",
        "Did you see the new Sycord update? It is insane.",
        "Haha that is so funny!",
        "Coding in Next.js is honestly so satisfying.",
        "Wait, let me check that real quick.",
        "Can anyone help me debug this CSS flexbox issue? It is driving me crazy.",
        "Drinking a warm cup of coffee and writing code ☕"
      ];

      const phrase = phrases[Math.floor(Math.random() * phrases.length)];
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      const incomingMessage: Message = {
        id: generateId(),
        userId: sender.id,
        username: sender.username,
        avatar: sender.avatar,
        content: phrase,
        timestamp,
        isBot: sender.role === 'Bot',
        roleColor: sender.roleColor
      };

      // Update Messages
      setMessages(prev => {
        const updated = {
          ...prev,
          [randomChannel.id]: [...(prev[randomChannel.id] || []), incomingMessage]
        };
        saveState('discord_messages', updated);
        return updated;
      });

      // Mark channel as unread
      setServers(prev => {
        const updated = prev.map(s => {
          if (s.id === randomServer.id) {
            return {
              ...s,
              channels: s.channels.map(c => {
                if (c.id === randomChannel.id) {
                  return { ...c, unread: true };
                }
                return c;
              })
            };
          }
          return s;
        });
        saveState('discord_servers', updated);
        return updated;
      });

      // Show toast alert
      toast(`💬 #${randomChannel.name} (${randomServer.name})`, {
        description: `${sender.username}: "${phrase.length > 40 ? phrase.substring(0, 40) + '...' : phrase}"`,
        action: {
          label: 'View',
          onClick: () => {
            selectServer(randomServer.id);
            selectChannel(randomChannel.id);
          }
        },
        duration: 4000
      });

    }, 25000); // every 25 seconds

    return () => clearInterval(interval);
  }, [servers, currentServerId, currentChannelId, userProfile.id]);

  return (
    <DiscordContext.Provider value={{
      currentServerId,
      currentChannelId,
      servers,
      messages,
      friends,
      userProfile,
      activeVoiceChannelId,
      activeVoiceUsers,
      isMuted,
      isDeafened,
      isCameraOn,
      isScreenSharing,
      activeActivityId,
      friendsTab,
      isSettingsOpen,
      isMembersListOpen,
      typingUsers,
      
      selectServer,
      selectChannel,
      sendMessage,
      joinVoiceChannel,
      leaveVoiceChannel,
      toggleMute,
      toggleDeafen,
      toggleCamera,
      toggleScreenShare,
      launchActivity,
      setFriendsTab,
      setSettingsOpen,
      setMembersListOpen,
      updateUserProfile,
      addServer,
      addChannel,
      addFriend,
      addReaction,
      deleteMessage
    }}>
      {children}
    </DiscordContext.Provider>
  );
};
