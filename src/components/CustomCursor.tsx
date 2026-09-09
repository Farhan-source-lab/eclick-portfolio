import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer / desktop
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const clickable = target.closest('button, a, input, textarea, [data-interactive="true"], [role="button"]');
      setIsHovered(!!clickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', checkHover);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', checkHover);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 border ${
          isHovered
            ? 'w-10 h-10 bg-blue-600/15 border-blue-600/50 scale-110'
            : 'w-3 h-3 bg-neutral-900 border-neutral-800'
        }`}
      />
    </div>
  );
};
