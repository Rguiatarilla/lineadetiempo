/**
 * app.js  v4 — Dos líneas de tiempo independientes
 * Depende de: js/data.js  (apsData, scData)
 */
'use strict';

/* ── Configuración ───────────────────────────────────────────────── */
const ANIM = {
    staggerStep: 80,
    staggerMax:  480,
    threshold:   0.10,
    rootMargin:  '0px 0px -40px 0px',
};
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ════════════════════════════════════════════════════════════════
   1. APS — LÍNEA VERTICAL
   ════════════════════════════════════════════════════════════════ */
let apsObserver = null;

function renderAps() {
    const container = document.getElementById('aps-timeline');
    if (!container) return;
    container.innerHTML = '';

    const frag = document.createDocumentFragment();
    apsData.forEach((item, i) => frag.appendChild(createApsCard(item, i)));
    container.appendChild(frag);
    setupApsObserver();
}

function createApsCard(item, index) {
    const isLeft = index % 2 === 0;
    const card   = document.createElement('div');
    card.className = `event-card ${isLeft ? 'left' : 'right'}`;
    card.setAttribute('role', 'listitem');

    if (reduced) {
        card.classList.add('reveal');
    } else {
        card.style.setProperty('--stagger', `${Math.min(index * ANIM.staggerStep, ANIM.staggerMax)}ms`);
    }

    card.innerHTML = `
        <span class="timeline-node" aria-hidden="true">
            <img class="node-icon" src="${item.icon || ''}" alt="">
        </span>
        <div class="content" tabindex="0" role="button"
             aria-expanded="false"
             aria-label="Ver detalles: ${esc(item.title)}">
            <div class="card-header">
                <div class="header-top">
                    <span class="tag">APS</span>
                    <span class="date">${esc(item.year)}</span>
                </div>
                <div class="title">
                    <span>${esc(item.title)}</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none"
                         stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                         aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>
            <div class="card-body" role="region" aria-label="Detalles: ${esc(item.title)}">
                <div class="card-body-inner">
                    <div class="event-image-wrap">
                        <img src="${item.image}" alt="Imagen: ${esc(item.title)}"
                             class="event-image" loading="lazy">
                    </div>
                    <p class="description">${item.description}</p>
                    ${item.link ? linkBtn(item.link) : ''}
                </div>
            </div>
        </div>`;

    const contentEl = card.querySelector('.content');
    contentEl.addEventListener('click', e => {
        if (e.target.closest('.link-btn')) return;
        toggleApsCard(card);
    });
    contentEl.addEventListener('keydown', e => {
        if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.link-btn')) {
            e.preventDefault();
            toggleApsCard(card);
        }
    });
    return card;
}

function toggleApsCard(target) {
    const opening = !target.classList.contains('active');
    document.querySelectorAll('#aps-timeline .event-card.active').forEach(c => {
        if (c !== target) {
            c.classList.remove('active');
            c.querySelector('.content').setAttribute('aria-expanded', 'false');
        }
    });
    target.classList.toggle('active', opening);
    target.querySelector('.content').setAttribute('aria-expanded', String(opening));
    if (opening && !reduced) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }
}

function setupApsObserver() {
    if (apsObserver) apsObserver.disconnect();
    if (reduced) return;
    apsObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('reveal');
                apsObserver.unobserve(e.target);
            }
        });
    }, { threshold: ANIM.threshold, rootMargin: ANIM.rootMargin });
    document.querySelectorAll('#aps-timeline .event-card:not(.reveal)').forEach(c => apsObserver.observe(c));
}

/* ════════════════════════════════════════════════════════════════
   2. SALUD COLECTIVA — LÍNEA HORIZONTAL
   ════════════════════════════════════════════════════════════════ */
let scObserver  = null;
let activeScIdx = -1;

function renderSc() {
    const container = document.getElementById('sc-timeline');
    if (!container) return;
    container.innerHTML = '';

    const frag = document.createDocumentFragment();
    scData.forEach((item, i) => frag.appendChild(createScEvent(item, i)));
    container.appendChild(frag);
    setupScObserver();
    setupModal();
}

function createScEvent(item, index) {
    const el = document.createElement('div');
    el.className = 'sc-event';
    el.setAttribute('role', 'listitem');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `${item.year}: ${item.title}`);

    if (reduced) {
        el.classList.add('reveal');
    } else {
        el.style.setProperty('--sc-stagger', `${Math.min(index * ANIM.staggerStep, ANIM.staggerMax)}ms`);
    }

    el.innerHTML = `
        <div class="sc-node">
            <img src="${item.icon || ''}" alt="" loading="lazy">
        </div>
        <div class="sc-stem" aria-hidden="true"></div>
        <div class="sc-label">
            <span class="sc-year">${esc(item.year)}</span>
            <span class="sc-title">${esc(item.title)}</span>
        </div>`;

    el.addEventListener('click',    () => openModal(index));
    el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(index); }
    });
    return el;
}

function setupScObserver() {
    if (scObserver) scObserver.disconnect();
    if (reduced) return;
    scObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('reveal');
                scObserver.unobserve(e.target);
            }
        });
    }, { threshold: ANIM.threshold, rootMargin: ANIM.rootMargin });
    document.querySelectorAll('#sc-timeline .sc-event:not(.reveal)').forEach(c => scObserver.observe(c));
}

/* ── Modal SC ────────────────────────────────────────────────────── */
function setupModal() {
    const modal    = document.getElementById('sc-modal');
    const backdrop = modal.querySelector('.sc-modal__backdrop');
    const closeBtn = modal.querySelector('.sc-modal__close');

    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click',  closeModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
}

function openModal(index) {
    const item  = scData[index];
    const modal = document.getElementById('sc-modal');

    document.getElementById('sc-modal-img').src = item.image || '';
    document.getElementById('sc-modal-img').alt = `Imagen: ${item.title}`;
    document.getElementById('sc-modal-year').textContent  = item.year;
    document.getElementById('sc-modal-title').textContent = item.title;
    document.getElementById('sc-modal-desc').textContent  = item.description;

    const linkEl = document.getElementById('sc-modal-link');
    if (item.link) {
        linkEl.href  = item.link;
        linkEl.hidden = false;
    } else {
        linkEl.hidden = true;
    }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.sc-modal__close').focus();
    activeScIdx = index;
}

function closeModal() {
    const modal = document.getElementById('sc-modal');
    modal.hidden = true;
    document.body.style.overflow = '';
    // Devolver foco al evento que abrió el modal
    if (activeScIdx >= 0) {
        const events = document.querySelectorAll('#sc-timeline .sc-event');
        if (events[activeScIdx]) events[activeScIdx].focus();
    }
    activeScIdx = -1;
}

/* ── Helpers ─────────────────────────────────────────────────────── */
function esc(str) {
    return String(str)
        .replace(/&/g,'&amp;').replace(/</g,'&lt;')
        .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
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

/* ── Inicio ──────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    renderAps();
    renderSc();
});
