'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { RunResult } from '@/lib/utils/testRunner';

interface TestResultsProps {
  result: RunResult | null;
  loading: boolean;
}

export function TestResults({ result, loading }: TestResultsProps) {
  if (loading) {
    return (
      <div className="glass rounded-2xl p-6 border-gradient">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-gray-400 text-sm">Running tests...</span>
        </div>
      </div>
    );
  }

  if (!result) return null;

  const { success, results, passedCount, totalCount, executionTime } = result;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={success ? 'success' : 'fail'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`rounded-2xl p-6 border-2 ${
          success
            ? 'bg-accent-500/5 border-accent-500/30'
            : 'bg-red-500/5 border-red-500/30'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {success ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.div>
            )}
            <div>
              <h3 className={`font-display text-xl font-bold ${success ? 'text-accent-500' : 'text-red-400'}`}>
                {success ? 'All Tests Passed!' : 'Some Tests Failed'}
              </h3>
              <p className="text-gray-400 text-sm">
                {passedCount}/{totalCount} test cases • {executionTime.toFixed(0)}ms
              </p>
            </div>
          </div>
        </div>

        {/* Test Cases */}
        <div className="space-y-2">
          {results.map((testResult, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-start gap-3 p-3 rounded-lg ${
                testResult.passed ? 'bg-accent-500/5' : 'bg-red-500/5'
              }`}
            >
              {testResult.passed ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14f195" strokeWidth="2" className="shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" className="shrink-0 mt-0.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium">
                  Test Case {idx + 1}
                  {!testResult.testCase.hidden && (
                    <span className="text-gray-500 ml-2">
                      {testResult.testCase.description || `Input: ${testResult.testCase.input}`}
                    </span>
                  )}
                </p>
                {testResult.error && (
                  <p className="text-red-400 text-xs mt-1 font-mono">{testResult.error}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}