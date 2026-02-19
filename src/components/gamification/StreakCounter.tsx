'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StreakCounterProps {
  currentStreak: number;
  longestStreak: number;
  size?: 'sm' | 'md' | 'lg';
}

export function StreakCounter({ currentStreak, longestStreak, size = 'md' }: StreakCounterProps) {
  const isActive = currentStreak > 0;
  
  const sizes = {
    sm: { container: 'px-3 py-1.5', icon: 'text-lg', text: 'text-xs' },
    md: { container: 'px-4 py-2', icon: 'text-2xl', text: 'text-sm' },
    lg: { container: 'px-5 py-3', icon: 'text-3xl', text: 'text-base' },
  };

  return (
    <div className="space-y-2">
      <motion.div
        className={`glass-yellow border-gradient rounded-2xl ${sizes[size].container} flex items-center gap-3 w-fit ${
          isActive ? 'animate-pulse-glow' : ''
        }`}
        whileHover={{ scale: 1.02 }}
      >
        {/* Flame Icon */}
        <motion.span
          className={sizes[size].icon}
          animate={isActive ? {
            scale: [1, 1.1, 1],
            rotate: [-5, 5, -5, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🔥
        </motion.span>

        {/* Streak Number */}
        <div>
          <div className="flex items-baseline gap-1">
            <span className={`font-display font-black text-primary-500 ${sizes[size].text}`}>
              {currentStreak}
            </span>
            <span className={`text-gray-400 ${sizes[size].text}`}>
              {currentStreak === 1 ? 'day' : 'days'}
            </span>
          </div>
          {longestStreak > currentStreak && (
            <p className="text-[10px] text-gray-500">
              Best: {longestStreak} days
            </p>
          )}
        </div>
      </motion.div>

      {isActive && currentStreak >= 7 && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-accent-500 font-medium"
        >
          🎉 Amazing streak! Keep it going!
        </motion.p>
      )}
    </div>
  );
}