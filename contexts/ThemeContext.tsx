'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, getTheme } from '@/lib/themes';

interface ThemeContextType {
  currentTheme: Theme;
  themeId: string;
  setTheme: (themeId: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState('mango');
  const [currentTheme, setCurrentTheme] = useState(getTheme('mango'));

  useEffect(() => {
    const savedTheme = localStorage.getItem('honey-theme');
    if (savedTheme) {
      setThemeId(savedTheme);
      setCurrentTheme(getTheme(savedTheme));
    }
  }, []);

  const setTheme = (newThemeId: string) => {
    setThemeId(newThemeId);
    setCurrentTheme(getTheme(newThemeId));
    localStorage.setItem('honey-theme', newThemeId);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themeId, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}