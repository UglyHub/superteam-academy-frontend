'use client';

import React, { useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import type * as Monaco from 'monaco-editor';

interface MonacoEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: 'typescript' | 'rust' | 'json';
  readOnly?: boolean;
  height?: string;
}

export function MonacoEditor({
  value,
  onChange,
  language,
  readOnly = false,
  height = '400px',
}: MonacoEditorProps) {
  const editorRef = useRef<Monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    // Custom Superteam Dark Theme
    monaco.editor.defineTheme('superteam-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6b7280', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'ffd23f', fontStyle: 'bold' },
        { token: 'string', foreground: '14f195' },
        { token: 'number', foreground: 'ff8c42' },
        { token: 'function', foreground: 'ffd23f' },
        { token: 'variable', foreground: 'ffffff' },
      ],
      colors: {
        'editor.background': '#000000',
        'editor.foreground': '#ffffff',
        'editor.lineHighlightBackground': '#1b231d',
        'editorCursor.foreground': '#ffd23f',
        'editor.selectionBackground': '#2f6b3f',
        'editorLineNumber.foreground': '#6b7280',
        'editorLineNumber.activeForeground': '#ffd23f',
      },
    });

    monaco.editor.setTheme('superteam-dark');

    // Focus editor on mount
    editor.focus();
  };

  const handleChange = (newValue: string | undefined) => {
    onChange(newValue ?? '');
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black">
      <Editor
        height={height}
        language={language}
        value={value}
        onChange={handleChange}
        onMount={handleEditorDidMount}
        theme="superteam-dark"
        options={{
          fontSize: 14,
          fontFamily: 'var(--font-jetbrains), monospace',
          lineHeight: 22,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          renderLineHighlight: 'line',
          readOnly,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          bracketPairColorization: { enabled: true },
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
          padding: { top: 16, bottom: 16 },
          suggest: {
            showKeywords: true,
            showSnippets: true,
          },
        }}
        loading={
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-sm">Loading editor...</div>
          </div>
        }
      />
    </div>
  );
}