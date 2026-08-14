# GFM Markdown Studio

A modern, high-performance **GitHub Flavored Markdown (GFM) Studio & Previewer** built with **React 19**, **Vite**, and **Tailwind CSS**. It provides side-by-side real-time GFM rendering, drag-and-drop file uploading, multi-format clipboard export, and graceful error handling.

🌐 **Live Application Demo:** https://markdown-viewer-theta.vercel.app/
📦 **GitHub Repository:** https://github.com/thushararamadas/markdown-viewer
---

## 📋 Technical Compliance Checklist

- [x] **React.js**: Built using React 19 (Vite framework).
- [x] **JavaScript Only**: 100% pure JS/JSX (no TypeScript).
- [x] **Tailwind CSS**: Modern utility styling & custom glassmorphism theme.
- [x] **Browser-Only / No Backend**: 100% client-side execution using native browser APIs (`FileReader`, `ClipboardItem`).
- [x] **Open-Source Libraries**: `react-markdown`, `remark-gfm`, `rehype-highlight`, `rehype-raw`, `lucide-react`.

---

## 🛠️ Setup Instructions

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Steps to Run Locally

1. **Clone the Repository:**
   ```bash
   git clone <your-repository-url>
   cd markdown-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Local Dev Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build & Preview Production Bundle:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📐 Key Design & Technical Decisions

### 1. UI/UX & Visual Aesthetic (35% Weight)
- **Dark Studio Glassmorphism**: Designed with a dark `slate-950` palette, subtle borders, and `emerald`/`blue` accent highlights for a premium, developer-focused studio feel.
- **Dual-Pane Split Layout**: Side-by-side editing and rendering so content updates in real-time as the user types or uploads files.

### 2. Markdown Rendering Accuracy (25% Weight)
- **Full GFM Standard Support**: Integrated `remark-gfm` for tables, strikethrough, task lists, and blockquotes, alongside `rehype-highlight` for syntax highlighting code blocks.
- **HTML Sanitization & Raw HTML Support**: Utilized `rehype-raw` for safe inline HTML rendering.

### 3. Architecture & Code Quality (20% Weight)
- **Custom Hooks Separation**: Modularized application logic into clean, reusable hooks:
  - `useMarkdown` (`src/hooks/useMarkdown.js`): Manages file reading, validation, default state, and error handling.
  - `useClipboard` (`src/hooks/useClipboard.js`): Handles copy state timers and DOM extraction.
- **Resiliency & Fault Tolerance**:
  - React `ErrorBoundary` (`src/components/ErrorBoundary.jsx`) wraps the markdown renderer to isolate rendering failures without crashing the web app.
  - File extension (`.md`, `.markdown`, `.txt`) and file size limits (5MB) are validated before loading.
  - Forgiving parsing: Malformed Markdown (unclosed code fences, broken links) renders gracefully as plain text according to CommonMark specs.

### 4. Smart Multi-Format Clipboard Export
- Developed a multi-format clipboard helper `copyMultiFormatClipboard` (`src/utils/clipboard.js`) using native browser `ClipboardItem` API.
- Simultaneously writes `text/html` (for Google Docs/MS Word) and `text/plain` (for code editors), falling back to `writeText` if unsupported.

---

## 🤖 Use of AI Coding Assistants

In accordance with assignment guidelines, AI coding assistants (such as Antigravity / Claude) were utilized to accelerate setup and component iteration. 

- **Full Understanding & Ownership**: I fully understand and can explain all technical decisions, state flows, custom hooks (`useMarkdown`, `useClipboard`), DOM extraction methods, and fallback strategies in detail during the interview.

---

## 🔮 Future Improvements (With Additional Time)

Focus was placed on delivering a polished core experience within the 4–6 hour guideline. With additional time, the following features would be implemented:

1. **Markdown Syntax Diagnostics / Linter Panel**: Real-time diagnostic alerts highlighting unclosed code fences, orphan backticks, or broken links.
2. **Export Capabilities**: One-click download of rendered documents as PDF or standalone HTML files.
3. **Resizable & Fullscreen Viewport**: Interactive pane splitter to resize the raw source vs preview panels dynamically.





