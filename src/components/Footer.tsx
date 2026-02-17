import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-dark-tertiary border-t border-dark-surface mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary-500 font-bold text-lg mb-4">
              Superteam Academy
            </h3>
            <p className="text-gray-400 text-sm">
              Learn Solana development through interactive courses and earn credentials on-chain.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-primary-500 text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-gray-400 hover:text-primary-500 text-sm">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-primary-500 text-sm">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com/SuperteamBR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 text-sm"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/solanabr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 text-sm"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary-500 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary-500 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-surface mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Superteam Brasil. Built for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}