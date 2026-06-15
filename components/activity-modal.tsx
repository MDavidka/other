'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useDiscord } from '../lib/discord-store';
import { X, Gamepad2, RefreshCw, Volume2, Award, Sparkles, ShoppingBag, BarChart3, Flame } from 'lucide-react';
import { toast } from 'sonner';

interface UpgradeItem {
  id: string;
  name: string;
  cost: number;
  baseCost: number;
  cps: number;
  count: number;
  icon: string;
  description: string;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

interface FloatingText {
  id: number;
  x: number;
  y: number;
  text: string;
}

export const ActivityModal: React.FC = () => {
  const {
    activeActivityId,
    activeVoiceChannelId,
    activeVoiceUsers,
    launchActivity,
    userProfile
  } = useDiscord();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // =========================================================================
  // COMMON VOICE LOBBY CHAT SYSTEM
  // =========================================================================
  const [comments, setComments] = useState<{ user: string; text: string; time: string }[]>([
    { user: 'Wumpus', text: 'Woah, GuestCoder launched a new game! 🚀', time: '1m' },
    { user: 'Nelly', text: 'Let\'s go! Show us some pro skills!', time: '30s' }
  ]);

  // =========================================================================
  // RETRO SPACE SHOOTER STATE
  // =========================================================================
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [highScore, setHighScore] = useState(0);
  const [showGameOver, setShowGameOver] = useState(false);
  const keysPressed = useRef<Record<string, boolean>>({});

  // =========================================================================
  // COOKIE CLICKER STATE
  // =========================================================================
  const [cookies, setCookies] = useState(0);
  const [totalCookiesBaked, setTotalCookiesBaked] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [cookieTab, setCookieTab] = useState<'bakery' | 'stats'>('bakery');
  const [cookieScale, setCookieScale] = useState(1);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [frenzyActive, setFrenzyActive] = useState(false);
  const [frenzyTimeLeft, setFrenzyTimeLeft] = useState(0);
  
  // Golden Cookie State
  const [goldenCookie, setGoldenCookie] = useState<{ x: number; y: number; active: boolean; type: 'bonus' | 'frenzy' } | null>(null);
  const [goldenCookiesClicked, setGoldenCookiesClicked] = useState(0);

  // Sound Synth Helper
  const playSynthSound = (type: 'click' | 'buy' | 'golden' | 'achievement' | 'laser' | 'explosion') => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const audioCtx = new AudioCtx();
      
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
      } else if (type === 'buy') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.setValueAtTime(450, audioCtx.currentTime + 0.08);
        osc.frequency.setValueAtTime(600, audioCtx.currentTime + 0.16);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      } else if (type === 'golden') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
        osc.frequency.setValueAtTime(1046.50, audioCtx.currentTime + 0.3); // C6
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
      } else if (type === 'achievement') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.setValueAtTime(554, audioCtx.currentTime + 0.1);
        osc.frequency.setValueAtTime(659, audioCtx.currentTime + 0.2);
        osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.6);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.6);
      } else if (type === 'laser') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
      } else if (type === 'explosion') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(40, audioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      }
    } catch (e) {}
  };

  // Upgrades Shop State
  const [upgrades, setUpgrades] = useState<UpgradeItem[]>([
    { id: 'cursor', name: 'Auto-Clicker', cost: 15, baseCost: 15, cps: 0.1, count: 0, icon: '🖱️', description: 'Clicks the cookie automatically once every 10 seconds.' },
    { id: 'grandma', name: 'Grandma', cost: 100, baseCost: 100, cps: 1, count: 0, icon: '👵', description: 'A nice grandma to bake more cookies.' },
    { id: 'baker', name: 'Auto-Baker', cost: 1100, baseCost: 1100, cps: 8, count: 0, icon: '🥣', description: 'An automated industrial mixing & baking oven.' },
    { id: 'factory', name: 'Cookie Factory', cost: 12000, baseCost: 12000, cps: 47, count: 0, icon: '🏭', description: 'A massive factory complex to mass-produce cookies.' },
    { id: 'lab', name: 'Alchemy Lab', cost: 130000, baseCost: 130000, cps: 260, count: 0, icon: '🧪', description: 'Transmutes gold and elements directly into delicious cookies.' },
    { id: 'timemachine', name: 'Time Machine', cost: 1400000, baseCost: 1400000, cps: 1400, count: 0, icon: '⏳', description: 'Brings cookies from the past before they were even eaten.' },
    { id: 'portal', name: 'Quantum Portal', cost: 20000000, baseCost: 20000000, cps: 7800, count: 0, icon: '🌀', description: 'Opens a rift to the alternate Cookie Dimension.' },
    { id: 'click_power', name: 'Click Multiplier', cost: 50, baseCost: 50, cps: 0, count: 0, icon: '⚡', description: 'Increases cookies earned per manual click by +1.' }
  ]);

  // Achievements State
  const [achievements, setAchievements] = useState<Achievement[]>([
    { id: 'first_bake', name: 'First Batch', description: 'Bake your first cookie.', unlocked: false, icon: '🍪' },
    { id: 'grandma_friend', name: 'Grandma\'s Helper', description: 'Hire your first Grandma.', unlocked: false, icon: '👵' },
    { id: 'factory_owner', name: 'Industrialist', description: 'Acquire a Cookie Factory.', unlocked: false, icon: '🏭' },
    { id: 'golden_touch', name: 'Golden Touch', description: 'Click a sparkling Golden Cookie.', unlocked: false, icon: '✨' },
    { id: 'speed_baker', name: 'Speed Baker', description: 'Reach 100 Cookies Per Second (CPS).', unlocked: false, icon: '🔥' },
    { id: 'cookie_millionaire', name: 'Cookie Tycoon', description: 'Bake 1,000,000 cookies in total.', unlocked: false, icon: '👑' }
  ]);

  // Calculate stats
  const cookiesPerSecond = upgrades.reduce((sum: number, up: UpgradeItem) => sum + (up.cps * up.count), 0);
  const clickPowerMultiplier = upgrades.find((u: UpgradeItem) => u.id === 'click_power')?.count || 0;
  const cookiesPerClick = 1 + clickPowerMultiplier;

  // =========================================================================
  // KEYBOARD LISTENERS FOR SPACE SHOOTER
  // =========================================================================
  useEffect(() => {
    if (activeActivityId !== 'retro-arcade') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = true;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) !== -1) {
        e.preventDefault();
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

  // =========================================================================
  // SPACE SHOOTER GAME ENGINE LOOP
  // =========================================================================
  useEffect(() => {
    if (activeActivityId !== 'retro-arcade' || !isPlaying) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

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

    const spawnEnemies = () => {
      enemies = [];
      const cols = 6;
      const rows = 3;
      const spacing = 45;
      const startX = 30;
      const startY = 50;

      for (let r = 0; r < rows; r++) {
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

    spawnEnemies();
    let lastShotTime = 0;

    const gameTick = () => {
      ctx.fillStyle = '#0b0f19';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      for (let i = 0; i < 20; i++) {
        const starX = (Math.sin(i * 999) + 1) * canvas.width / 2;
        const starY = (Math.cos(i * 333) + 1) * canvas.height / 2;
        ctx.fillRect(starX, starY, 1.5, 1.5);
      }

      // Move Player
      if (keysPressed.current['ArrowLeft'] || keysPressed.current['KeyA']) {
        player.x = Math.max(10, player.x - player.speed);
      }
      if (keysPressed.current['ArrowRight'] || keysPressed.current['KeyD']) {
        player.x = Math.min(canvas.width - player.width - 10, player.x + player.speed);
      }

      // Shoot
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
          playSynthSound('laser');
        }
      }

      // Lasers
      lasers.forEach((laser, idx) => {
        laser.y += laser.vy;
        ctx.fillStyle = laser.color;
        ctx.fillRect(laser.x, laser.y, laser.width, laser.height);

        if (laser.y < 0) {
          lasers.splice(idx, 1);
        }
      });

      // Enemies
      let changeDir = false;
      enemies.forEach((enemy) => {
        if (!enemy.alive) return;
        enemy.x += enemy.vx;
        if (enemy.x <= 10 || enemy.x >= canvas.width - enemy.width - 10) {
          changeDir = true;
        }

        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(enemy.x + enemy.width / 2 - 2, enemy.y - 4, 4, 4);
      });

      if (changeDir) {
        enemies.forEach((enemy) => {
          enemy.vx = -enemy.vx;
          enemy.y += 10;
          if (enemy.alive && enemy.y >= player.y - 10) {
            handleGameOver();
          }
        });
      }

      // Collisions
      lasers.forEach((laser, lIdx) => {
        enemies.forEach((enemy) => {
          if (!enemy.alive) return;
          if (
            laser.x < enemy.x + enemy.width &&
            laser.x + laser.width > enemy.x &&
            laser.y < enemy.y + enemy.height &&
            laser.y + laser.height > enemy.y
          ) {
            enemy.alive = false;
            lasers.splice(lIdx, 1);
            setScore((prev: number) => {
              const next = prev + 10;
              if (next > highScore) setHighScore(next);
              return next;
            });

            // Particles
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
            playSynthSound('explosion');
          }
        });
      });

      // Particles
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

      // Wave cleared
      if (enemies.filter(e => e.alive).length === 0) {
        setLevel((prev: number) => prev + 1);
        spawnEnemies();
        lasers = [];
        toast.success(`Wave ${level} Cleared! Spawning Wave ${level + 1}! 🚀`);
      }

      // Player Ship
      ctx.fillStyle = player.color;
      ctx.beginPath();
      ctx.moveTo(player.x + player.width / 2, player.y);
      ctx.lineTo(player.x + player.width, player.y + player.height);
      ctx.lineTo(player.x, player.y + player.height);
      ctx.closePath();
      ctx.fill();

      // Thruster flame
      ctx.fillStyle = Math.floor(Date.now() / 100) % 2 === 0 ? '#EF4444' : '#FBBF24';
      ctx.fillRect(player.x + player.width / 2 - 4, player.y + player.height, 8, 6);

      animId = requestAnimationFrame(gameTick);
    };

    const handleGameOver = () => {
      cancelAnimationFrame(animId);
      setIsPlaying(false);
      setShowGameOver(true);
      toast.error('Game Over! Your ship crashed.');
    };

    gameTick();
    return () => cancelAnimationFrame(animId);
  }, [activeActivityId, isPlaying, level]);

  // =========================================================================
  // COOKIE CLICKER AUTO-BAKING CLOCK (CPS)
  // =========================================================================
  useEffect(() => {
    if (activeActivityId !== 'cookie-clicker') return;

    const interval = setInterval(() => {
      const multiplier = frenzyActive ? 7 : 1;
      const amountToAdd = (cookiesPerSecond / 10) * multiplier; // Run 10 times a second for smoothness
      
      setCookies((prev: number) => {
        const next = prev + amountToAdd;
        setTotalCookiesBaked((t: number) => {
          const total = t + amountToAdd;
          // Check achievements
          checkCookieAchievements(total, cookiesPerSecond);
          return total;
        });
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeActivityId, cookiesPerSecond, frenzyActive]);

  // Frenzy timer tick
  useEffect(() => {
    if (!frenzyActive) return;
    const interval = setInterval(() => {
      setFrenzyTimeLeft((prev: number) => {
        if (prev <= 1) {
          setFrenzyActive(false);
          toast.info('The Cookie Frenzy has ended.');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [frenzyActive]);

  // =========================================================================
  // GOLDEN COOKIE SPAWNER ENGINE
  // =========================================================================
  useEffect(() => {
    if (activeActivityId !== 'cookie-clicker') return;

    // Spawn a golden cookie every 35 to 60 seconds
    const spawnTimer = setInterval(() => {
      if (goldenCookie && goldenCookie.active) return; // already active

      const randomX = Math.floor(Math.random() * 200) + 30; // fit in clicker box
      const randomY = Math.floor(Math.random() * 150) + 80;
      const type = Math.random() > 0.5 ? 'bonus' : 'frenzy';

      setGoldenCookie({
        x: randomX,
        y: randomY,
        active: true,
        type
      });

      playSynthSound('golden');
      toast('✨ A Golden Cookie has spawned!', {
        description: 'Find and click it quickly for a massive boost!',
        duration: 5000
      });

      // Auto-despawn after 12 seconds
      setTimeout(() => {
        setGoldenCookie((prev) => {
          if (prev && prev.active) {
            return { ...prev, active: false };
          }
          return prev;
        });
      }, 12000);

    }, 45000);

    return () => clearInterval(spawnTimer);
  }, [activeActivityId, goldenCookie]);

  // =========================================================================
  // ACHIEVEMENT CHECKS
  // =========================================================================
  const checkCookieAchievements = (totalBaked: number, currentCps: number) => {
    setAchievements((prev) => {
      let changed = false;
      const next = prev.map((ach) => {
        if (ach.unlocked) return ach;

        let shouldUnlock = false;
        if (ach.id === 'first_bake' && totalBaked >= 1) shouldUnlock = true;
        if (ach.id === 'grandma_friend' && upgrades.find((u: UpgradeItem) => u.id === 'grandma')!.count >= 1) shouldUnlock = true;
        if (ach.id === 'factory_owner' && upgrades.find((u: UpgradeItem) => u.id === 'factory')!.count >= 1) shouldUnlock = true;
        if (ach.id === 'speed_baker' && currentCps >= 100) shouldUnlock = true;
        if (ach.id === 'cookie_millionaire' && totalBaked >= 1000000) shouldUnlock = true;

        if (shouldUnlock) {
          changed = true;
          playSynthSound('achievement');
          toast.success(`🏆 Achievement Unlocked: ${ach.name}!`, {
            description: ach.description,
            duration: 4000
          });
          return { ...ach, unlocked: true };
        }
        return ach;
      });

      return changed ? next : prev;
    });
  };

  // Click Golden Cookie
  const handleGoldenCookieClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!goldenCookie || !goldenCookie.active) return;

    setGoldenCookie(null);
    setGoldenCookiesClicked((prev: number) => prev + 1);
    playSynthSound('golden');

    // Unlock achievement
    setAchievements((prev) => {
      return prev.map((ach) => {
        if (ach.id === 'golden_touch' && !ach.unlocked) {
          toast.success(`🏆 Achievement Unlocked: ${ach.name}!`, {
            description: ach.description
          });
          return { ...ach, unlocked: true };
        }
        return ach;
      });
    });

    if (goldenCookie.type === 'bonus') {
      const bonus = Math.max(77, Math.floor(cookies * 0.2) + 150);
      setCookies((prev: number) => prev + bonus);
      setTotalCookiesBaked((prev: number) => prev + bonus);
      toast.success(`✨ Golden Cookie Clicked! Earned +${Math.floor(bonus)} Cookies! 🍪`);
    } else {
      setFrenzyActive(true);
      setFrenzyTimeLeft(15);
      toast.success(`🔥 COOKIE FRENZY TRIGGERED! 7x CPS and Clicks for 15 seconds! 🔥`);
    }
  };

  // =========================================================================
  // SIMULATED LOBBY CHAT BASED ON COOKIE GAME STATE
  // =========================================================================
  useEffect(() => {
    if (activeActivityId !== 'cookie-clicker') return;

    const interval = setInterval(() => {
      const users = activeVoiceUsers.length > 0 ? activeVoiceUsers.map((u: any) => u.username) : ['Wumpus', 'Nelly', 'Clyde'];
      const user = users[Math.floor(Math.random() * users.length)];

      let phrases = [
        'Baking cookies is so therapeutic ☕',
        'Who is clicking that fast? Wumpus is impressed!',
        'How many cookies do we need to buy a Quantum Portal?',
        'Don\'t let the grandmas take over!',
        'My keyboard spacebar is getting a workout today 😂'
      ];

      if (cookiesPerSecond > 1000) {
        phrases = [
          `Oh my gosh, GuestCoder is generating ${Math.floor(cookiesPerSecond)} CPS! Absolute madness! 🤯`,
          'Are we building a cookie empire or what?',
          'The grandmas have started chanting in binary... 👵',
          'We have officially reached interstellar cookie production!'
        ];
      } else if (upgrades.find((u: UpgradeItem) => u.id === 'grandma')!.count > 5) {
        phrases = [
          'Wow, that is a lot of grandmas in the voice lobby!',
          'Grandma is cooking up some secret recipes today 👵🍪',
          'Grandma\'s cookies taste better when Clyde is sharing screens!'
        ];
      }

      const phrase = phrases[Math.floor(Math.random() * phrases.length)];
      setComments((prev) => [
        { user, text: phrase, time: 'Just now' },
        ...prev.slice(0, 10)
      ]);
    }, 12000);

    return () => clearInterval(interval);
  }, [activeActivityId, cookiesPerSecond, upgrades, activeVoiceUsers]);

  // =========================================================================
  // COOKIE BAKE CLICK TRIGGER
  // =========================================================================
  const handleCookieClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const multiplier = frenzyActive ? 7 : 1;
    const earned = cookiesPerClick * multiplier;

    setCookies((prev: number) => prev + earned);
    setTotalCookiesBaked((prev: number) => prev + earned);
    setTotalClicks((prev: number) => prev + 1);

    // Bounce cookie animation
    setCookieScale(0.92);
    setTimeout(() => setCookieScale(1.06), 70);
    setTimeout(() => setCookieScale(1), 140);

    // Audio Click
    playSynthSound('click');

    // Create floating text
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const newFloat: FloatingText = {
      id: Date.now() + Math.random(),
      x: clickX,
      y: clickY,
      text: `+${earned}`
    };

    setFloatingTexts((prev) => [...prev, newFloat]);

    // Clear float after 1 second
    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((f) => f.id !== newFloat.id));
    }, 1000);

    // Check first click achievement
    checkCookieAchievements(totalCookiesBaked + earned, cookiesPerSecond);
  };

  // Buy Upgrade
  const buyUpgrade = (upId: string) => {
    const upgrade = upgrades.find((u: UpgradeItem) => u.id === upId);
    if (!upgrade || cookies < upgrade.cost) return;

    setCookies((prev: number) => prev - upgrade.cost);
    setUpgrades((prev) => {
      return prev.map((u) => {
        if (u.id === upId) {
          const nextCount = u.count + 1;
          const nextCost = Math.floor(u.baseCost * Math.pow(1.15, nextCount));
          return {
            ...u,
            count: nextCount,
            cost: nextCost
          };
        }
        return u;
      });
    });

    playSynthSound('buy');
    toast.success(`Hired/Purchased: ${upgrade.name}! ${upgrade.icon}`);
  };

  if (activeActivityId !== 'retro-arcade' && activeActivityId !== 'whiteboard' && activeActivityId !== 'cookie-clicker') return null;

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-0 sm:p-4 select-none">
      <div className="bg-discord-dark-200 w-full h-full sm:h-[580px] sm:max-w-[950px] sm:rounded-lg overflow-hidden shadow-2xl flex flex-col sm:flex-row border-0 sm:border border-discord-dark-100/10 text-white animate-scaleIn">
        
        {/* Left Game Screen Frame */}
        <div className="flex-1 bg-discord-dark-600 flex flex-col relative border-b sm:border-b-0 sm:border-r border-discord-dark-500 overflow-hidden">
          
          {/* Header */}
          <div className="p-4 flex justify-between items-center bg-discord-dark-700 border-b border-discord-dark-500 z-20">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-indigo-400 animate-pulse" />
              <span className="font-extrabold text-sm uppercase tracking-wider">
                {activeActivityId === 'retro-arcade' ? 'Retro Space Shooter 🚀' : activeActivityId === 'cookie-clicker' ? 'Cookie Clicker 🍪' : 'Co-Watch Whiteboard 🎨'}
              </span>
            </div>
            
            {/* Close Button */}
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

          {/* =========================================================================
              RENDER COOKIE CLICKER GAME
              ========================================================================= */}
          {activeActivityId === 'cookie-clicker' && (
            <div className="flex-1 flex flex-col sm:flex-row overflow-y-auto sm:overflow-hidden">
              
              {/* Left Cookie Clicker Panel */}
              <div className="w-full sm:w-[280px] md:w-[300px] border-b sm:border-b-0 sm:border-r border-discord-dark-500 flex flex-col items-center justify-center p-4 relative bg-[#0d111d] shrink-0 min-h-[340px] sm:min-h-0">
                
                {/* Space Stars Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-ping" />
                  <div className="absolute top-40 left-48 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" />
                  <div className="absolute top-20 right-16 w-1 h-1 bg-indigo-300 rounded-full animate-pulse" />
                </div>

                {/* Frenzy Alert Indicator */}
                {frenzyActive && (
                  <div className="absolute top-4 bg-gradient-to-r from-amber-500 to-red-500 text-white font-extrabold text-[10px] sm:text-[11px] px-3 py-1 rounded-full flex items-center gap-1.5 animate-bounce shadow-lg z-10">
                    <Flame className="w-3.5 h-3.5 text-yellow-200 animate-pulse" />
                    <span>FRENZY ACTIVE (7X)! {frenzyTimeLeft}s</span>
                  </div>
                )}

                {/* Cookie Display HUD */}
                <div className="text-center mb-4 sm:mb-6 z-10 mt-6 sm:mt-0">
                  <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 tracking-tight drop-shadow-md">
                    {Math.floor(cookies).toLocaleString()}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-bold text-discord-light-300 uppercase tracking-wider">
                    cookies baked
                  </p>
                  <p className="text-xs font-semibold text-discord-green mt-1">
                    {frenzyActive ? (
                      <span className="text-amber-400 font-extrabold flex items-center justify-center gap-1">
                        <Flame className="w-3 h-3" />
                        CPS: {(cookiesPerSecond * 7).toFixed(1)}
                      </span>
                    ) : (
                      `CPS: ${cookiesPerSecond.toFixed(1)}`
                    )}
                  </p>
                </div>

                {/* Giant Interactive Cookie Button */}
                <div className="relative flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 my-2">
                  
                  {/* Outer glowing pulse ring */}
                  <div className={`absolute inset-0 rounded-full bg-amber-500/10 blur-xl transition-all duration-300 ${
                    frenzyActive ? 'scale-125 bg-red-500/20 animate-pulse' : 'scale-100'
                  }`} />

                  <button
                    onClick={handleCookieClick}
                    style={{ transform: `scale(${cookieScale})` }}
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-amber-800 border-4 border-amber-900 shadow-2xl relative transition-all duration-75 active:scale-95 focus:outline-none flex items-center justify-center select-none overflow-hidden group hover:shadow-amber-500/10"
                  >
                    {/* Cookie Graphic SVG */}
                    <svg viewBox="0 0 100 100" className="w-full h-full p-1.5 select-none pointer-events-none">
                      <circle cx="50" cy="50" r="45" fill="#d97706" />
                      <circle cx="50" cy="50" r="43" fill="#f59e0b" className="opacity-90" />
                      <circle cx="28" cy="35" r="5" fill="#451a03" />
                      <circle cx="45" cy="22" r="6" fill="#451a03" />
                      <circle cx="68" cy="30" r="5" fill="#451a03" />
                      <circle cx="32" cy="65" r="5.5" fill="#451a03" />
                      <circle cx="52" cy="50" r="6.5" fill="#451a03" />
                      <circle cx="70" cy="60" r="5" fill="#451a03" />
                      <circle cx="50" cy="78" r="6" fill="#451a03" />
                      <circle cx="22" cy="50" r="4" fill="#451a03" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-full" />
                  </button>

                  {/* Floating click text indicators */}
                  {floatingTexts.map((f) => (
                    <span
                      key={f.id}
                      style={{ left: f.x, top: f.y }}
                      className="absolute text-yellow-300 font-black text-base sm:text-lg select-none pointer-events-none animate-floatUp z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    >
                      {f.text}
                    </span>
                  ))}

                  {/* Golden Cookie Spawn */}
                  {goldenCookie && goldenCookie.active && (
                    <button
                      onClick={handleGoldenCookieClick}
                      style={{ left: goldenCookie.x, top: goldenCookie.y }}
                      className="absolute w-10 h-10 sm:w-11 sm:h-10 rounded-full bg-yellow-400 border-2 border-yellow-300 shadow-[0_0_15px_#fbbf24] flex items-center justify-center animate-bounce z-30 active:scale-90"
                      title="Click the Golden Cookie!"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full p-1 animate-spin duration-10000">
                        <circle cx="50" cy="50" r="45" fill="#fbbf24" />
                        <circle cx="50" cy="50" r="41" fill="#fef08a" />
                        <circle cx="30" cy="35" r="4.5" fill="#ca8a04" />
                        <circle cx="50" cy="22" r="5" fill="#ca8a04" />
                        <circle cx="70" cy="35" r="4.5" fill="#ca8a04" />
                        <circle cx="32" cy="65" r="5" fill="#ca8a04" />
                        <circle cx="52" cy="52" r="6" fill="#ca8a04" />
                        <circle cx="70" cy="65" r="4.5" fill="#ca8a04" />
                      </svg>
                      <span className="absolute inset-0 rounded-full border border-yellow-200 animate-ping" />
                    </button>
                  )}
                </div>

                {/* Bottom Clicker Stats */}
                <div className="mt-4 flex flex-col gap-0.5 text-[10px] text-discord-light-300 text-center font-semibold mb-12 sm:mb-0">
                  <div>Cookies/Click: <span className="text-white">{cookiesPerClick}</span></div>
                  <div>Total Clicks: <span className="text-white">{totalClicks}</span></div>
                </div>

                {/* Tabs Selector */}
                <div className="absolute bottom-2 left-2 right-2 grid grid-cols-2 gap-1 bg-discord-dark-700/80 p-1 rounded z-10">
                  <button
                    onClick={() => setCookieTab('bakery')}
                    className={`py-1 text-[10px] font-bold rounded transition-all ${
                      cookieTab === 'bakery' ? 'bg-discord-brand text-white' : 'text-discord-light-300 hover:text-white'
                    }`}
                  >
                    Bakery
                  </button>
                  <button
                    onClick={() => setCookieTab('stats')}
                    className={`py-1 text-[10px] font-bold rounded transition-all ${
                      cookieTab === 'stats' ? 'bg-discord-brand text-white' : 'text-discord-light-300 hover:text-white'
                    }`}
                  >
                    Trophies
                  </button>
                </div>

              </div>

              {/* Right Upgrade Shop / Stats Panel */}
              <div className="flex-1 bg-discord-dark-700 flex flex-col overflow-hidden min-h-[300px] sm:min-h-0">
                
                {cookieTab === 'bakery' ? (
                  // UPGRADE SHOP VIEW
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-discord-dark-500 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-discord-light-100">
                      <ShoppingBag className="w-4 h-4 text-amber-500" />
                      <span>Bakery Upgrades Shop</span>
                    </div>

                    <div className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-2 no-scrollbar">
                      {upgrades.map((up) => {
                        const canAfford = cookies >= up.cost;
                        return (
                          <button
                            key={up.id}
                            disabled={!canAfford}
                            onClick={() => buyUpgrade(up.id)}
                            className={`w-full flex items-center justify-between p-2 rounded border text-left transition-all ${
                              canAfford
                                ? 'bg-discord-dark-500/80 hover:bg-discord-dark-100 border-discord-dark-100/10 cursor-pointer'
                                : 'bg-discord-dark-500/30 border-transparent opacity-50 cursor-not-allowed'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="text-xl sm:text-2xl shrink-0 select-none">{up.icon}</span>
                              <div className="text-left min-w-0">
                                <div className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1">
                                  <span className="truncate">{up.name}</span>
                                  {up.count > 0 && (
                                    <span className="bg-discord-brand text-[8px] px-1 py-[1px] rounded-full font-black text-white shrink-0">
                                      x{up.count}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[9px] sm:text-[10px] text-discord-light-300 leading-tight truncate max-w-[140px] xs:max-w-[200px] sm:max-w-[240px] mt-0.5 font-medium">
                                  {up.description}
                                </p>
                              </div>
                            </div>

                            <div className="text-right shrink-0 ml-2">
                              <div className={`text-[11px] sm:text-xs font-black ${canAfford ? 'text-yellow-400' : 'text-discord-light-300'}`}>
                                🪙 {up.cost.toLocaleString()}
                              </div>
                              <div className="text-[8px] sm:text-[9px] text-discord-green font-bold mt-0.5">
                                {up.cps > 0 && `+${up.cps} CPS`}
                                {up.id === 'click_power' && `+1 CPC`}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  // STATS & ACHIEVEMENTS VIEW
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-discord-dark-500 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-discord-light-100">
                      <BarChart3 className="w-4 h-4 text-indigo-400" />
                      <span>Bakery Stats & Trophies</span>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 no-scrollbar">
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-2 bg-discord-dark-500/50 p-2.5 sm:p-3 rounded border border-discord-dark-100/5">
                        <div className="text-left">
                          <span className="text-[9px] sm:text-[10px] text-discord-light-300 uppercase font-bold">Total Cookies Baked</span>
                          <p className="text-xs sm:text-sm font-black text-white mt-0.5">{Math.floor(totalCookiesBaked).toLocaleString()}</p>
                        </div>
                        <div className="text-left">
                          <span className="text-[9px] sm:text-[10px] text-discord-light-300 uppercase font-bold">Total Clicks</span>
                          <p className="text-xs sm:text-sm font-black text-white mt-0.5">{totalClicks}</p>
                        </div>
                        <div className="text-left">
                          <span className="text-[9px] sm:text-[10px] text-discord-light-300 uppercase font-bold">Golden Cookies Clicked</span>
                          <p className="text-xs sm:text-sm font-black text-white mt-0.5">{goldenCookiesClicked}</p>
                        </div>
                        <div className="text-left">
                          <span className="text-[9px] sm:text-[10px] text-discord-light-300 uppercase font-bold">Base Cookies/Sec (CPS)</span>
                          <p className="text-xs sm:text-sm font-black text-white mt-0.5">{cookiesPerSecond.toFixed(1)}</p>
                        </div>
                      </div>

                      {/* Achievements Trophies */}
                      <div className="space-y-2">
                        <div className="text-[10px] sm:text-[11px] uppercase font-bold text-discord-light-300 tracking-wider flex items-center gap-1">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span>Unlocked Trophies</span>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                          {achievements.map((ach) => (
                            <div
                              key={ach.id}
                              className={`flex items-center gap-2.5 p-2 sm:p-2.5 rounded border transition-all ${
                                ach.unlocked
                                  ? 'bg-discord-dark-500/80 border-yellow-500/20'
                                  : 'bg-discord-dark-500/20 border-transparent opacity-40'
                              }`}
                            >
                              <span className="text-xl sm:text-2xl select-none">{ach.unlocked ? ach.icon : '🔒'}</span>
                              <div className="text-left min-w-0">
                                <h4 className={`text-[11px] sm:text-xs font-bold ${ach.unlocked ? 'text-yellow-400' : 'text-discord-light-300'} truncate`}>
                                  {ach.name}
                                </h4>
                                <p className="text-[9px] sm:text-[10px] text-discord-light-300 leading-tight">
                                  {ach.description}
                                </p>
                              </div>
                              {ach.unlocked && (
                                <span className="ml-auto text-[8px] sm:text-[10px] font-bold text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full shrink-0">
                                  Earned
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </div>

            </div>
          )}

          {/* =========================================================================
              RENDER RETRO SPACE SHOOTER
              ========================================================================= */}
          {activeActivityId === 'retro-arcade' && (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 overflow-y-auto">
              
              {!isPlaying && !showGameOver ? (
                // Start Screen
                <div className="text-center space-y-4 animate-scaleIn">
                  <span className="text-5xl sm:text-6xl animate-bounce inline-block">🚀</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                    Space Invaders Activity
                  </h3>
                  <p className="text-[11px] sm:text-xs text-discord-light-300 max-w-[320px] mx-auto leading-relaxed">
                    Play a classic arcade space invaders wave battle. Use **Left/Right Arrow keys** to steer and **Spacebar** to shoot lasers!
                  </p>
                  <button
                    onClick={() => {
                      setIsPlaying(true);
                      setScore(0);
                      setLives(3);
                      setLevel(1);
                      setShowGameOver(false);
                    }}
                    className="bg-discord-brand hover:bg-discord-brand/90 text-white font-bold text-xs sm:text-sm py-2 px-6 sm:py-2.5 sm:px-8 rounded-full shadow-lg transition-all"
                  >
                    Launch Game! 🎮
                  </button>
                </div>
              ) : showGameOver ? (
                // Game Over Screen
                <div className="text-center space-y-4 animate-scaleIn">
                  <span className="text-4xl sm:text-5xl">💥</span>
                  <h3 className="text-xl sm:text-2xl font-black text-discord-red">SHIP CRASHED</h3>
                  <p className="text-[11px] sm:text-xs text-discord-light-300">
                    You scored **{score}** points and reached Wave **{level}**!
                  </p>
                  <div className="flex gap-2.5 justify-center">
                    <button
                      onClick={() => {
                        setIsPlaying(true);
                        setScore(0);
                        setLives(3);
                        setLevel(1);
                        setShowGameOver(false);
                      }}
                      className="bg-discord-brand hover:bg-discord-brand/90 text-white font-bold text-xs sm:text-sm py-1.5 px-4 sm:py-2 sm:px-5 rounded-full transition-all flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Retry</span>
                    </button>
                    <button
                      onClick={() => setShowGameOver(false)}
                      className="border border-discord-light-300 hover:bg-white/10 text-white font-bold text-xs sm:text-sm py-1.5 px-4 sm:py-2 sm:px-5 rounded-full transition-all"
                    >
                      Menu
                    </button>
                  </div>
                </div>
              ) : (
                // Playable Canvas Layout
                <div className="flex flex-col items-center gap-3 w-full max-w-full justify-center">
                  
                  {/* HUD Dashboard */}
                  <div className="flex justify-between w-full max-w-[400px] text-[10px] sm:text-xs font-bold text-discord-light-300 px-1">
                    <div className="flex gap-3">
                      <span>SCORE: <span className="text-white font-extrabold">{score}</span></span>
                      <span>WAVE: <span className="text-indigo-400 font-extrabold">{level}</span></span>
                    </div>
                    <span>HI-SCORE: <span className="text-discord-yellow font-extrabold">{highScore}</span></span>
                  </div>

                  <canvas
                    ref={canvasRef}
                    width={400}
                    height={320}
                    className="border-2 border-discord-dark-500 rounded-lg shadow-2xl bg-[#0b0f19] w-full max-w-[400px] aspect-[4/3]"
                  />

                  {/* Mobile-friendly steering buttons */}
                  <div className="flex flex-col items-center gap-2 w-full max-w-[400px]">
                    <div className="flex justify-between w-full gap-4 px-1">
                      {/* Left/Right Buttons for Mobile Touch steering */}
                      <div className="flex gap-2">
                        <button
                          onTouchStart={() => { keysPressed.current['ArrowLeft'] = true; }}
                          onTouchEnd={() => { keysPressed.current['ArrowLeft'] = false; }}
                          onMouseDown={() => { keysPressed.current['ArrowLeft'] = true; }}
                          onMouseUp={() => { keysPressed.current['ArrowLeft'] = false; }}
                          className="w-12 h-10 bg-discord-dark-500 active:bg-discord-brand text-white font-bold rounded flex items-center justify-center text-lg select-none"
                        >
                          ◀
                        </button>
                        <button
                          onTouchStart={() => { keysPressed.current['ArrowRight'] = true; }}
                          onTouchEnd={() => { keysPressed.current['ArrowRight'] = false; }}
                          onMouseDown={() => { keysPressed.current['ArrowRight'] = true; }}
                          onMouseUp={() => { keysPressed.current['ArrowRight'] = false; }}
                          className="w-12 h-10 bg-discord-dark-500 active:bg-discord-brand text-white font-bold rounded flex items-center justify-center text-lg select-none"
                        >
                          ▶
                        </button>
                      </div>

                      {/* Shoot Button */}
                      <button
                        onTouchStart={() => { keysPressed.current['Space'] = true; }}
                        onTouchEnd={() => { keysPressed.current['Space'] = false; }}
                        onMouseDown={() => { keysPressed.current['Space'] = true; }}
                        onMouseUp={() => { keysPressed.current['Space'] = false; }}
                        className="w-20 h-10 bg-sky-500 active:bg-sky-600 text-white font-black rounded flex items-center justify-center text-xs uppercase select-none tracking-wider"
                      >
                        Fire ⚡
                      </button>
                    </div>

                    <div className="text-[9px] text-discord-light-300 text-center mt-1 hidden sm:block">
                      Steer: **[A / D]** or **[← / →]** • Shoot: **[Spacebar]**
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =========================================================================
              RENDER WATCH PARTY WHITEBOARD
              ========================================================================= */}
          {activeActivityId === 'whiteboard' && (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4 overflow-y-auto">
              <span className="text-5xl sm:text-6xl animate-bounce">🎨</span>
              <h3 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-discord-fuchsia to-purple-400">
                Watch-Party Whiteboard
              </h3>
              <p className="text-xs text-discord-light-300 max-w-[340px] leading-relaxed">
                A collaborative sandbox whiteboard and video sync player is currently in demonstration mode. Play Space Invaders 🚀 or Cookie Clicker 🍪 for actual game controls!
              </p>
              <button
                onClick={() => launchActivity('cookie-clicker')}
                className="bg-discord-brand hover:bg-discord-brand/90 text-white font-bold text-xs sm:text-sm py-2 px-5 sm:px-6 rounded transition-all"
              >
                Switch to Cookie Clicker Activity
              </button>
            </div>
          )}

        </div>

        {/* Right Comments/Activity Sidebar - Hidden on mobile screens */}
        <div className="w-64 bg-discord-dark-300 p-4 flex flex-col text-left shrink-0 hidden md:flex">
          <div className="font-extrabold text-sm border-b border-discord-dark-500 pb-2 mb-3 flex items-center gap-1.5 text-discord-light-100">
            <Volume2 className="w-4 h-4 text-discord-green" />
            Voice Lobby Chat
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-1 no-scrollbar text-xs">
            {comments.map((comment, idx) => (
              <div key={idx} className="bg-discord-dark-400/40 p-2.5 rounded border border-discord-dark-100/5 animate-slideUp">
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
