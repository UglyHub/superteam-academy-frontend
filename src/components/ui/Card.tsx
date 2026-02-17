import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-dark-secondary border border-dark-surface rounded-xl p-6 transition-all hover:border-primary-500 hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}