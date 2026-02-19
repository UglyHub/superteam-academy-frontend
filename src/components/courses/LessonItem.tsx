'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Lesson } from '@/types';

interface LessonItemProps {
  lesson: Lesson;
  courseSlug: string;
  completed: boolean;
  locked: boolean;
  current?: boolean;
}

export function LessonItem({ lesson, courseSlug, completed, locked, current }: LessonItemProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
        locked
          ? 'opacity-40 cursor-not-allowed'
          : current
          ? 'glass-yellow border-2 border-primary-500'
          : completed
          ? 'glass hover:bg-white/5'
          : 'glass hover:bg-white/3 cursor-pointer'
      }`}
    >
      {/* Status Icon */}
      <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center glass">
        {locked ? (
          <span className="text-gray-600">🔒</span>
        ) : completed ? (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-accent-500"
          >
            ✓
          </motion.span>
        ) : lesson.type === 'challenge' ? (
          <span className="text-primary-500">💻</span>
        ) : (
          <span className="text-gray-400">📖</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className={`font-semibold text-sm ${
          current ? 'text-primary-400' : locked ? 'text-gray-500' : 'text-white'
        }`}>
          {lesson.title}
          {current && (
            <span className="ml-2 text-xs bg-primary-500/20 text-primary-500 px-2 py-0.5 rounded-full">
              Current
            </span>
          )}
        </h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-500">
            {lesson.type === 'challenge' ? 'Challenge' : 'Content'}
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-accent-500 font-bold">
            +{lesson.xpReward} XP
          </span>
        </div>
      </div>

      {/* Arrow */}
      {!locked && (
        <div className="shrink-0 text-gray-500 group-hover:text-primary-500 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      )}
    </motion.div>
  );

  if (locked) return content;

  return (
    <Link href={`/courses/${courseSlug}/lessons/${lesson.id}`} className="block group">
      {content}
    </Link>
  );
}