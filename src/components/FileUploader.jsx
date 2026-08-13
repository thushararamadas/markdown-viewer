import React, { useState } from 'react';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

export function FileUploader({ onFileSelected, currentFileName }) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFileSelected(e.dataTransfer.files[0]);
        }
    };

    return (
        <label
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-6 text-center block cursor-pointer transition-all mb-6 ${isDragging
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-slate-800 hover:border-blue-500/50 bg-slate-900/50'
                }`}
        >
            <UploadCloud className="mx-auto text-blue-500 mb-2" size={36} />
            <p className="font-semibold text-slate-200 text-sm">
                {currentFileName ? `File: ${currentFileName}` : 'Click or Drag & Drop Markdown (.md)'}
            </p>
            <input
                type="file"
                accept=".md,.markdown,text/plain"
                onChange={(e) => e.target.files?.[0] && onFileSelected(e.target.files[0])}
                className="hidden"
            />
        </label>
    );
}