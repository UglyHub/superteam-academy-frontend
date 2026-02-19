'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Course } from '@/types';

interface CourseHeroProps {
  course: Course;
  enrolled: boolean;
  onEnroll: () => void;
}

export function CourseHero({ course, enrolled, onEnroll }: CourseHeroProps) {
  const difficultyColors = {
    beginner: 'bg-green-500/10 text-green-400 border-green-500/30',
    intermediate: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    advanced: 'bg-red-500/10 text-red-400 border-red-500/30',
  };

  return (
    <div className="glass-yellow border-gradient rounded-3xl overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 p-8">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <Badge className={`${difficultyColors[course.difficulty]} border uppercase text-xs font-bold`}>
              {course.difficulty}
            </Badge>
            <span className="text-gray-500 text-sm">Track {course.trackId}</span>
          </div>

          <h1 className="font-display text-5xl font-black text-white mb-4 leading-tight">
            {course.title}
          </h1>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {course.description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱</span>
              <div>
                <div className="text-white font-bold text-sm">{course.duration} min</div>
                <div className="text-gray-500 text-xs">Duration</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-primary-500 font-bold text-sm">+{course.xpReward} XP</div>
                <div className="text-gray-500 text-xs">Reward</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-2xl">📚</span>
              <div>
                <div className="text-white font-bold text-sm">
                  {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} lessons
                </div>
                <div className="text-gray-500 text-xs">Content</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button
            onClick={onEnroll}
            size="lg"
            className="w-full sm:w-auto"
            disabled={enrolled}
          >
            {enrolled ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Enrolled
              </>
            ) : (
              'Start Learning'
            )}
          </Button>
        </motion.div>

        {/* Right: Thumbnail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-80 lg:h-full rounded-2xl overflow-hidden"
        >
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}