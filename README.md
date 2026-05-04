# Markdown Viewer

Spanish version: [README.es.md](README.es.md)

Frontend-only web application for writing Markdown and previewing sanitized HTML in real time.

## About The Project

This repository contains a Markdown editor and live previewer built with React and Vite. The project aims to keep the editing flow simple while maintaining a structure that is easy to evolve and validate.

### Functional Requirements

- Edit Markdown in a textarea.
- Convert Markdown to HTML in real time.
- Sanitize generated HTML before rendering it.
- Provide a toolbar for common Markdown syntax.
- Allow resizing between editor and preview panels.
- Support English and Spanish interface labels.

### Non-Functional Requirements

- Fast response in modern browsers.
- Frontend-only deployment.
- Basic protection against XSS through HTML sanitization.

## Technical Stack

| Layer | Technology |
|---|---|
| UI | React 19 |
| Bundler | Vite 8 |
| Styling | Tailwind CSS 4 |
| Markdown parsing | marked |
| HTML sanitization | DOMPurify |
| Linting | ESLint 9 |

## Architecture And Logic

The application is implemented as a frontend-only React app.

- `src/main.jsx` boots the React application.
- `src/App.jsx` orchestrates locale state and top-level composition.
- `src/components/` contains reusable UI blocks for layout, editor, toolbar, preview, and resizer.
- `src/hooks/` contains reusable React behavior.
- `src/languages/` centralizes interface strings for Spanish and English.
- `src/utils/` contains pure helper logic without React dependencies.
- `public/flags/` stores static assets used by the language switcher.
- `examples/` contains sample Markdown content for reference.
- `design/` stores design artifacts and proposals.

### Information Flow

1. The user writes Markdown in the editor panel.
2. React updates the editor state.
3. `marked` converts Markdown to HTML.
4. `DOMPurify` sanitizes the generated HTML.
5. The preview panel renders the sanitized HTML.
6. Header actions switch the current locale for UI strings.

## Quick Start

### Prerequisites

- Node.js 20 recommended
- npm 10 or newer recommended

### Installation

```bash
git clone <repository-url>
cd markdown-editor
npm install
```

### Environment Variables

This project does not require a `.env` file for local execution.

### Development

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run check
```

`npm run check` is the minimum validation routine for this project. It runs lint first and then the production build.

### Production Build

```bash
npm run build
```

The generated output is written to `dist`.

## CI/CD

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` for deployment to Vercel.

The workflow currently:

- checks out the repository
- installs Node.js 20
- installs dependencies with `npm install`
- runs the production build with `npm run build`
- deploys the application to Vercel using repository secrets

## Project Structure

```text
.
├── design/               # Design proposals and visual artifacts
├── docs/                 # Supporting project documentation
├── examples/             # Sample Markdown files
├── public/flags/         # Static assets for locale selector
├── src/
│   ├── components/       # Shared UI components
│   ├── hooks/            # Reusable React hooks
│   ├── languages/        # UI dictionaries
│   ├── utils/            # Pure helper functions
│   ├── App.jsx           # Main application composition and logic
│   ├── index.css         # Global styles
│   └── main.jsx          # React entry point
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry document
├── package.json          # Scripts and dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite configuration
```

## Current Status

The application is functional and buildable. The current implementation already follows a clearer separation between UI components, hooks, translations, and pure utilities.

The expected pre-integration validation flow is `npm run check`.

## Notes For Maintenance

- `src/components/` should contain presentational and UI composition pieces.
- `src/hooks/` should contain React-specific reusable behavior.
- `src/utils/` should contain pure helpers without React dependencies.
- `src/languages/` should remain the single source of truth for interface strings.
- Before merging structural or behavioral changes, run `npm run check`.

## Resources

- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
- Marked: https://marked.js.org/
- DOMPurify: https://github.com/cure53/DOMPurify


