'use client';

import React, { useState } from 'react';

export default function SettingsPage() {
  const [username, setUsername] = useState('UglyHub');
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [streakReminder, setStreakReminder] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('Account');

  const sections = ['Account', 'Notifications', 'Privacy', 'Language'];

  return (
    <div className="min-h-screen bg-black px-4 py-12">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-12">
          <h1 className="font-display text-5xl font-black text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account and preferences</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="glass rounded-2xl p-2 space-y-1">
              {sections.map(s => (
                <button key={s} onClick={() => setActiveSection(s)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all ${activeSection === s ? 'bg-primary-500 text-black font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            {activeSection === 'Account' && (
              <div className="glass border-gradient rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-white mb-6">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-primary-500/60 rounded-xl px-4 py-3 text-white outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Bio</label>
                    <textarea placeholder="Tell the community about yourself..." rows={3}
                      className="w-full bg-white/5 border border-white/10 focus:border-primary-500/60 rounded-xl px-4 py-3 text-white outline-none transition-all resize-none placeholder:text-gray-600" />
                  </div>
                  <button className="px-6 py-3 bg-primary-500 hover:bg-primary-400 text-black font-bold rounded-xl transition-all hover:scale-105">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeSection === 'Notifications' && (
              <div className="glass border-gradient rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-white mb-6">Notifications</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Email Notifications', desc: 'Receive updates about your courses', state: emailNotifs, toggle: setEmailNotifs },
                    { label: 'Streak Reminders', desc: 'Daily reminders to maintain your streak', state: streakReminder, toggle: setStreakReminder },
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between p-4 bg-white/3 rounded-xl">
                      <div>
                        <p className="text-white font-medium">{item.label}</p>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                      <button onClick={() => item.toggle(!item.state)}
                        className={`w-12 h-6 rounded-full transition-all duration-300 relative ${item.state ? 'bg-primary-500' : 'bg-white/10'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${item.state ? 'left-7' : 'left-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'Privacy' && (
              <div className="glass border-gradient rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-white mb-6">Privacy</h2>
                <div className="flex items-center justify-between p-4 bg-white/3 rounded-xl">
                  <div>
                    <p className="text-white font-medium">Public Profile</p>
                    <p className="text-gray-500 text-sm">Allow others to see your profile</p>
                  </div>
                  <button onClick={() => setPublicProfile(!publicProfile)}
                    className={`w-12 h-6 rounded-full transition-all duration-300 relative ${publicProfile ? 'bg-primary-500' : 'bg-white/10'}`}>
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${publicProfile ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              </div>
            )}

            {activeSection === 'Language' && (
              <div className="glass border-gradient rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-white mb-6">Language</h2>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { code: 'en', label: 'English', flag: '🇺🇸' },
                    { code: 'pt', label: 'Português', flag: '🇧🇷' },
                    { code: 'es', label: 'Español', flag: '🇪🇸' },
                  ].map(lang => (
                    <button key={lang.code} onClick={() => setLanguage(lang.code)}
                      className={`p-4 rounded-xl text-center transition-all card-hover ${language === lang.code ? 'bg-primary-500/20 border-2 border-primary-500 text-white' : 'glass border border-white/10 text-gray-400 hover:text-white'}`}>
                      <div className="text-3xl mb-2">{lang.flag}</div>
                      <div className="font-semibold text-sm">{lang.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}