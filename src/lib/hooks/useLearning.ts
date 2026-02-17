'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { learningService } from '@/lib/services/learning';
import type { XPData, StreakData, CourseProgress } from '@/types';
import { calculateXPData } from '@/types';

export function useLearning() {
  const { publicKey } = useWallet();
  const userId = publicKey?.toString() ?? 'guest';

  const [xpData, setXpData] = useState<XPData>(calculateXPData(0));
  const [streak, setStreak] = useState<StreakData | null>(null);
  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [streakData, progressData] = await Promise.all([
          learningService.getStreak(userId),
          learningService.getProgress(userId),
        ]);

        if (publicKey) {
          const xp = await learningService.getXP(publicKey);
          setXpData(xp);
        }

        setStreak(streakData);
        setProgress(progressData);
      } catch (err) {
        console.error('Failed to load learning data', err);
      } finally {
        setLoading(false);
      }
    }

    void load();
  }, [publicKey, userId]);

  const completeLesson = async (courseId: string, lessonId: string) => {
    const result = await learningService.completeLesson(userId, courseId, lessonId);
    const updated = await learningService.getProgress(userId);
    setProgress(updated);
    return result;
  };

  return { xpData, streak, progress, loading, completeLesson };
}