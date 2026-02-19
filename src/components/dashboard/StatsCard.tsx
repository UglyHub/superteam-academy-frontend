'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  icon: string;
  label: string;
  value: string | number;
  subtext?: string;
  variant?: 'default' | 'primary' | 'accent';
  delay?: number;
}

export function StatsCard({
  icon,
  label,
  value,
  subtext,
  variant = 'default',
  delay = 0,
}: StatsCardProps) {
  const variants = {
    default: 'glass',
    primary: 'glass-yellow',
    accent: 'glass-green',
  };

  const textColors = {
    default: 'text-white',
    primary: 'text-primary-500',
    accent: 'text-accent-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`${variants[variant]} border-gradient rounded-2xl p-6 card-hover`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{icon}</span>
      </div>
      
      <div className={`font-display text-3xl font-black ${textColors[variant]} mb-1`}>
        {value}
      </div>
      
      <div className="text-gray-400 text-sm font-medium mb-1">
        {label}
      </div>
      
      {subtext && (
        <div className="text-gray-500 text-xs">
          {subtext}
        </div>
      )}
    </motion.div>
  );
}