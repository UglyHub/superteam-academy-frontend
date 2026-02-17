import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WalletButton } from './wallet/WalletButton';
import { ROUTES } from '@/lib/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark-primary/95 backdrop-blur-sm border-b border-dark-surface">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={ROUTES.home} className="flex items-center">
          <Image
            src="/images/ST-YELLOW-HORIZONTAL.png"
            alt="Superteam Brasil"
            width={180}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href={ROUTES.courses}
            className="text-white hover:text-primary-500 transition-colors font-medium"
          >
            Courses
          </Link>
          <Link
            href={ROUTES.leaderboard}
            className="text-white hover:text-primary-500 transition-colors font-medium"
          >
            Leaderboard
          </Link>
          <Link
            href={ROUTES.dashboard}
            className="text-white hover:text-primary-500 transition-colors font-medium"
          >
            Dashboard
          </Link>
        </nav>

        {/* Wallet Button */}
        <WalletButton />
      </div>
    </header>
  );
}