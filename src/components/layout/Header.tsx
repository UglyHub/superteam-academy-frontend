'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useTheme } from '@/components/providers/ThemeProvider';

const NAV_LINKS = [
  { href: '/courses', label: 'Courses' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profile', label: 'Profile' },
] as const;

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Superteam Brasil Academy - Home"
          className="flex items-center shrink-0"
          onClick={closeMenu}
        >
          <Image
            src="/images/ST-YELLOW-HORIZONTAL.png"
            alt="Superteam Brasil"
            width={152}
            height={32}
            className="h-8 w-auto hover:opacity-80 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'text-primary-500 bg-primary-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* XP Badge - desktop only */}
          <div
            className="hidden lg:flex items-center gap-2 glass-yellow px-3 py-1.5 rounded-xl"
            aria-label="Your XP"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-primary-500 font-semibold text-sm font-mono">
              12,450 XP
            </span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="hidden md:flex w-9 h-9 items-center justify-center glass rounded-xl hover:bg-white/5 transition-all text-gray-400 hover:text-white"
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Wallet Button */}
          <WalletMultiButton
            style={{
              background: '#ffd23f',
              color: '#000000',
              fontFamily: 'var(--font-archivo)',
              fontWeight: '700',
              fontSize: '14px',
              borderRadius: '12px',
              padding: '8px 16px',
              height: '38px',
              border: 'none',
              cursor: 'pointer',
            }}
          />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 glass rounded-xl"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="md:hidden glass border-t border-white/5 px-4 py-3 space-y-1"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                pathname === link.href
                  ? 'text-primary-500 bg-primary-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-4 py-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-primary-500 font-semibold text-sm font-mono">
              12,450 XP
            </span>
          </div>
        </nav>
      )}
    </header>
  );
}