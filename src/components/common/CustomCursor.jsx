import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState([]);
  const [webNodes, setWebNodes] = useState([]); // Spider web nodes
  const cursorRef = useRef(null);
  const trailIdRef = useRef(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    let rafId;

    const handleMouseMove = (e) => {
      if (rafId) return; // Skip if already processing

      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });

        // Add trail particle - reduced frequency
        if (Math.random() > 0.7) { // Only add 30% of the time for performance
          const trailId = trailIdRef.current++;
          setTrails(prev => [...prev.slice(-3), { // Reduced from 8 to 3
            id: trailId,
            x: e.clientX,
            y: e.clientY
          }]);

          // Remove old trails
          setTimeout(() => {
            setTrails(prev => prev.filter(t => t.id !== trailId));
          }, 400); // Reduced from 600ms
        }

        // Add spider web node
        if (Math.random() > 0.8) { // Only add 20% of the time
          const nodeId = Date.now();
          setWebNodes(prev => [...prev.slice(-8), { // Keep last 8 nodes
            id: nodeId,
            x: e.clientX,
            y: e.clientY,
            timestamp: Date.now()
          }]);

          // Remove old nodes
          setTimeout(() => {
            setWebNodes(prev => prev.filter(n => n.id !== nodeId));
          }, 1200); // Nodes disappear after 1.2s
        }

        rafId = null;
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hover over interactive elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(e.target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Draw spider web connections on canvas
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size to full window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections between nearby nodes
    if (webNodes.length > 1) {
      const maxDistance = 150; // Maximum distance to draw connections

      for (let i = 0; i < webNodes.length; i++) {
        for (let j = i + 1; j < webNodes.length; j++) {
          const dx = webNodes[i].x - webNodes[j].x;
          const dy = webNodes[i].y - webNodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3; // Fade based on distance
            const age = Math.min(Date.now() - webNodes[i].timestamp, Date.now() - webNodes[j].timestamp);
            const ageFactor = Math.max(0, 1 - age / 1200); // Fade out over time

            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * ageFactor})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(webNodes[i].x, webNodes[i].y);
            ctx.lineTo(webNodes[j].x, webNodes[j].y);
            ctx.stroke();
          }
        }
      }
    }
  }, [webNodes, position]);

  return (
    <>
      {/* Canvas for spider web lines */}
      <canvas
        ref={canvasRef}
        className="spider-web-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9998
        }}
      />

      {/* Spider web nodes */}
      {webNodes.map((node, index) => (
        <div
          key={node.id}
          className="web-node"
          style={{
            left: `${node.x}px`,
            top: `${node.y}px`,
            opacity: Math.max(0, 1 - (Date.now() - node.timestamp) / 1200),
          }}
        />
      ))}

      {/* Trail particles */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: (index + 1) / trails.length * 0.5,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="cursor-dot" />
        <div className="cursor-ring" />
      </div>
    </>
  );
};

export default CustomCursor;
