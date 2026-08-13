import React, { useRef } from 'react';
import { Header } from './components/Header';
import { FileUploader } from './components/FileUploader';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { useMarkdown } from './hooks/useMarkdown';
import { useClipboard } from './hooks/useClipboard';
import { Code2, Eye, AlertCircle } from 'lucide-react';

export default function App() {
  const { markdown, setMarkdown, fileName, error, setError, loadFromFile, loadSample } = useMarkdown();
  const { copied, copy } = useClipboard();
  const renderedRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Header onLoadSample={loadSample} onCopy={() => copy(renderedRef.current, markdown)} copied={copied} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Error Alert Banner */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
            <button onClick={() => setError(null)} className="text-xs font-bold underline">Dismiss</button>
          </div>
        )}

        <FileUploader onFileSelected={loadFromFile} currentFileName={fileName} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel: Raw Source */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-[650px]">
            <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/90 text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Raw Source Code</span>
              <Code2 size={14} />
            </div>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="w-full flex-1 p-5 bg-transparent font-mono text-sm leading-relaxed text-slate-200 resize-none outline-none"
            />
          </div>

          {/* Right Panel: Rendered HTML */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-[650px]">
            <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/90 text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Rendered GFM Preview</span>
              <Eye size={14} className="text-emerald-400" />
            </div>
            <div className="flex-1 overflow-y-auto">
              <MarkdownRenderer ref={renderedRef} content={markdown} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}