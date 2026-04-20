
# Visor Markdown (React + Vite)

## English version

A frontend-only web app that converts Markdown text into HTML with a live preview.

### What it does

- Converts Markdown to HTML.
- Sanitizes generated HTML to prevent XSS.
- Renders the result instantly in a preview panel.
- Offers a toolbar to insert common Markdown syntax.
- Allows resizing the editor and preview panels with a draggable divider.
- Lets users switch the UI text between Spanish and English from the header.

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
- This project uses Node.js v25 and npm 11

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

### CI/CD

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that deploys the app to Vercel on every push to the `main` branch. The workflow:

- checks out the repository
- installs Node.js 20
- runs `npm install`
- builds the project with `npm run build`
- deploys to Vercel using `amondnet/vercel-action@v20`
- uses the `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` secrets
- passes `--prod` to deploy a production build

### Resources

- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/


---
## Versión en español


Aplicación frontend que convierte texto Markdown a HTML con vista previa en tiempo real.

### Qué hace

- Convierte Markdown a HTML.
- Sanitiza el HTML generado para prevenir XSS.
- Muestra el resultado de inmediato en un panel de vista previa.
- Incluye una barra de herramientas para insertar sintaxis Markdown común.
- Permite redimensionar los paneles de editor y vista previa con un divisor arrastrable.
- Permite cambiar los textos de la interfaz entre español e inglés desde el encabezado.

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
- En el proyecto se usa Node.js v25 y npm 11

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


### CI/CD

Este proyecto incluye un workflow de GitHub Actions en `.github/workflows/deploy.yml` que despliega la app a Vercel en cada push a la rama `main`. El workflow:

- hace checkout del repositorio
- instala Node.js 20
- ejecuta `npm install`
- construye el proyecto con `npm run build`
- despliega a Vercel usando `amondnet/vercel-action@v20`
- usa los secretos `VERCEL_TOKEN`, `VERCEL_ORG_ID` y `VERCEL_PROJECT_ID`
- pasa `--prod` para desplegar una versión de producción


### Recursos

- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/

