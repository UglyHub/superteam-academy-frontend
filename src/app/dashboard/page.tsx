'use client';

import React from 'react';
import Link from 'next/link';

const mockStats = {
  xp: 12450,
  level: 11,
  streak: 7,
  coursesCompleted: 4,
  rank: 23,
  nextLevelXP: 16900,
};

const mockActivity = [
  { text: 'Completed "Your First Transaction"', xp: 50, time: '2h ago', icon: '💻' },
  { text: 'Started "Anchor Framework"', xp: 10, time: '5h ago', icon: '📚' },
  { text: 'Day 7 Streak Bonus!', xp: 70, time: '1d ago', icon: '🔥' },
  { text: 'Completed "Solana Fundamentals"', xp: 500, time: '2d ago', icon: '🏆' },
];

const mockCourseProgress = [
  { title: 'Anchor Framework Mastery', progress: 45, total: 20, completed: 9, color: 'bg-primary-500' },
  { title: 'Solana NFTs & Metaplex', progress: 20, total: 15, completed: 3, color: 'bg-accent-500' },
];

const levelProgress = ((mockStats.xp - 10000) / (mockStats.nextLevelXP - 10000)) * 100;

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black px-4 py-12">

      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-500/4 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-500/4 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="text-gray-500 text-sm mb-1">Welcome back,</p>
            <h1 className="font-display text-4xl md:text-5xl font-black text-white">
              Explorer
            </h1>
          </div>
          <div className="glass-yellow rounded-2xl px-5 py-3 flex items-center gap-3">
            <span className="text-3xl">🔥</span>
            <div>
              <div className="text-primary-500 font-black text-2xl leading-none">
                {mockStats.streak}
              </div>
              <div className="text-gray-400 text-xs">Day Streak</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total XP', value: mockStats.xp.toLocaleString(), icon: '⚡', color: 'text-primary-500', bg: 'glass-yellow' },
            { label: 'Current Level', value: `Lv. ${mockStats.level}`, icon: '🎯', color: 'text-white', bg: 'glass' },
            { label: 'Global Rank', value: `#${mockStats.rank}`, icon: '🏆', color: 'text-primary-500', bg: 'glass' },
            { label: 'Completed', value: `${mockStats.coursesCompleted} Courses`, icon: '✅', color: 'text-accent-500', bg: 'glass-green' },
          ].map((stat) => (
            <div key={stat.label} className={`${stat.bg} rounded-2xl p-5 card-hover border-gradient`}>
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className={`font-display text-2xl font-black ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Level Progress Bar */}
        <div className="glass border-gradient rounded-3xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-bold text-lg">
              Level {mockStats.level} → Level {mockStats.level + 1}
            </span>
            <span className="text-primary-500 font-mono font-bold">
              {mockStats.xp.toLocaleString()} / {mockStats.nextLevelXP.toLocaleString()} XP
            </span>
          </div>
          <div className="h-3 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full xp-bar-shine"
              style={{ width: `${levelProgress}%` }}
            />
          </div>
          <p className="text-gray-500 text-sm mt-3">
            {(mockStats.nextLevelXP - mockStats.xp).toLocaleString()} XP to next level
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Continue Learning */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              Continue Learning
            </h2>

            {mockCourseProgress.map((course) => (
              <div key={course.title} className="glass border-gradient rounded-2xl p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-white font-bold text-lg">{course.title}</h3>
                  <span className="text-primary-500 font-bold">{course.progress}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
                  <div
                    className={`h-full ${course.color} rounded-full`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    {course.completed}/{course.total} lessons
                  </span>
                  <Link href="/courses">
                    <button className="text-sm font-semibold text-primary-500 hover:text-primary-400 transition-colors">
                      Continue →
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            <Link href="/courses">
              <div className="glass rounded-2xl p-6 border-2 border-dashed border-white/10 hover:border-primary-500/40 transition-all cursor-pointer text-center">
                <span className="text-gray-400 hover:text-white transition-colors">
                  + Browse More Courses
                </span>
              </div>
            </Link>
          </div>

          {/* Right Column */}
          <div>
            {/* Activity Feed */}
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              Recent Activity
            </h2>
            <div className="space-y-3 mb-8">
              {mockActivity.map((item, idx) => (
                <div key={idx} className="glass rounded-xl p-4 flex items-start gap-3 card-hover">
                  <span className="text-xl">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{item.text}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.time}</p>
                  </div>
                  <span className="text-accent-500 font-bold text-sm">
                    +{item.xp}
                  </span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              Achievements
            </h2>
            <div className="grid grid-cols-4 gap-2">
              {['🔥', '⚡', '🎯', '🏆', '💎', '🌟', '👑', '🚀'].map((emoji, idx) => (
                <div
                  key={idx}
                  className={`aspect-square rounded-xl flex items-center justify-center text-2xl glass card-hover ${idx > 4 ? 'opacity-30 grayscale' : ''}`}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}