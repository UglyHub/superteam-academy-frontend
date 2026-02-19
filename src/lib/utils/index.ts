import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 * Used by shadcn/ui components
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export testRunner utilities for convenience
export type { TestResult, RunResult } from './testRunner';
export { runTests } from './testRunner';