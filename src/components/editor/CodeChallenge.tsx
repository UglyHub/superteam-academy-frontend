'use client';

import React, { useState } from 'react';
import { MonacoEditor } from './MonacoEditor';
import { TestResults } from './TestResults';
import { runTests, type RunResult } from '@/lib/utils/testRunner';
import { Button } from '@/components/ui/button';
import type { Challenge } from '@/types';

interface CodeChallengeProps {
  challenge: Challenge;
  onSuccess?: () => void;
}

export function CodeChallenge({ challenge, onSuccess }: CodeChallengeProps) {
  const [code, setCode] = useState(challenge.starterCode);
  const [result, setResult] = useState<RunResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRunCode = async () => {
    setLoading(true);
    setResult(null);

    const testResult = await runTests(code, challenge.testCases);
    setResult(testResult);
    setLoading(false);

    if (testResult.success && onSuccess) {
      // Delay success callback for visual feedback
      setTimeout(onSuccess, 1500);
    }
  };

  return (
    <div className="space-y-6">
      {/* Challenge Prompt */}
      <div className="glass-yellow border-gradient rounded-2xl p-6">
        <h2 className="font-display text-2xl font-bold text-white mb-3">
          Challenge
        </h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
          {challenge.prompt}
        </p>
      </div>

      {/* Editor */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-lg font-bold text-white">
            Code Editor
          </h3>
          <Button
            onClick={handleRunCode}
            disabled={loading}
            className="bg-primary-500 hover:bg-primary-600 text-black font-bold"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                Running...
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Run Tests
              </>
            )}
          </Button>
        </div>

        <MonacoEditor
          value={code}
          onChange={setCode}
          language={challenge.language}
          height="500px"
        />
      </div>

      {/* Results */}
      <TestResults result={result} loading={loading} />
    </div>
  );
}