import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CodeBlock({ children, className }) {
    const [copied, setCopied] = useState(false);
    const codeString = String(children).replace(/\n$/, '');

    const copyCode = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <div className="flex items-center justify-between px-4 py-1.5 bg-slate-900 border-b border-slate-800 text-xs text-slate-400">
                <span>{className ? className.replace('language-', '') : 'code'}</span>
                <button
                    onClick={copyCode}
                    className="flex items-center gap-1 hover:text-slate-200 text-xs py-1 px-2 rounded bg-slate-800/50"
                >
                    {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
            <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-100">
                <code>{children}</code>
            </pre>
        </div>
    );
}