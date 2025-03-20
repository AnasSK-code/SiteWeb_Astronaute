import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkle: number;
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Initialisation des étoiles (réparties PARTOUT)
    const initStars = () => {
      const starCount = Math.floor(window.innerWidth * window.innerHeight / 4000); // Plus d'étoiles
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height, // Réparties PARTOUT
          size: Math.random() * 1.8 + 0.8, // Variation de taille plus large
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.1 + 0.05, // Augmentation de la vitesse
          twinkle: Math.random() * 0.02 - 0.01, // Twinkle subtil
        });
      }
    };

    initStars();

    // Animation loop
    let animationFrame: number;
    let lastTime = 0;

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach(star => {
        // Faire monter les étoiles plus rapidement
        star.y -= star.speed * deltaTime * 0.08;

        // Si une étoile sort par le haut, elle revient en bas avec un décalage aléatoire
        if (star.y < -10) {
          star.y = canvas.height + Math.random() * 20; // Évite que toutes les étoiles réapparaissent en même temps
          star.x = Math.random() * canvas.width;
        }

        // Effet scintillant
        star.opacity += star.twinkle;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkle = -star.twinkle;
        }

        // Dessiner l'étoile
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarBackground;
