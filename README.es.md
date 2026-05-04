# Visor Markdown

English version: [README.md](README.md)

Aplicacion web frontend-only para escribir Markdown y previsualizar HTML sanitizado en tiempo real.

## Acerca Del Proyecto

Este repositorio contiene un editor de Markdown con vista previa en tiempo real construido con React y Vite. El proyecto busca mantener un flujo de edicion simple mientras conserva una estructura facil de evolucionar y validar.

### Requisitos Funcionales

- Editar Markdown en un textarea.
- Convertir Markdown a HTML en tiempo real.
- Sanitizar el HTML generado antes de renderizarlo.
- Ofrecer una barra de herramientas para insertar sintaxis Markdown comun.
- Permitir redimensionar los paneles de editor y vista previa.
- Soportar textos de interfaz en ingles y espanol.

### Requisitos No Funcionales

- Respuesta rapida en navegadores modernos.
- Despliegue completamente frontend.
- Proteccion basica contra XSS mediante sanitizacion del HTML.

## Stack Tecnico

| Capa | Tecnologia |
|---|---|
| UI | React 19 |
| Bundler | Vite 8 |
| Estilos | Tailwind CSS 4 |
| Parseo Markdown | marked |
| Sanitizacion HTML | DOMPurify |
| Linting | ESLint 9 |

## Arquitectura Y Logica

La aplicacion esta implementada como una app React frontend-only.

- `src/main.jsx` inicia la aplicacion React.
- `src/App.jsx` orquesta el estado de locale y la composicion de alto nivel.
- `src/components/` contiene bloques de UI reutilizables para layout, editor, toolbar, preview y resizer.
- `src/hooks/` contiene comportamiento reutilizable especifico de React.
- `src/languages/` centraliza los textos de interfaz para espanol e ingles.
- `src/utils/` contiene logica helper pura sin dependencias de React.
- `public/flags/` almacena assets estaticos usados por el selector de idioma.
- `examples/` contiene archivos Markdown de referencia.
- `design/` almacena propuestas y artefactos de diseno.

### Flujo De Informacion

1. El usuario escribe Markdown en el panel del editor.
2. React actualiza el estado del editor.
3. `marked` convierte Markdown a HTML.
4. `DOMPurify` sanitiza el HTML generado.
5. El panel de vista previa renderiza el HTML sanitizado.
6. Las acciones del header cambian el locale actual para los textos de interfaz.

## Inicio Rapido

### Prerrequisitos

- Node.js 20 recomendado
- npm 10 o superior recomendado

### Instalacion

```bash
git clone <repository-url>
cd markdown-editor
npm install
```

### Variables De Entorno

Este proyecto no requiere archivo `.env` para ejecucion local.

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

`npm run check` es la rutina minima de validacion del proyecto. Ejecuta lint primero y luego el build de produccion.

### Build De Produccion

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
- ejecuta el build de produccion con `npm run build`
- despliega la aplicacion en Vercel usando secretos del repositorio

## Estructura Del Proyecto

```text
.
├── design/               # Propuestas y artefactos visuales
├── docs/                 # Documentacion de apoyo
├── examples/             # Archivos Markdown de ejemplo
├── public/flags/         # Assets estaticos para el selector de idioma
├── src/
│   ├── components/       # Componentes de UI reutilizables
│   ├── hooks/            # Hooks reutilizables de React
│   ├── languages/        # Diccionarios de interfaz
│   ├── utils/            # Funciones helper puras
│   ├── App.jsx           # Composicion principal y logica de alto nivel
│   ├── index.css         # Estilos globales
│   └── main.jsx          # Punto de entrada de React
├── eslint.config.js      # Configuracion de ESLint
├── index.html            # Documento HTML de entrada
├── package.json          # Scripts y dependencias
├── postcss.config.js     # Configuracion de PostCSS
├── tailwind.config.js    # Configuracion de Tailwind
└── vite.config.js        # Configuracion de Vite
```

## Estado Actual

La aplicacion es funcional y compilable. La implementacion actual ya sigue una separacion mas clara entre componentes de UI, hooks, traducciones y utilidades puras.

El flujo esperado de validacion antes de integrar cambios es `npm run check`.

## Notas De Mantenimiento

- `src/components/` debe contener piezas presentacionales y de composicion de UI.
- `src/hooks/` debe contener comportamiento reutilizable especifico de React.
- `src/utils/` debe contener helpers puros sin dependencias de React.
- `src/languages/` debe mantenerse como fuente unica de verdad para textos de interfaz.
- Antes de integrar cambios estructurales o de comportamiento, ejecuta `npm run check`.

## Recursos

- Vite: https://vitejs.dev/
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
- Marked: https://marked.js.org/
- DOMPurify: https://github.com/cure53/DOMPurify