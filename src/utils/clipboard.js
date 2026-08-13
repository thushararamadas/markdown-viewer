/**
 * Writes HTML, Plain Text, and Raw Markdown Blobs to the System Clipboard simultaneously.
 * @param {string} htmlContent - Rendered HTML from DOM
 * @param {string} textContent - Plain text text representation
 * @param {string} rawMarkdown - Original Markdown source
 */
export async function copyMultiFormatClipboard(htmlContent, textContent, rawMarkdown) {
    const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
    const textBlob = new Blob([rawMarkdown || textContent], { type: 'text/plain' });

    try {
        const items = {
            'text/html': htmlBlob,
            'text/plain': textBlob,
        };

        await navigator.clipboard.write([new ClipboardItem(items)]);
        return true;
    } catch (err) {
        console.warn('ClipboardItem API failed, falling back to writeText:', err);
        try {
            await navigator.clipboard.writeText(rawMarkdown || textContent);
            return true;
        } catch (fallbackErr) {
            console.error('Clipboard copy failed:', fallbackErr);
            return false;
        }
    }
}




