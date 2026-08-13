import React from 'react';
import { Copy, Check } from 'lucide-react';

export function CopyButton({ onCopy, copied }) {
    return (
        <button
            onClick={onCopy}
            className={`flex items-center gap-2 font-medium px-4 py-2 rounded-lg text-sm transition-all shadow-lg ${copied
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20'
                }`}
        >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied Rich Text!' : 'Copy to Clipboard'}
        </button>
    );
}