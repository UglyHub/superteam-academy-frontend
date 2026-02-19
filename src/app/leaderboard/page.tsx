'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const timeframes = ['Weekly', 'Monthly', 'All Time'] as const;
type Timeframe = typeof timeframes[number];

const medals = ['👑', '🥈', '🥉'];

const mockLeaders = [
  { rank: 1, username: 'sol_wizard', wallet: '7xKX...asU', xp: 45200, level: 21, streak: 45, coursesCompleted: 12 },
  { rank: 2, username: 'anchor_dev', wallet: '8xKX...asV', xp: 38100, level: 19, streak: 30, coursesCompleted: 10 },
  { rank: 3, username: 'nft_builder', wallet: '9xKX...asW', xp: 31400, level: 17, streak: 22, coursesCompleted: 8 },
  { rank: 4, username: 'defi_coder', wallet: 'AxKX...asX', xp: 28600, level: 16, streak: 15, coursesCompleted: 7 },
  { rank: 5, username: 'UglyHub', wallet: 'BxKX...asY', xp: 25100, level: 15, streak: 12, coursesCompleted: 6 },
  { rank: 6, username: 'solana_br', wallet: 'CxKX...asZ', xp: 21300, level: 14, streak: 10, coursesCompleted: 5 },
  { rank: 7, username: 'web3_dev', wallet: 'DxKX...asA', xp: 18900, level: 13, streak: 8, coursesCompleted: 4 },
  { rank: 8, username: 'program_er', wallet: 'ExKX...asB', xp: 16200, level: 12, streak: 5, coursesCompleted: 4 },
  { rank: 9, username: 'blockchain_', wallet: 'FxKX...asC', xp: 14100, level: 11, streak: 3, coursesCompleted: 3 },
  { rank: 10, username: 'crypto_bld', wallet: 'GxKX...asD', xp: 12450, level: 11, streak: 7, coursesCompleted: 2 },
];

export default function LeaderboardPage() {
  const [activeTimeframe, setActiveTimeframe] = useState<Timeframe>('All Time');

  return (
    <div className="min-h-screen bg-black px-4 py-16">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary-500/5 blur-[130px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Global Rankings
          </p>
          <h1 className="font-display text-6xl md:text-7xl font-black text-white mb-4">
            Leaderboard
          </h1>
          <p className="text-gray-400 text-xl">
            The most dedicated Solana builders on the planet
          </p>
        </motion.div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 mb-12 items-end">
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-3xl p-6 text-center card-hover border border-white/10"
          >
            <div className="text-4xl mb-3">🥈</div>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 mx-auto mb-3 flex items-center justify-center text-xl font-bold text-black">
              {mockLeaders[1].username[0].toUpperCase()}
            </div>
            <div className="text-white font-bold">{mockLeaders[1].username}</div>
            <div className="text-primary-500 font-black text-xl mt-1">
              {mockLeaders[1].xp.toLocaleString()}
            </div>
            <div className="text-gray-500 text-xs">XP</div>
          </motion.div>

          {/* 1st Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="glass-yellow rounded-3xl p-6 text-center card-hover border border-primary-500/30 animate-pulse-glow -mt-4"
          >
            <div className="text-5xl mb-3">👑</div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-black">
              {mockLeaders[0].username[0].toUpperCase()}
            </div>
            <div className="text-white font-bold text-lg">{mockLeaders[0].username}</div>
            <div className="gradient-text font-black text-3xl mt-1">
              {mockLeaders[0].xp.toLocaleString()}
            </div>
            <div className="text-gray-500 text-xs">XP</div>
            <div className="mt-2 text-xs text-primary-500 font-semibold">
              🔥 {mockLeaders[0].streak} day streak
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-6 text-center card-hover border border-white/10"
          >
            <div className="text-4xl mb-3">🥉</div>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 mx-auto mb-3 flex items-center justify-center text-xl font-bold text-white">
              {mockLeaders[2].username[0].toUpperCase()}
            </div>
            <div className="text-white font-bold">{mockLeaders[2].username}</div>
            <div className="text-primary-500 font-black text-xl mt-1">
              {mockLeaders[2].xp.toLocaleString()}
            </div>
            <div className="text-gray-500 text-xs">XP</div>
          </motion.div>
        </div>

        {/* Timeframe Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2 p-1 glass rounded-2xl w-fit mx-auto mb-8"
        >
          {timeframes.map(t => (
            <button
              key={t}
              onClick={() => setActiveTimeframe(t)}
              className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                t === activeTimeframe
                  ? 'bg-primary-500 text-black shadow-glow-yellow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </motion.div>

        {/* Full Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass border-gradient rounded-3xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 text-gray-500 text-xs font-semibold uppercase tracking-wide">
            <div className="col-span-1">Rank</div>
            <div className="col-span-4">User</div>
            <div className="col-span-2 text-right">Level</div>
            <div className="col-span-2 text-right">Streak</div>
            <div className="col-span-3 text-right">Total XP</div>
          </div>

          {/* Rows */}
          {mockLeaders.map((user, idx) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.05 }}
              className={`grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 last:border-0 items-center hover:bg-white/3 transition-all ${
                user.username === 'UglyHub' ? 'bg-primary-500/5 border-l-4 border-l-primary-500' : ''
              }`}
            >
              {/* Rank */}
              <div className="col-span-1">
                {user.rank <= 3 ? (
                  <span className="text-xl">{medals[user.rank - 1]}</span>
                ) : (
                  <span className="text-gray-400 font-bold">{user.rank}</span>
                )}
              </div>

              {/* User */}
              <div className="col-span-4 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${
                  idx === 0 ? 'bg-primary-500 text-black' : 'bg-white/10 text-white'
                }`}>
                  {user.username[0].toUpperCase()}
                </div>
                <div>
                  <div className={`font-semibold text-sm ${
                    user.username === 'UglyHub' ? 'text-primary-400' : 'text-white'
                  }`}>
                    {user.username}
                    {user.username === 'UglyHub' && (
                      <span className="ml-2 text-xs text-primary-500 bg-primary-500/10 px-2 py-0.5 rounded-full">
                        You
                      </span>
                    )}
                  </div>
                  <div className="text-gray-500 text-xs">{user.wallet}</div>
                </div>
              </div>

              {/* Level */}
              <div className="col-span-2 text-right">
                <span className="glass px-2.5 py-1 rounded-lg text-sm text-white">
                  Lv. {user.level}
                </span>
              </div>

              {/* Streak */}
              <div className="col-span-2 text-right">
                <span className="text-orange-400 font-semibold text-sm">
                  🔥 {user.streak}d
                </span>
              </div>

              {/* XP */}
              <div className="col-span-3 text-right">
                <span className="font-black text-primary-500 font-mono">
                  {user.xp.toLocaleString()}
                </span>
                <span className="text-gray-500 text-xs ml-1">XP</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}