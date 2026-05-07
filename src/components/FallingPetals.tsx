import React, { useRef, useEffect } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

interface FallingPetalsProps {
  enabled?: boolean;
}

const FallingPetals: React.FC<FallingPetalsProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petals = useRef<Petal[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    if (!enabled) {
      petals.current = [];
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Initialize petals
    const initPetals = () => {
      const petalCount = 40;
      for (let i = 0; i < petalCount; i++) {
        petals.current.push(createPetal(canvas.width, canvas.height));
      }
    };

    const createPetal = (w: number, h: number): Petal => ({
      x: Math.random() * w,
      y: Math.random() * h - h, // Start above
      size: Math.random() * 5 + 8,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 1 + 1,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 2 - 1,
      opacity: Math.random() * 0.5 + 0.3,
    });

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      
      // Draw a simple petal shape
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, 0, p.size);
      ctx.bezierCurveTo(-p.size, 0, -p.size / 2, -p.size / 2, 0, 0);
      ctx.fillStyle = '#FFB7C5'; // Sakura pink
      ctx.fill();
      
      ctx.restore();
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.current.forEach((p, index) => {
        // Basic physics
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.5; // Sway
        p.rotation += p.rotationSpeed;

        // Mouse Repulsion
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 150;

        if (distance < repulsionRadius) {
          const force = (repulsionRadius - distance) / repulsionRadius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 5;
          p.y += Math.sin(angle) * force * 5;
        }

        // Reset if out of bounds
        if (p.y > canvas.height + 20) {
           petals.current[index] = createPetal(canvas.width, canvas.height);
           petals.current[index].y = -20; // Force reset to top
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(update);
    };

    // Interaction Handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    initPetals();
    update();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default FallingPetals;
