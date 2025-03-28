
import React, { useEffect, useRef } from 'react';

const HologramSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 280;
    canvas.height = 280;
    
    // Animation variables
    let time = 0;
    const particles: { x: number; y: number; z: number; radius: number }[] = [];
    
    // Create particles
    for (let i = 0; i < 100; i++) {
      const radius = Math.random() * 2 + 1;
      // Distribute particles on a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 70 + Math.random() * 20;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      particles.push({ x, y, z, radius });
    }
    
    // Animation function
    const animate = () => {
      time += 0.01;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections and particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Rotate particles around the sphere
        const theta = time * 0.2;
        const x = p.x * Math.cos(theta) - p.z * Math.sin(theta);
        const z = p.x * Math.sin(theta) + p.z * Math.cos(theta);
        
        // Project 3D to 2D
        const scale = 200 / (200 + z);
        const screenX = canvas.width / 2 + x * scale;
        const screenY = canvas.height / 2 + p.y * scale;
        
        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const theta2 = time * 0.2;
          const x2 = p2.x * Math.cos(theta2) - p2.z * Math.sin(theta2);
          const z2 = p2.x * Math.sin(theta2) + p2.z * Math.cos(theta2);
          
          const scale2 = 200 / (200 + z2);
          const screenX2 = canvas.width / 2 + x2 * scale2;
          const screenY2 = canvas.height / 2 + p2.y * scale2;
          
          const dx = screenX - screenX2;
          const dy = screenY - screenY2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 40) {
            // Draw line with gradient
            const gradient = ctx.createLinearGradient(
              screenX, screenY, screenX2, screenY2
            );
            gradient.addColorStop(0, `rgba(53, 224, 197, ${(1 - dist / 40) * 0.5})`);
            gradient.addColorStop(1, `rgba(155, 87, 243, ${(1 - dist / 40) * 0.5})`);
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(screenX2, screenY2);
            ctx.stroke();
          }
        }
        
        // Draw particle
        const particleGradient = ctx.createRadialGradient(
          screenX, screenY, 0, screenX, screenY, p.radius * scale * 2
        );
        particleGradient.addColorStop(0, z > 0 ? 'rgba(53, 224, 197, 0.8)' : 'rgba(155, 87, 243, 0.8)');
        particleGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = particleGradient;
        ctx.arc(screenX, screenY, p.radius * scale * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw outer ring
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(53, 224, 197, 0.3)';
      ctx.lineWidth = 2;
      ctx.arc(canvas.width / 2, canvas.height / 2, 90, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw rotating ring
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(155, 87, 243, 0.3)';
      ctx.lineWidth = 2;
      ctx.arc(canvas.width / 2, canvas.height / 2, 100, time % (Math.PI * 2), (time % (Math.PI * 2)) + Math.PI);
      ctx.stroke();
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      // No cleanup needed
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full max-w-[280px] max-h-[280px] mx-auto"
    />
  );
};

export default HologramSphere;
