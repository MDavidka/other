'use client';

import React, { useState } from 'react';
import { useDiscord } from '../lib/discord-store';
import { MessageSquare, Mail, Play, X, User } from 'lucide-react';
import { Member } from '../lib/discord-state';

export const MemberSidebar: React.FC = () => {
  const { servers, currentServerId, isMembersListOpen, selectChannel, selectServer } = useDiscord();
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  if (currentServerId === 'home' || !isMembersListOpen) return null;

  const activeServer = servers.find(s => s.id === currentServerId);
  if (!activeServer) return null;

  // Group members into Online and Offline
  const onlineMembers = activeServer.members.filter(m => m.status !== 'offline');
  const offlineMembers = activeServer.members.filter(m => m.status === 'offline');

  const handleSendDm = (member: Member) => {
    // Switch to direct messages and select their DM channel
    selectServer('home');
    selectChannel(`dm-${member.id}`);
    setSelectedMember(null);
  };

  return (
    <div className="w-60 bg-discord-dark-300 dark:bg-discord-dark-300 border-l border-discord-dark-500 flex flex-col p-4 select-none h-full shrink-0 relative">
      <div className="overflow-y-auto flex-1 no-scrollbar space-y-6 text-left">
        
        {/* Online Members Section */}
        <div>
          <h4 className="text-xs font-bold text-discord-light-300 uppercase tracking-wider mb-2">
            Online — {onlineMembers.length}
          </h4>
          <div className="space-y-1">
            {onlineMembers.map((member) => {
              let statusColor = 'bg-discord-green';
              if (member.status === 'idle') statusColor = 'bg-discord-yellow';
              if (member.status === 'dnd') statusColor = 'bg-discord-red';

              return (
                <button
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="w-full flex items-center gap-3 p-1.5 rounded hover:bg-discord-dark-100/50 transition-all text-left group"
                >
                  <div className="relative w-8 h-8 rounded-full bg-discord-dark-100 flex items-center justify-center text-lg select-none shrink-0">
                    {member.avatar}
                    <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-discord-dark-300 ${statusColor}`} />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-sm font-bold truncate group-hover:text-white transition-all ${member.roleColor || 'text-discord-light-300'}`}>
                      {member.username}
                    </div>
                    {member.activity && (
                      <div className="text-[10px] text-discord-light-300 truncate max-w-[130px]">
                        Playing {member.activity.name}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Offline Members Section */}
        {offlineMembers.length > 0 && (
          <div>
            <h4 className="text-xs font-bold text-discord-light-300 uppercase tracking-wider mb-2">
              Offline — {offlineMembers.length}
            </h4>
            <div className="space-y-1">
              {offlineMembers.map((member) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="w-full flex items-center gap-3 p-1.5 rounded hover:bg-discord-dark-100/50 transition-all text-left group opacity-60 hover:opacity-100"
                >
                  <div className="relative w-8 h-8 rounded-full bg-discord-dark-100 flex items-center justify-center text-lg select-none shrink-0">
                    {member.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-gray-400 truncate group-hover:text-white transition-all">
                      {member.username}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Popover Member Details Profile Card */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
          <div 
            className="bg-discord-dark-200 rounded-lg w-full max-w-[340px] text-white overflow-hidden shadow-2xl animate-scaleIn border border-discord-dark-100/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Custom User Banner */}
            <div className={`h-24 w-full relative ${selectedMember.bannerColor || 'bg-discord-brand'}`}>
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-3 right-3 p-1 rounded-full bg-black/40 hover:bg-black/60 transition-all text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Avatar Placement overlapping Banner */}
            <div className="px-5 pb-5 text-left relative">
              <div className="absolute -top-10 left-5 w-20 h-20 rounded-full border-4 border-discord-dark-200 bg-discord-dark-100 flex items-center justify-center text-4xl select-none shadow-md">
                {selectedMember.avatar}
              </div>

              {/* Username Card details */}
              <div className="pt-12">
                <div className="font-extrabold text-xl flex items-baseline gap-1.5">
                  {selectedMember.username}
                  <span className="text-sm text-discord-light-300 font-normal">#{Math.floor(Math.random() * 9000) + 1000}</span>
                </div>
                <div className="text-xs text-discord-light-100 font-bold bg-discord-dark-400 py-1 px-2.5 rounded-full inline-block mt-2">
                  {selectedMember.role}
                </div>
              </div>

              <div className="w-full h-[1px] bg-discord-dark-100/10 my-4" />

              {/* Biography Section */}
              {selectedMember.bio && (
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-discord-light-300 uppercase tracking-wider mb-1">About Me</div>
                  <p className="text-xs text-discord-light-100 leading-relaxed whitespace-pre-line">{selectedMember.bio}</p>
                </div>
              )}

              {/* Active Playing Section */}
              {selectedMember.activity && (
                <div className="bg-discord-dark-500/50 p-3 rounded border border-discord-dark-100/10 mb-4 text-xs">
                  <div className="font-bold text-white mb-1.5 flex items-center gap-1">
                    <Play className="w-3.5 h-3.5 text-indigo-400 shrink-0 fill-indigo-400 animate-pulse" />
                    {selectedMember.activity.type === 'listening' ? 'Listening to Spotify' : 'Playing Game'}
                  </div>
                  <div className="text-white font-semibold">{selectedMember.activity.name}</div>
                  {selectedMember.activity.details && (
                    <div className="text-discord-light-300 mt-0.5">{selectedMember.activity.details}</div>
                  )}
                  {selectedMember.activity.state && (
                    <div className="text-discord-light-300">{selectedMember.activity.state}</div>
                  )}
                </div>
              )}

              {/* Message Input Trigger shortcut button */}
              {selectedMember.id !== 'user_me' && (
                <button
                  onClick={() => handleSendDm(selectedMember)}
                  className="w-full bg-discord-brand hover:bg-discord-brand/90 text-white font-medium text-sm py-2.5 rounded flex items-center justify-center gap-2 transition-all mt-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
