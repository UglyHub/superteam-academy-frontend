'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  id: string;
  emoji: string;
  title: string;
  description: string;
  unlocked: boolean;
}

interface AchievementGridProps {
  achievements: Achievement[];
  columns?: 3 | 4 | 5;
}

export function AchievementGrid({ achievements, columns = 4 }: AchievementGridProps) {
  const gridCols = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-3`}>
      {achievements.map((achievement, idx) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
          className="group relative"
        >
          <motion.div
            className={`aspect-square rounded-2xl flex items-center justify-center text-4xl transition-all cursor-pointer ${
              achievement.unlocked
                ? 'glass-yellow border-gradient card-hover'
                : 'glass opacity-30 grayscale'
            }`}
            whileHover={achievement.unlocked ? { scale: 1.05, rotate: 5 } : {}}
            whileTap={achievement.unlocked ? { scale: 0.95 } : {}}
          >
            {achievement.unlocked ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {achievement.emoji}
              </motion.span>
            ) : (
              <span className="text-gray-600">🔒</span>
            )}
          </motion.div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            <div className="glass border-gradient rounded-xl p-3 text-center whitespace-nowrap shadow-lg">
              <p className="text-white text-xs font-bold mb-1">
                {achievement.title}
              </p>
              <p className="text-gray-400 text-[10px]">
                {achievement.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
