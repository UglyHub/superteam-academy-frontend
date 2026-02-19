'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { ActivityItem } from '@/types';

interface ActivityFeedProps {
  activities: ActivityItem[];
  maxItems?: number;
}

export function ActivityFeed({ activities, maxItems = 5 }: ActivityFeedProps) {
  const displayActivities = activities.slice(0, maxItems);

  return (
    <div className="space-y-1">
      {displayActivities.map((activity, idx) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="glass rounded-xl p-4 flex items-start gap-3 card-hover group"
        >
          {/* Icon */}
          <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
            {activity.icon}
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium leading-snug">
              {activity.text}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {formatTime(activity.timestamp)}
            </p>
          </div>

          {/* XP Badge */}
          <div className="shrink-0 glass-green px-2.5 py-1 rounded-lg">
            <span className="text-accent-500 font-bold text-xs">
              +{activity.xp}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function formatTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return 'Yesterday';
  return `${days}d ago`;
}