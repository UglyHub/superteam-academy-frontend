'use client';

import React, { useState } from 'react';

const tabs = ['Overview', 'Credentials', 'Activity'];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="min-h-screen bg-black px-4 py-12">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-500/4 blur-[130px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Profile Hero */}
        <div className="glass-yellow border border-primary-500/20 rounded-3xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-4xl font-black text-black animate-pulse-glow">
              U
            </div>
            <div className="flex-1">
              <h1 className="font-display text-3xl font-black text-white mb-1">UglyHub</h1>
              <p className="text-gray-400 font-mono text-sm mb-3">Connect wallet to view full address</p>
              <div className="flex gap-3 flex-wrap">
                <span className="glass px-3 py-1 rounded-lg text-primary-500 text-sm font-bold">⚡ 12,450 XP</span>
                <span className="glass px-3 py-1 rounded-lg text-white text-sm font-bold">🎯 Level 11</span>
                <span className="glass px-3 py-1 rounded-lg text-orange-400 text-sm font-bold">🔥 7 Day Streak</span>
                <span className="glass px-3 py-1 rounded-lg text-gray-300 text-sm font-bold">🏆 Rank #23</span>
              </div>
            </div>
            <button className="glass border border-white/10 hover:border-primary-500/40 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-1 glass rounded-2xl w-fit mb-8">
          {tabs.map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${activeTab === t ? 'bg-primary-500 text-black' : 'text-gray-400 hover:text-white'}`}>
              {t}
            </button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass border-gradient rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-white mb-6">Stats</h3>
              <div className="space-y-4">
                {[
                  { label: 'Courses Completed', value: '4', icon: '📚' },
                  { label: 'Challenges Solved', value: '23', icon: '💻' },
                  { label: 'Longest Streak', value: '30 days', icon: '🔥' },
                  { label: 'Credentials Earned', value: '2', icon: '🏆' },
                ].map(stat => (
                  <div key={stat.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-gray-400 text-sm">{stat.icon} {stat.label}</span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass border-gradient rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-white mb-6">Activity Calendar</h3>
              <div className="grid grid-cols-7 gap-1.5">
                {Array.from({ length: 35 }).map((_, i) => {
                  const active = [0,1,2,3,4,6,7,8,10,14,15,16,17,18,20,21,22,24,25,28,29,30,31,32,33,34].includes(i);
                  return <div key={i} className={`aspect-square rounded-md ${active ? 'bg-primary-500/80' : 'bg-white/5'}`} />;
                })}
              </div>
              <p className="text-gray-500 text-xs mt-3">Last 35 days of activity</p>
            </div>
          </div>
        )}

        {activeTab === 'Credentials' && (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Solana Fundamentals', level: 3, xp: 5000, date: 'Jan 2026' },
              { title: 'Anchor Framework', level: 2, xp: 3200, date: 'Feb 2026' },
            ].map((cred) => (
              <div key={cred.title} className="glass-yellow border border-primary-500/20 rounded-2xl p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">🏆</span>
                  <span className="glass px-2.5 py-1 rounded-lg text-xs text-primary-500 font-bold">On-Chain ✓</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{cred.title}</h3>
                <div className="flex gap-3 text-sm text-gray-400">
                  <span>Level {cred.level}</span>
                  <span>•</span>
                  <span>{cred.xp.toLocaleString()} XP</span>
                  <span>•</span>
                  <span>{cred.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Activity' && (
          <div className="glass border-gradient rounded-2xl divide-y divide-white/5">
            {[
              { text: 'Completed "Your First Transaction"', xp: 50, time: '2 hours ago', icon: '💻' },
              { text: 'Day 7 Streak Bonus!', xp: 70, time: '1 day ago', icon: '🔥' },
              { text: 'Completed "Solana Fundamentals"', xp: 500, time: '2 days ago', icon: '🏆' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 px-6 py-4 hover:bg-white/3">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{item.text}</p>
                  <p className="text-gray-500 text-xs">{item.time}</p>
                </div>
                <span className="text-accent-500 font-bold">+{item.xp} XP</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}