import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Learn Solana.</span>
            <br />
            <span className="text-primary-500">Earn Credentials.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Interactive courses, coding challenges, and on-chain achievements. 
            Join the next generation of Solana developers.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href={ROUTES.courses}>
              <Button size="lg">
                Start Learning
              </Button>
            </Link>
            
            <Link href={ROUTES.leaderboard}>
              <Button variant="outline" size="lg">
                View Leaderboard
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">1000+</div>
              <div className="text-gray-400">Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">50+</div>
              <div className="text-gray-400">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">500K</div>
              <div className="text-gray-400">XP Awarded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why <span className="text-primary-500">Superteam Academy</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-dark-secondary border border-dark-surface rounded-xl p-6 hover:border-primary-500 transition-all">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Interactive Learning
              </h3>
              <p className="text-gray-400">
                Learn by doing with hands-on coding challenges and real Solana programs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-dark-secondary border border-dark-surface rounded-xl p-6 hover:border-accent-500 transition-all">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Earn Credentials
              </h3>
              <p className="text-gray-400">
                Get verifiable on-chain credentials that prove your skills.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-dark-secondary border border-dark-surface rounded-xl p-6 hover:border-primary-500 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Build Streaks
              </h3>
              <p className="text-gray-400">
                Stay motivated with daily streaks and XP rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-tertiary py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers building on Solana
          </p>
          <Link href={ROUTES.courses}>
            <Button size="lg">
              Browse Courses
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}