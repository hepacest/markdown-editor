
# Visor Markdown (React + Vite)

## English version

A frontend-only web app that converts Markdown text into HTML with a live preview.

### What it does

- Parses Markdown input using `marked`.
- Sanitizes generated HTML with `DOMPurify` to prevent XSS.
- Renders the result instantly in a preview panel.
- Offers a toolbar to insert common Markdown syntax.
- Allows resizing the editor and preview panels with a draggable divider.

### Tech stack

- React for UI.
- Vite as bundler and dev server.
- Tailwind CSS for styling.
- `marked` for Markdown parsing.
- `DOMPurify` for HTML sanitization.
- ESLint for linting.

### Requirements

- Node.js 18+ (20 recommended)
- npm 9+

### Install and run

1. Clone repository:
   ```bash
   git clone <url-del-repo>
   cd markdown-editor
   ```
2. Install dependencies:
   ```bash
   npm install
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

### Available scripts

- `npm run dev` — starts the Vite development server.
- `npm run build` — bundles the app for production.
- `npm run lint` — runs ESLint checks.
- `npm run preview` — locally previews the production build.

### CI/CD

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that deploys the app to Vercel on every push to the `main` branch. The workflow:

- checks out the repository
- installs Node.js 20
- runs `npm install`
- builds the project with `npm run build`
- deploys to Vercel using `amondnet/vercel-action@v20`
- uses the `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` secrets
- passes `--prod` to deploy a production build

### Usage notes

- Write Markdown in the left panel.
- The HTML preview updates automatically on each change.
- Use the toolbar buttons to insert formatting such as headings, bold, italics, code blocks, lists, and links.

### Resources

- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/

###################################################
## Versión en español


Aplicación frontend que convierte texto Markdown a HTML con vista previa en tiempo real.

### Qué hace

- Convierte Markdown a HTML con `marked`.
- Sanitiza el HTML generado con `DOMPurify` para prevenir XSS.
- Muestra el resultado de inmediato en un panel de vista previa.
- Incluye una barra de herramientas para insertar sintaxis Markdown común.
- Permite redimensionar los paneles de editor y vista previa con un divisor arrastrable.

### Tecnologías

- React para la interfaz.
- Vite como bundler y servidor de desarrollo.
- Tailwind CSS para el estilo.
- `marked` para parsear Markdown.
- `DOMPurify` para sanitizar HTML.
- ESLint para calidad de código.

### Requisitos

- Node.js 18+ (20 recomendado)
- npm 9+

### Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd markdown-editor
   ```
2. Instala dependencias:
   ```bash
   npm install
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

### Scripts disponibles

- `npm run dev` — inicia el servidor de desarrollo Vite.
- `npm run build` — genera el build de producción.
- `npm run lint` — ejecuta ESLint.
- `npm run preview` — previsualiza el build de producción localmente.

### CI/CD

Este proyecto incluye un workflow de GitHub Actions en `.github/workflows/deploy.yml` que despliega la app a Vercel en cada push a la rama `main`. El workflow:

- hace checkout del repositorio
- instala Node.js 20
- ejecuta `npm install`
- construye el proyecto con `npm run build`
- despliega a Vercel usando `amondnet/vercel-action@v20`
- usa los secretos `VERCEL_TOKEN`, `VERCEL_ORG_ID` y `VERCEL_PROJECT_ID`
- pasa `--prod` para desplegar una versión de producción

### Notas de uso

- Escribe Markdown en el panel izquierdo.
- La vista previa HTML se actualiza automáticamente con cada cambio.
- Usa los botones de la barra de herramientas para insertar encabezados, negrita, cursiva, código, listas y enlaces.

### Recursos

- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/

