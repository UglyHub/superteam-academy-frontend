export interface Lesson {
  id: string;
  title: string;
  type: 'content' | 'challenge';
  content?: string;
  xpReward: number;
  challenge?: {
    prompt: string;
    starterCode: string;
    solution: string;
    language: 'typescript' | 'rust' | 'json';
    testCases: { input: string; expectedOutput: string }[];
  };
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  xpReward: number;
  trackId: number;
  modules: Module[];
}

export const mockCourses: Course[] = [
  {
    id: '1',
    slug: 'solana-fundamentals',
    title: 'Solana Fundamentals',
    description: 'Learn the basics of Solana blockchain development. Perfect for beginners starting their Web3 journey.',
    thumbnail: 'https://placehold.co/600x400/1b231d/ffd23f?text=Solana+Fundamentals',
    difficulty: 'beginner',
    duration: 180,
    xpReward: 500,
    trackId: 1,
    modules: [
      {
        id: 'm1',
        title: 'Introduction to Solana',
        lessons: [
          {
            id: 'l1',
            title: 'What is Solana?',
            type: 'content',
            content: '<h2>What is Solana?</h2><p>Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale today.</p><p>With Solana, you can build applications that take advantage of:</p><ul><li>Fast transaction speeds (400ms block times)</li><li>Low transaction costs (less than $0.01)</li><li>High throughput (65,000+ TPS)</li><li>Energy efficiency</li></ul>',
            xpReward: 10,
          },
          {
            id: 'l2',
            title: 'Setting Up Your Environment',
            type: 'content',
            content: '<h2>Setting Up Your Development Environment</h2><p>Let\'s get your Solana development environment ready:</p><ol><li>Install Node.js (v18+)</li><li>Install Solana CLI</li><li>Create a test wallet</li><li>Get devnet SOL from faucet</li></ol><p>By the end of this lesson, you\'ll be ready to write your first Solana program!</p>',
            xpReward: 10,
          },
          {
            id: 'l3',
            title: 'Your First Transaction',
            type: 'challenge',
            xpReward: 50,
            challenge: {
              prompt: 'Create a function that returns a Solana PublicKey from a string address.\n\nThe PublicKey class is already imported for you. Your task is to:\n1. Take a string address as input\n2. Create and return a new PublicKey instance\n\nExample:\nInput: "11111111111111111111111111111111"\nOutput: PublicKey instance',
              starterCode: 'import { PublicKey } from "@solana/web3.js";\n\nfunction getPublicKey(address: string): PublicKey {\n  // Your code here\n  \n}',
              solution: 'import { PublicKey } from "@solana/web3.js";\n\nfunction getPublicKey(address: string): PublicKey {\n  return new PublicKey(address);\n}',
              language: 'typescript',
              testCases: [
                { input: '11111111111111111111111111111111', expectedOutput: 'PublicKey' },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: '2',
    slug: 'anchor-framework',
    title: 'Anchor Framework Mastery',
    description: 'Build production-ready Solana programs with the Anchor framework. Learn PDAs, CPIs, and more.',
    thumbnail: 'https://placehold.co/600x400/1b231d/008c4c?text=Anchor+Framework',
    difficulty: 'intermediate',
    duration: 300,
    xpReward: 1000,
    trackId: 1,
    modules: [
      {
        id: 'm1',
        title: 'Anchor Basics',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to Anchor',
            type: 'content',
            content: '<h2>Introduction to Anchor</h2><p>Anchor is a framework for Solana that makes it easier to build secure, reliable programs.</p>',
            xpReward: 25,
          },
          {
            id: 'l2',
            title: 'Your First Anchor Program',
            type: 'challenge',
            xpReward: 75,
            challenge: {
              prompt: 'Write an Anchor program instruction that stores a number in an account.\n\nYour task:\n1. Define a context struct\n2. Create an instruction that takes a number\n3. Store it in the account data',
              starterCode: 'use anchor_lang::prelude::*;\n\n// Define your program ID\ndeclare_id!("Fg6PaFpoGXkYsidMpWxTWL7cyuCyofV1uC7w4N6wCR9T");\n\n// Your code here\n',
              solution: 'use anchor_lang::prelude::*;\n\ndeclare_id!("Fg6PaFpoGXkYsidMpWxTWL7cyuCyofV1uC7w4N6wCR9T");\n\n#[program]\npub mod my_program {\n    use super::*;\n    pub fn store_number(ctx: Context<StoreNumber>, number: u64) -> Result<()> {\n        ctx.accounts.data_account.number = number;\n        Ok(())\n    }\n}\n\n#[derive(Accounts)]\npub struct StoreNumber<\'info> {\n    #[account(mut)]\n    pub data_account: Account<\'info, DataAccount>,\n}\n\n#[account]\npub struct DataAccount {\n    pub number: u64,\n}',
              language: 'rust',
              testCases: [
                { input: 'store(42)', expectedOutput: '42' },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: '3',
    slug: 'solana-nfts',
    title: 'Solana NFTs & Metaplex',
    description: 'Create, mint, and manage NFTs on Solana using the Metaplex standard.',
    thumbnail: 'https://placehold.co/600x400/2f6b3f/ffd23f?text=NFTs+%26+Metaplex',
    difficulty: 'intermediate',
    duration: 240,
    xpReward: 800,
    trackId: 2,
    modules: [
      {
        id: 'm1',
        title: 'NFT Basics on Solana',
        lessons: [
          {
            id: 'l1',
            title: 'What are NFTs on Solana?',
            type: 'content',
            content: '<h2>NFTs on Solana</h2><p>Learn how NFTs work on Solana and why they\'re different from Ethereum.</p>',
            xpReward: 20,
          },
        ],
      },
    ],
  },
  {
    id: '4',
    slug: 'defi-on-solana',
    title: 'DeFi Development on Solana',
    description: 'Build decentralized finance protocols including AMMs and lending platforms.',
    thumbnail: 'https://placehold.co/600x400/000000/ffd23f?text=DeFi+on+Solana',
    difficulty: 'advanced',
    duration: 420,
    xpReward: 2000,
    trackId: 2,
    modules: [
      {
        id: 'm1',
        title: 'DeFi Fundamentals',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to DeFi',
            type: 'content',
            content: '<h2>DeFi on Solana</h2><p>Learn how to build DeFi protocols on Solana.</p>',
            xpReward: 30,
          },
        ],
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return mockCourses.find(course => course.slug === slug);
}

export function getCourseById(id: string): Course | undefined {
  return mockCourses.find(course => course.id === id);
}