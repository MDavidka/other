'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import { useDiscord } from '../lib/discord-store';
import { Plus, Compass, MessageSquare, Sun, Moon } from 'lucide-react';

export const ServerSidebar: React.FC = () => {
  const { servers, currentServerId, selectServer, addServer } = useDiscord();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [serverName, setServerName] = useState('');
  const [serverEmoji, setServerIcon] = useState('🏰');
  const [serverColor, setServerColor] = useState('bg-indigo-600');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('light')) {
      html.classList.remove('light');
      html.classList.add('dark');
      setIsDarkMode(true);
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      setIsDarkMode(false);
    }
  };

  const handleCreateServer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serverName.trim()) return;
    addServer(serverName, serverEmoji, serverColor);
    setServerName('');
    setShowCreateModal(false);
  };

  const emojiOptions = ['🏰', '🎮', '☕', '🚀', '🎨', '🍕', '🐱', '🎵', '⚡', '🧠', '💼', '🧪'];
  const colorOptions = [
    { name: 'Indigo', class: 'bg-indigo-600' },
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Green', class: 'bg-emerald-500' },
    { name: 'Blue', class: 'bg-blue-500' },
    { name: 'Purple', class: 'bg-purple-600' },
    { name: 'Pink', class: 'bg-pink-500' },
    { name: 'Orange', class: 'bg-orange-500' },
    { name: 'Amber', class: 'bg-amber-500' }
  ];

  return (
    <div className="w-[72px] bg-discord-dark-600 dark:bg-discord-dark-600 flex flex-col items-center py-3 gap-2 border-r border-discord-dark-600 select-none h-full shrink-0">
      {/* Home / Direct Messages Button */}
      <div className="relative group flex items-center justify-center w-full">
        {/* Left white indicator pill */}
        <div className={`absolute left-0 w-1 bg-white rounded-r-full transition-all duration-200 origin-left ${
          currentServerId === 'home' ? 'h-10 scale-100' : 'h-2 scale-0 group-hover:scale-100 group-hover:h-5'
        }`} />
        
        <button
          onClick={() => selectServer('home')}
          className={`flex items-center justify-center w-12 h-12 transition-all duration-200 ${
            currentServerId === 'home' 
              ? 'rounded-[16px] bg-discord-brand text-white' 
              : 'rounded-[24px] bg-discord-dark-300 dark:bg-discord-dark-300 text-discord-light-300 hover:rounded-[16px] hover:bg-discord-brand hover:text-white'
          }`}
          title="Direct Messages"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      <div className="w-8 h-[2px] bg-discord-dark-100 dark:bg-discord-dark-100 rounded my-1" />

      {/* Server List */}
      <div className="flex-1 w-full flex flex-col items-center gap-2 overflow-y-auto no-scrollbar">
        {servers.map((server) => {
          const isActive = currentServerId === server.id;
          const hasUnreads = server.channels.some(c => c.unread);

          return (
            <div key={server.id} className="relative group flex items-center justify-center w-full">
              {/* Left white indicator pill */}
              <div className={`absolute left-0 w-1 bg-white rounded-r-full transition-all duration-200 origin-left ${
                isActive 
                  ? 'h-10 scale-100' 
                  : hasUnreads 
                    ? 'h-2 scale-100 group-hover:h-5' 
                    : 'h-2 scale-0 group-hover:scale-100 group-hover:h-5'
              }`} />

              <button
                onClick={() => selectServer(server.id)}
                className={`flex items-center justify-center w-12 h-12 font-bold text-lg transition-all duration-200 text-white ${
                  isActive 
                    ? 'rounded-[16px]' 
                    : 'rounded-[24px] hover:rounded-[16px]'
                } ${server.color}`}
                title={server.name}
              >
                {server.icon.length > 2 ? server.icon : <span className="text-sm">{server.icon}</span>}
              </button>

              {/* Red dot mention indicator (mock) */}
              {hasUnreads && (
                <div className="absolute right-2 bottom-0 w-4 h-4 bg-discord-red rounded-full border-2 border-discord-dark-600 flex items-center justify-center text-[9px] font-bold text-white pointer-events-none">
                  !
                </div>
              )}
            </div>
          );
        })}

        {/* Add Server Button */}
        <div className="relative group flex items-center justify-center w-full mt-1">
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center justify-center w-12 h-12 rounded-[24px] bg-discord-dark-300 dark:bg-discord-dark-300 text-discord-green hover:rounded-[16px] hover:bg-discord-green hover:text-white transition-all duration-200"
            title="Create a Server"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>

        {/* Explore Button */}
        <div className="relative group flex items-center justify-center w-full">
          <button
            onClick={() => toast.info('Public Server Discovery is currently in demo mode!')}
            className="flex items-center justify-center w-12 h-12 rounded-[24px] bg-discord-dark-300 dark:bg-discord-dark-300 text-discord-light-300 hover:rounded-[16px] hover:bg-discord-brand hover:text-white transition-all duration-200"
            title="Explore Discoverable Servers"
          >
            <Compass className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Theme Toggle & Bottom Separator */}
      <div className="w-8 h-[2px] bg-discord-dark-100 dark:bg-discord-dark-100 rounded my-1" />
      
      <button
        onClick={toggleTheme}
        className="w-12 h-12 rounded-[24px] bg-discord-dark-300 dark:bg-discord-dark-300 text-discord-yellow hover:rounded-[16px] hover:bg-discord-yellow hover:text-discord-dark-600 transition-all duration-200 flex items-center justify-center"
        title={isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Create Server Dialog Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-discord-dark-200 dark:bg-discord-dark-200 rounded-lg w-full max-w-[440px] text-white overflow-hidden shadow-xl animate-scaleIn">
            <form onSubmit={handleCreateServer}>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">Create Your Server</h2>
                <p className="text-discord-light-300 text-sm mb-6">
                  Give your new server a personality with a name, an emoji icon, and a theme color.
                </p>

                {/* Emoji Preview */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl shadow-md ${serverColor}`}>
                    {serverEmoji}
                  </div>
                </div>

                {/* Server Name Input */}
                <div className="text-left mb-6">
                  <label className="block text-discord-light-300 uppercase text-[12px] font-bold tracking-wider mb-2">
                    Server Name
                  </label>
                  <input
                    type="text"
                    value={serverName}
                    onChange={(e) => setServerName(e.target.value)}
                    placeholder="e.g. My Awesome Club"
                    maxLength={25}
                    required
                    className="w-full bg-discord-dark-500 rounded p-2.5 text-white outline-none focus:ring-2 focus:ring-discord-brand border border-transparent focus:border-transparent transition-all"
                  />
                </div>

                {/* Emoji Picker Row */}
                <div className="text-left mb-6">
                  <label className="block text-discord-light-300 uppercase text-[12px] font-bold tracking-wider mb-2">
                    Server Icon Emoji
                  </label>
                  <div className="grid grid-cols-6 gap-2 bg-discord-dark-500 p-3 rounded max-h-[100px] overflow-y-auto">
                    {emojiOptions.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => setServerIcon(emoji)}
                        className={`text-2xl p-1 rounded hover:bg-discord-dark-100 transition-all ${
                          serverEmoji === emoji ? 'bg-discord-dark-100 scale-110' : ''
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selector Row */}
                <div className="text-left mb-6">
                  <label className="block text-discord-light-300 uppercase text-[12px] font-bold tracking-wider mb-2">
                    Theme Color
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map((color) => (
                      <button
                        key={color.class}
                        type="button"
                        onClick={() => setServerColor(color.class)}
                        className={`w-8 h-8 rounded-full border-2 ${color.class} transition-all ${
                          serverColor === color.class ? 'border-white scale-110' : 'border-transparent hover:scale-105'
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-discord-dark-400 p-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="text-white hover:underline text-sm font-medium px-4 py-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-discord-brand hover:bg-discord-brand/90 text-white font-medium text-sm px-6 py-2.5 rounded transition-all"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
