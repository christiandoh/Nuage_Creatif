import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trailPositions, setTrailPositions] = useState([]);

  useEffect(() => {
    let animationFrameId;
    
    const updateCursor = (e) => {
      const { clientX, clientY } = e;
      
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: clientX, y: clientY });
        
        // Add trail effect
        setTrailPositions(prev => {
          const newTrail = [{ x: clientX, y: clientY, id: Date.now() }, ...prev];
          return newTrail.slice(0, 8); // Keep only last 8 positions
        });
      });
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('nav-link') ||
        target.classList.contains('project-card') ||
        target.classList.contains('service-card') ||
        target.classList.contains('contact-method')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      {/* Trail particles */}
      {trailPositions.map((pos, index) => (
        <div
          key={pos.id}
          className="cursor-trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: 1 - (index / trailPositions.length),
            transform: `scale(${1 - (index / trailPositions.length) * 0.8})`
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      >
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>
      
      {/* Outer glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  );
};

export default CustomCursor;
