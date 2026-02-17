import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl, PublicKey } from '@solana/web3.js';

// Network Configuration
export const NETWORK = (process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork) || WalletAdapterNetwork.Devnet;
export const RPC_ENDPOINT = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl(NETWORK);

// Program IDs (placeholder - update when actual program is deployed)
export const ACADEMY_PROGRAM_ID = new PublicKey('3YchgRgR65gdRqgTZTM5qQXqtTZn5Kt2i6FPnZVu34Qb');

// XP Token (placeholder - update when token is created)
export const XP_MINT_ADDRESS = new PublicKey('11111111111111111111111111111111'); // Placeholder

// Gamification Constants
export const XP_PER_LEVEL = 100; // XP needed per level
export const calculateLevel = (xp: number): number => Math.floor(Math.sqrt(xp / XP_PER_LEVEL));

// XP Rewards
export const XP_REWARDS = {
  lessonEasy: 10,
  lessonMedium: 25,
  lessonHard: 50,
  challengeEasy: 25,
  challengeMedium: 50,
  challengeHard: 100,
  courseComplete: 500,
  dailyStreak: 10,
  firstOfDay: 25,
};

// Routes
export const ROUTES = {
  home: '/',
  courses: '/courses',
  courseDetail: (slug: string) => `/courses/${slug}`,
  lesson: (courseSlug: string, lessonId: string) => `/courses/${courseSlug}/lessons/${lessonId}`,
  dashboard: '/dashboard',
  profile: '/profile',
  userProfile: (username: string) => `/profile/${username}`,
  leaderboard: '/leaderboard',
  settings: '/settings',
  certificate: (id: string) => `/certificates/${id}`,
};