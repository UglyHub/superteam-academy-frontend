'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLearning } from '@/lib/hooks/useLearning';
import { XPProgressBar } from '@/components/gamification/XPProgressBar';
import { LevelBadge } from '@/components/gamification/LevelBadge';
import { StreakCounter } from '@/components/gamification/StreakCounter';
import { AchievementGrid } from '@/components/gamification/AchievementGrid';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { ContinueLearning } from '@/components/dashboard/ContinueLearning';
import { Button } from '@/components/ui/button';

// Mock data (will be replaced with real data from useLearning hook)
const mockActivities = [
  { id: '1', type: 'lesson_complete' as const, text: 'Completed "Your First Transaction"', xp: 50, timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), icon: '💻' },
  { id: '2', type: 'enrolled' as const, text: 'Started "Anchor Framework"', xp: 10, timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), icon: '📚' },
  { id: '3', type: 'streak_bonus' as const, text: 'Day 7 Streak Bonus!', xp: 70, timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), icon: '🔥' },
  { id: '4', type: 'course_complete' as const, text: 'Completed "Solana Fundamentals"', xp: 500, timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000), icon: '🏆' },
];

const mockCourses = [
  { id: '1', slug: 'anchor-framework', title: 'Anchor Framework Mastery', progress: 45, total: 20, completed: 9, color: 'bg-primary-500' },
  { id: '2', slug: 'solana-nfts', title: 'Solana NFTs & Metaplex', progress: 20, total: 15, completed: 3, color: 'bg-accent-500' },
];

const mockAchievements = [
  { id: '1', emoji: '🔥', title: 'First Streak', description: 'Complete 3 days in a row', unlocked: true },
  { id: '2', emoji: '⚡', title: 'Quick Learner', description: 'Finish 5 lessons in one day', unlocked: true },
  { id: '3', emoji: '🎯', title: 'Sharpshooter', description: 'Pass all tests first try', unlocked: true },
  { id: '4', emoji: '🏆', title: 'Course Champion', description: 'Complete your first course', unlocked: true },
  { id: '5', emoji: '💎', title: 'Dedicated', description: 'Reach 10,000 XP', unlocked: true },
  { id: '6', emoji: '🌟', title: 'Rising Star', description: 'Enter top 100 leaderboard', unlocked: false },
  { id: '7', emoji: '👑', title: 'Legend', description: 'Reach level 20', unlocked: false },
  { id: '8', emoji: '🚀', title: 'Rocket Fuel', description: '30 day streak', unlocked: false },
];

const mockLeaderboard = [
  { rank: 1, username: 'sol_wizard', xp: 45200, streak: 45 },
  { rank: 2, username: 'anchor_dev', xp: 38100, streak: 30 },
  { rank: 3, username: 'UglyHub', xp: 25100, streak: 12 },
  { rank: 4, username: 'defi_coder', xp: 28600, streak: 15 },
  { rank: 5, username: 'nft_builder', xp: 31400, streak: 22 },
];

export default function DashboardPage() {
  const { xpData, streak, loading } = useLearning();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-gray-400">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-500/3 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-500/3 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">Welcome back,</p>
              <h1 className="font-display text-5xl font-black text-white">
                Explorer
              </h1>
            </div>
            <StreakCounter
              currentStreak={streak?.current || 0}
              longestStreak={streak?.longest || 0}
              size="lg"
            />
          </div>

          {/* Level + XP Section */}
          <div className="glass-yellow border-gradient rounded-3xl p-8">
            <div className="flex items-start gap-8">
              <LevelBadge level={xpData.level} size="lg" />
              <div className="flex-1">
                <XPProgressBar xpData={xpData} showDetails size="lg" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            icon="⚡"
            label="Total XP"
            value={xpData.total.toLocaleString()}
            subtext={`Level ${xpData.level}`}
            variant="primary"
            delay={0.1}
          />
          <StatsCard
            icon="🎯"
            label="Global Rank"
            value="#23"
            subtext="Top 5%"
            delay={0.2}
          />
          <StatsCard
            icon="✅"
            label="Completed"
            value="4"
            subtext="Courses"
            variant="accent"
            delay={0.3}
          />
          <StatsCard
            icon="📚"
            label="In Progress"
            value="2"
            subtext="Courses"
            delay={0.4}
          />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          {/* Continue Learning - 2 columns */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-2">
              Continue Learning
              <span className="text-primary-500">→</span>
            </h2>
            <ContinueLearning courses={mockCourses} />
          </div>

          {/* Activity Feed - 1 column */}
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-2">
              Recent Activity
              <span className="text-accent-500">✨</span>
            </h2>
            <ActivityFeed activities={mockActivities} />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Achievements */}
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-2">
              Achievements
              <span className="text-xs glass-yellow px-2 py-1 rounded-lg text-primary-500 font-bold">
                5/8 Unlocked
              </span>
            </h2>
            <AchievementGrid achievements={mockAchievements} columns={4} />
          </div>

          {/* Leaderboard Preview */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                Leaderboard
                <span className="text-primary-500">🏆</span>
              </h2>
              <Link href="/leaderboard">
                <Button variant="ghost" size="sm" className="text-primary-500">
                  View All →
                </Button>
              </Link>
            </div>

            <div className="glass border-gradient rounded-2xl overflow-hidden">
              {mockLeaderboard.map((entry, idx) => (
                <motion.div
                  key={entry.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex items-center gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/3 transition-all ${
                    entry.username === 'UglyHub' ? 'bg-primary-500/5' : ''
                  }`}
                >
                  <div className={`text-sm font-bold ${idx < 3 ? 'text-primary-500' : 'text-gray-400'}`}>
                    {idx === 0 ? '👑' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : entry.rank}
                  </div>
                  <div className="flex-1">
                    <div className={`text-sm font-semibold ${entry.username === 'UglyHub' ? 'text-primary-400' : 'text-white'}`}>
                      {entry.username}
                      {entry.username === 'UglyHub' && (
                        <span className="ml-2 text-xs bg-primary-500/10 text-primary-500 px-2 py-0.5 rounded-full">
                          You
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary-500 font-mono font-bold text-sm">
                      {entry.xp.toLocaleString()}
                    </div>
                    <div className="text-orange-400 text-xs">🔥 {entry.streak}d</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}