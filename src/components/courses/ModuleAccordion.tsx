'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LessonItem } from './LessonItem';
import type { Module } from '@/types';

interface ModuleAccordionProps {
  module: Module;
  courseSlug: string;
  moduleIndex: number;
  completedLessons: string[];
  currentLessonId?: string;
  defaultExpanded?: boolean;
}

export function ModuleAccordion({
  module,
  courseSlug,
  moduleIndex,
  completedLessons,
  currentLessonId,
  defaultExpanded = false,
}: ModuleAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const totalLessons = module.lessons.length;
  const completedCount = module.lessons.filter(l => completedLessons.includes(l.id)).length;
  const progressPercent = (completedCount / totalLessons) * 100;

  return (
    <div className="glass border-gradient rounded-2xl overflow-hidden">
      {/* Module Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between hover:bg-white/3 transition-all group"
      >
        <div className="flex items-start gap-4 flex-1 text-left">
          {/* Module Number */}
          <div className="w-12 h-12 rounded-xl glass-yellow flex items-center justify-center shrink-0">
            <span className="font-display font-black text-primary-500 text-lg">
              {moduleIndex + 1}
            </span>
          </div>

          {/* Module Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
              {module.title}
            </h3>
            {module.description && (
              <p className="text-gray-400 text-sm mb-3">
                {module.description}
              </p>
            )}

            {/* Progress Bar */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                />
              </div>
              <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
                {completedCount}/{totalLessons} lessons
              </span>
            </div>
          </div>
        </div>

        {/* Expand/Collapse Icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-4"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>

      {/* Lessons List */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 space-y-2 border-t border-white/5">
              {module.lessons.map((lesson, idx) => {
                const isCompleted = completedLessons.includes(lesson.id);
                const isLocked = idx > 0 && !completedLessons.includes(module.lessons[idx - 1].id);
                const isCurrent = lesson.id === currentLessonId;

                return (
                  <LessonItem
                    key={lesson.id}
                    lesson={lesson}
                    courseSlug={courseSlug}
                    completed={isCompleted}
                    locked={isLocked}
                    current={isCurrent}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}