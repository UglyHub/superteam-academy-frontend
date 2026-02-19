'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { XPData } from '@/types';

interface XPProgressBarProps {
  xpData: XPData;
  showDetails?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function XPProgressBar({ xpData, showDetails = true, size = 'md' }: XPProgressBarProps) {
  const { level, currentLevelXP, nextLevelXP, progressPercent, total } = xpData;
  
  const heights = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  return (
    <div className="space-y-2">
      {showDetails && (
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white">
              Level {level}
            </span>
            <span className="text-gray-500">→</span>
            <span className="text-gray-400">
              Level {level + 1}
            </span>
          </div>
          <span className="font-mono text-primary-500 font-bold">
            {total.toLocaleString()} XP
          </span>
        </div>
      )}

      {/* Progress Bar */}
      <div className={`w-full ${heights[size]} bg-white/5 rounded-full overflow-hidden relative`}>
        {/* Background glow */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-sm"
          style={{ width: `${progressPercent}%` }}
        />
        
        {/* Actual progress */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full relative xp-bar-shine"
        >
          {/* Shine effect is handled by CSS in globals.css */}
        </motion.div>
      </div>

      {showDetails && (
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">
            {(currentLevelXP).toLocaleString()} XP
          </span>
          <span className="text-gray-400">
            {(nextLevelXP - total).toLocaleString()} XP to next level
          </span>
          <span className="text-gray-500">
            {nextLevelXP.toLocaleString()} XP
          </span>
        </div>
      )}
    </div>
  );
}