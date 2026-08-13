import { useState } from 'react';
import { copyMultiFormatClipboard } from '../utils/clipboard';

export function useClipboard() {
    const [copied, setCopied] = useState(false);

    const copy = async (renderedElement, rawMarkdown) => {
        if (!renderedElement) return false;
        const html = renderedElement.innerHTML;
        const text = renderedElement.innerText;

        const success = await copyMultiFormatClipboard(html, text, rawMarkdown);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
        return success;
    };

    return { copied, copy };
}