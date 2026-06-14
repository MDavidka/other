'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useDiscord } from '../lib/discord-store';
import { X, Gamepad2, Play, RefreshCw, Volume2, Award, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export const ActivityModal: React.FC = () => {
  const {
    activeActivityId,
    activeVoiceChannelId,
    activeVoiceUsers,
    launchActivity
  } = useDiscord();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Game state references
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [highScore, setHighScore] = useState(0);
  const [showGameOver, setShowGameOver] = useState(false);

  // Keyboard keys active
  const keysPressed = useRef<Record<string, boolean>>({});

  // Mock comments from other voice call participants
  const [comments, setComments] = useState<{ user: string; text: string; time: string }[]>([
    { user: 'Wumpus', text: 'Woah, Clyde launched Space Invaders! 🚀', time: '1m' },
    { user: 'Nelly', text: 'Let\'s go! Show us some pro skills Clyde!', time: '30s' }
  ]);

  // Handle Game Input listeners
  useEffect(() => {
    if (activeActivityId !== 'retro-arcade') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = true;
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
        e.preventDefault(); // Prevent page scrolling while playing
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [activeActivityId]);

  // Main Game Loop Engine (Space Invaders)
  useEffect(() => {
    if (activeActivityId !== 'retro-arcade' || !isPlaying) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    // Game Entities
    const player = {
      x: canvas.width / 2 - 15,
      y: canvas.height - 40,
      width: 30,
      height: 20,
      speed: 4,
      color: '#5865F2'
    };

    let lasers: { x: number; y: number; vy: number; width: number; height: number; color: string }[] = [];
    let enemies: { x: number; y: number; width: number; height: number; color: string; alive: boolean; vx: number }[] = [];
    let particles: { x: number; y: number; vx: number; vy: number; color: string; alpha: number; life: number; maxLife: number }[] = [];

    // Spawn enemies
    const spawnEnemies = () => {
      enemies = [];
      const cols = 6;
      const rows = 3;
      const spacing = 45;
      const startX = 30;
      const startY = 50;

      for (let r = 0; rowCountCheck(r, rows); r++) {
        for (let c = 0; c < cols; c++) {
          enemies.push({
            x: startX + c * spacing,
            y: startY + r * 30,
            width: 25,
            height: 15,
            color: r === 0 ? '#EF4444' : r === 1 ? '#FBBF24' : '#10B981',
            alive: true,
            vx: 1 + level * 0.2
          });
        }
      }
    };

    const rowCountCheck = (r: number, rows: number) => r < rows;

    spawnEnemies();

    let lastShotTime = 0;

    const gameTick = () => {
      // Clear canvas
      ctx.fillStyle = '#0b0f19';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      for (let i = 0; i < 20; i++) {
        const starX = (Math.sin(i * 999) + 1) * canvas.width / 2;
        const starY = (Math.cos(i * 333) + 1) * canvas.height / 2;
        ctx.fillRect(starX, starY, 1.5, 1.5);
      }

      // 1. Move Player
      if (keysPressed.current['ArrowLeft'] || keysPressed.current['KeyA']) {
        player.x = Math.max(10, player.x - player.speed);
      }
      if (keysPressed.current['ArrowRight'] || keysPressed.current['KeyD']) {
        player.x = Math.min(canvas.width - player.width - 10, player.x + player.speed);
      }

      // 2. Shoot lasers
      if (keysPressed.current['Space'] || keysPressed.current['KeyW']) {
        const now = Date.now();
        if (now - lastShotTime > 350) {
          lasers.push({
            x: player.x + player.width / 2 - 2,
            y: player.y - 5,
            vy: -5,
            width: 4,
            height: 10,
            color: '#38bdf8'
          });
          lastShotTime = now;

          // Sound click/beep
          try {
            const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioCtx) {
              const audioCtx = new AudioCtx();
              const osc = audioCtx.createOscillator();
              const gain = audioCtx.createGain();
              osc.connect(gain);
              gain.connect(audioCtx.destination);
              osc.type = 'triangle';
              osc.frequency.setValueAtTime(800, audioCtx.currentTime);
              osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
              gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
              gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1);
              osc.start();
              osc.stop(audioCtx.currentTime + 0.1);
            }
          } catch (e) {}
        }
      }

      // 3. Move Lasers
      lasers.forEach((laser, idx) => {
        laser.y += laser.vy;
        ctx.fillStyle = laser.color;
        ctx.fillRect(laser.x, laser.y, laser.width, laser.height);

        // Remove offscreen
        if (laser.y < 0 || laser.y > canvas.height) {
          lasers.splice(idx, 1);
        }
      });

      // 4. Move and Draw Enemies
      let changeDir = false;
      enemies.forEach((enemy) => {
        if (!enemy.alive) return;
        enemy.x += enemy.vx;
        if (enemy.x <= 10 || enemy.x >= canvas.width - enemy.width - 10) {
          changeDir = true;
        }

        // Draw alien ship
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        
        // Alien antenna
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(enemy.x + enemy.width / 2 - 2, enemy.y - 4, 4, 4);
      });

      if (changeDir) {
        enemies.forEach((enemy) => {
          enemy.vx = -enemy.vx;
          enemy.y += 10;

          // Check landing game over
          if (enemy.alive && enemy.y >= player.y - 10) {
            handleGameOver();
          }
        });
      }

      // 5. Collision checks
      lasers.forEach((laser, lIdx) => {
        enemies.forEach((enemy) => {
          if (!enemy.alive) return;
          if (
            laser.x < enemy.x + enemy.width &&
            laser.x + laser.width > enemy.x &&
            laser.y < enemy.y + enemy.height &&
            laser.y + laser.height > enemy.y
          ) {
            // Hit!
            enemy.alive = false;
            lasers.splice(lIdx, 1);
            setScore(prev => {
              const next = prev + 10;
              if (next > highScore) setHighScore(next);
              return next;
            });

            // Spawn explosion particles
            for (let i = 0; i < 8; i++) {
              particles.push({
                x: enemy.x + enemy.width / 2,
                y: enemy.y + enemy.height / 2,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                color: enemy.color,
                alpha: 1,
                life: 0,
                maxLife: 20 + Math.random() * 10
              });
            }

            // Synth explosion beep sound
            try {
              const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
              if (AudioCtx) {
                const audioCtx = new AudioCtx();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(150, audioCtx.currentTime);
                osc.frequency.linearRampToValueAtTime(40, audioCtx.currentTime + 0.15);
                gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.15);
                osc.start();
                osc.stop(audioCtx.currentTime + 0.15);
              }
            } catch (e) {}
          }
        });
      });

      // 6. Draw Particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.alpha = 1 - p.life / p.maxLife;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 3, 3);
        ctx.restore();

        if (p.life >= p.maxLife) {
          particles.splice(idx, 1);
        }
      });

      // 7. Check wave cleared
      if (enemies.filter(e => enemyAliveCheck(e)).length === 0) {
        setLevel(prev => prev + 1);
        spawnEnemies();
        lasers = [];
        toast.success(`Wave ${level} Cleared! Spawning Wave ${level + 1}! 🚀`);
      }

      // Draw Player Ship
      ctx.fillStyle = player.color;
      // Drawing basic spaceship shape
      ctx.beginPath();
      ctx.moveTo(player.x + player.width / 2, player.y);
      ctx.lineTo(player.x + player.width, player.y + player.height);
      ctx.lineTo(player.x, player.y + player.height);
      ctx.closePath();
      ctx.fill();

      // Glowing thruster flame
      ctx.fillStyle = Math.floor(Date.now() / 100) % 2 === 0 ? '#EF4444' : '#FBBF24';
      ctx.fillRect(player.x + player.width / 2 - 4, player.y + player.height, 8, 6);

      animId = requestAnimationFrame(gameTick);
    };

    const enemyAliveCheck = (e: any) => e.alive;

    const handleGameOver = () => {
      cancelAnimationFrame(animId);
      setIsPlaying(false);
      setShowGameOver(true);
      toast.error('Game Over! Your ship crashed.');
    };

    gameTick();
    return () => cancelAnimationFrame(animId);
  }, [activeActivityId, isPlaying, level]);

  // Simulated live comments while playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const users = activeVoiceUsers.length > 0 ? activeVoiceUsers.map(u => u.username) : ['Wumpus', 'Nelly', 'Clyde'];
      const user = users[Math.floor(Math.random() * users.length)];

      const phrases = [
        'Woah! Incredible shot! 🎯',
        'Watch out for the yellow ones!',
        'Leveling up! Clyde is on fire! 🔥',
        'Can you beat Wumpus\'s high score of 450?',
        'Red invaders are so fast!',
        'Nooo, don\'t crash! 😱',
        'Redstone gaming squad is watching you!',
        'This is honestly better than Netflix haha'
      ];

      const phrase = phrases[Math.floor(Math.random() * phrases.length)];
      setComments(prev => [
        { user, text: phrase, time: 'Just now' },
        ...prev.slice(0, 10)
      ]);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, activeVoiceUsers]);

  if (activeActivityId !== 'retro-arcade' && activeActivityId !== 'whiteboard') return null;

  const handleStartGame = () => {
    setIsPlaying(true);
    setScore(0);
    setLives(3);
    setLevel(1);
    setShowGameOver(false);
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 select-none">
      <div className="bg-discord-dark-200 rounded-lg w-full max-w-[900px] h-[550px] overflow-hidden shadow-2xl flex border border-discord-dark-100/10 text-white animate-scaleIn">
        
        {/* Left Game Frame Screen */}
        <div className="flex-1 bg-discord-dark-600 flex flex-col items-center justify-center relative p-6 border-r border-discord-dark-500">
          
          {/* Header */}
          <div className="absolute top-4 left-6 right-6 flex justify-between items-center z-20">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-indigo-400 animate-pulse" />
              <span className="font-extrabold text-sm uppercase tracking-wider">
                {activeActivityId === 'retro-arcade' ? 'Retro Space Shooter 🚀' : 'Co-Watch Whiteboard 🎨'}
              </span>
            </div>
            <button
              onClick={() => {
                setIsPlaying(false);
                launchActivity(null);
              }}
              className="p-1.5 rounded-full bg-black/40 hover:bg-discord-red/20 hover:text-discord-red transition-all"
              title="Close Activity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* RENDER RETRO SPACE SHOOTER */}
          {activeActivityId === 'retro-arcade' && (
            <div className="w-full h-full flex flex-col items-center justify-center pt-8">
              
              {!isPlaying && !showGameOver ? (
                // Start Screen
                <div className="text-center space-y-5 animate-scaleIn">
                  <span className="text-6xl animate-bounce inline-block">🚀</span>
                  <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                    Space Invaders Activity
                  </h3>
                  <p className="text-xs text-discord-light-300 max-w-[340px] mx-auto leading-relaxed">
                    Play a classic arcade space invaders wave battle. Use **Left/Right Arrow keys** to steer and **Spacebar** to shoot lasers!
                  </p>
                  <button
                    onClick={handleStartGame}
                    className="bg-discord-brand hover:bg-discord-brand/90 text-white font-bold text-sm py-2.5 px-8 rounded-full shadow-lg transition-all"
                  >
                    Launch Game! 🎮
                  </button>
                </div>
              ) : showGameOver ? (
                // Game Over Screen
                <div className="text-center space-y-4 animate-scaleIn">
                  <span className="text-5xl">💥</span>
                  <h3 className="text-2xl font-black text-discord-red">SHIP CRASHED</h3>
                  <p className="text-xs text-discord-light-300">
                    You scored **{score}** points and reached Wave **{level}**!
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={handleStartGame}
                      className="bg-discord-brand hover:bg-discord-brand/90 text-white font-bold text-sm py-2 px-5 rounded-full transition-all flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Retry</span>
                    </button>
                    <button
                      onClick={() => setShowGameOver(false)}
                      className="border border-discord-light-300 hover:bg-white/10 text-white font-bold text-sm py-2 px-5 rounded-full transition-all"
                    >
                      Menu
                    </button>
                  </div>
                </div>
              ) : (
                // Playable Canvas Layout
                <div className="flex flex-col items-center gap-4 w-full h-full justify-center">
                  
                  {/* HUD Dashboard */}
                  <div className="flex justify-between w-[400px] text-xs font-bold text-discord-light-300">
                    <div className="flex gap-4">
                      <span>SCORE: <span className="text-white font-extrabold">{score}</span></span>
                      <span>WAVE: <span className="text-indigo-400 font-extrabold">{level}</span></span>
                    </div>
                    <span>HI-SCORE: <span className="text-discord-yellow font-extrabold">{highScore}</span></span>
                  </div>

                  <canvas
                    ref={canvasRef}
                    width={400}
                    height={320}
                    className="border-2 border-discord-dark-500 rounded-lg shadow-2xl bg-[#0b0f19]"
                  />

                  {/* Mobile-friendly click overlays */}
                  <div className="flex gap-2 text-xs">
                    <div className="text-[11px] text-discord-light-300">
                      Steer: **[A / D]** or **[← / →]** • Shoot: **[Spacebar]**
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* RENDER WATCH PARTY WHITEBOARD */}
          {activeActivityId === 'whiteboard' && (
            <div className="w-full h-full flex flex-col items-center justify-center pt-8 text-center space-y-4">
              <span className="text-6xl animate-bounce">🎨</span>
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-discord-fuchsia to-purple-400">
                Watch-Party Whiteboard
              </h3>
              <p className="text-xs text-discord-light-300 max-w-[380px] leading-relaxed">
                A collaborative sandbox whiteboard and video sync player is currently in demonstration mode. Play Space Invaders 🚀 for actual game controls!
              </p>
              <button
                onClick={() => launchActivity('retro-arcade')}
                className="bg-discord-brand hover:bg-discord-brand/90 text-white font-bold text-sm py-2 px-6 rounded transition-all"
              >
                Switch to Space Shooter Game
              </button>
            </div>
          )}

        </div>

        {/* Right Comments/Activity Sidebar */}
        <div className="w-64 bg-discord-dark-300 p-4 flex flex-col text-left">
          <div className="font-extrabold text-sm border-b border-discord-dark-500 pb-2 mb-3 flex items-center gap-1.5 text-discord-light-100">
            <Volume2 className="w-4 h-4 text-discord-green" />
            Voice Lobby Chat
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-1 no-scrollbar text-xs">
            {comments.map((comment, idx) => (
              <div key={idx} className="bg-discord-dark-400/40 p-2.5 rounded border border-discord-dark-100/5">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-indigo-400">{comment.user}</span>
                  <span className="text-[10px] text-discord-light-300">{comment.time}</span>
                </div>
                <p className="text-discord-light-100 leading-normal">{comment.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-discord-dark-500 text-[10px] text-discord-light-300 leading-normal">
            *Other voice channel participants are connected and can see your score in real-time!*
          </div>
        </div>

      </div>
    </div>
  );
};
