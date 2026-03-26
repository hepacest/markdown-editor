
# Visor Markdown (React + Vite)

###################################################
## English version
###################################################

Web app to view and edit Markdown in real time with instant preview.

### What it does

- Parses Markdown input (plain text with Markdown syntax).
- Renders live HTML preview instantly.
- Supports basic editing behavior (copy/paste, text styling, live update).
- Minimal local setup for localhost development.

### Tech stack

- React (JSX) for UI.
- Vite as bundler and dev server (HMR).
- Tailwind CSS for utility-first styling (`tailwind.config.js`).
- ESLint for code quality.

### Requirements

- Node.js 18+ (20 recommended)
- npm 9+ / pnpm 8+ / yarn 1.22+

### Install and run

1. Clone repository:
   ```bash
   git clone <url-del-repo>
   cd markdown-editor
   ```
2. Install dependencies:
   ```bash
   npm install
   npm install marked dompurify @tailwindcss/postcss
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Open browser:
   - `http://localhost:5173`

### Production build

```bash
npm run build
```

Build output will be in `dist`.

### Usage tips

- Keep Markdown text in left panel, preview updates automatically.
- Save edited content by copying to `.md` file manually or implement an export flow.

### Extras / best practices

- Add `.env` to `.gitignore` for local private config.
- Use `npm run lint` and `npm run format` if lint/formatter scripts exist.
- Add unit tests (Jest/Vitest) for parsing and rendering components.

### Resources

- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/

###################################################
## Versión en español
###################################################

Aplicación web para visualizar y editar Markdown en tiempo real con vista previa instantánea.

### Qué hace

- Interpreta Markdown (texto plano con sintaxis Markdown).
- Renderiza vista previa en HTML en tiempo real.
- Soporta comportamiento básico de edición (copiar/pegar, estilo de texto, actualización automática).
- Configuración mínima para desarrollo en localhost.

### Tecnologías

- React (JSX) para la interfaz.
- Vite como bundler y servidor de desarrollo (HMR).
- Tailwind CSS para estilos utilitarios (`tailwind.config.js`).
- ESLint para calidad de código.

### Requisitos

- Node.js 18+ (20 recomendado)
- npm 9+ / pnpm 8+ / yarn 1.22+

### Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd markdown-editor
   ```
2. Instala dependencias:
   ```bash
   npm install
   npm install marked dompurify @tailwindcss/postcss
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre en el navegador:
   - `http://localhost:5173`

### Build de producción

```bash
npm run build
```

El resultado se genera en `dist`.

### Consejos de uso

- Mantén el Markdown en el panel izquierdo, la vista previa se actualiza automáticamente.
- Guarda el contenido en un archivo `.md` manualmente o agrega flujo de exportación.

### Extras / buenas prácticas

- Añade `.env` en `.gitignore` para configuración privada local.
- Ejecuta `npm run lint` y `npm run format` si están disponibles.
- Añade tests unitarios (Jest/Vitest) para parsing y renderizado.

### Recursos

- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/

