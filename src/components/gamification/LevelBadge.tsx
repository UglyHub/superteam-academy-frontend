'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LevelBadgeProps {
  level: number;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function LevelBadge({ level, size = 'md', animated = true }: LevelBadgeProps) {
  const sizes = {
    sm: 'w-12 h-14 text-sm',
    md: 'w-16 h-18 text-lg',
    lg: 'w-20 h-24 text-2xl',
  };

  const BadgeContent = (
    <div className={`${sizes[size]} relative`}>
      {/* Hexagon background */}
      <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="levelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd23f" />
            <stop offset="100%" stopColor="#ff8c42" />
          </linearGradient>
        </defs>
        <polygon
          points="50,0 100,25 100,75 50,100 0,75 0,25"
          fill="url(#levelGradient)"
          className="drop-shadow-[0_0_20px_rgba(255,210,63,0.4)]"
        />
      </svg>

      {/* Level text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[8px] font-semibold text-black/60 uppercase tracking-wide">
          Level
        </span>
        <span className="font-display font-black text-black leading-none">
          {level}
        </span>
      </div>
    </div>
  );

  if (!animated) return BadgeContent;

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      {BadgeContent}
    </motion.div>
  );
}