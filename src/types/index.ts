import { PublicKey } from '@solana/web3.js';

// ─── User ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  walletAddress: string;
  username: string;
  bio?: string;
  avatarUrl?: string;
  createdAt: Date;
}

// ─── XP & Levels ─────────────────────────────────────────────────────────────

export interface XPData {
  total: number;
  level: number;
  currentLevelXP: number;
  nextLevelXP: number;
  progressPercent: number;
}

export function calculateLevel(xp: number): number {
  return Math.floor(Math.sqrt(xp / 100));
}

export function calculateXPData(totalXP: number): XPData {
  const level = calculateLevel(totalXP);
  const currentLevelXP = level * level * 100;
  const nextLevelXP = (level + 1) * (level + 1) * 100;
  const progressPercent = ((totalXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
  return { total: totalXP, level, currentLevelXP, nextLevelXP, progressPercent };
}

// ─── Streak ───────────────────────────────────────────────────────────────────

export interface StreakData {
  current: number;
  longest: number;
  lastActivityDate: Date;
  calendarDays: boolean[];
}

// ─── Courses & Lessons ────────────────────────────────────────────────────────

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type LessonType = 'content' | 'challenge' | 'quiz';

export interface TestCase {
  input: string;
  expectedOutput: string;
  hidden?: boolean;
  description?: string;
}

export interface Challenge {
  prompt: string;
  starterCode: string;
  solution: string;
  language: 'typescript' | 'rust' | 'json';
  testCases: TestCase[];
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  content?: string;
  xpReward: number;
  challenge?: Challenge;
  estimatedMinutes?: number;
}

export interface Module {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  difficulty: Difficulty;
  duration: number;
  xpReward: number;
  trackId: number;
  modules: Module[];
  prerequisites?: string[];
  tags?: string[];
}

// ─── Progress ─────────────────────────────────────────────────────────────────

export interface LessonProgress {
  lessonId: string;
  courseId: string;
  completed: boolean;
  completedAt?: Date;
  xpEarned: number;
}

export interface CourseProgress {
  courseId: string;
  enrolledAt: Date;
  completedAt?: Date;
  lessonsCompleted: string[];
  percentComplete: number;
}

// ─── Credentials ──────────────────────────────────────────────────────────────

export interface Credential {
  id: string;
  courseId: string;
  courseTitle: string;
  recipientWallet: string;
  issuedAt: Date;
  xpEarned: number;
  level: number;
  txHash?: string;
  mintAddress?: string;
}

// ─── Leaderboard ─────────────────────────────────────────────────────────────

export interface LeaderboardEntry {
  rank: number;
  walletAddress: string;
  username: string;
  xp: number;
  level: number;
  streak: number;
  coursesCompleted: number;
}

export type LeaderboardTimeframe = 'weekly' | 'monthly' | 'alltime';

// ─── Service Interfaces ───────────────────────────────────────────────────────

export interface LearningProgressService {
  getProgress(userId: string): Promise<CourseProgress[]>;
  completeLesson(userId: string, courseId: string, lessonId: string): Promise<LessonProgress>;
  getXP(wallet: PublicKey): Promise<XPData>;
  getStreak(userId: string): Promise<StreakData>;
  getLeaderboard(timeframe: LeaderboardTimeframe): Promise<LeaderboardEntry[]>;
  getCredentials(wallet: PublicKey): Promise<Credential[]>;
}

// ─── Activity ─────────────────────────────────────────────────────────────────

export interface ActivityItem {
  id: string;
  type: 'lesson_complete' | 'course_complete' | 'streak_bonus' | 'credential_earned' | 'enrolled';
  text: string;
  xp: number;
  timestamp: Date;
  icon: string;
}