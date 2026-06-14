'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useDiscord } from '../lib/discord-store';
import { 
  Hash, Users, Search, Image as ImageIcon, Gift, Smile, Send, Trash2, 
  HelpCircle, MoreVertical, Plus, UserPlus, MessageSquare, Play, Sparkles
} from 'lucide-react';
import { toast } from 'sonner';

export const ChatArea: React.FC = () => {
  const {
    currentServerId,
    currentChannelId,
    servers,
    messages,
    friends,
    userProfile,
    typingUsers,
    friendsTab,
    isMembersListOpen,
    sendMessage,
    selectChannel,
    setFriendsTab,
    setMembersListOpen,
    addFriend,
    addReaction,
    deleteMessage
  } = useDiscord();

  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState<string | null>(null); // messageId or 'input'
  const [showCommandHelper, setShowCommandHelper] = useState(false);
  const [mockAttachment, setMockAttachment] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, currentChannelId]);

  // Command autocomplete filter
  useEffect(() => {
    if (input.startsWith('/')) {
      setShowCommandHelper(true);
    } else {
      setShowCommandHelper(false);
    }
  }, [input]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && !mockAttachment) return;
    sendMessage(input, mockAttachment ? [mockAttachment] : undefined);
    setInput('');
    setMockAttachment(null);
    setShowCommandHelper(false);
  };

  const handleCommandSelect = (cmd: string) => {
    setInput(cmd + ' ');
    setShowCommandHelper(false);
  };

  const triggerMockAttachment = () => {
    const urls = [
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=600', // code screen
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600', // html
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600', // coding matrix
    ];
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    setMockAttachment(randomUrl);
    toast.success('Mock image attached to input field!');
  };

  const handleNitroGift = () => {
    toast.success('🎁 Discord Nitro Activated!', {
      description: 'Congratulations! You have received a mock Nitro boost. You now have access to custom emojis, larger file shares, and premium high-definition screen sharing!',
      duration: 5000
    });
  };

  // Find server and channel details
  const activeServer = servers.find(s => s.id === currentServerId);
  const activeChannel = activeServer?.channels.find(c => c.id === currentChannelId);
  const activeFriend = friends.find(f => f.dmChannelId === currentChannelId);

  const currentMessages = messages[currentChannelId] || [];

  const emojis = ['👍', '❤️', '😂', '🎉', '😮', '🔥', '👀', '💩', '🍓'];

  // --- 1. RENDER FRIENDS DASHBOARD (HOME TAB) ---
  if (currentServerId === 'home' && currentChannelId === 'friends') {
    const onlineFriends = friends.filter(f => f.status !== 'offline');
    const filteredFriends = friends.filter(f => {
      if (friendsTab === 'online') return f.status !== 'offline';
      if (friendsTab === 'all') return true;
      return false; // pending/blocked are empty in mock
    });

    return (
      <div className="flex-1 bg-discord-dark-200 flex flex-col h-full select-none">
        {/* Top Header */}
        <div className="h-12 border-b border-discord-dark-500 flex items-center px-4 justify-between text-white shadow-sm shrink-0">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[15px] flex items-center gap-1.5 border-r border-discord-dark-100 pr-4">
              <Users className="w-5 h-5 text-discord-light-300" />
              Friends
            </span>
            <div className="flex gap-1 text-sm">
              {(['online', 'all', 'pending', 'blocked'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFriendsTab(tab)}
                  className={`px-3 py-1 rounded capitalize font-medium transition-all ${
                    friendsTab === tab 
                      ? 'bg-discord-dark-100 text-white' 
                      : 'text-discord-light-300 hover:bg-discord-dark-100/30 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button
                onClick={() => setFriendsTab('add')}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  friendsTab === 'add'
                    ? 'bg-discord-green text-white'
                    : 'text-discord-green hover:bg-discord-green/10'
                }`}
              >
                Add Friend
              </button>
            </div>
          </div>
        </div>

        {/* Friends Main View */}
        <div className="flex-1 flex overflow-hidden">
          {friendsTab === 'add' ? (
            // Add Friend Form Tab
            <div className="flex-1 p-8 text-white text-left">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2 text-discord-light-100">Add Friend</h3>
              <p className="text-discord-light-300 text-sm mb-6 leading-normal">
                You can add friends with their Discord username. It's case-sensitive!
              </p>
              <form onSubmit={(e) => {
                e.preventDefault();
                const inputEl = e.currentTarget.elements.namedItem('friendName') as HTMLInputElement;
                if (inputEl && inputEl.value.trim()) {
                  addFriend(inputEl.value);
                  inputEl.value = '';
                }
              }} className="flex items-center bg-discord-dark-500 rounded p-1 border border-transparent focus-within:border-discord-brand max-w-[500px]">
                <input
                  name="friendName"
                  type="text"
                  placeholder="Enter a Username"
                  required
                  className="w-full bg-transparent p-2.5 text-white outline-none text-sm"
                />
                <button
                  type="submit"
                  className="bg-discord-brand hover:bg-discord-brand/95 px-5 py-2 rounded text-sm font-medium transition-all shrink-0"
                >
                  Send Friend Request
                </button>
              </form>
              <div className="text-xs text-discord-light-300 mt-4 leading-relaxed">
                Suggested mock users you can add instantly:<br />
                • **Wumpus** — Mascot bot<br />
                • **Nelly** — Gaming hamster<br />
                • **Clyde** — AFK pizza eater<br />
                • **Captain Cookie** — Milk sea voyager
              </div>
            </div>
          ) : (
            // Friends List Tab
            <div className="flex-1 flex flex-col p-6 overflow-y-auto no-scrollbar">
              <div className="text-xs font-bold text-discord-light-300 uppercase tracking-wider mb-4 text-left">
                {friendsTab === 'online' ? `Online — ${onlineFriends.length}` : `All Friends — ${friends.length}`}
              </div>

              {filteredFriends.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-discord-light-300 gap-4">
                  <span className="text-5xl">🏜️</span>
                  <div>
                    <div className="font-bold text-white mb-1">No friends here... yet!</div>
                    <div className="text-sm">Click the green "Add Friend" button to connect with other mock users.</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredFriends.map((friend) => {
                    let statusColor = 'bg-gray-400';
                    if (friend.status === 'online') statusColor = 'bg-discord-green';
                    if (friend.status === 'idle') statusColor = 'bg-discord-yellow';
                    if (friend.status === 'dnd') statusColor = 'bg-discord-red';

                    return (
                      <div
                        key={friend.id}
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-discord-dark-100/50 transition-all border border-transparent hover:border-discord-dark-100"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-full bg-discord-dark-100 flex items-center justify-center text-2xl select-none">
                            {friend.avatar}
                            <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-discord-dark-200 ${statusColor}`} />
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-white text-sm flex items-center gap-1.5">
                              {friend.username}
                              <span className="text-xs text-discord-light-300 font-normal">#{Math.floor(Math.random() * 9000) + 1000}</span>
                            </div>
                            <div className="text-xs text-discord-light-300 flex flex-col gap-0.5 mt-0.5">
                              {friend.activity ? (
                                <div className="truncate max-w-[280px]">
                                  <span className="font-semibold text-discord-light-100 capitalize">{friend.activity.type} </span>
                                  <span className="text-white font-medium">{friend.activity.name}</span>
                                  {friend.activity.details && ` - ${friend.activity.details}`}
                                </div>
                              ) : (
                                <div className="truncate max-w-[280px]">{friend.customStatus || 'Active now'}</div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => selectChannel(friend.dmChannelId)}
                            className="p-2 rounded-full bg-discord-dark-400 hover:bg-discord-dark-500 text-discord-light-300 hover:text-white transition-all"
                            title="Start Chat"
                          >
                            <MessageSquare className="w-5 h-5" />
                          </button>
                          <button
                            className="p-2 rounded-full bg-discord-dark-400 hover:bg-discord-dark-500 text-discord-light-300 hover:text-white transition-all"
                            title="More Options"
                          >
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Friends Now Playing Right Sidebar */}
          <div className="w-[340px] border-l border-discord-dark-500 p-6 text-left hidden lg:block overflow-y-auto no-scrollbar">
            <h4 className="font-extrabold text-white text-lg mb-4">Active Now</h4>
            <div className="space-y-4">
              {friends.filter(f => f.activity).map((friend) => (
                <div key={friend.id} className="bg-discord-dark-400/50 rounded-lg p-4 border border-discord-dark-500/50 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-discord-dark-100 flex items-center justify-center text-lg shrink-0">
                      {friend.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{friend.username}</div>
                      <div className="text-[11px] text-discord-green font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-discord-green animate-pulse" />
                        Online
                      </div>
                    </div>
                  </div>

                  <div className="bg-discord-dark-500/50 p-2.5 rounded border border-discord-dark-100/10 text-xs">
                    <div className="font-bold text-white mb-0.5 flex items-center gap-1">
                      <Play className="w-3 h-3 text-indigo-400 shrink-0 fill-indigo-400" />
                      {friend.activity?.type === 'listening' ? 'Listening to Spotify' : 'Playing Game'}
                    </div>
                    <div className="text-discord-light-100 font-medium">{friend.activity?.name}</div>
                    {friend.activity?.details && (
                      <div className="text-discord-light-300 mt-0.5">{friend.activity.details}</div>
                    )}
                    {friend.activity?.state && (
                      <div className="text-discord-light-300">{friend.activity.state}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. RENDER ACTIVE CHAT AREA (SERVER CHANNELS OR DIRECT MESSAGES) ---
  return (
    <div className="flex-1 bg-discord-dark-200 flex flex-col h-full overflow-hidden select-none relative">
      {/* Top Header */}
      <div className="h-12 border-b border-discord-dark-500 flex items-center px-4 justify-between text-white shadow-sm shrink-0">
        <div className="flex items-center gap-2 truncate max-w-[70%]">
          {currentServerId === 'home' ? (
            // DM Chat Header
            <>
              <span className="text-xl shrink-0 select-none">{activeFriend?.avatar}</span>
              <span className="font-bold text-[15px] truncate">{activeFriend?.username}</span>
              {activeFriend?.customStatus && (
                <span className="text-xs text-discord-light-300 font-normal truncate max-w-[240px] ml-2 border-l border-discord-dark-100 pl-2">
                  {activeFriend.customStatus}
                </span>
              )}
            </>
          ) : (
            // Server Channel Chat Header
            <>
              <Hash className="w-5 h-5 text-discord-light-300 shrink-0" />
              <span className="font-bold text-[15px] truncate">{activeChannel?.name}</span>
              {activeChannel?.description && (
                <span className="text-xs text-discord-light-300 font-normal truncate max-w-[400px] ml-2 border-l border-discord-dark-100 pl-2">
                  {activeChannel.description}
                </span>
              )}
            </>
          )}
        </div>

        {/* Header Search and Action Bar */}
        <div className="flex items-center gap-4">
          <div className="relative flex items-center bg-discord-dark-500 p-1 rounded shrink-0">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-xs text-white pl-2 w-32 focus:w-48 transition-all"
            />
            <Search className="w-3.5 h-3.5 text-discord-light-300 mr-1" />
          </div>

          {currentServerId !== 'home' && (
            <button
              onClick={() => setMembersListOpen(!isMembersListOpen)}
              className={`p-1 rounded hover:bg-discord-dark-100/50 transition-all shrink-0 ${
                isMembersListOpen ? 'text-white' : 'text-discord-light-300 hover:text-white'
              }`}
              title="Toggle Member List"
            >
              <Users className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Message History Thread */}
      <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col space-y-4 no-scrollbar">
        {/* Welcome Message Card at the top of the chat */}
        <div className="text-left border-b border-discord-dark-100/10 pb-6 mb-2">
          <div className="w-16 h-10 rounded-full bg-discord-dark-100 flex items-center justify-center text-3xl select-none mb-4">
            {currentServerId === 'home' ? activeFriend?.avatar : '💬'}
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-2">
            Welcome to {currentServerId === 'home' ? activeFriend?.username : `#${activeChannel?.name}`}!
          </h2>
          <p className="text-discord-light-300 text-sm">
            This is the start of the {currentServerId === 'home' ? `direct message history with ${activeFriend?.username}` : `#${activeChannel?.name} channel`}.
          </p>
        </div>

        {currentMessages.map((msg) => {
          const isUserMe = msg.userId === userProfile.id;

          return (
            <div
              key={msg.id}
              className="flex items-start gap-4 group relative hover:bg-discord-dark-100/20 -mx-4 px-4 py-1.5 transition-all text-left"
            >
              {/* User Avatar */}
              <div className="w-10 h-10 rounded-full bg-discord-dark-100 flex items-center justify-center text-2xl select-none shrink-0">
                {msg.avatar}
              </div>

              {/* Message Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className={`font-bold text-sm truncate ${msg.roleColor || 'text-white'}`}>
                    {msg.username}
                  </span>
                  {msg.isBot && (
                    <span className="bg-discord-brand text-white text-[9px] font-extrabold px-1 py-[1px] rounded uppercase select-none leading-none shrink-0">
                      Bot
                    </span>
                  )}
                  <span className="text-[10px] text-discord-light-300 select-none">
                    {msg.timestamp}
                  </span>
                </div>
                
                <p className="text-sm text-discord-light-100 leading-relaxed whitespace-pre-line break-words">
                  {msg.content}
                </p>

                {/* Render Attachments */}
                {msg.attachments && msg.attachments.map((url, idx) => (
                  <div key={idx} className="mt-3 rounded-lg overflow-hidden border border-discord-dark-100/15 max-w-[400px] shadow-md">
                    <img src={url} alt="Attachment" className="object-cover w-full max-h-[300px]" />
                  </div>
                ))}

                {/* Render Reactions */}
                {msg.reactions && msg.reactions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {msg.reactions.map((react) => {
                      const hasReacted = react.users.includes(userProfile.id);
                      return (
                        <button
                          key={react.emoji}
                          onClick={() => addReaction(msg.id, react.emoji)}
                          className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-xs border transition-all ${
                            hasReacted 
                              ? 'bg-discord-brand/10 border-discord-brand text-discord-brand font-bold' 
                              : 'bg-discord-dark-500 border-transparent hover:border-discord-light-300 text-discord-light-300'
                          }`}
                        >
                          <span>{react.emoji}</span>
                          <span>{react.count}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Hover Actions Panel */}
              <div className="absolute right-4 -top-3.5 bg-discord-dark-200 border border-discord-dark-100 rounded shadow-md hidden group-hover:flex items-center p-0.5 z-20">
                {/* Quick Emoji Reactions */}
                {emojis.slice(0, 5).map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => addReaction(msg.id, emoji)}
                    className="p-1 hover:bg-discord-dark-100 rounded text-sm transition-all"
                  >
                    {emoji}
                  </button>
                ))}
                
                {/* Delete Message Button */}
                {isUserMe && (
                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="p-1 hover:bg-discord-red/20 text-discord-red hover:text-white rounded transition-all ml-1 border-l border-discord-dark-100/10 pl-1.5"
                    title="Delete Message"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}

        <div ref={messagesEndRef} />
      </div>

      {/* Typing Indicator Bar */}
      <div className="h-5 px-4 text-left text-[11px] text-discord-light-300 font-medium select-none flex items-center bg-discord-dark-200/50">
        {typingUsers.length > 0 && (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-discord-light-300 animate-bounce" />
            <span>
              {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
            </span>
          </div>
        )}
      </div>

      {/* Chat Input Area */}
      <div className="p-4 bg-discord-dark-200 shrink-0">
        <form onSubmit={handleSend} className="relative">
          
          {/* Autocomplete Command Helper Popover */}
          {showCommandHelper && (
            <div className="absolute bottom-16 left-0 right-0 bg-discord-dark-200 border border-discord-dark-100 rounded-lg p-3 shadow-2xl text-white z-30 animate-slideUp text-left">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 border-b border-discord-dark-500 pb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Syra AI Commands
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                {[
                  { cmd: '/help', desc: 'Show Syra AI command list and guide' },
                  { cmd: '/joke', desc: 'Tell a funny, nerdy programmer joke' },
                  { cmd: '/meme', desc: 'Share a hilarious developer tech meme' },
                  { cmd: '/roll', desc: 'Roll a random 6-sided game dice' },
                  { cmd: '/play', desc: 'Explain how to launch voice activities' },
                  { cmd: '/avatar', desc: 'Guide on how to customize your user card' }
                ].map((item) => (
                  <button
                    key={item.cmd}
                    type="button"
                    onClick={() => handleCommandSelect(item.cmd)}
                    className="flex items-center gap-2 p-2 hover:bg-discord-dark-100 rounded text-left transition-all text-sm group"
                  >
                    <span className="font-extrabold text-discord-brand group-hover:scale-105 transition-all">{item.cmd}</span>
                    <span className="text-xs text-discord-light-300 truncate">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Attachment Preview Card inside Input box */}
          {mockAttachment && (
            <div className="absolute -top-24 left-4 bg-discord-dark-400 border border-discord-dark-100 p-2 rounded-lg flex items-center gap-2 shadow-lg animate-scaleIn">
              <img src={mockAttachment} alt="Mock upload" className="w-12 h-12 object-cover rounded" />
              <div className="text-left">
                <div className="text-xs font-bold text-white max-w-[120px] truncate">mock_image.png</div>
                <div className="text-[10px] text-discord-light-300">Ready to send</div>
              </div>
              <button
                type="button"
                onClick={() => setMockAttachment(null)}
                className="p-1 rounded hover:bg-discord-dark-100 text-discord-light-300 hover:text-white transition-all ml-2"
              >
                <Trash2 className="w-3.5 h-3.5 text-discord-red" />
              </button>
            </div>
          )}

          <div className="flex items-center bg-discord-dark-500 rounded-lg p-2.5 shadow-md">
            {/* Add Attachment Button */}
            <button
              type="button"
              onClick={triggerMockAttachment}
              className="p-1.5 rounded bg-discord-dark-100 hover:bg-discord-dark-100 text-discord-light-300 hover:text-white transition-all shrink-0 mr-2"
              title="Attach File / Mock Image"
            >
              <Plus className="w-4 h-4" />
            </button>

            {/* Main Input Text */}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                currentServerId === 'home'
                  ? `Message @${activeFriend?.username || 'friend'}`
                  : `Message #${activeChannel?.name || 'channel'} (Type / for commands)`
              }
              className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-discord-light-300"
            />

            {/* Action Bar (Nitro, Emoji, Send) */}
            <div className="flex items-center gap-1.5 shrink-0 ml-2">
              <button
                type="button"
                onClick={handleNitroGift}
                className="p-1.5 rounded hover:bg-discord-dark-100 text-discord-light-300 hover:text-discord-fuchsia transition-all"
                title="Send a Nitro Gift"
              >
                <Gift className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setInput(prev => prev + ' 😂')}
                className="p-1.5 rounded hover:bg-discord-dark-100 text-discord-light-300 hover:text-white transition-all"
                title="Add Emoji"
              >
                <Smile className="w-5 h-5" />
              </button>

              <button
                type="submit"
                className="p-1.5 rounded bg-discord-brand hover:bg-discord-brand/90 text-white transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
