import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500';
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-dark-primary shadow-glow-yellow hover:shadow-glow-brand',
    secondary: 'bg-accent-500 hover:bg-accent-600 text-white shadow-glow-green',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-dark-primary',
    ghost: 'text-primary-500 hover:bg-primary-500/10',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}