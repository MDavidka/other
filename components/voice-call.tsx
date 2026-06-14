'use client';

import React, { useEffect, useRef } from 'react';
import { useDiscord } from '../lib/discord-store';
import { MicOff, Video, Monitor, PhoneOff, Settings, Sparkles, Volume2 } from 'lucide-react';

export const VoiceCall: React.FC = () => {
  const {
    activeVoiceChannelId,
    activeVoiceUsers,
    userProfile,
    isMuted,
    isCameraOn,
    isScreenSharing,
    servers,
    leaveVoiceChannel
  } = useDiscord();

  const cameraCanvasRef = useRef<HTMLCanvasElement>(null);
  const screenCanvasRef = useRef<HTMLCanvasElement>(null);

  // Find channel and server details
  const server = servers.find(s => s.channels.some(c => c.id === activeVoiceChannelId));
  const channel = server?.channels.find(c => c.id === activeVoiceChannelId);

  // 1. Simulating camera face-cam feed
  useEffect(() => {
    if (!isCameraOn) return;
    const canvas = cameraCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let angle = 0;

    const render = () => {
      ctx.fillStyle = '#18191c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stylized moving geometric face/avatar
      angle += 0.05;
      const pulse = Math.sin(angle) * 10;

      // Draw a retro glowing circle grid background
      ctx.strokeStyle = 'rgba(88, 101, 242, 0.15)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let j = 0; j < canvas.height; j += 20) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
      }

      // Draw a glowing digital head
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 10,
        canvas.width / 2, canvas.height / 2, 80 + pulse
      );
      grad.addColorStop(0, '#5865F2');
      grad.addColorStop(1, 'rgba(235, 69, 158, 0.2)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2 - 10, 50, 0, Math.PI * 2);
      ctx.fill();

      // Eyes
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(canvas.width / 2 - 20, canvas.height / 2 - 20, 6, 0, Math.PI * 2);
      ctx.arc(canvas.width / 2 + 20, canvas.height / 2 - 20, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#202225';
      ctx.beginPath();
      ctx.arc(canvas.width / 2 - 20 + Math.cos(angle) * 2, canvas.height / 2 - 20, 3, 0, Math.PI * 2);
      ctx.arc(canvas.width / 2 + 20 + Math.cos(angle) * 2, canvas.height / 2 - 20, 3, 0, Math.PI * 2);
      ctx.fill();

      // Mouth pulsing
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2 + 10, 15 + Math.sin(angle) * 3, 0, Math.PI, false);
      ctx.stroke();

      // "LIVE FEED" indicator text
      ctx.fillStyle = '#248046';
      ctx.beginPath();
      ctx.arc(20, 20, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px "Inter", sans-serif';
      ctx.fillText('WEBCAM SIMULATOR', 32, 23);

      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, [isCameraOn]);

  // 2. Simulating screen share feed (matrix coding terminal)
  useEffect(() => {
    if (!isScreenSharing) return;
    const canvas = screenCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let yOffset = 0;
    const lines = [
      'import { useDiscord } from "../lib/discord-store";',
      'const DiscordApp = () => {',
      '  const state = useDiscord();',
      '  console.log("Connecting to Sycord Sandbox...");',
      '  process.env.NEXT_PUBLIC_NITRO = "ENABLED";',
      '  return <ChatArea />;',
      '};',
      '// Deploying bundle to sycord.site...',
      '>> STATUS: 200 OK',
      '>> LATENCY: 14ms (Direct Connection)',
      '>> SYRA AI: "All systems operational!"',
      '>> VOICE BITRATE: 96kbps (Opus HD Audio)',
      '>> FPS: 60.00 (V-Sync Active)'
    ];

    const render = () => {
      ctx.fillStyle = '#0f172a'; // slate 900
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#38bdf8'; // sky blue
      ctx.font = 'bold 12px "Courier New", monospace';
      ctx.fillText('🖥️ GuestCoder\'s Screen Share', 20, 25);

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
      ctx.beginPath();
      ctx.moveTo(20, 35);
      ctx.lineTo(canvas.width - 20, 35);
      ctx.stroke();

      // Matrix scrolling terminal code lines
      ctx.fillStyle = '#4ade80'; // emerald green
      ctx.font = '11px "Courier New", monospace';
      
      yOffset += 0.5;
      if (yOffset > 30) yOffset = 0;

      lines.forEach((line, idx) => {
        const y = 60 + idx * 22 - yOffset;
        if (y > 45 && y < canvas.height - 20) {
          ctx.fillText(`[${idx + 1}] ${line}`, 25, y);
        }
      });

      // Draw cursor
      ctx.fillStyle = Math.floor(Date.now() / 500) % 2 === 0 ? '#4ade80' : 'transparent';
      ctx.fillRect(25 + ctx.measureText(`[13] >> FPS: 60.00 (V-Sync Active)`).width + 5, canvas.height - 45, 8, 12);

      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, [isScreenSharing]);

  if (!activeVoiceChannelId) return null;

  return (
    <div className="bg-discord-dark-600 dark:bg-discord-dark-600 p-4 border-b border-discord-dark-500 text-white select-none shrink-0">
      {/* Title bar */}
      <div className="flex items-center justify-between mb-4 border-b border-discord-dark-500 pb-2">
        <div className="flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-discord-green" />
          <span className="font-bold text-sm">
            {channel?.name} / {server?.name}
          </span>
        </div>
        <button
          onClick={leaveVoiceChannel}
          className="flex items-center gap-1.5 bg-discord-red hover:bg-discord-red/90 text-white text-xs font-bold py-1.5 px-3 rounded transition-all shrink-0"
        >
          <PhoneOff className="w-3.5 h-3.5" />
          <span>Disconnect</span>
        </button>
      </div>

      {/* Grid of connected members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        
        {/* Card 1: User Me */}
        <div className="bg-discord-dark-400 rounded-lg p-4 border border-discord-dark-500 hover:border-discord-brand transition-all flex flex-col items-center justify-center min-h-[160px] relative overflow-hidden group">
          {isCameraOn ? (
            <canvas
              ref={cameraCanvasRef}
              width={260}
              height={160}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-discord-dark-100 flex items-center justify-center text-3xl select-none relative shadow-md">
              {userProfile.avatar}
              {isMuted && (
                <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-discord-red flex items-center justify-center border-2 border-discord-dark-400">
                  <MicOff className="w-3 h-3 text-white" />
                </span>
              )}
            </div>
          )}

          <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded text-xs font-bold truncate max-w-[150px] z-10">
            {userProfile.username} (You)
          </div>

          {/* Glowing active voice ring */}
          {!isMuted && (
            <div className="absolute inset-0 border-2 border-discord-green rounded-lg pointer-events-none animate-pulse" />
          )}
        </div>

        {/* Card 2: Screen Share (if active) */}
        {isScreenSharing && (
          <div className="bg-discord-dark-400 rounded-lg p-4 border border-discord-brand transition-all flex flex-col items-center justify-center min-h-[160px] relative overflow-hidden col-span-1 sm:col-span-2 md:col-span-1">
            <canvas
              ref={screenCanvasRef}
              width={260}
              height={160}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded text-xs font-bold z-10">
              GuestCoder's Screen Share
            </div>
          </div>
        )}

        {/* Cards for other mock members */}
        {activeVoiceUsers.map((member) => (
          <div
            key={member.id}
            className="bg-discord-dark-400 rounded-lg p-4 border border-discord-dark-500 hover:border-discord-green/50 transition-all flex flex-col items-center justify-center min-h-[160px] relative overflow-hidden group"
          >
            {/* Mock video streams for other users */}
            <div className="w-16 h-16 rounded-full bg-discord-dark-100 flex items-center justify-center text-3xl select-none shadow-md">
              {member.avatar}
            </div>

            <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded text-xs font-bold truncate max-w-[150px] z-10">
              {member.username}
            </div>

            {/* Speaking animation for simulated users */}
            <div className="absolute inset-0 border-2 border-discord-green rounded-lg pointer-events-none animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};
