import type {
  LearningProgressService,
  CourseProgress,
  LessonProgress,
  XPData,
  StreakData,
  LeaderboardEntry,
  Credential,
  LeaderboardTimeframe,
} from '@/types';
import { calculateXPData } from '@/types';
import type { PublicKey } from '@solana/web3.js';

// ─── Local MVP Implementation ─────────────────────────────────────────────────
// Reads: localStorage for progress (swap out for Supabase later)
// Writes: localStorage (swap out for on-chain later)

export class LearningProgressLocalService implements LearningProgressService {

  async getProgress(userId: string): Promise<CourseProgress[]> {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem(`progress_${userId}`);
    return raw ? (JSON.parse(raw) as CourseProgress[]) : [];
  }

  async completeLesson(
    userId: string,
    courseId: string,
    lessonId: string
  ): Promise<LessonProgress> {
    const progress = await this.getProgress(userId);
    let courseProgress = progress.find(p => p.courseId === courseId);

    if (!courseProgress) {
      courseProgress = {
        courseId,
        enrolledAt: new Date(),
        lessonsCompleted: [],
        percentComplete: 0,
      };
      progress.push(courseProgress);
    }

    if (!courseProgress.lessonsCompleted.includes(lessonId)) {
      courseProgress.lessonsCompleted.push(lessonId);
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem(`progress_${userId}`, JSON.stringify(progress));
    }

    const lessonProgress: LessonProgress = {
      lessonId,
      courseId,
      completed: true,
      completedAt: new Date(),
      xpEarned: 50,
    };

    return lessonProgress;
  }

  async getXP(wallet: PublicKey): Promise<XPData> {
    // TODO: Replace with real Token-2022 balance read
    const mockXP = 12450;
    return calculateXPData(mockXP);
  }

  async getStreak(userId: string): Promise<StreakData> {
    // TODO: Replace with Supabase activity log
    const calendarDays = Array.from({ length: 35 }, (_, i) =>
      [0,1,2,3,4,6,7,8,10,14,15,16,17,18,20,21,22,24,25,28,29,30,31,32,33,34].includes(i)
    );
    return {
      current: 7,
      longest: 30,
      lastActivityDate: new Date(),
      calendarDays,
    };
  }

  async getLeaderboard(timeframe: LeaderboardTimeframe): Promise<LeaderboardEntry[]> {
    // TODO: Replace with Helius DAS API query
    void timeframe;
    return [
      { rank: 1, walletAddress: '7xKX...asU', username: 'sol_wizard', xp: 45200, level: 21, streak: 45, coursesCompleted: 12 },
      { rank: 2, walletAddress: '8xKX...asV', username: 'anchor_dev', xp: 38100, level: 19, streak: 30, coursesCompleted: 10 },
      { rank: 3, walletAddress: '9xKX...asW', username: 'nft_builder', xp: 31400, level: 17, streak: 22, coursesCompleted: 8 },
      { rank: 4, walletAddress: 'AxKX...asX', username: 'defi_coder', xp: 28600, level: 16, streak: 15, coursesCompleted: 7 },
      { rank: 5, walletAddress: 'BxKX...asY', username: 'UglyHub', xp: 25100, level: 15, streak: 12, coursesCompleted: 6 },
    ];
  }

  async getCredentials(wallet: PublicKey): Promise<Credential[]> {
    // TODO: Replace with Light Protocol Photon API
    void wallet;
    return [
      {
        id: 'cred_1',
        courseId: '1',
        courseTitle: 'Solana Fundamentals',
        recipientWallet: wallet.toString(),
        issuedAt: new Date('2026-01-15'),
        xpEarned: 5000,
        level: 3,
        txHash: 'abc123def456',
      },
    ];
  }
}

// Singleton instance
export const learningService = new LearningProgressLocalService();