import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CertificatePage({ params }: { params: { id: string } }) {
  const mock = {
    recipient: 'UglyHub',
    wallet: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    course: 'Solana Fundamentals',
    track: 'Foundation Track',
    level: 3, xpEarned: 5000, coursesCompleted: 4,
    issuedAt: 'February 10, 2026',
    txHash: 'abc123def456ghi789jkl012',
  };

  return (
    <div className="min-h-screen bg-black px-4 py-16 flex flex-col items-center">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary-500/8 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary-500 text-sm font-semibold tracking-widest uppercase mb-3">Verified On-Chain</p>
          <h1 className="font-display text-5xl font-black text-white">Certificate of Completion</h1>
        </div>

        {/* Certificate */}
        <div className="relative glass-yellow border border-primary-500/30 rounded-3xl p-12 text-center animate-pulse-glow mb-8">
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary-500/60 rounded-tl-xl" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary-500/60 rounded-tr-xl" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary-500/60 rounded-bl-xl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary-500/60 rounded-br-xl" />

          <div className="mb-8">
            <Image src="/images/ST-YELLOW-HORIZONTAL.png" alt="Superteam Brasil" width={180} height={40} className="mx-auto" />
          </div>

          <p className="text-gray-400 text-lg mb-2">This certifies that</p>
          <h2 className="font-display text-5xl font-black gradient-text glow-yellow mb-2">{mock.recipient}</h2>
          <p className="text-gray-500 font-mono text-sm mb-8">{mock.wallet.slice(0, 20)}...{mock.wallet.slice(-8)}</p>

          <p className="text-gray-300 text-xl mb-2">has successfully completed</p>
          <h3 className="font-display text-4xl font-bold text-white mb-2">{mock.course}</h3>
          <p className="text-primary-500 font-semibold text-lg mb-12">{mock.track}</p>

          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { label: 'Level Achieved', value: `Level ${mock.level}`, icon: '🎯' },
              { label: 'XP Earned', value: `${mock.xpEarned.toLocaleString()} XP`, icon: '⚡' },
              { label: 'Courses Done', value: String(mock.coursesCompleted), icon: '📚' },
            ].map(stat => (
              <div key={stat.label} className="glass rounded-2xl p-4">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="font-display text-2xl font-black text-primary-500">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-primary-500/20 pt-8">
            <p className="text-gray-500 text-sm">Issued on {mock.issuedAt}</p>
          </div>
        </div>

        {/* Verify */}
        <div className="glass border-gradient rounded-2xl p-6 mb-6">
          <h3 className="font-display text-xl font-bold text-white mb-4">✓ On-Chain Verification</h3>
          <div className="flex items-center gap-3 bg-white/3 rounded-xl p-4">
            <div className="flex-1">
              <p className="text-gray-400 text-sm mb-1">Transaction Hash</p>
              <p className="text-white font-mono text-sm break-all">{mock.txHash}</p>
            </div>
            <a href={`https://explorer.solana.com/tx/${mock.txHash}?cluster=devnet`}
              target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 glass border border-white/10 hover:border-primary-500/40 rounded-xl text-white text-sm font-semibold transition-all whitespace-nowrap">
              Explorer ↗
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 py-3 bg-primary-500 hover:bg-primary-400 text-black font-bold rounded-xl transition-all hover:scale-105">
            Share Certificate
          </button>
          <Link href="/profile" className="flex-1">
            <button className="w-full py-3 glass border border-white/10 text-white font-bold rounded-xl transition-all hover:bg-white/5">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}