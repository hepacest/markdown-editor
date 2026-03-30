# Visor Markdown

# Contexto

## Propósito

Describir el diseño e implementación de una aplicación web que convierte texto Markdown en HTML agradable y seguro, con vista previa en tiempo real.

## Alcance

El sistema incluye:

* Un editor Markdown en el navegador.
* Una barra de herramientas básica que inserta sintaxis Markdown en el texto.
* Una vista previa HTML en tiempo real.

No incluye:

* Almacenamiento en base de datos.
* Autenticación de usuarios.
* Guardado automático de documentos.
* Funcionalidad offline.

# Requisitos

## Funcionales

* El usuario puede escribir texto en Markdown.
* El sistema convierte Markdown a HTML automáticamente.
* El usuario ve el resultado en tiempo real mientras escribe.
* El usuario puede insertar formatos de Markdown mediante botones en una barra de herramientas.
* El ancho de los paneles se puede ajustar con un divisor arrastrable.

## No funcionales

* Respuesta instantánea en navegadores modernos.
* Compatible con navegadores actuales.
* Seguro contra XSS mediante sanitización del HTML generado.
* Interfaz simple, usable y amigable.

## Funcionalidad en la versión actual

* Barra de herramientas con botones para:
  * Negrita
  * Cursiva
  * Encabezados H1 y H2
  * Cita de bloque
  * Bloque de código
  * Lista con viñetas
  * Lista numerada
  * Enlaces
* Editor Markdown en el panel izquierdo.
* Vista previa HTML en el panel derecho.
* Conversión en tiempo real con actualización automática.

# Arquitectura del sistema

La aplicación se ejecuta completamente en el navegador como frontend-only. No hay backend ni API propios.

El flujo actual es:

1. El usuario escribe Markdown en un `textarea`.
2. React actualiza el estado con `useState`.
3. `marked` convierte el Markdown a HTML.
4. `DOMPurify` sanitiza el HTML generado.
5. El HTML seguro se renderiza en el panel de vista previa usando `dangerouslySetInnerHTML`.

## Componentes principales

| Nombre | Descripción |
| :---- | :---- |
| Editor | `textarea` donde el usuario escribe Markdown. |
| Toolbar | Botones que insertan sintaxis Markdown en la posición del cursor. |
| Parser | `marked` convierte Markdown a HTML. |
| Sanitizador | `DOMPurify` elimina código malicioso del HTML. |
| Preview | Componente React que muestra el HTML limpio. |
| Resizer | Divisor vertical arrastrable para ajustar el ancho de los paneles. |

# Diseño de la interfaz

La interfaz actual presenta un diseño en dos paneles:

* Panel izquierdo: editor Markdown con barra de herramientas.
* Panel derecho: vista previa HTML en tiempo real.
* Barra superior con título y descripción.
* Footer con datos de tecnología y características.

El panel izquierdo y el derecho son redimensionables mediante un divisor arrastrable entre ellos.

# Stack tecnológico

El proyecto usa las siguientes tecnologías reales:

* React 19 para la interfaz de usuario.
* Vite para desarrollo y build.
* Tailwind CSS 4 para estilos.
* `@tailwindcss/typography` para el estilo del contenido HTML renderizado.
* `marked` para convertir Markdown a HTML.
* `DOMPurify` para sanitizar el HTML y prevenir XSS.
* ESLint para calidad de código.

## Dependencias principales

* `react`
* `react-dom`
* `marked`
* `dompurify`
* `tailwindcss`
* `@tailwindcss/typography`

## Scripts disponibles

* `npm run dev` - servidor de desarrollo.
* `npm run build` - build de producción.
* `npm run lint` - verifica linting del proyecto.

# Seguridad

Se utiliza `DOMPurify` para sanitizar el HTML generado por `marked`. Esto evita que scripts o etiquetas maliciosas se inyecten en la vista previa.

# Estrategia de desarrollo y despliegue

## Repositorio

El código se almacena en GitHub como repositorio principal.

## Ciclo de vida y CI/CD

* El proyecto está configurado para desarrollo local con Vite.
* Para compilación de producción se usa `npm run build`.
* No hay configuración explícita de CI/CD en el repositorio, pero la aplicación es compatible con despliegues estáticos.

## Documentación

* El `README.md` describe la instalación, ejecución y uso del proyecto.
* La documentación del código es mínima pero clara en la estructura principal.

| Versión | Fecha | Actividad |
| ----- | ----- | ----- |
| v_001 | 17 Mar 2026 | Versión inicial del diseño y la implementación del editor Markdown con vista previa en tiempo real. |
