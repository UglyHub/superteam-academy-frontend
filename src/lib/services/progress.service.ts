import { PublicKey, Connection } from '@solana/web3.js';
import { getAssociatedTokenAddress, TOKEN_2022_PROGRAM_ID } from '@solana/spl-token';
import { RPC_ENDPOINT, XP_MINT_ADDRESS, calculateLevel } from '@/lib/constants';
import type { Credential, LeaderboardEntry, StreakData, LearningProgressService } from '@/lib/types';

export class MVPProgressService implements LearningProgressService {
  private connection: Connection;

  constructor() {
    this.connection = new Connection(RPC_ENDPOINT, 'confirmed');
  }

  // ============================================
  // REAL BLOCKCHAIN READS
  // ============================================

  async getXP(wallet: PublicKey): Promise<number> {
    try {
      const ata = await getAssociatedTokenAddress(
        XP_MINT_ADDRESS,
        wallet,
        false,
        TOKEN_2022_PROGRAM_ID
      );

      const balance = await this.connection.getTokenAccountBalance(ata);
      return Number(balance.value.amount);
    } catch (error) {
      console.log('No XP token account found for wallet');
      return 0;
    }
  }

  async getLevel(wallet: PublicKey): Promise<number> {
    const xp = await this.getXP(wallet);
    return calculateLevel(xp);
  }

  async getCredentials(wallet: PublicKey): Promise<Credential[]> {
    // TODO: Implement with Helius DAS API or Light Protocol Photon
    // For now, return mock data
    return [];
  }

  async getLeaderboard(timeframe: 'weekly' | 'monthly' | 'alltime' = 'alltime'): Promise<LeaderboardEntry[]> {
    // TODO: Implement with Helius DAS API to query all XP token holders
    // For now, return mock data
    return [
      {
        rank: 1,
        walletAddress: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
        username: 'Alice',
        xp: 15000,
        level: 12,
        streak: 30,
      },
      {
        rank: 2,
        walletAddress: '8xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsV',
        username: 'Bob',
        xp: 12000,
        level: 10,
        streak: 15,
      },
    ];
  }

  async getStreak(wallet: PublicKey): Promise<StreakData> {
    // TODO: Calculate from Supabase activity log
    // For now, return mock data
    return {
      currentStreak: 7,
      longestStreak: 30,
      lastActivityDate: new Date(),
      calendar: [],
    };
  }

  // ============================================
  // STUBBED WRITES (Supabase)
  // ============================================

  async completeLesson(userId: string, courseId: string, lessonIndex: number): Promise<void> {
    // TODO: Implement with Supabase
    console.log(`Lesson completed: ${userId} - ${courseId} - ${lessonIndex}`);
    
    // For now, store in localStorage
    const key = `lesson_${userId}_${courseId}_${lessonIndex}`;
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, 'true');
    }
  }

  async enroll(userId: string, courseId: string): Promise<void> {
    // TODO: Implement with Supabase
    console.log(`Enrolled: ${userId} in ${courseId}`);
    
    // For now, store in localStorage
    const key = `enrollment_${userId}_${courseId}`;
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, new Date().toISOString());
    }
  }

  async claimAchievement(userId: string, achievementId: string): Promise<void> {
    // TODO: Implement with Supabase
    console.log(`Achievement claimed: ${userId} - ${achievementId}`);
  }
}

// Export singleton instance
export const progressService = new MVPProgressService();