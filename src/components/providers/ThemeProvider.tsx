'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => void 0,
});

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Read from localStorage during initialization, not in an effect
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
    }
    return defaultTheme;
  });

  useEffect(() => {
    // Only sync to DOM and localStorage - no setState here
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}