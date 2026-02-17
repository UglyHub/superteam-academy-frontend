'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { WalletButton } from './wallet/WalletButton';

const navLinks = [
  { href: '/courses', label: 'Courses' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profile', label: 'Profile' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/ST-YELLOW-HORIZONTAL.png"
            alt="Superteam Brasil"
            width={160}
            height={32}
            className="h-8 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                pathname === link.href
                  ? 'text-primary-500 bg-primary-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 glass-yellow px-3 py-1.5 rounded-xl">
            <span className="text-primary-500 font-bold text-sm">⚡ 12,450 XP</span>
          </div>
          <WalletButton />
        </div>
      </div>
    </header>
  );
}