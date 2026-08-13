import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CursorState } from '../types';

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile/touch screens
    const checkTouch = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorState.text !== '' || cursorState.variant === 'project';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-400/60 backdrop-blur-[2px] text-xs font-mono font-bold text-indigo-100 tracking-wider uppercase shadow-[0_0_20px_rgba(99,102,241,0.3)]"
      animate={{
        x: mousePosition.x - (isExpanded ? 36 : 8),
        y: mousePosition.y - (isExpanded ? 36 : 8),
        width: isExpanded ? 72 : 16,
        height: isExpanded ? 72 : 16,
        scale: cursorState.active ? 1.2 : 1,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        type: 'spring',
        damping: 28,
        stiffness: 350,
        mass: 0.2
      }}
    >
      {cursorState.text && (
        <span className="text-[9px] font-mono text-indigo-100 text-center px-1 font-bold">
          {cursorState.text}
        </span>
      )}
    </motion.div>
  );
};
