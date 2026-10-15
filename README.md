# Línea del Tiempo · Atención Primaria en Salud

Línea de tiempo interactiva sobre la evolución de la **Atención Primaria en Salud (APS)** en América Latina y Colombia.

## Características

- Diseño moderno y responsive (escritorio, tablet y móvil).
- 10 etapas históricas con imagen, descripción, conceptos clave y enlace de referencia.
- Infografía horizontal "Un viaje por la historia" con nodos sobre una línea central.
- Modal de detalle por etapa con navegación entre etapas.
- Animaciones suaves de entrada al hacer scroll (IntersectionObserver).
- Accesibilidad: navegación por teclado, foco visible y soporte de `prefers-reduced-motion`.

## Estructura del proyecto

```
linea APS/
├── index.html          # Estructura de la página
├── css/
│   └── styles.css      # Estilos y animaciones
├── js/
│   ├── data.js         # Datos de las 10 etapas de APS
│   └── app.js          # Lógica (render, modal, animaciones)
└── assets/
    └── images/         # Imagen de fondo del hero (aps-hero-bg.jpg)
```

## Cómo ejecutarlo

No requiere servidor ni instalación. Solo abre el archivo **`index.html`** con doble clic
en cualquier navegador (Chrome, Edge, Firefox).

> Las imágenes de cada etapa se cargan desde internet, así que conviene tener conexión para verlas.

## Personalización

- **Colores y velocidades:** variables al inicio de `css/styles.css` (sección `:root`).
- **Contenido de las etapas:** `js/data.js`.
