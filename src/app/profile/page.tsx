'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLearning } from '@/lib/hooks/useLearning';
import { XPProgressBar } from '@/components/gamification/XPProgressBar';
import { LevelBadge } from '@/components/gamification/LevelBadge';
import { AchievementGrid } from '@/components/gamification/AchievementGrid';

const tabs = ['Overview', 'Credentials', 'Activity'];

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

const mockCredentials = [
  { id: 'cred_1', title: 'Solana Fundamentals', level: 3, xp: 5000, date: 'Jan 2026', txHash: 'abc123...' },
  { id: 'cred_2', title: 'Anchor Framework', level: 2, xp: 3200, date: 'Feb 2026', txHash: 'def456...' },
];

const mockActivity = [
  { id: '1', text: 'Completed "Your First Transaction"', xp: 50, time: '2 hours ago', icon: '💻' },
  { id: '2', text: 'Day 7 Streak Bonus!', xp: 70, time: '1 day ago', icon: '🔥' },
  { id: '3', text: 'Completed "Solana Fundamentals"', xp: 500, time: '2 days ago', icon: '🏆' },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const { xpData, streak } = useLearning();

  return (
    <div className="min-h-screen bg-black px-4 py-12">
      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Profile Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-yellow border border-primary-500/20 rounded-3xl p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
            <LevelBadge level={xpData.level} size="lg" />
            
            <div className="flex-1">
              <h1 className="font-display text-3xl font-black text-white mb-1">UglyHub</h1>
              <p className="text-gray-400 font-mono text-sm mb-4">
                Connect wallet to view full address
              </p>
              
              <div className="flex gap-3 flex-wrap mb-4">
                <span className="glass px-3 py-1 rounded-lg text-primary-500 text-sm font-bold">
                  ⚡ {xpData.total.toLocaleString()} XP
                </span>
                <span className="glass px-3 py-1 rounded-lg text-white text-sm font-bold">
                  🎯 Level {xpData.level}
                </span>
                <span className="glass px-3 py-1 rounded-lg text-orange-400 text-sm font-bold">
                  🔥 {streak?.current || 0} Day Streak
                </span>
                <span className="glass px-3 py-1 rounded-lg text-gray-300 text-sm font-bold">
                  🏆 Rank #23
                </span>
              </div>

              <XPProgressBar xpData={xpData} showDetails={false} size="md" />
            </div>

            <button className="glass border border-white/10 hover:border-primary-500/40 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all">
              Edit Profile
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 p-1 glass rounded-2xl w-fit mb-8">
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === t
                  ? 'bg-primary-500 text-black shadow-glow-yellow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'Overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass border-gradient rounded-2xl p-6"
            >
              <h3 className="font-display text-xl font-bold text-white mb-6">Stats</h3>
              <div className="space-y-4">
                {[
                  { label: 'Courses Completed', value: '4', icon: '📚' },
                  { label: 'Challenges Solved', value: '23', icon: '💻' },
                  { label: 'Longest Streak', value: '30 days', icon: '🔥' },
                  { label: 'Credentials Earned', value: '2', icon: '🏆' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-gray-400 text-sm">
                      {stat.icon} {stat.label}
                    </span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Activity Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass border-gradient rounded-2xl p-6"
            >
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Activity Calendar
              </h3>
              <div className="grid grid-cols-7 gap-1.5">
                {Array.from({ length: 35 }).map((_, i) => {
                  const active = [0,1,2,3,4,6,7,8,10,14,15,16,17,18,20,21,22,24,25,28,29,30,31,32,33,34].includes(i);
                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded-md transition-colors ${
                        active ? 'bg-primary-500/80 hover:bg-primary-500' : 'bg-white/5 hover:bg-white/10'
                      }`}
                    />
                  );
                })}
              </div>
              <p className="text-gray-500 text-xs mt-3">Last 35 days of activity</p>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2"
            >
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Achievements{' '}
                <span className="text-sm glass-yellow px-2 py-1 rounded-lg text-primary-500 font-bold">
                  5/8 Unlocked
                </span>
              </h3>
              <AchievementGrid achievements={mockAchievements} columns={4} />
            </motion.div>
          </div>
        )}

        {activeTab === 'Credentials' && (
          <div className="grid md:grid-cols-2 gap-6">
            {mockCredentials.map((cred, idx) => (
              <motion.div
                key={cred.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-yellow border border-primary-500/20 rounded-2xl p-6 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">🏆</span>
                  <span className="glass px-2.5 py-1 rounded-lg text-xs text-accent-500 font-bold">
                    On-Chain ✓
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {cred.title}
                </h3>
                <div className="flex gap-3 text-sm text-gray-400 mb-4">
                  <span>Level {cred.level}</span>
                  <span>•</span>
                  <span>{cred.xp.toLocaleString()} XP</span>
                  <span>•</span>
                  <span>{cred.date}</span>
                </div>
                <button className="text-primary-500 text-sm font-semibold hover:text-primary-400 transition-colors">
                  View Certificate →
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'Activity' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass border-gradient rounded-2xl divide-y divide-white/5"
          >
            {mockActivity.map((item, idx) => (
              <div
                key={item.id}
                className="flex items-center gap-4 px-6 py-4 hover:bg-white/3 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{item.text}</p>
                  <p className="text-gray-500 text-xs">{item.time}</p>
                </div>
                <span className="text-accent-500 font-bold">+{item.xp} XP</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}