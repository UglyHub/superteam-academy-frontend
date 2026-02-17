import { PublicKey } from '@solana/web3.js';

// User & Profile
export interface User {
  id: string;
  walletAddress: string;
  username?: string;
  bio?: string;
  avatar?: string;
  createdAt: Date;
}

// Course Types
export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // minutes
  xpReward: number;
  trackId: number;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'content' | 'challenge';
  content?: string; // Markdown for content lessons
  challenge?: Challenge; // For challenge lessons
  xpReward: number;
}

export interface Challenge {
  prompt: string;
  starterCode: string;
  solution: string;
  testCases: TestCase[];
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  hidden?: boolean;
}

// Progress & Gamification
export interface Progress {
  userId: string;
  courseId: string;
  completedLessons: number[];
  currentLesson: number;
  startedAt: Date;
  completedAt?: Date;
}

export interface Credential {
  learner: PublicKey;
  trackId: number;
  currentLevel: number;
  coursesCompleted: number;
  totalXpEarned: number;
  metadataUri: string;
}

export interface LeaderboardEntry {
  rank: number;
  walletAddress: string;
  username?: string;
  xp: number;
  level: number;
  streak: number;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: Date;
  calendar: { date: Date; hasActivity: boolean }[];
}

// Service Interfaces
export interface LearningProgressService {
  // Reads (from blockchain)
  getXP(wallet: PublicKey): Promise<number>;
  getLevel(wallet: PublicKey): Promise<number>;
  getCredentials(wallet: PublicKey): Promise<Credential[]>;
  getLeaderboard(timeframe?: 'weekly' | 'monthly' | 'alltime'): Promise<LeaderboardEntry[]>;
  getStreak(wallet: PublicKey): Promise<StreakData>;
  
  // Writes (stubbed)
  completeLesson(userId: string, courseId: string, lessonIndex: number): Promise<void>;
  enroll(userId: string, courseId: string): Promise<void>;
  claimAchievement(userId: string, achievementId: string): Promise<void>;
}