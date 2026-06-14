'use client';

import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';

export interface CookieCanvasRef {
  spawnParticles: (x: number, y: number, text: string, type?: 'normal' | 'golden' | 'critical') => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  rotation?: number;
  vRotation?: number;
}

interface FloatingText {
  id: number;
  x: number;
  y: number;
  text: string;
  vy: number;
  alpha: number;
  size: number;
  color: string;
  shadowColor: string;
  life: number;
  maxLife: number;
  scale: number;
}

interface BackgroundCookie {
  id: number;
  x: number;
  y: number;
  vy: number;
  size: number;
  rotation: number;
  vRotation: number;
  alpha: number;
}

const CookieCanvas = forwardRef<CookieCanvasRef, {}>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const textsRef = useRef<FloatingText[]>([]);
  const backgroundCookiesRef = useRef<BackgroundCookie[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const nextId = useRef<number>(0);

  // Expose the particle spawning function to the parent component
  useImperativeHandle(ref, () => ({
    spawnParticles(x, y, text, type = 'normal') {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Get relative coordinates if needed
      const rect = canvas.getBoundingClientRect();
      const clickX = x - rect.left;
      const clickY = y - rect.top;

      // 1. Spawn floating text
      let color = '#FFF5E6';
      let shadowColor = 'rgba(0, 0, 0, 0.6)';
      let size = 22;
      let maxLife = 50;

      if (type === 'golden') {
        color = '#FBBF24'; // Golden amber
        shadowColor = 'rgba(217, 119, 6, 0.8)';
        size = 32;
        maxLife = 70;
      } else if (type === 'critical') {
        color = '#EF4444'; // Red
        shadowColor = 'rgba(153, 27, 27, 0.8)';
        size = 28;
        maxLife = 60;
      }

      textsRef.current.push({
        id: nextId.current++,
        x: clickX,
        y: clickY - 15,
        text,
        vy: -1.8 - Math.random() * 1.2,
        alpha: 1,
        size,
        color,
        shadowColor,
        life: 0,
        maxLife,
        scale: 0.8,
      });

      // 2. Spawn crumbs/particles (chocolate chip crumbs)
      const count = type === 'golden' ? 25 : type === 'critical' ? 18 : 10;
      const colors = ['#8B5A2B', '#5C3A21', '#D2B48C', '#FBBF24', '#F59E0B'];

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 4.5;
        particlesRef.current.push({
          id: nextId.current++,
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5, // slightly upwards
          size: 3 + Math.random() * 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          life: 0,
          maxLife: 25 + Math.random() * 25,
          rotation: Math.random() * Math.PI * 2,
          vRotation: (Math.random() - 0.5) * 0.2,
        });
      }
    }
  }));

  // Handle background cookie generation
  useEffect(() => {
    const interval = setInterval(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Only spawn if tab is active and we have fewer than 15 background cookies
      if (document.hidden || backgroundCookiesRef.current.length >= 15) return;

      backgroundCookiesRef.current.push({
        id: nextId.current++,
        x: Math.random() * canvas.width,
        y: -50,
        vy: 0.5 + Math.random() * 1.2,
        size: 20 + Math.random() * 40,
        rotation: Math.random() * Math.PI * 2,
        vRotation: (Math.random() - 0.5) * 0.02,
        alpha: 0.08 + Math.random() * 0.12, // subtle background drift
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Canvas resize handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Create an observer to watch for container size changes
    const resizeObserver = new ResizeObserver(() => handleResize());
    if (canvasRef.current?.parentElement) {
      resizeObserver.observe(canvasRef.current.parentElement);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- 1. RENDER BACKGROUND DRIFTING COOKIES ---
      const bgCookies = backgroundCookiesRef.current;
      for (let i = bgCookies.length - 1; i >= 0; i--) {
        const c = bgCookies[i];
        c.y += c.vy;
        c.rotation += c.vRotation;

        // Draw a simple stylized cookie
        ctx.save();
        ctx.globalAlpha = c.alpha;
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation);

        // Cookie base
        ctx.fillStyle = '#D2B48C';
        ctx.beginPath();
        ctx.arc(0, 0, c.size, 0, Math.PI * 2);
        ctx.fill();

        // Cookie border
        ctx.strokeStyle = '#B58B5C';
        ctx.lineWidth = c.size * 0.08;
        ctx.stroke();

        // Chocolate chips
        ctx.fillStyle = '#5C3A21';
        const chips = [
          { x: -0.3, y: -0.3, r: 0.15 },
          { x: 0.3, y: -0.2, r: 0.12 },
          { x: -0.2, y: 0.4, r: 0.14 },
          { x: 0.4, y: 0.3, r: 0.13 },
          { x: 0, y: 0, r: 0.16 },
        ];
        chips.forEach((chip) => {
          ctx.beginPath();
          ctx.arc(chip.x * c.size, chip.y * c.size, chip.r * c.size, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.restore();

        // Remove offscreen cookies
        if (c.y > canvas.height + 60) {
          bgCookies.splice(i, 1);
        }
      }

      // --- 2. RENDER CRUMBS / PARTICLES ---
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12; // gravity
        p.life++;
        p.alpha = 1 - p.life / p.maxLife;
        if (p.rotation !== undefined && p.vRotation !== undefined) {
          p.rotation += p.vRotation;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        if (p.rotation !== undefined) {
          ctx.rotate(p.rotation);
        }

        ctx.fillStyle = p.color;
        // Draw irregular crumb (triangle/square) instead of plain circle
        ctx.beginPath();
        ctx.moveTo(-p.size / 2, -p.size / 2);
        ctx.lineTo(p.size / 2, -p.size / 3);
        ctx.lineTo(p.size / 3, p.size / 2);
        ctx.lineTo(-p.size / 3, p.size / 3);
        ctx.closePath();
        ctx.fill();

        ctx.restore();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      // --- 3. RENDER FLOATING TEXTS ---
      const texts = textsRef.current;
      for (let i = texts.length - 1; i >= 0; i--) {
        const t = texts[i];
        t.y += t.vy;
        t.life++;
        t.alpha = 1 - t.life / t.maxLife;
        
        // Scale up quickly, then drift
        if (t.life < 10) {
          t.scale += 0.04;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, t.alpha);
        ctx.translate(t.x, t.y);
        ctx.scale(t.scale, t.scale);

        ctx.font = `bold ${t.size}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Draw shadow
        ctx.fillStyle = t.shadowColor;
        ctx.fillText(t.text, 2, 2);

        // Draw main text
        ctx.fillStyle = t.color;
        ctx.fillText(t.text, 0, 0);

        ctx.restore();

        if (t.life >= t.maxLife) {
          texts.splice(i, 1);
        }
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
});

CookieCanvas.displayName = 'CookieCanvas';

export default CookieCanvas;
