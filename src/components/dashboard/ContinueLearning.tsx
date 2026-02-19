'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface CourseProgress {
  id: string;
  slug: string;
  title: string;
  progress: number;
  total: number;
  completed: number;
  color: string;
}

interface ContinueLearningProps {
  courses: CourseProgress[];
}

export function ContinueLearning({ courses }: ContinueLearningProps) {
  if (courses.length === 0) {
    return (
      <div className="glass border-gradient rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">📚</div>
        <h3 className="font-display text-xl font-bold text-white mb-2">
          No courses in progress
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          Start learning and track your progress here
        </p>
        <Link href="/courses">
          <Button>Browse Courses</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {courses.map((course, idx) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="glass border-gradient rounded-2xl p-6 card-hover group"
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-white font-bold text-lg group-hover:text-primary-400 transition-colors">
              {course.title}
            </h3>
            <span className="text-primary-500 font-bold text-sm">
              {course.progress}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className={`h-full ${course.color} rounded-full`}
            />
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">
              {course.completed}/{course.total} lessons
            </span>
            <Link href={`/courses/${course.slug}`}>
              <Button variant="ghost" size="sm" className="text-primary-500 hover:text-primary-400">
                Continue →
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}

      <Link href="/courses">
        <div className="glass rounded-2xl p-6 border-2 border-dashed border-white/10 hover:border-primary-500/40 transition-all cursor-pointer text-center group">
          <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
            + Browse More Courses
          </span>
        </div>
      </Link>
    </div>
  );
}