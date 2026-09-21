/**
 * app.js — Línea del Tiempo: APS y Salud Colectiva  v3
 * Depende de: js/data.js (timelineData)
 */

'use strict';

// ── Configuración ─────────────────────────────────────────────────────────────
const ANIM = {
    staggerStep: 90,     // ms entre cada tarjeta al revelarse
    staggerMax:  500,    // cap máximo de delay
    threshold:   0.10,   // % de la tarjeta visible para disparar reveal
    rootMargin:  '0px 0px -50px 0px',
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let scrollObserver = null;

// ── Render del timeline ───────────────────────────────────────────────────────
function renderTimeline(filter = 'all') {
    const container = document.getElementById('timeline');
    container.innerHTML = '';

    const data = filter === 'all'
        ? timelineData
        : timelineData.filter(d => d.category === filter);

    const frag = document.createDocumentFragment();
    data.forEach((item, i) => frag.appendChild(createCard(item, i % 2 === 0, i)));
    container.appendChild(frag);

    setupScrollObserver();
}

// ── Crear tarjeta ─────────────────────────────────────────────────────────────
function createCard(item, isLeft, index) {
    const card = document.createElement('div');
    card.className = `event-card ${isLeft ? 'left' : 'right'}`;
    card.setAttribute('data-category', item.category);
    card.setAttribute('role', 'listitem');

    if (prefersReducedMotion) {
        // Sin animaciones: mostrar directo
        card.classList.add('reveal');
    } else {
        // Stagger: cada tarjeta aparece un poco después
        const delay = Math.min(index * ANIM.staggerStep, ANIM.staggerMax);
        card.style.setProperty('--stagger', `${delay}ms`);
    }

    card.innerHTML = `
        <span class="timeline-node" aria-hidden="true">
            ${nodeIcon(item.category, item)}
        </span>

        <div class="content"
             tabindex="0"
             role="button"
             aria-expanded="false"
             aria-label="Ver detalles: ${escHtml(item.title)}">

            <div class="card-header">
                <div class="header-top">
                    <span class="tag">${escHtml(item.tag)}</span>
                    <span class="date">${escHtml(item.year)}</span>
                </div>
                <div class="title">
                    <span>${escHtml(item.title)}</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none"
                         stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                         aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>

            <div class="card-body"
                 role="region"
                 aria-label="Detalles: ${escHtml(item.title)}">
                <div class="card-body-inner">
                    <div class="event-image-wrap">
                        <img src="${item.image}"
                             alt="Imagen de referencia: ${escHtml(item.title)}"
                             class="event-image"
                             loading="lazy"
                             crossorigin="anonymous">
                    </div>
                    <p class="description">${item.description}</p>
                    ${item.link ? linkBtn(item.link) : ''}
                </div>
            </div>
        </div>`;

    // Eventos de interacción
    const contentEl = card.querySelector('.content');

    contentEl.addEventListener('click', (e) => {
        if (e.target.closest('.link-btn')) return;
        toggleCard(card);
    });

    contentEl.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.link-btn')) {
            e.preventDefault();
            toggleCard(card);
        }
    });

    return card;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function escHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/**
 * Devuelve el ícono SVG del nodo según la categoría.
 *  - aps: estetoscopio (Atención Primaria en Salud)
 *  - sc:  comunidad de personas (Salud Colectiva)
 * Iconos rellenos estilo emblema/infografía.
 * @param {string} category - 'aps' | 'sc'
 * @returns {string} markup SVG
 */
/* ═══════════════════════════════════════════════════════════════════
   IMÁGENES DE LOS ICONOS (JPG de 70×70 px que envía la empresa)
   ───────────────────────────────────────────────────────────────────
   1) Guarda las imágenes en la carpeta:  assets/images/
   2) Cambia aquí abajo el nombre del archivo por el que te pasen.
   3) Si un evento necesita un ícono distinto, agrégale  icon: "..."
      en su objeto dentro de js/data.js y ese tendrá prioridad.
   ═══════════════════════════════════════════════════════════════════ */
/* Cada evento define su propia imagen en el campo  icon:  dentro de
   js/data.js  (ej: "assets/images/icono-01-sc.jpg").
   Son 29 imágenes JPG de 70×70 px, una por hito.
   Para cambiarlas: reemplaza el archivo JPG en assets/images/
   manteniendo el mismo nombre, o cambia la ruta en data.js. */
function nodeIcon(category, item) {
    const src = (item && item.icon) ? item.icon : '';
    // Sin crossorigin: son imágenes locales (se bloquearían con file://)
    return `<img class="node-icon" src="${src}" alt="">`;
}

function linkBtn(href) {
    return `
        <a href="${href}" target="_blank" rel="noopener noreferrer" class="link-btn">
            Más información
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
        </a>`;
}

// ── Toggle acordeón ───────────────────────────────────────────────────────────
function toggleCard(target) {
    const opening = !target.classList.contains('active');

    // Cerrar la que esté abierta
    document.querySelectorAll('.event-card.active').forEach(c => {
        if (c !== target) {
            c.classList.remove('active');
            c.querySelector('.content').setAttribute('aria-expanded', 'false');
        }
    });

    target.classList.toggle('active', opening);
    target.querySelector('.content').setAttribute('aria-expanded', String(opening));

    // Scroll suave al abrir para que la tarjeta quede visible
    if (opening && !prefersReducedMotion) {
        setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

// ── IntersectionObserver ──────────────────────────────────────────────────────
function setupScrollObserver() {
    if (scrollObserver) scrollObserver.disconnect();
    if (prefersReducedMotion) return;

    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                scrollObserver.unobserve(entry.target); // desconectar tras revelar
            }
        });
    }, {
        threshold:  ANIM.threshold,
        rootMargin: ANIM.rootMargin,
    });

    document.querySelectorAll('.event-card:not(.reveal)').forEach(c => {
        scrollObserver.observe(c);
    });
}

// ── Filtros ───────────────────────────────────────────────────────────────────
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTimeline(btn.getAttribute('data-filter'));
    });
});

// ── Inicio ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => renderTimeline());
