/**
 * app.js  v5 — Dos pestañas: APS vertical + SC horizontal
 * Depende de js/data.js  (apsData, scData)
 */
'use strict';

const ANIM = {
    step:   80,   // ms de stagger entre tarjetas
    max:    480,  // cap de stagger
    thresh: 0.10,
    margin: '0px 0px -40px 0px',
};
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ════════════════════════════════════════════════════════════
   PESTAÑAS
   ════════════════════════════════════════════════════════════ */
function initTabs() {
    document.querySelectorAll('.tab').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            // Activar botón
            document.querySelectorAll('.tab').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            // Mostrar panel
            document.querySelectorAll('.tab-panel').forEach(p => {
                p.classList.remove('active');
                p.hidden = true;
            });
            const panel = document.getElementById(`panel-${target}`);
            panel.hidden = false;
            panel.classList.add('active');

            // Inicializar la sección si aún no se ha hecho
            if (target === 'aps'  && !panel.dataset.init) { renderAps();  panel.dataset.init = '1'; }
            if (target === 'sc'   && !panel.dataset.init) { renderSc();   panel.dataset.init = '1'; }
        });
    });
}

/* ════════════════════════════════════════════════════════════
   APS — LÍNEA VERTICAL
   ════════════════════════════════════════════════════════════ */
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
        card.style.setProperty('--stagger', `${Math.min(index * ANIM.step, ANIM.max)}ms`);
    }

    card.innerHTML = `
        <span class="timeline-node" aria-hidden="true">
            <img class="node-icon" src="${item.icon || ''}" alt="">
        </span>
        <div class="content" tabindex="0" role="button"
             aria-expanded="false" aria-label="Ver detalles: ${esc(item.title)}">
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
                    ${item.link ? apslinkBtn(item.link) : ''}
                </div>
            </div>
        </div>`;

    const ct = card.querySelector('.content');
    ct.addEventListener('click', e => { if (!e.target.closest('.link-btn')) toggleAps(card); });
    ct.addEventListener('keydown', e => {
        if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.link-btn')) {
            e.preventDefault(); toggleAps(card);
        }
    });
    return card;
}

function toggleAps(target) {
    const opening = !target.classList.contains('active');
    document.querySelectorAll('#aps-timeline .event-card.active').forEach(c => {
        if (c !== target) { c.classList.remove('active'); c.querySelector('.content').setAttribute('aria-expanded','false'); }
    });
    target.classList.toggle('active', opening);
    target.querySelector('.content').setAttribute('aria-expanded', String(opening));
    if (opening && !reduced) setTimeout(() => target.scrollIntoView({ behavior:'smooth', block:'nearest' }), 100);
}

function setupApsObserver() {
    if (apsObserver) apsObserver.disconnect();
    if (reduced) return;
    apsObserver = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('reveal'); apsObserver.unobserve(e.target); } });
    }, { threshold: ANIM.thresh, rootMargin: ANIM.margin });
    document.querySelectorAll('#aps-timeline .event-card:not(.reveal)').forEach(c => apsObserver.observe(c));
}

/* ════════════════════════════════════════════════════════════
   SC — LÍNEA HORIZONTAL
   ════════════════════════════════════════════════════════════ */
let scObserver  = null;
let activeScIdx = -1;

function renderSc() {
    const rowTop    = document.getElementById('sc-row-top');
    const rowBot    = document.getElementById('sc-row-bottom');
    const photosBar = document.getElementById('sc-braid-photos');
    const datesBar  = document.getElementById('sc-dates');
    if (!rowTop || !rowBot) return;

    rowTop.innerHTML = '';
    rowBot.innerHTML = '';
    photosBar.innerHTML = '';
    datesBar.innerHTML  = '';

    scData.forEach((item, i) => {
        const isTop = i % 2 === 0;
        const num   = i + 1;                          // número del evento (1…19)
        const el    = createScEvent(item, i, isTop, num);
        (isTop ? rowTop : rowBot).appendChild(el);

        // Foto circular en la franja
        const slot = document.createElement('div');
        slot.className = 'sc-photo-slot';
        slot.innerHTML = `<img class="sc-photo" src="${item.image}" alt="" loading="lazy">`;
        photosBar.appendChild(slot);

        // Fecha
        const dItem = document.createElement('div');
        dItem.className = 'sc-date-item';
        dItem.innerHTML = `<span>${esc(item.year)}</span>`;
        datesBar.appendChild(dItem);
    });

    setupScNav();
    setupScObserver();
    setupModal();
}

function createScEvent(item, index, isTop, num) {
    const el = document.createElement('div');
    el.className = 'sc-event';
    el.setAttribute('role', 'listitem');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `${item.year}: ${item.title}`);

    if (reduced) {
        el.classList.add('reveal');
    } else {
        el.style.setProperty('--sc-stagger', `${Math.min(index * ANIM.step, ANIM.max)}ms`);
    }

    /* Caja del ícono:
       - Fondo azul degradado
       - Si hay imagen JPG local (item.icon), se muestra encima tapando el número
       - Si no hay imagen, se muestra el número grande y blanco
       Esto replica exactamente la imagen de referencia:
       algunos eventos muestran imagen, otros muestran número */
    const iconHtml = `
        <div class="sc-icon-box">
            <span class="sc-num">${num}</span>
            ${item.icon ? `<img src="${item.icon}" alt="" loading="lazy">` : ''}
        </div>`;

    const labelHtml = `
        <div class="sc-label">
            <span class="sc-title">${esc(item.title)}</span>
        </div>`;

    const stemHtml = `<div class="sc-stem" aria-hidden="true"></div>`;

    /* FILA TOP: texto arriba → stem → ícono abajo (pegado a la franja)
       FILA BOT: ícono arriba (pegado a la franja) → stem → texto abajo */
    if (isTop) {
        el.innerHTML = labelHtml + stemHtml + iconHtml;
    } else {
        el.innerHTML = iconHtml + stemHtml + labelHtml;
    }

    el.addEventListener('click',   () => openModal(index));
    el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(index); }
    });
    return el;
}

/* Navegación con flechas */
function setupScNav() {
    const scroll   = document.getElementById('sc-scroll');
    const btnPrev  = document.getElementById('sc-prev');
    const btnNext  = document.getElementById('sc-next');
    if (!scroll || !btnPrev || !btnNext) return;

    const STEP = 480;
    btnNext.addEventListener('click', () => scroll.scrollBy({ left:  STEP, behavior: 'smooth' }));
    btnPrev.addEventListener('click', () => scroll.scrollBy({ left: -STEP, behavior: 'smooth' }));
}

function setupScObserver() {
    if (scObserver) scObserver.disconnect();
    if (reduced) return;
    scObserver = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('reveal'); scObserver.unobserve(e.target); } });
    }, { threshold: ANIM.thresh, rootMargin: ANIM.margin });
    document.querySelectorAll('#sc-row-top .sc-event:not(.reveal), #sc-row-bottom .sc-event:not(.reveal)')
        .forEach(c => scObserver.observe(c));
}

/* ── Modal SC ────────────────────────────────────────────────── */
function setupModal() {
    document.getElementById('sc-modal-backdrop')?.addEventListener('click', closeModal);
    document.getElementById('sc-modal-close')?.addEventListener('click',    closeModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !document.getElementById('sc-modal')?.hidden) closeModal();
    });
}

function openModal(index) {
    const item  = scData[index];
    const modal = document.getElementById('sc-modal');
    if (!modal) return;

    document.getElementById('sc-modal-img').src              = item.image || '';
    document.getElementById('sc-modal-img').alt              = `Imagen: ${item.title}`;
    document.getElementById('sc-modal-year').textContent     = item.year;
    document.getElementById('sc-modal-title').textContent    = item.title;
    document.getElementById('sc-modal-desc').textContent     = item.description;

    const linkEl = document.getElementById('sc-modal-link');
    if (item.link) { linkEl.href = item.link; linkEl.hidden = false; }
    else           { linkEl.hidden = true; }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('sc-modal-close')?.focus();
    activeScIdx = index;
}

function closeModal() {
    const modal = document.getElementById('sc-modal');
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (activeScIdx >= 0) {
        const all = document.querySelectorAll('#sc-row-top .sc-event, #sc-row-bottom .sc-event');
        if (all[activeScIdx]) all[activeScIdx].focus();
    }
    activeScIdx = -1;
}

/* ── Helpers ─────────────────────────────────────────────────── */
function esc(str) {
    return String(str)
        .replace(/&/g,'&amp;').replace(/</g,'&lt;')
        .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function apslinkBtn(href) {
    return `
        <a href="${href}" target="_blank" rel="noopener noreferrer" class="link-btn">
            Más información
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
        </a>`;
}

/* ── Inicio ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    // Renderizar la pestaña activa por defecto (APS)
    renderAps();
    document.getElementById('panel-aps').dataset.init = '1';
});
