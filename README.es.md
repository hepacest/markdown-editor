# Visor Markdown

English version: [README.md](README.md)

Aplicación web frontend-only para escribir Markdown y previsualizar HTML sanitizado en tiempo real.

## Acerca Del Proyecto

Este repositorio contiene un editor de Markdown con vista previa en tiempo real construido con React y Vite. El proyecto busca mantener un flujo de edición simple mientras conserva una estructura fácil de evolucionar y validar.

### Requisitos Funcionales

- Editar Markdown en un textarea.
- Convertir Markdown a HTML en tiempo real.
- Sanitizar el HTML generado antes de renderizarlo.
- Ofrecer una barra de herramientas para insertar sintaxis Markdown común.
- Permitir redimensionar los paneles de editor y vista previa.
- Soportar textos de interfaz en inglés y español.

### Requisitos No Funcionales

- Respuesta rápida en navegadores modernos.
- Despliegue completamente frontend.
- Protección básica contra XSS mediante sanitización del HTML.

## Stack Técnico

| Capa | Tecnología |
|---|---|
| UI | React 19 |
| Bundler | Vite 8 |
| Estilos | Tailwind CSS 4 |
| Parseo Markdown | marked |
| Sanitización HTML | DOMPurify |
| Linting | ESLint 9 |

## Arquitectura Y Lógica

La aplicación está implementada como una app React frontend-only.

- `src/main.jsx` inicia la aplicación React.
- `src/App.jsx` orquesta el estado de locale y la composición de alto nivel.
- `src/components/` contiene bloques de UI reutilizables para layout, editor, toolbar, preview y resizer.
- `src/hooks/` contiene comportamiento reutilizable específico de React.
- `src/languages/` centraliza los textos de interfaz para español e inglés.
- `src/utils/` contiene lógica helper pura sin dependencias de React.
- `public/flags/` almacena assets estáticos usados por el selector de idioma.
- `examples/` contiene archivos Markdown de referencia.
- `design/` almacena propuestas y artefactos de diseño.

### Flujo De Información

1. El usuario escribe Markdown en el panel del editor.
2. React actualiza el estado del editor.
3. `marked` convierte Markdown a HTML.
4. `DOMPurify` sanitiza el HTML generado.
5. El panel de vista previa renderiza el HTML sanitizado.
6. Las acciones del header cambian el locale actual para los textos de interfaz.

## Inicio Rápido

### Prerrequisitos

- Node.js 20 recomendado
- npm 10 o superior recomendado

### Instalación

```bash
git clone https://github.com/hepacest/markdown-editor.git
cd markdown-editor
npm install
```

### Variables De Entorno

Este proyecto no requiere archivo `.env` para ejecución local.

### Desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

### Scripts Disponibles

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run check
```

`npm run check` es la rutina mínima de validación del proyecto. Ejecuta lint primero y luego el build de producción.

### Build De Producción

```bash
npm run build
```

El resultado se genera en `dist`.

## CI/CD

El repositorio incluye un workflow de GitHub Actions en `.github/workflows/deploy.yml` para desplegar en Vercel.

Actualmente el workflow:

- hace checkout del repositorio
- instala Node.js 20
- instala dependencias con `npm install`
- ejecuta el build de producción con `npm run build`
- despliega la aplicación en Vercel usando secretos del repositorio

## Estructura Del Proyecto

```text
.
├── design/               # Propuestas y artefactos visuales
├── docs/                 # Documentación de apoyo
├── examples/             # Archivos Markdown de ejemplo
├── public/flags/         # Assets estáticos para el selector de idioma
├── src/
│   ├── components/       # Componentes de UI reutilizables
│   ├── hooks/            # Hooks reutilizables de React
│   ├── languages/        # Diccionarios de interfaz
│   ├── utils/            # Funciones helper puras
│   ├── App.jsx           # Composición principal y lógica de alto nivel
│   ├── index.css         # Estilos globales
│   └── main.jsx          # Punto de entrada de React
├── eslint.config.js      # Configuración de ESLint
├── index.html            # Documento HTML de entrada
├── package.json          # Scripts y dependencias
├── postcss.config.js     # Configuración de PostCSS
├── tailwind.config.js    # Configuración de Tailwind
└── vite.config.js        # Configuración de Vite
```

## Estado Actual

La aplicación es funcional y compilable. La implementación actual ya sigue una separación más clara entre componentes de UI, hooks, traducciones y utilidades puras.

El flujo esperado de validación antes de integrar cambios es `npm run check`.

## Notas De Mantenimiento

- `src/components/` debe contener piezas presentacionales y de composición de UI.
- `src/hooks/` debe contener comportamiento reutilizable específico de React.
- `src/utils/` debe contener helpers puros sin dependencias de React.
- `src/languages/` debe mantenerse como fuente única de verdad para textos de interfaz.
- Antes de integrar cambios estructurales o de comportamiento, ejecuta `npm run check`.

## Recursos

- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
- Marked: https://marked.js.org/
- DOMPurify: https://github.com/cure53/DOMPurify