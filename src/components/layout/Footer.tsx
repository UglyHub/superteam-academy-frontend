import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PLATFORM_LINKS = [
  { href: '/courses', label: 'Courses' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profile', label: 'Profile' },
] as const;

const COMMUNITY_LINKS = [
  { href: 'https://twitter.com/SuperteamBR', label: 'Twitter' },
  { href: 'https://github.com/solanabr', label: 'GitHub' },
  { href: 'https://discord.gg/superteam', label: 'Discord' },
] as const;

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
] as const;

export function Footer() {
  return (
    <footer
      className="border-t border-white/5 bg-black/80 backdrop-blur-sm mt-auto"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" aria-label="Superteam Brasil Academy">
              <Image
                src="/images/ST-YELLOW-HORIZONTAL.png"
                alt="Superteam Brasil"
                width={140}
                height={28}
                className="h-7 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Learn Solana development through interactive courses and earn verifiable on-chain credentials.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Platform
            </h3>
            <ul className="space-y-2.5" role="list">
              {PLATFORM_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-primary-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Community
            </h3>
            <ul className="space-y-2.5" role="list">
              {COMMUNITY_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary-500 text-sm transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2.5" role="list">
              {LEGAL_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-primary-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Superteam Brasil. Built for the community.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xs">Powered by</span>
            <span className="text-primary-500 text-xs font-semibold font-mono">Solana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}