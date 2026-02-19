'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCourseBySlug } from '@/lib/data/mockCourses';
import { CourseHero } from '@/components/courses/CourseHero';
import { ModuleAccordion } from '@/components/courses/ModuleAccordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CourseDetailPage() {
  const params = useParams();
  const course = getCourseBySlug(params.slug as string);

  const [enrolled, setEnrolled] = useState(false);
  const [completedLessons] = useState<string[]>(['l1', 'l2']); // Mock data

  if (!course) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-white mb-2">
            Course Not Found
          </h1>
          <Link href="/courses">
            <Button variant="outline">Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    setEnrolled(true);
    // Scroll to first module
    setTimeout(() => {
      document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const progressPercent = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-primary-500/4 blur-[130px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-accent-500/4 blur-[110px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/courses" className="hover:text-primary-500 transition-colors">
            Courses
          </Link>
          <span>/</span>
          <span className="text-white">{course.title}</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <CourseHero course={course} enrolled={enrolled} onEnroll={handleEnroll} />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass border-gradient rounded-2xl p-6 sticky top-24 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-4">
                  Your Progress
                </h3>
                
                {enrolled ? (
                  <>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm">Completion</span>
                        <span className="text-primary-500 font-bold text-sm">
                          {Math.round(progressPercent)}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercent}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Completed</span>
                        <span className="text-white font-semibold">
                          {completedLessons.length}/{totalLessons}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">XP Earned</span>
                        <span className="text-accent-500 font-bold">
                          +{completedLessons.length * 50}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-400 text-sm mb-4">
                      Enroll to track your progress
                    </p>
                    <Button onClick={handleEnroll} size="sm" className="w-full">
                      Enroll Now
                    </Button>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-semibold text-sm mb-3">What you&apos;ll learn</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500 mt-0.5">✓</span>
                    <span>Core Solana concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500 mt-0.5">✓</span>
                    <span>Hands-on coding challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500 mt-0.5">✓</span>
                    <span>Real-world applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500 mt-0.5">✓</span>
                    <span>On-chain credentials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="lg:col-span-3" id="modules">
            <h2 className="font-display text-3xl font-black text-white mb-8">
              Course Content
            </h2>

            <div className="space-y-4">
              {course.modules.map((module, idx) => (
                <ModuleAccordion
                  key={module.id}
                  module={module}
                  courseSlug={course.slug}
                  moduleIndex={idx}
                  completedLessons={completedLessons}
                  defaultExpanded={idx === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}