'use client';

import React from 'react';
import { useDiscord } from '../lib/discord-store';
import { ServerSidebar } from '../components/server-sidebar';
import { ChannelSidebar } from '../components/channel-sidebar';
import { ChatArea } from '../components/chat-area';
import { MemberSidebar } from '../components/member-sidebar';
import { VoiceCall } from '../components/voice-call';
import { SettingsModal } from '../components/settings-modal';
import { ActivityModal } from '../components/activity-modal';

export default function Home() {
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useDiscord();

  return (
    <main className="h-screen w-screen flex overflow-hidden bg-discord-dark-500 dark:bg-discord-dark-500 select-none relative">
      {/* 1. Mobile Left Sidebar Drawer Backdrop */}
      {isMobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-30 md:hidden transition-all duration-300 animate-fadeIn"
        />
      )}

      {/* 2. Sidebars Drawer Container (Slides in on mobile, static on desktop) */}
      <div className={`fixed md:static top-0 bottom-0 left-0 flex h-full z-40 transition-transform duration-300 md:translate-x-0 ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Leftmost Server Icon Sidebar */}
        <ServerSidebar />

        {/* Middle Channel Category / Friend Sidebar */}
        <ChannelSidebar />
      </div>

      {/* 3. Central Chat Pane & Voice Layout */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Render Voice Call Grid if connected to a voice channel */}
        <VoiceCall />

        {/* Render Main Chat message history thread or Friends Dashboard */}
        <ChatArea />
      </div>

      {/* 4. Rightmost Member List Sidebar (Server only, toggleable, responsive overlay on mobile) */}
      <MemberSidebar />

      {/* --- OVERLAY MODALS --- */}
      {/* Full-Screen Settings Modal */}
      <SettingsModal />

      {/* Interactive Voice Activities Mini-Games Modal */}
      <ActivityModal />
    </main>
  );
}
