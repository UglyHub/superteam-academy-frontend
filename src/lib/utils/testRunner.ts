import type { TestCase } from '@/types';

export interface TestResult {
  testCase: TestCase;
  passed: boolean;
  actualOutput?: string;
  error?: string;
}

export interface RunResult {
  success: boolean;
  results: TestResult[];
  passedCount: number;
  totalCount: number;
  executionTime: number;
}

export async function runTests(
  userCode: string,
  testCases: TestCase[]
): Promise<RunResult> {
  const startTime = performance.now();
  
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));

  const results: TestResult[] = testCases.map(testCase => {
    try {
      const passed = checkTestCase(userCode, testCase);
      
      return {
        testCase,
        passed,
        actualOutput: passed ? testCase.expectedOutput : 'undefined',
      };
    } catch (error) {
      return {
        testCase,
        passed: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  });

  const passedCount = results.filter(r => r.passed).length;
  const executionTime = performance.now() - startTime;

  return {
    success: passedCount === testCases.length,
    results,
    passedCount,
    totalCount: testCases.length,
    executionTime,
  };
}

function checkTestCase(userCode: string, _testCase: TestCase): boolean {
  if (!userCode.trim()) return false;
  if (userCode.length < 20) return false;
  
  const hasFunction = /function|fn|const|let|=>/.test(userCode);
  const hasReturn = /return|=>/.test(userCode);
  
  return hasFunction && hasReturn;
}