'use client';

import React, { useState } from 'react';
import { useDiscord } from '../lib/discord-store';
import { X, User, ShieldAlert, Monitor, Volume2, Sparkles, LogOut, Check } from 'lucide-react';
import { toast } from 'sonner';

export const SettingsModal: React.FC = () => {
  const {
    isSettingsOpen,
    userProfile,
    updateUserProfile,
    setSettingsOpen
  } = useDiscord();

  const [activeTab, setActiveTab] = useState<'account' | 'profile' | 'appearance' | 'audio' | 'nitro'>('account');
  
  // Form states
  const [username, setUsername] = useState(userProfile.username);
  const [avatar, setAvatar] = useState(userProfile.avatar);
  const [bio, setBio] = useState(userProfile.bio);
  const [bannerColor, setBannerColor] = useState(userProfile.bannerColor);
  const [themeColor, setThemeColor] = useState(userProfile.themeColor);

  if (!isSettingsOpen) return null;

  const handleSave = () => {
    updateUserProfile({
      username,
      avatar,
      bio,
      bannerColor,
      themeColor
    });
    setSettingsOpen(false);
  };

  const avatarOptions = ['👨‍💻', '👾', '🤖', '🐹', '👑', '🍪', '🐱', '🦊', '🐼', '🦖', '🍕', '🚀'];
  const bannerColors = [
    { class: 'bg-discord-brand', name: 'Discord Blue' },
    { class: 'bg-indigo-600', name: 'Indigo' },
    { class: 'bg-red-500', name: 'Red' },
    { class: 'bg-emerald-600', name: 'Green' },
    { class: 'bg-amber-600', name: 'Gold' },
    { class: 'bg-purple-600', name: 'Purple' },
    { class: 'bg-pink-500', name: 'Pink' },
    { class: 'bg-zinc-800', name: 'Slate' }
  ];

  const handleResetSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      toast.success('Local Storage cleared! Reloading page...');
      setTimeout(() => window.location.reload(), 1500);
    }
  };

  return (
    <div className="fixed inset-0 bg-discord-dark-200 z-50 flex animate-scaleIn text-white select-none">
      {/* Left Sidebar Menu */}
      <div className="w-60 bg-discord-dark-300 dark:bg-discord-dark-300 flex flex-col py-10 px-6 items-end border-r border-discord-dark-500 shrink-0 overflow-y-auto no-scrollbar">
        <div className="w-48 text-left space-y-6">
          
          {/* User Settings Category */}
          <div>
            <div className="text-[11px] font-bold text-discord-light-300 uppercase tracking-wider mb-2 px-2">
              User Settings
            </div>
            <div className="space-y-0.5">
              {[
                { id: 'account', name: 'My Account', icon: User },
                { id: 'profile', name: 'Profiles', icon: ShieldAlert }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded text-sm font-medium transition-all ${
                    activeTab === item.id 
                      ? 'bg-discord-dark-100 text-white' 
                      : 'text-discord-light-300 hover:bg-discord-dark-100/40 hover:text-discord-light-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* App Settings Category */}
          <div>
            <div className="text-[11px] font-bold text-discord-light-300 uppercase tracking-wider mb-2 px-2">
              App Settings
            </div>
            <div className="space-y-0.5">
              {[
                { id: 'appearance', name: 'Appearance', icon: Monitor },
                { id: 'audio', name: 'Voice & Video', icon: Volume2 },
                { id: 'nitro', name: 'Discord Nitro', icon: Sparkles }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded text-sm font-medium transition-all ${
                    activeTab === item.id 
                      ? 'bg-discord-dark-100 text-white' 
                      : 'text-discord-light-300 hover:bg-discord-dark-100/40 hover:text-discord-light-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-discord-dark-100/10 my-4" />

          {/* Hard Reset Button */}
          <button
            onClick={handleResetSave}
            className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded text-sm font-medium text-discord-red hover:bg-discord-red/10 transition-all text-left"
          >
            <LogOut className="w-4 h-4" />
            <span>Hard Reset App</span>
          </button>
        </div>
      </div>

      {/* Right Content Pane */}
      <div className="flex-1 bg-discord-dark-200 py-10 px-10 overflow-y-auto no-scrollbar text-left relative flex justify-center">
        <div className="max-w-[600px] w-full flex flex-col h-full">
          
          {/* Close Settings Button */}
          <button
            onClick={() => setSettingsOpen(false)}
            className="absolute top-10 right-10 flex flex-col items-center gap-1 group shrink-0"
          >
            <div className="p-2 rounded-full border-2 border-discord-light-300 group-hover:bg-discord-light-300 group-hover:text-discord-dark-200 text-discord-light-300 transition-all">
              <X className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-discord-light-300 group-hover:text-white transition-all uppercase tracking-wider">
              ESC
            </span>
          </button>

          {/* Content Body */}
          <div className="flex-1">
            
            {/* TABS 1: MY ACCOUNT */}
            {activeTab === 'account' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1">My Account</h2>
                  <p className="text-discord-light-300 text-xs">Manage your core account credentials and presence.</p>
                </div>

                {/* Profile Card Preview */}
                <div className="bg-discord-dark-400 rounded-lg overflow-hidden border border-discord-dark-500/50 shadow-lg">
                  <div className={`h-20 ${bannerColor}`} />
                  <div className="p-4 relative flex justify-between items-end">
                    <div className="absolute -top-10 left-4 w-20 h-20 rounded-full border-4 border-discord-dark-400 bg-discord-dark-100 flex items-center justify-center text-4xl select-none shadow-md">
                      {avatar}
                    </div>
                    <div className="pl-24">
                      <div className="font-extrabold text-lg flex items-baseline gap-1">
                        {username}
                        <span className="text-xs text-discord-light-300 font-normal">#{userProfile.discriminator}</span>
                      </div>
                      <div className="text-[11px] text-discord-light-300 mt-0.5 truncate max-w-[200px]">
                        {bio || 'No biography written.'}
                      </div>
                    </div>
                    <div className="text-xs text-discord-light-300 uppercase tracking-wider font-bold">
                      Account Preview
                    </div>
                  </div>
                </div>

                {/* Username Input */}
                <div className="space-y-2">
                  <label className="block text-discord-light-300 uppercase text-[11px] font-bold tracking-wider">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    maxLength={20}
                    className="w-full bg-discord-dark-500 rounded p-2.5 text-white outline-none focus:ring-2 focus:ring-discord-brand border border-transparent transition-all text-sm"
                  />
                </div>

                {/* Avatar Emoji Picker */}
                <div className="space-y-2">
                  <label className="block text-discord-light-300 uppercase text-[11px] font-bold tracking-wider">
                    Avatar Emoji
                  </label>
                  <div className="grid grid-cols-6 gap-2 bg-discord-dark-500 p-3 rounded max-h-[100px] overflow-y-auto">
                    {avatarOptions.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => setAvatar(emoji)}
                        className={`text-2xl p-1 rounded hover:bg-discord-dark-100 transition-all ${
                          avatar === emoji ? 'bg-discord-dark-100 scale-110' : ''
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TABS 2: PROFILES */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Profiles</h2>
                  <p className="text-discord-light-300 text-xs">Express yourself with a profile banner, biography, and bio styling.</p>
                </div>

                {/* Banner Color Selector */}
                <div className="space-y-2">
                  <label className="block text-discord-light-300 uppercase text-[11px] font-bold tracking-wider">
                    Profile Banner Color
                  </label>
                  <div className="flex flex-wrap gap-2 bg-discord-dark-500 p-3 rounded">
                    {bannerColors.map((color) => (
                      <button
                        key={color.class}
                        type="button"
                        onClick={() => setBannerColor(color.class)}
                        className={`w-8 h-8 rounded-full border-2 ${color.class} transition-all ${
                          bannerColor === color.class ? 'border-white scale-115' : 'border-transparent hover:scale-105'
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Bio Textarea */}
                <div className="space-y-2">
                  <label className="block text-discord-light-300 uppercase text-[11px] font-bold tracking-wider">
                    About Me
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Write a custom biography..."
                    maxLength={150}
                    rows={4}
                    className="w-full bg-discord-dark-500 rounded p-2.5 text-white outline-none focus:ring-2 focus:ring-discord-brand border border-transparent transition-all text-sm resize-none"
                  />
                  <div className="text-[10px] text-discord-light-300 text-right">
                    {bio.length}/150 characters
                  </div>
                </div>
              </div>
            )}

            {/* TABS 3: APPEARANCE */}
            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Appearance</h2>
                  <p className="text-discord-light-300 text-xs">Configure themes, message display scaling, and custom fonts.</p>
                </div>

                {/* Theme Selector */}
                <div className="space-y-2">
                  <label className="block text-discord-light-300 uppercase text-[11px] font-bold tracking-wider">
                    Theme
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        const html = document.documentElement;
                        html.classList.remove('light');
                        html.classList.add('dark');
                        toast.success('Dark theme activated!');
                      }}
                      className="bg-discord-dark-500 border-2 border-discord-brand p-4 rounded-lg flex items-center justify-between font-bold hover:bg-discord-dark-100/30 transition-all text-sm"
                    >
                      <span>Dark Theme (Recommended)</span>
                      <Check className="w-5 h-5 text-discord-brand" />
                    </button>

                    <button
                      onClick={() => {
                        const html = document.documentElement;
                        html.classList.remove('dark');
                        html.classList.add('light');
                        toast.success('Light theme activated! Protect your eyes! ☀️');
                      }}
                      className="bg-discord-dark-500 border-2 border-transparent p-4 rounded-lg flex items-center justify-between font-bold hover:bg-discord-dark-100/30 transition-all text-sm"
                    >
                      <span>Light Theme (Flashbang)</span>
                    </button>
                  </div>
                </div>

                {/* Message display sizing */}
                <div className="space-y-2">
                  <label className="block text-discord-light-300 uppercase text-[11px] font-bold tracking-wider">
                    Message Display
                  </label>
                  <div className="bg-discord-dark-500 p-4 rounded-lg space-y-3">
                    <div className="flex items-start gap-3 text-left">
                      <div className="w-8 h-8 rounded-full bg-discord-dark-300 flex items-center justify-center text-sm">👾</div>
                      <div>
                        <div className="text-xs font-bold text-indigo-400">Wumpus <span className="text-[9px] text-discord-light-300 font-normal">Today at 1:00 PM</span></div>
                        <p className="text-xs text-discord-light-100">Cozy layout has generous padding and large avatars, perfect for standard monitors!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TABS 4: AUDIO & VIDEO */}
            {activeTab === 'audio' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Voice & Video</h2>
                  <p className="text-discord-light-300 text-xs">Configure input devices, echo cancellation, and bitrate diagnostics.</p>
                </div>

                {/* Input Volume */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-bold text-discord-light-300 uppercase tracking-wider">
                    <span>Input Volume (Microphone)</span>
                    <span>100%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="80"
                    className="w-full accent-discord-brand bg-discord-dark-500 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Output Volume */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-bold text-discord-light-300 uppercase tracking-wider">
                    <span>Output Volume (Headphones)</span>
                    <span>100%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="100"
                    className="w-full accent-discord-brand bg-discord-dark-500 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Bitrate diagnostics */}
                <div className="bg-discord-dark-500 p-4 rounded-lg border border-discord-dark-100/10">
                  <h4 className="font-bold text-sm mb-1.5 text-discord-green flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-discord-green animate-pulse" />
                    Opus HD Voice Engine Active
                  </h4>
                  <p className="text-xs text-discord-light-300 leading-normal">
                    Bitrate: **96 kbps** • Codec: **Opus Voice** • Echo Cancellation: **Enabled** • Noise Suppression: **Krisp Intelligent Suppressor**
                  </p>
                </div>
              </div>
            )}

            {/* TABS 5: DISCORD NITRO */}
            {activeTab === 'nitro' && (
              <div className="space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-discord-fuchsia to-purple-500 flex items-center justify-center text-3xl shadow-xl animate-bounce">
                    🎁
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-discord-fuchsia via-purple-400 to-indigo-400">
                    Discord Nitro is Active!
                  </h2>
                  <p className="text-discord-light-300 text-sm max-w-[400px] mx-auto leading-relaxed">
                    You have unlocked premium perks: custom profile banners, larger file uploads, and full 1080p 60FPS screen sharing!
                  </p>
                </div>

                {/* Perks Grid */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-discord-dark-500 p-3 rounded border border-discord-dark-100/10">
                    <div className="text-xl mb-1.5">🚀</div>
                    <div className="font-bold text-xs text-white mb-0.5">2 Server Boosts</div>
                    <p className="text-[10px] text-discord-light-300 leading-normal">Support your favorite communities and get a shiny badge!</p>
                  </div>

                  <div className="bg-discord-dark-500 p-3 rounded border border-discord-dark-100/10">
                    <div className="text-xl mb-1.5">🎨</div>
                    <div className="font-bold text-xs text-white mb-0.5">Custom Themes</div>
                    <p className="text-[10px] text-discord-light-300 leading-normal">Design your profile banner and biography with premium colors.</p>
                  </div>
                </div>

                <button
                  onClick={() => toast.success('Server Boosted! 🎉 Thank you for supporting the community!')}
                  className="bg-gradient-to-r from-discord-fuchsia to-purple-600 hover:opacity-95 text-white font-bold text-sm py-2.5 px-6 rounded-full shadow-lg transition-all"
                >
                  Boost This Server! 🚀
                </button>
              </div>
            )}

          </div>

          {/* Settings Modal Footer */}
          <div className="bg-discord-dark-300 py-4 border-t border-discord-dark-500 flex justify-end gap-3 shrink-0">
            <button
              onClick={() => setSettingsOpen(false)}
              className="text-white hover:underline text-sm font-medium px-4"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-discord-brand hover:bg-discord-brand/90 text-white font-bold text-sm px-6 py-2.5 rounded transition-all shadow-md"
            >
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
