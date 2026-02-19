'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCourseBySlug } from '@/lib/data/mockCourses';
import { CodeChallenge } from '@/components/editor/CodeChallenge';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function LessonPage() {
  const router = useRouter();
  const params = useParams();
  const [completed, setCompleted] = useState(false);

  const course = getCourseBySlug(params.slug as string);
  const lesson = course?.modules
    .flatMap(m => m.lessons)
    .find(l => l.id === params.lessonId);

  if (!course || !lesson) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-white mb-2">
            Lesson Not Found
          </h1>
          <Link href="/courses">
            <Button variant="outline">Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSuccess = () => {
    setCompleted(true);
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400" aria-label="Breadcrumb">
          <Link href="/courses" className="hover:text-primary-500 transition-colors">
            Courses
          </Link>
          <span>/</span>
          <Link href={`/courses/${course.slug}`} className="hover:text-primary-500 transition-colors">
            {course.title}
          </Link>
          <span>/</span>
          <span className="text-white">{lesson.title}</span>
        </nav>

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h1 className="font-display text-4xl font-black text-white">
                {lesson.title}
              </h1>
              <Badge variant={lesson.type === 'challenge' ? 'default' : 'secondary'}>
                {lesson.type === 'challenge' ? '💻 Challenge' : '📖 Content'}
              </Badge>
            </div>
            <p className="text-gray-400">
              Earn <span className="text-accent-500 font-bold">+{lesson.xpReward} XP</span> on completion
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {lesson.type === 'content' ? (
              <div className="glass border-gradient rounded-2xl p-8">
                <div className="prose prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: lesson.content || '' }} />
                </div>
                <Button
                  onClick={() => setCompleted(true)}
                  className="mt-8 bg-primary-500 hover:bg-primary-600 text-black font-bold"
                >
                  Mark Complete (+{lesson.xpReward} XP)
                </Button>
              </div>
            ) : lesson.type === 'challenge' && lesson.challenge ? (
              <CodeChallenge challenge={lesson.challenge} onSuccess={handleSuccess} />
            ) : (
              <div className="glass border-gradient rounded-2xl p-8 text-center">
                <p className="text-gray-400">No lesson content available</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass border-gradient rounded-2xl p-6 sticky top-24 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-4">
                  Progress
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Status</span>
                    {completed ? (
                      <span className="text-accent-500 font-semibold flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Complete
                      </span>
                    ) : (
                      <span className="text-yellow-500 font-semibold">In Progress</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">XP Reward</span>
                    <span className="text-primary-500 font-bold">+{lesson.xpReward}</span>
                  </div>
                </div>
              </div>

              {completed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent-500/10 border border-accent-500/30 rounded-xl p-4 text-center"
                >
                  <div className="text-3xl mb-2">🎉</div>
                  <p className="text-accent-500 font-bold mb-1">Lesson Complete!</p>
                  <p className="text-gray-400 text-sm mb-4">+{lesson.xpReward} XP earned</p>
                  <Button
                    onClick={() => router.push(`/courses/${course.slug}`)}
                    variant="outline"
                    className="w-full"
                  >
                    Back to Course
                  </Button>
                </motion.div>
              )}

              {!completed && lesson.type === 'challenge' && (
                <div className="bg-primary-500/5 border border-primary-500/20 rounded-xl p-4">
                  <p className="text-primary-400 text-sm font-medium mb-2">
                    💡 Tip
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Run your code early and often. Each test failure teaches you something!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}