import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Markdown Rendering Exception caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-6 text-center bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 my-4">
                    <AlertTriangle size={36} className="mx-auto mb-2 text-red-400" />
                    <h3 className="text-base font-bold mb-1">Malformed Markdown Detected</h3>
                    <p className="text-xs text-slate-400 mb-4">
                        This document contains invalid Markdown structure. The rest of the app remains usable.
                    </p>
                    <button
                        onClick={() => this.setState({ hasError: false, error: null })}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium"
                    >
                        <RefreshCw size={14} /> Reset Renderer
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}