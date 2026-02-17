'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mockCourses, type Course } from '@/lib/data/mockCourses';

const filters = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function CoursesPage() {
  const [active, setActive] = useState('All');

  const filtered = mockCourses.filter((c: Course) =>
    active === 'All' || c.difficulty === active.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-black px-4 py-16">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-primary-500/4 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-accent-500/4 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-16">
          <p className="text-primary-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Superteam Academy
          </p>
          <h1 className="font-display text-6xl md:text-7xl font-black text-white mb-4">
            All Courses
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            From Solana fundamentals to advanced DeFi — master every layer of the stack.
          </p>
        </div>

        <div className="flex gap-2 mb-12 p-1 glass rounded-2xl w-fit">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                active === f
                  ? 'bg-primary-500 text-black shadow-glow-yellow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course: Course) => (
            <Link key={course.id} href={`/courses/${course.slug}`}>
              <div className="group glass border border-white/5 rounded-3xl overflow-hidden card-hover cursor-pointer">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* XP Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-primary-500/40 rounded-xl px-3 py-1.5">
                    <span className="text-primary-500 font-bold text-sm">
                      +{course.xpReward} XP
                    </span>
                  </div>

                  {/* Difficulty Badge */}
                  <div className={`absolute top-4 left-4 rounded-lg px-2.5 py-1 text-xs font-bold uppercase
                    ${course.difficulty === 'beginner'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : course.difficulty === 'intermediate'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {course.difficulty}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-gray-500 text-sm">
                      ⏱ {course.duration} min
                    </span>
                    <span className="text-primary-500 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">
                      Start →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No courses found</p>
          </div>
        )}
      </div>
    </div>
  );
}