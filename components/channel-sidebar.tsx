'use client';

import React, { useState } from 'react';
import { useDiscord } from '../lib/discord-store';
import { 
  Hash, Volume2, Plus, Settings, Mic, MicOff, Headphones, 
  Search, X, UserPlus, Compass, Activity, Rocket, PhoneOff, Video, Monitor
} from 'lucide-react';
import { toast } from 'sonner';

export const ChannelSidebar: React.FC = () => {
  const {
    currentServerId,
    currentChannelId,
    servers,
    friends,
    userProfile,
    activeVoiceChannelId,
    activeVoiceUsers,
    isMuted,
    isDeafened,
    isCameraOn,
    isScreenSharing,
    activeActivityId,
    selectChannel,
    joinVoiceChannel,
    leaveVoiceChannel,
    toggleMute,
    toggleDeafen,
    toggleCamera,
    toggleScreenShare,
    launchActivity,
    setSettingsOpen,
    addChannel,
    addFriend
  } = useDiscord();

  const [showCreateChannel, setShowCreateChannel] = useState(false);
  const [newChannelName, setNewChannelName] = useState('');
  const [newChannelType, setNewChannelType] = useState<'text' | 'voice'>('text');
  const [newChannelDesc, setNewChannelDesc] = useState('');

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendUsername, setFriendUsername] = useState('');

  const [showActivitySelect, setShowActivitySelect] = useState(false);

  // Get current active server
  const activeServer = servers.find(s => s.id === currentServerId);

  const handleCreateChannel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChannelName.trim() || !currentServerId) return;
    addChannel(currentServerId, newChannelName, newChannelType, newChannelDesc);
    setNewChannelName('');
    setNewChannelDesc('');
    setShowCreateChannel(false);
  };

  const handleAddFriendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!friendUsername.trim()) return;
    const success = addFriend(friendUsername);
    if (success) {
      setFriendUsername('');
      setShowAddFriend(false);
    }
  };

  return (
    <div className="w-60 bg-discord-dark-300 dark:bg-discord-dark-300 flex flex-col select-none h-full shrink-0">
      {/* Top Header Section */}
      {currentServerId === 'home' ? (
        <div className="h-12 border-b border-discord-dark-500 flex items-center px-4 justify-between font-bold text-white relative shadow-sm">
          <span className="text-[14px] tracking-wide">Direct Messages</span>
          <button 
            onClick={() => setShowAddFriend(true)}
            className="text-discord-light-300 hover:text-white transition-all"
            title="Add Friend"
          >
            <UserPlus className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="h-12 border-b border-discord-dark-500 flex items-center px-4 justify-between font-bold text-white relative shadow-sm hover:bg-discord-dark-100/50 cursor-pointer transition-all">
          <span className="text-[15px] truncate max-w-[160px]">{activeServer?.name}</span>
          <Plus 
            onClick={() => setShowCreateChannel(true)}
            className="w-4 h-4 text-discord-light-300 hover:text-white transition-all"
            title="Create Channel"
          />
        </div>
      )}

      {/* Mid List Section (Channels or Friends list) */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4 no-scrollbar">
        {currentServerId === 'home' ? (
          // Home DM Sidebar
          <div className="space-y-1">
            <button
              onClick={() => selectChannel('friends')}
              className={`w-full flex items-center gap-3 px-2 py-2 rounded text-sm font-medium transition-all ${
                currentChannelId === 'friends'
                  ? 'bg-discord-dark-100 text-white'
                  : 'text-discord-light-300 hover:bg-discord-dark-100/40 hover:text-discord-light-100'
              }`}
            >
              <Compass className="w-5 h-5 text-indigo-400" />
              <span>Friends</span>
            </button>

            <div className="pt-4 pb-1 px-2 flex justify-between items-center text-[11px] font-bold text-discord-light-300 uppercase tracking-wider">
              <span>Direct Messages</span>
            </div>

            {friends.map((friend) => {
              const isActive = currentChannelId === friend.dmChannelId;
              
              let statusColor = 'bg-gray-400';
              if (friend.status === 'online') statusColor = 'bg-discord-green';
              if (friend.status === 'idle') statusColor = 'bg-discord-yellow';
              if (friend.status === 'dnd') statusColor = 'bg-discord-red';

              return (
                <button
                  key={friend.id}
                  onClick={() => selectChannel(friend.dmChannelId)}
                  className={`w-full flex items-center justify-between group px-2 py-1.5 rounded text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-discord-dark-100 text-white'
                      : 'text-discord-light-300 hover:bg-discord-dark-100/40 hover:text-discord-light-100'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className="relative w-8 h-8 rounded-full bg-discord-dark-100 flex items-center justify-center text-lg select-none shrink-0">
                      {friend.avatar}
                      <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-discord-dark-300 ${statusColor}`} />
                    </div>
                    <div className="text-left truncate">
                      <div className={`truncate ${isActive ? 'text-white' : 'text-discord-light-300 group-hover:text-white'}`}>
                        {friend.username}
                      </div>
                      {friend.customStatus && (
                        <div className="text-[11px] text-discord-light-300 truncate font-normal">
                          {friend.customStatus}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          // Server Channels Sidebar
          <div className="space-y-4">
            {/* Text Channels Category */}
            <div>
              <div className="px-1 py-1 flex justify-between items-center text-[11px] font-bold text-discord-light-300 uppercase tracking-wider">
                <span>Text Channels</span>
                <Plus 
                  onClick={() => {
                    setNewChannelType('text');
                    setShowCreateChannel(true);
                  }}
                  className="w-3.5 h-3.5 cursor-pointer hover:text-white transition-all" 
                />
              </div>
              <div className="space-y-[2px] mt-1">
                {activeServer?.channels
                  .filter(c => c.type === 'text')
                  .map(channel => {
                    const isActive = currentChannelId === channel.id;
                    return (
                      <button
                        key={channel.id}
                        onClick={() => selectChannel(channel.id)}
                        className={`w-full flex items-center justify-between group px-2 py-1.5 rounded text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-discord-dark-100 text-white'
                            : 'text-discord-light-300 hover:bg-discord-dark-100/40 hover:text-discord-light-100'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <Hash className="w-4 h-4 text-discord-light-300 shrink-0" />
                          <span className={`${isActive ? 'text-white' : 'text-discord-light-300 group-hover:text-white'} truncate`}>
                            {channel.name}
                          </span>
                        </div>
                        {channel.unread && !isActive && (
                          <div className="w-2 h-2 rounded-full bg-white mr-1 animate-pulse" />
                        )}
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Voice Channels Category */}
            <div>
              <div className="px-1 py-1 flex justify-between items-center text-[11px] font-bold text-discord-light-300 uppercase tracking-wider">
                <span>Voice Channels</span>
                <Plus 
                  onClick={() => {
                    setNewChannelType('voice');
                    setShowCreateChannel(true);
                  }}
                  className="w-3.5 h-3.5 cursor-pointer hover:text-white transition-all" 
                />
              </div>
              <div className="space-y-[2px] mt-1">
                {activeServer?.channels
                  .filter(c => c.type === 'voice')
                  .map(channel => {
                    const isConnected = activeVoiceChannelId === channel.id;
                    return (
                      <div key={channel.id} className="space-y-1">
                        <button
                          onClick={() => joinVoiceChannel(channel.id)}
                          className={`w-full flex items-center gap-2 group px-2 py-1.5 rounded text-sm font-medium transition-all ${
                            isConnected
                              ? 'bg-discord-green/20 text-discord-green'
                              : 'text-discord-light-300 hover:bg-discord-dark-100/40 hover:text-discord-light-100'
                          }`}
                        >
                          <Volume2 className={`w-4 h-4 shrink-0 ${isConnected ? 'text-discord-green' : 'text-discord-light-300 group-hover:text-white'}`} />
                          <span className={`truncate ${isConnected ? 'font-bold' : 'group-hover:text-white'}`}>
                            {channel.name}
                          </span>
                        </button>

                        {/* List connected members in this channel */}
                        {isConnected && (
                          <div className="pl-6 space-y-1.5 py-1">
                            {/* User Me */}
                            <div className="flex items-center gap-2 text-xs text-white">
                              <span className="text-sm select-none">{userProfile.avatar}</span>
                              <span className="truncate">{userProfile.username}</span>
                              {isMuted && <MicOff className="w-3 h-3 text-discord-red shrink-0 ml-auto mr-2" />}
                            </div>
                            {/* Other Simulated Members */}
                            {activeVoiceUsers.map((user) => (
                              <div key={user.id} className="flex items-center gap-2 text-xs text-discord-light-300">
                                <span className="text-sm select-none">{user.avatar}</span>
                                <span className="truncate">{user.username}</span>
                                {/* Animated speaking ring logic would be applied to UI */}
                                <div className="w-1.5 h-1.5 rounded-full bg-discord-green mr-2 ml-auto animate-ping" />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Control Section */}
      <div className="bg-discord-dark-400 p-2 flex flex-col border-t border-discord-dark-500 gap-1.5 shrink-0">
        {/* Active Voice Connection Card */}
        {activeVoiceChannelId && (
          <div className="bg-discord-dark-500/80 rounded p-2 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-discord-green animate-pulse" />
                <div className="text-left">
                  <div className="text-xs font-bold text-discord-green leading-none">Voice Connected</div>
                  <div className="text-[10px] text-discord-light-300 leading-tight truncate max-w-[110px]">
                    {servers.find(s => s.channels.some(c => c.id === activeVoiceChannelId))?.name || 'Server'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {/* Launch Activity Rocket */}
                <button
                  onClick={() => setShowActivitySelect(!showActivitySelect)}
                  className={`p-1.5 rounded hover:bg-discord-dark-100 transition-all relative ${
                    activeActivityId ? 'text-discord-brand bg-discord-brand/10' : 'text-discord-light-300 hover:text-white'
                  }`}
                  title="Launch Activity (Play Games!)"
                >
                  <Rocket className="w-4 h-4" />
                </button>

                <button
                  onClick={leaveVoiceChannel}
                  className="p-1.5 rounded hover:bg-discord-red/20 text-discord-red hover:text-white transition-all shrink-0"
                  title="Disconnect"
                >
                  <PhoneOff className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick action grid for Voice */}
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={toggleCamera}
                className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded text-[11px] font-medium transition-all ${
                  isCameraOn 
                    ? 'bg-discord-green text-white hover:bg-discord-green/90' 
                    : 'bg-discord-dark-100 text-discord-light-300 hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Camera</span>
              </button>

              <button
                onClick={toggleScreenShare}
                className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded text-[11px] font-medium transition-all ${
                  isScreenSharing 
                    ? 'bg-discord-brand text-white hover:bg-discord-brand/90' 
                    : 'bg-discord-dark-100 text-discord-light-300 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>

              <button
                onClick={() => setShowActivitySelect(!showActivitySelect)}
                className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded text-[11px] font-medium bg-discord-dark-100 text-discord-light-300 hover:text-white transition-all`}
              >
                <Activity className="w-3.5 h-3.5 text-indigo-400" />
                <span>Play</span>
              </button>
            </div>
          </div>
        )}

        {/* User profile card */}
        <div className="flex items-center justify-between bg-discord-dark-500/30 p-1.5 rounded">
          <div className="flex items-center gap-2 truncate max-w-[120px]">
            <div className="w-8 h-8 rounded-full bg-discord-dark-100 flex items-center justify-center text-lg select-none shrink-0 relative">
              {userProfile.avatar}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-discord-dark-400 bg-discord-green" />
            </div>
            <div className="text-left truncate">
              <div className="text-sm font-bold text-white truncate leading-none mb-0.5">
                {userProfile.username}
              </div>
              <div className="text-[10px] text-discord-light-300 leading-none">
                #{userProfile.discriminator}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-0.5 shrink-0">
            <button
              onClick={toggleMute}
              className="p-1.5 rounded hover:bg-discord-dark-100 text-discord-light-300 hover:text-white transition-all"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <MicOff className="w-4 h-4 text-discord-red" /> : <Mic className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleDeafen}
              className="p-1.5 rounded hover:bg-discord-dark-100 text-discord-light-300 hover:text-white transition-all"
              title={isDeafened ? "Undeafen" : "Deafen"}
            >
              {isDeafened ? <MicOff className="w-4 h-4 text-discord-red" /> : <Headphones className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setSettingsOpen(true)}
              className="p-1.5 rounded hover:bg-discord-dark-100 text-discord-light-300 hover:text-white transition-all"
              title="User Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Create Channel Modal */}
      {showCreateChannel && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-discord-dark-200 rounded-lg w-full max-w-[440px] text-white overflow-hidden shadow-xl animate-scaleIn">
            <form onSubmit={handleCreateChannel}>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-1">Create Channel</h2>
                <p className="text-discord-light-300 text-xs mb-6">in {activeServer?.name}</p>

                {/* Channel Type */}
                <div className="mb-6">
                  <label className="block text-discord-light-300 uppercase text-[11px] font-bold tracking-wider mb-2">
                    Channel Type
                  </label>
                  <div className="space-y-2">
                    <label className={`flex items-center gap-3 p-3 rounded cursor-pointer border transition-all ${
                      newChannelType === 'text' 
                        ? 'bg-discord-dark-100 border-discord-brand' 
                        : 'bg-discord-dark-500 border-transparent hover:bg-discord-dark-100/40'
                    }`}>
                      <input
                        type="radio"
                        name="channelType"
                        value="text"
                        checked={newChannelType === 'text'}
                        onChange={() => setNewChannelType('text')}
                        className="hidden"
                      />
                      <Hash className="w-6 h-6 text-discord-light-300" />
                      <div className="text-left">
                        <div className="text-sm font-bold">Text</div>
                        <div className="text-xs text-discord-light-300">Post messages, images, memes, and opinions</div>
                      </div>
                    </label>

                    <label className={`flex items-center gap-3 p-3 rounded cursor-pointer border transition-all ${
                      newChannelType === 'voice' 
                        ? 'bg-discord-dark-100 border-discord-brand' 
                        : 'bg-discord-dark-500 border-transparent hover:bg-discord-dark-100/40'
                    }`}>
                      <input
                        type="radio"
                        name="channelType"
                        value="voice"
                        checked={newChannelType === 'voice'}
                        onChange={() => setNewChannelType('voice')}
                        className="hidden"
                      />
                      <Volume2 className="w-6 h-6 text-discord-light-300" />
                      <div className="text-left">
                        <div className="text-sm font-bold">Voice</div>
                        <div className="text-xs text-discord-light-300">Hang out together with voice, video, and screen share</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Channel Name */}
                <div className="mb-4">
                  <label className="block text-discord-light-300 uppercase text-[11px] font-bold tracking-wider mb-2">
                    Channel Name
                  </label>
                  <div className="relative flex items-center bg-discord-dark-500 rounded">
                    <span className="text-discord-light-300 pl-3 font-bold text-lg select-none">#</span>
                    <input
                      type="text"
                      value={newChannelName}
                      onChange={(e) => setNewChannelName(e.target.value)}
                      placeholder="new-channel"
                      maxLength={20}
                      required
                      className="w-full bg-transparent p-2.5 text-white outline-none focus:ring-0 border-none text-sm"
                    />
                  </div>
                </div>

                {/* Channel Description */}
                {newChannelType === 'text' && (
                  <div>
                    <label className="block text-discord-light-300 uppercase text-[11px] font-bold tracking-wider mb-2">
                      Description
                    </label>
                    <textarea
                      value={newChannelDesc}
                      onChange={(e) => setNewChannelDesc(e.target.value)}
                      placeholder="What is this channel for?"
                      maxLength={80}
                      rows={2}
                      className="w-full bg-discord-dark-500 rounded p-2.5 text-white outline-none text-sm resize-none"
                    />
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="bg-discord-dark-400 p-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setShowCreateChannel(false)}
                  className="text-white hover:underline text-sm font-medium px-4 py-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-discord-brand hover:bg-discord-brand/90 text-white font-medium text-sm px-6 py-2.5 rounded transition-all"
                >
                  Create Channel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Friend Modal */}
      {showAddFriend && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-discord-dark-200 rounded-lg w-full max-w-[420px] text-white overflow-hidden shadow-xl animate-scaleIn">
            <form onSubmit={handleAddFriendSubmit}>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Add a Friend</h2>
                <p className="text-discord-light-300 text-sm mb-6">
                  Enter your friend's username (case-sensitive) to add them to your Direct Messages.
                </p>

                <div className="relative flex items-center bg-discord-dark-500 rounded p-1 border border-transparent focus-within:border-discord-brand transition-all">
                  <input
                    type="text"
                    value={friendUsername}
                    onChange={(e) => setFriendUsername(e.target.value)}
                    placeholder="e.g. Wumpus"
                    required
                    autoFocus
                    className="w-full bg-transparent p-2 text-white outline-none text-sm"
                  />
                </div>
                <div className="text-[11px] text-discord-light-300 mt-2">
                  Try adding mock members like: **Wumpus**, **Nelly**, **Clyde**, or **Captain Cookie**!
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-discord-dark-400 p-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setShowAddFriend(false)}
                  className="text-white hover:underline text-sm font-medium px-4 py-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-discord-brand hover:bg-discord-brand/90 text-white font-medium text-sm px-6 py-2.5 rounded transition-all"
                >
                  Send Friend Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Activity Launcher Panel Overlay */}
      {showActivitySelect && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setShowActivitySelect(false)}>
          <div 
            className="absolute bottom-24 left-16 bg-discord-dark-200 rounded-lg w-72 border border-discord-dark-100 p-4 shadow-2xl animate-slideUp text-white flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-discord-dark-500 pb-2">
              <span className="font-bold text-sm flex items-center gap-1.5 text-indigo-400">
                <Rocket className="w-4 h-4 animate-bounce" />
                Discord Activities
              </span>
              <button onClick={() => setShowActivitySelect(false)}>
                <X className="w-4 h-4 text-discord-light-300 hover:text-white" />
              </button>
            </div>

            <p className="text-[11px] text-discord-light-300 leading-normal">
              Launch instant multiplayer games and media sync tools directly inside your current voice channel!
            </p>

            <div className="space-y-2">
              {/* Activity 1: Retro Space Shooter */}
              <button
                onClick={() => {
                  launchActivity('retro-arcade');
                  setShowActivitySelect(false);
                }}
                className={`w-full flex items-center gap-3 p-2 rounded text-left transition-all ${
                  activeActivityId === 'retro-arcade' 
                    ? 'bg-discord-brand text-white' 
                    : 'bg-discord-dark-500 hover:bg-discord-dark-100 text-discord-light-300 hover:text-white'
                }`}
              >
                <span className="text-2xl select-none">🚀</span>
                <div>
                  <div className="text-xs font-bold">Retro Space Shooter</div>
                  <div className="text-[10px] text-discord-light-300">8-Bit arcade space invader battle</div>
                </div>
              </button>

              {/* Activity 2: Watch Party Whiteboard */}
              <button
                onClick={() => {
                  launchActivity('whiteboard');
                  setShowActivitySelect(false);
                }}
                className={`w-full flex items-center gap-3 p-2 rounded text-left transition-all ${
                  activeActivityId === 'whiteboard' 
                    ? 'bg-discord-brand text-white' 
                    : 'bg-discord-dark-500 hover:bg-discord-dark-100 text-discord-light-300 hover:text-white'
                }`}
              >
                <span className="text-2xl select-none">🎨</span>
                <div>
                  <div className="text-xs font-bold">Whiteboard Watch-Party</div>
                  <div className="text-[10px] text-discord-light-300">Co-drawing board & video sync player</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
