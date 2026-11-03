import React, { useEffect, useRef } from 'react';

const FloatingHearts = ({ triggerBurst }) => {
  const canvasRef = useRef(null);
  const petalsRef = useRef([]);
  const burstParticlesRef = useRef([]);
  const animFrameIdRef = useRef(null);

  const colors = [
    'rgba(244, 212, 220, ', // soft blush pink
    'rgba(223, 162, 180, ', // dusty rose
    'rgba(250, 240, 225, ', // warm champagne ivory
    'rgba(215, 185, 150, ', // gentle soft gold
    'rgba(238, 205, 214, ', // soft rose quartz
    'rgba(255, 255, 255, ', // delicate white
  ];

  // Helper to draw an elegant cherry blossom petal
  const drawPetal = (ctx, x, y, size, color, alpha, rotation = 0) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.bezierCurveTo(size * 0.75, -size * 0.5, size * 0.75, size * 0.6, 0, size);
    ctx.bezierCurveTo(-size * 0.75, size * 0.6, -size * 0.75, -size * 0.5, 0, -size);
    ctx.closePath();
    ctx.fillStyle = `${color}${alpha})`;
    ctx.shadowColor = `${color}0.25)`;
    ctx.shadowBlur = size * 0.3;
    ctx.fill();
    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initial soft floating petals
    const petalCount = Math.min(Math.floor(window.innerWidth / 30), 45);
    petalsRef.current = Array.from({ length: petalCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 14 + 8,
      speedY: Math.random() * 0.7 + 0.35,
      swaySpeed: Math.random() * 0.015 + 0.008,
      swayDist: Math.random() * 2 + 1,
      swayOffset: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.45 + 0.2,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const createBurst = (x, y, count = 20) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.5 + 1.2;
        burstParticlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.2,
          size: Math.random() * 12 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.85,
          decay: Math.random() * 0.015 + 0.01,
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 6,
          gravity: 0.04,
        });
      }
    };

    // Click anywhere on window spawns soft burst
    const handleClick = (e) => {
      createBurst(e.clientX, e.clientY, 14);
    };
    window.addEventListener('pointerdown', handleClick);

    // Animation loop
    let tick = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick += 0.015;

      // 1. Draw drifting background petals
      petalsRef.current.forEach((petal) => {
        petal.y += petal.speedY; // gentle drifting downward like blossom petals
        petal.x += Math.sin(tick + petal.swayOffset) * petal.swayDist * 0.6;
        petal.rotation += petal.rotSpeed;

        // Reset if goes off bottom
        if (petal.y > canvas.height + 40) {
          petal.y = -30;
          petal.x = Math.random() * canvas.width;
          petal.size = Math.random() * 14 + 8;
          petal.speedY = Math.random() * 0.7 + 0.35;
          petal.color = colors[Math.floor(Math.random() * colors.length)];
        }

        drawPetal(
          ctx,
          petal.x,
          petal.y,
          petal.size,
          petal.color,
          petal.opacity,
          petal.rotation
        );
      });

      // 2. Draw burst particles
      for (let i = burstParticlesRef.current.length - 1; i >= 0; i--) {
        const p = burstParticlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98;
        p.rotation += p.rotSpeed;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          burstParticlesRef.current.splice(i, 1);
          continue;
        }

        drawPetal(ctx, p.x, p.y, p.size, p.color, Math.max(0, p.alpha), p.rotation);
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointerdown', handleClick);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Listen to external burst triggers (e.g. opening envelope)
  useEffect(() => {
    if (!triggerBurst || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4.5 + 1.5;
      burstParticlesRef.current.push({
        x: centerX + (Math.random() - 0.5) * 100,
        y: centerY + (Math.random() - 0.5) * 80,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: Math.random() * 14 + 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.9,
        decay: Math.random() * 0.012 + 0.008,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        gravity: 0.05,
      });
    }
  }, [triggerBurst]);

  return (
    <canvas
      ref={canvasRef}
      className="floating-hearts-canvas"
      aria-hidden="true"
    />
  );
};

export default FloatingHearts;
