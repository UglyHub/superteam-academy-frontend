import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-500/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,210,63,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,210,63,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 glass-yellow rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-primary-400 text-sm font-medium">Superteam Brasil Learning Platform</span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
            <span className="block text-white">Learn Solana.</span>
            <span className="block gradient-text glow-yellow mt-2">Earn Credentials.</span>
            <span className="block text-white/50 text-5xl md:text-6xl mt-4 font-light">Build the Future.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Interactive courses, coding challenges, and verifiable on-chain achievements.
            Join the next generation of Solana developers.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-20">
            <Link href="/courses">
              <button className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-400 text-black font-bold text-lg rounded-xl transition-all duration-300 animate-pulse-glow hover:scale-105">
                Start Learning Free
              </button>
            </Link>
            <Link href="/leaderboard">
              <button className="px-8 py-4 glass border-gradient text-white font-bold text-lg rounded-xl hover:bg-white/5 transition-all hover:scale-105">
                View Leaderboard →
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { number: '1,200+', label: 'Active Learners', color: 'text-primary-500' },
              { number: '50+', label: 'Expert Courses', color: 'text-accent-500' },
              { number: '2.5M+', label: 'XP Awarded', color: 'text-primary-500' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 border-gradient card-hover">
                <div className={`font-display text-4xl font-black ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <p className="text-primary-500 text-sm font-semibold tracking-widest uppercase mb-4">Why Superteam Academy</p>
            <h2 className="font-display text-5xl md:text-6xl font-black text-white">
              Built for <span className="gradient-text">Serious Builders</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎓', title: 'Interactive Learning', desc: 'Learn by doing with hands-on coding challenges and real Solana programs on Devnet.', border: 'hover:border-primary-500/60' },
              { icon: '⛓️', title: 'On-Chain Credentials', desc: 'Every certificate is a verifiable ZK-compressed credential on Solana. Forever.', border: 'hover:border-accent-500/60' },
              { icon: '🔥', title: 'Gamified Progress', desc: 'Earn XP, build streaks, unlock achievements and climb the leaderboard.', border: 'hover:border-primary-500/60' },
            ].map((f) => (
              <div key={f.title} className={`glass rounded-3xl p-8 border border-white/5 ${f.border} transition-all duration-500 card-hover`}>
                <div className="text-5xl mb-6">{f.icon}</div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,210,63,0.08) 0%, transparent 60%)' }} />
        <div className="container mx-auto max-w-4xl relative text-center">
          <h2 className="font-display text-6xl md:text-7xl font-black text-white mb-6">
            Ready to Build <br /><span className="gradient-text">On Solana?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-10">Join 1,200+ developers on Superteam Academy</p>
          <Link href="/courses">
            <button className="px-10 py-5 bg-primary-500 hover:bg-primary-400 text-black font-black text-xl rounded-xl transition-all hover:scale-105 animate-pulse-glow">
              Start For Free Today →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}