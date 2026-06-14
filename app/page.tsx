'use client';

import React from 'react';
import { ServerSidebar } from '../components/server-sidebar';
import { ChannelSidebar } from '../components/channel-sidebar';
import { ChatArea } from '../components/chat-area';
import { MemberSidebar } from '../components/member-sidebar';
import { VoiceCall } from '../components/voice-call';
import { SettingsModal } from '../components/settings-modal';
import { ActivityModal } from '../components/activity-modal';

export default function Home() {
  return (
    <main className="h-screen w-screen flex overflow-hidden bg-discord-dark-500 dark:bg-discord-dark-500 select-none">
      {/* 1. Leftmost Server Icon Sidebar */}
      <ServerSidebar />

      {/* 2. Middle Channel Category / Friend Sidebar */}
      <ChannelSidebar />

      {/* 3. Central Chat Pane & Voice Layout */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* Render Voice Call Grid if connected to a voice channel */}
        <VoiceCall />

        {/* Render Main Chat message history thread or Friends Dashboard */}
        <ChatArea />
      </div>

      {/* 4. Rightmost Member List Sidebar (Server only, toggleable) */}
      <MemberSidebar />

      {/* --- OVERLAY MODALS --- */}
      {/* Full-Screen Settings Modal */}
      <SettingsModal />

      {/* Interactive Voice Activities Mini-Games Modal */}
      <ActivityModal />
    </main>
  );
}
