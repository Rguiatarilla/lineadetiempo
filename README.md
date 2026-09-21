# Línea del Tiempo · APS y Salud Colectiva

Línea de tiempo interactiva sobre la evolución de la **Atención Primaria en Salud (APS)** y la **Salud Colectiva** en América Latina y Colombia.

## Características

- Diseño moderno y responsive (escritorio, tablet y móvil).
- 29 hitos históricos con imagen, descripción y enlace de referencia.
- Filtros por categoría (APS / Salud Colectiva).
- Animaciones suaves de entrada al hacer scroll (IntersectionObserver).
- Nodos con iconos personalizados sobre una línea central trenzada.
- Accesibilidad: navegación por teclado, foco visible y soporte de `prefers-reduced-motion`.

## Estructura del proyecto

```
tiempo2/
├── index.html          # Estructura de la página
├── css/
│   └── styles.css      # Estilos y animaciones
├── js/
│   ├── data.js         # Datos de los 29 hitos
│   └── app.js          # Lógica (render, filtros, animaciones)
└── assets/
    └── images/         # Iconos de los nodos + trenza (braid.svg)
```

## Cómo ejecutarlo

Por seguridad del navegador, las imágenes locales requieren un servidor. Desde la carpeta del proyecto:

```bash
python -m http.server 3000
```

Luego abre: <http://localhost:3000>

## Personalización

- **Iconos de los nodos:** reemplaza los archivos JPG en `assets/images/` (70×70 px) manteniendo el mismo nombre.
- **Colores y velocidades:** variables al inicio de `css/styles.css` (sección `:root`).
- **Contenido de los hitos:** `js/data.js`.
