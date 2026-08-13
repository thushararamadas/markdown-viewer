import React from 'react';
import { FileText, Sparkles } from 'lucide-react';
import { CopyButton } from './CopyButton';

export function Header({ onLoadSample, onCopy, copied }) {
    return (
        <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <FileText className="text-blue-500" size={24} />
                <h1 className="font-bold text-lg bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    GFM Markdown Studio
                </h1>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={onLoadSample}
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-lg text-sm font-medium transition-all"
                >
                    <Sparkles size={16} className="text-yellow-400" />
                    Load Sample
                </button>

                <CopyButton onCopy={onCopy} copied={copied} />
            </div>
        </header>
    );
}