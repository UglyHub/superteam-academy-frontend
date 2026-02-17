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
            content: '# What is Solana?\n\nSolana is a high-performance blockchain supporting builders around the world.',
            xpReward: 10,
          },
          {
            id: 'l2',
            title: 'Setting Up Your Environment',
            type: 'content',
            content: '# Setting Up Your Environment\n\nLet\'s get your development environment ready.',
            xpReward: 10,
          },
          {
            id: 'l3',
            title: 'Your First Transaction',
            type: 'challenge',
            xpReward: 50,
            challenge: {
              prompt: 'Create a function that returns a Solana PublicKey from a string address.',
              starterCode: 'import { PublicKey } from "@solana/web3.js";\n\nfunction getPublicKey(address: string): PublicKey {\n  // Your code here\n}',
              solution: 'import { PublicKey } from "@solana/web3.js";\n\nfunction getPublicKey(address: string): PublicKey {\n  return new PublicKey(address);\n}',
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
            content: '# Introduction to Anchor\n\nAnchor is a framework for building Solana programs.',
            xpReward: 25,
          },
          {
            id: 'l2',
            title: 'Your First Anchor Program',
            type: 'challenge',
            xpReward: 75,
            challenge: {
              prompt: 'Write an Anchor program instruction that stores a number in an account.',
              starterCode: 'use anchor_lang::prelude::*;\n\n// Your code here',
              solution: '// Solution code',
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
            content: '# NFTs on Solana\n\nLearn how NFTs work on Solana.',
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
            content: '# DeFi on Solana\n\nLearn how to build DeFi protocols.',
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