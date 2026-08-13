import { useState } from 'react';

const defaultSample = `# Distributed Rate Limiting: Design Review

> **Status:** Draft v2.3 · **Owner:** Infrastructure
> Last updated: *March 2026*

This document evaluates approaches for **distributed rate limiting** across edge nodes.

---

## 1. Executive Summary

Three options were considered:
1. Centralized counter in Redis
2. Gossip-based approximate counting
3. ~~Sticky routing by client ID~~ (rejected)

### 1.1 Benchmark Summary

| Option | Accuracy | Latency |
| :--- | :--- | :--- |
| **Redis Counter** | 100% Exact | +1.8 ms |
| **Gossip Count** | ±22% Variance | <0.1 ms |
`;

export function useMarkdown() {
    const [markdown, setMarkdown] = useState(defaultSample);
    const [fileName, setFileName] = useState('sample.md');
    const [error, setError] = useState(null);

    const loadFromFile = (file) => {
        if (!file) return;

        // Error Check 1: File Extension Validation
        const isValidType = file.name.endsWith('.md') || file.name.endsWith('.markdown') || file.name.endsWith('.txt');
        if (!isValidType) {
            setError('Invalid file format. Please upload a .md or .txt file.');
            return;
        }

        // Error Check 2: File Size Validation (Max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            setError('File size is too large (max 5MB).');
            return;
        }

        setFileName(file.name);
        setError(null);

        // Error Check 3: FileReader I/O Exceptions
        const reader = new FileReader();
        reader.onload = (e) => {
            setMarkdown(e.target.result || '');
        };
        reader.onerror = () => {
            setError('Failed to read file content.');
        };
        reader.readAsText(file);
    };

    const loadSample = () => {
        setMarkdown(defaultSample);
        setFileName('sample.md');
        setError(null);
    };

    return {
        markdown,
        setMarkdown,
        fileName,
        error,
        setError,
        loadFromFile,
        loadSample
    };
}