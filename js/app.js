/**
 * app.js  v6
 * APS  → infografía horizontal tipo "Un viaje por la historia"
 * SC   → línea horizontal con franja multicolor (sin números)
 * Depende de js/data.js (apsData, scData)
 */
'use strict';

const ANIM = { step:80, max:480, thresh:0.10, margin:'0px 0px -40px 0px' };
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ════════════════════════════════════════════════════════════
   PESTAÑAS
   ════════════════════════════════════════════════════════════ */
function initTabs() {
    document.querySelectorAll('.tab').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            document.querySelectorAll('.tab').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            document.querySelectorAll('.tab-panel').forEach(p => {
                p.classList.remove('active');
                p.hidden = true;
            });
            const panel = document.getElementById(`panel-${target}`);
            panel.hidden = false;
            panel.classList.add('active');

            if (target === 'aps' && !panel.dataset.init) { renderAps(); panel.dataset.init = '1'; }
            if (target === 'sc'  && !panel.dataset.init) { renderSc();  panel.dataset.init = '1'; }
        });
    });
}

/* ════════════════════════════════════════════════════════════
   APS — INFOGRAFÍA HORIZONTAL (Un viaje por la historia)
   ════════════════════════════════════════════════════════════ */
let apsModalIdx = -1;

function renderAps() {
    const labelsTop = document.getElementById('aps-labels-top');
    const nodes     = document.getElementById('aps-nodes');
    const labelsBot = document.getElementById('aps-labels-bottom');
    if (!labelsTop || !nodes || !labelsBot) return;

    labelsTop.innerHTML = '';
    nodes.innerHTML     = '';
    labelsBot.innerHTML = '';

    apsData.forEach((item, i) => {
        /* ── Etiqueta SUPERIOR (etapa tag + título + desc corta) ── */
        const top = document.createElement('div');
        top.className = 'aps-label-top';
        // Solo pares arriba (0,2,4…), impares quedan vacíos arriba
        if (i % 2 === 0) {
            top.innerHTML = `
                <span class="aps-etapa-tag">Etapa ${item.etapa}</span>
                <span class="aps-label-title">${esc(item.title)}</span>
                <span class="aps-label-desc">${esc(item.subtitle)}</span>`;
        }
        labelsTop.appendChild(top);

        /* ── Nodo circular ── */
        const node = document.createElement('div');
        node.className = 'aps-node';
        node.setAttribute('role', 'listitem');
        node.innerHTML = `
            <button class="aps-node__circle"
                    aria-label="Etapa ${item.etapa}: ${item.title}. Haz clic para ver más."
                    data-idx="${i}">
                ${item.icon
                    ? `<img src="${item.icon}" alt="" loading="lazy">`
                    : `<span style="font-size:.7rem;font-weight:800;color:#c0392b">${item.year}</span>`}
            </button>`;
        node.querySelector('.aps-node__circle').addEventListener('click', () => openApsModal(i));
        nodes.appendChild(node);

        /* ── Etiqueta INFERIOR (año + subtítulo + "Conocer más") ── */
        const bot = document.createElement('div');
        bot.className = 'aps-label-bottom';
        if (i % 2 !== 0) {
            // Impares van abajo
            bot.innerHTML = `
                <span class="aps-etapa-tag" style="font-size:.55rem">Etapa ${item.etapa}</span>
                <span class="aps-year-badge">${esc(item.year)}</span>
                <span class="aps-label-subtitle">${esc(item.subtitle)}</span>
                <button class="aps-know-more" data-idx="${i}">Conocer más →</button>`;
        } else {
            bot.innerHTML = `
                <span class="aps-year-badge">${esc(item.year)}</span>
                <button class="aps-know-more" data-idx="${i}">Conocer más →</button>`;
        }
        bot.querySelectorAll('.aps-know-more').forEach(b => {
            b.addEventListener('click', () => openApsModal(parseInt(b.dataset.idx)));
        });
        labelsBot.appendChild(bot);
    });

    /* Valores en el pie */
    renderApsValores();
    setupApsNav();
    setupApsModal();
}

function renderApsValores() {
    // Añade barra de valores si no existe
    if (document.getElementById('aps-valores')) return;
    const wrap = document.getElementById('aps-scroll')?.closest('.aps-wrapper');
    if (!wrap) return;
    const bar = document.createElement('div');
    bar.className = 'aps-valores';
    bar.id = 'aps-valores';
    bar.innerHTML = `
        <div class="aps-valor">
            <span class="aps-valor__icon">⚖️</span>
            <span class="aps-valor__name">Equidad</span>
            <span class="aps-valor__desc">Para que todas las personas tengan las mismas oportunidades.</span>
        </div>
        <div class="aps-valor">
            <span class="aps-valor__icon">🤝</span>
            <span class="aps-valor__name">Participación</span>
            <span class="aps-valor__desc">Porque la comunidad hace parte de las decisiones.</span>
        </div>
        <div class="aps-valor">
            <span class="aps-valor__icon">🌐</span>
            <span class="aps-valor__name">Intersectorialidad</span>
            <span class="aps-valor__desc">Trabajando juntos por el bienestar de todas las personas.</span>
        </div>
        <div class="aps-valor">
            <span class="aps-valor__icon">💚</span>
            <span class="aps-valor__name">Integralidad</span>
            <span class="aps-valor__desc">Atendiendo a la persona de manera completa en cada etapa de su vida.</span>
        </div>
        <div class="aps-valor">
            <span class="aps-valor__icon">📍</span>
            <span class="aps-valor__name">Territorio</span>
            <span class="aps-valor__desc">Soluciones pensadas desde y para cada comunidad.</span>
        </div>
        <div class="aps-valor" style="flex:2;min-width:200px">
            <span class="aps-valor__icon">✨</span>
            <span class="aps-valor__name" style="font-size:.7rem;line-height:1.4">
                Cada paso cuenta,<br>cada historia transforma,<br>cada persona importa.
            </span>
        </div>`;
    wrap.parentElement.appendChild(bar);
}

function setupApsNav() {
    const scroll  = document.getElementById('aps-scroll');
    const btnPrev = document.getElementById('aps-prev');
    const btnNext = document.getElementById('aps-next');
    if (!scroll || !btnPrev || !btnNext) return;
    const STEP = 480;
    btnNext.addEventListener('click', () => scroll.scrollBy({ left:  STEP, behavior:'smooth' }));
    btnPrev.addEventListener('click', () => scroll.scrollBy({ left: -STEP, behavior:'smooth' }));
}

/* ── Modal APS ────────────────────────────────────────────────── */
function setupApsModal() {
    document.getElementById('aps-modal-backdrop')?.addEventListener('click', closeApsModal);
    document.getElementById('aps-modal-close')?.addEventListener('click',    closeApsModal);
    document.getElementById('aps-modal-back')?.addEventListener('click',     closeApsModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !document.getElementById('aps-modal')?.hidden) closeApsModal();
    });
}

function openApsModal(index) {
    const item  = apsData[index];
    const modal = document.getElementById('aps-modal');
    if (!modal) return;

    document.getElementById('aps-modal-etapa').textContent    = `Etapa ${item.etapa}`;
    document.getElementById('aps-modal-year').textContent     = item.year;
    document.getElementById('aps-modal-title').textContent    = item.title;
    document.getElementById('aps-modal-subtitle').textContent = item.subtitle;
    document.getElementById('aps-modal-desc').textContent     = item.description;
    document.getElementById('aps-modal-why').textContent      = item.why;
    document.getElementById('aps-modal-img').src              = item.image || '';
    document.getElementById('aps-modal-img').alt              = item.title;

    const linkEl = document.getElementById('aps-modal-link');
    if (item.link) { linkEl.href = item.link; linkEl.hidden = false; }
    else           { linkEl.hidden = true; }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('aps-modal-close')?.focus();
    apsModalIdx = index;
}

function closeApsModal() {
    const modal = document.getElementById('aps-modal');
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (apsModalIdx >= 0) {
        const nodes = document.querySelectorAll('.aps-node__circle');
        if (nodes[apsModalIdx]) nodes[apsModalIdx].focus();
    }
    apsModalIdx = -1;
}

/* ════════════════════════════════════════════════════════════
   SC — LÍNEA HORIZONTAL (franja multicolor, sin números)
   ════════════════════════════════════════════════════════════ */
let scObserver  = null;
let activeScIdx = -1;

function renderSc() {
    const rowTop    = document.getElementById('sc-row-top');
    const rowBot    = document.getElementById('sc-row-bottom');
    const photosBar = document.getElementById('sc-braid-photos');
    const datesBar  = document.getElementById('sc-dates');
    if (!rowTop || !rowBot) return;

    rowTop.innerHTML    = '';
    rowBot.innerHTML    = '';
    photosBar.innerHTML = '';
    datesBar.innerHTML  = '';

    scData.forEach((item, i) => {
        const isTop = i % 2 === 0;
        const el    = createScEvent(item, i, isTop);
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
    setupScModal();
}

function createScEvent(item, index, isTop) {
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

    /* Solo imagen JPG (sin número).
       Fondo azul como fallback si no hay imagen. */
    const iconHtml = `
        <div class="sc-icon-box">
            ${item.icon ? `<img src="${item.icon}" alt="" loading="lazy">` : ''}
        </div>`;
    const labelHtml = `
        <div class="sc-label">
            <span class="sc-title">${esc(item.title)}</span>
        </div>`;
    const stemHtml = `<div class="sc-stem" aria-hidden="true"></div>`;

    /* Fila TOP: texto arriba → stem → ícono abajo (pegado a la franja)
       Fila BOT: ícono arriba (pegado a la franja) → stem → texto abajo */
    el.innerHTML = isTop
        ? labelHtml + stemHtml + iconHtml
        : iconHtml  + stemHtml + labelHtml;

    el.addEventListener('click',   () => openScModal(index));
    el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openScModal(index); }
    });
    return el;
}

function setupScNav() {
    const scroll  = document.getElementById('sc-scroll');
    const btnPrev = document.getElementById('sc-prev');
    const btnNext = document.getElementById('sc-next');
    if (!scroll || !btnPrev || !btnNext) return;
    const STEP = 480;
    btnNext.addEventListener('click', () => scroll.scrollBy({ left:  STEP, behavior:'smooth' }));
    btnPrev.addEventListener('click', () => scroll.scrollBy({ left: -STEP, behavior:'smooth' }));
}

function setupScObserver() {
    if (scObserver) scObserver.disconnect();
    if (reduced) return;
    scObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('reveal'); scObserver.unobserve(e.target); }
        });
    }, { threshold: ANIM.thresh, rootMargin: ANIM.margin });
    document.querySelectorAll('#sc-row-top .sc-event:not(.reveal), #sc-row-bottom .sc-event:not(.reveal)')
        .forEach(c => scObserver.observe(c));
}

/* ── Modal SC ─────────────────────────────────────────────────── */
function setupScModal() {
    document.getElementById('sc-modal-backdrop')?.addEventListener('click', closeScModal);
    document.getElementById('sc-modal-close')?.addEventListener('click',    closeScModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !document.getElementById('sc-modal')?.hidden) closeScModal();
    });
}

function openScModal(index) {
    const item  = scData[index];
    const modal = document.getElementById('sc-modal');
    if (!modal) return;

    document.getElementById('sc-modal-img').src           = item.image || '';
    document.getElementById('sc-modal-img').alt           = item.title;
    document.getElementById('sc-modal-year').textContent  = item.year;
    document.getElementById('sc-modal-title').textContent = item.title;
    document.getElementById('sc-modal-desc').textContent  = item.description;

    const linkEl = document.getElementById('sc-modal-link');
    if (item.link) { linkEl.href = item.link; linkEl.hidden = false; }
    else           { linkEl.hidden = true; }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('sc-modal-close')?.focus();
    activeScIdx = index;
}

function closeScModal() {
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

/* ════════════════════════════════════════════════════════════
   HELPERS
   ════════════════════════════════════════════════════════════ */
function esc(str) {
    return String(str)
        .replace(/&/g,'&amp;').replace(/</g,'&lt;')
        .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ════════════════════════════════════════════════════════════
   INICIO
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    renderAps();
    document.getElementById('panel-aps').dataset.init = '1';
});
