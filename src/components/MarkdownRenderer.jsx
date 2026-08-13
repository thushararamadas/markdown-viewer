import React, { forwardRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { markdownPlugins } from '../lib/markdown';
import { CodeBlock } from './CodeBlock';
import { ErrorBoundary } from './ErrorBoundary';

export const MarkdownRenderer = forwardRef(({ content }, ref) => {
    return (
        <div ref={ref} className="prose prose-invert max-w-none p-6 text-slate-200 leading-relaxed">
            <ErrorBoundary>
                <ReactMarkdown
                    {...markdownPlugins}
                    components={{
                        code({ inline, className, children, ...props }) {
                            if (inline) {
                                return (
                                    <code className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-1.5 py-0.5 rounded text-xs font-mono" {...props}>
                                        {children}
                                    </code>
                                );
                            }
                            return <CodeBlock className={className}>{children}</CodeBlock>;
                        }
                    }}
                >
                    {content || "*No markdown content loaded.*"}
                </ReactMarkdown>
            </ErrorBoundary>
        </div>
    );
});

MarkdownRenderer.displayName = 'MarkdownRenderer';