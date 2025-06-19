'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { ReactNode } from 'react';

interface ThemeWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function ThemeWrapper({ children, className = '' }: ThemeWrapperProps) {
  const { currentTheme } = useTheme();
  
  return (
    <div 
      className={`${className}`}
      style={{
        '--theme-primary': currentTheme.colors.primary,
        '--theme-secondary': currentTheme.colors.secondary,
        '--theme-accent': currentTheme.colors.accent,
        '--theme-background': currentTheme.colors.background,
        '--theme-surface': currentTheme.colors.surface,
        '--theme-text': currentTheme.colors.text,
        '--theme-text-secondary': currentTheme.colors.textSecondary,
        '--theme-border': currentTheme.colors.border,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}