import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-neutral-200/40 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-700 via-amber-600 to-blue-600 transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
