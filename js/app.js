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

            if (target === 'aps' && !panel.dataset.init) {
                renderAps();
                panel.dataset.init = '1';
                /* Revelar los nodos visibles de inmediato al cambiar de pestaña */
                setTimeout(() => setupApsObserver(), 50);
            }
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
        const delay = Math.min(i * 90, 700); // stagger 90ms por elemento, máx 700ms

        /* ── Etiqueta SUPERIOR ── */
        const top = document.createElement('div');
        top.className = 'aps-label-top';
        top.style.setProperty('--aps-stagger', `${delay}ms`);
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
        node.style.setProperty('--aps-stagger', `${delay}ms`);
        node.setAttribute('role', 'listitem');
        node.innerHTML = `
            <button class="aps-node__circle"
                    aria-label="Etapa ${item.etapa}: ${item.title}. Haz clic para ver más."
                    data-idx="${i}">
                <img src="${item.image}" alt="${esc(item.title)}" loading="lazy">
                <span class="aps-node__num">${item.etapa}</span>
            </button>`;
        node.querySelector('.aps-node__circle').addEventListener('click', () => openApsModal(i));
        nodes.appendChild(node);

        /* ── Etiqueta INFERIOR ── */
        const bot = document.createElement('div');
        bot.className = 'aps-label-bottom';
        bot.style.setProperty('--aps-stagger', `${delay}ms`);
        if (i % 2 !== 0) {
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
    setupApsObserver();
}

function renderApsValores() {
    if (document.getElementById('aps-valores')) return;
    const wrapper = document.getElementById('aps-scroll')?.closest('.tab-panel--aps');
    if (!wrapper) return;

    const bar = document.createElement('div');
    bar.className = 'aps-valores';
    bar.id = 'aps-valores';

    /* SVG paths inline para los 5 iconos (estilo minimal oscuro como en la imagen) */
    const svgEquidad = `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="13" r="5" stroke="#3a2010" stroke-width="2"/>
        <circle cx="26" cy="13" r="5" stroke="#3a2010" stroke-width="2"/>
        <circle cx="20" cy="22" r="5" stroke="#3a2010" stroke-width="2"/>
        <path d="M7 34c0-4.4 3.1-8 7-8m18 8c0-4.4-3.1-8-7-8m-11 0c1.2-1.3 3-2 5-2s3.8.7 5 2" stroke="#3a2010" stroke-width="2" stroke-linecap="round"/>
    </svg>`;

    const svgParticipacion = `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="12" y1="32" x2="12" y2="18" stroke="#3a2010" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="20" y1="32" x2="20" y2="12" stroke="#3a2010" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="28" y1="32" x2="28" y2="20" stroke="#3a2010" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M8 32h24" stroke="#3a2010" stroke-width="2" stroke-linecap="round"/>
    </svg>`;

    const svgIntersectorialidad = `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 26c2-6 8-10 12-10s10 4 12 10" stroke="#3a2010" stroke-width="2" stroke-linecap="round"/>
        <path d="M15 24c1-3 2.5-5 5-5s4 2 5 5" stroke="#3a2010" stroke-width="2" stroke-linecap="round"/>
        <circle cx="20" cy="24" r="3" fill="#3a2010"/>
        <path d="M8 26 C8 26 7 28 8 30" stroke="#3a2010" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M32 26 C32 26 33 28 32 30" stroke="#3a2010" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`;

    const svgIntegralidad = `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 32 C12 26 8 20 8 15.5 8 11.4 11.4 8 15.5 8c2.4 0 4.6 1.2 6 3.1C22.9 9.2 25.1 8 27.5 8 31.6 8 35 11.4 35 15.5 35 20 31 26 20 32z" fill="#3a2010" opacity="0.85"/>
    </svg>`;

    const svgTerritorio = `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6 C13.4 6 8 11.4 8 18c0 10 12 20 12 20s12-10 12-20C32 11.4 26.6 6 20 6z" stroke="#3a2010" stroke-width="2" fill="none"/>
        <circle cx="20" cy="18" r="4" stroke="#3a2010" stroke-width="2"/>
    </svg>`;

    bar.innerHTML = `
        <div class="aps-valor">
            <div class="aps-valor__icon">${svgEquidad}</div>
            <div class="aps-valor__text">
                <strong class="aps-valor__name">Equidad</strong>
                <span class="aps-valor__desc">Para que todas las personas tengan las mismas oportunidades.</span>
            </div>
        </div>
        <div class="aps-valor__sep" aria-hidden="true"></div>
        <div class="aps-valor">
            <div class="aps-valor__icon">${svgParticipacion}</div>
            <div class="aps-valor__text">
                <strong class="aps-valor__name">Participación</strong>
                <span class="aps-valor__desc">Porque la comunidad hace parte de las decisiones.</span>
            </div>
        </div>
        <div class="aps-valor__sep" aria-hidden="true"></div>
        <div class="aps-valor">
            <div class="aps-valor__icon">${svgIntersectorialidad}</div>
            <div class="aps-valor__text">
                <strong class="aps-valor__name">Intersectorialidad</strong>
                <span class="aps-valor__desc">Trabajando juntos por el bienestar de todas las personas.</span>
            </div>
        </div>
        <div class="aps-valor__sep" aria-hidden="true"></div>
        <div class="aps-valor">
            <div class="aps-valor__icon">${svgIntegralidad}</div>
            <div class="aps-valor__text">
                <strong class="aps-valor__name">Integralidad</strong>
                <span class="aps-valor__desc">Atendiendo a la persona de manera completa en cada etapa de su vida.</span>
            </div>
        </div>
        <div class="aps-valor__sep" aria-hidden="true"></div>
        <div class="aps-valor">
            <div class="aps-valor__icon">${svgTerritorio}</div>
            <div class="aps-valor__text">
                <strong class="aps-valor__name">Territorio</strong>
                <span class="aps-valor__desc">Soluciones pensadas desde y para cada comunidad.</span>
            </div>
        </div>
        <div class="aps-valor__sep" aria-hidden="true"></div>
        <div class="aps-valor aps-valor--frase">
            <p class="aps-valor__frase">
                Cada paso cuenta,<br>
                cada historia transforma,<br>
                <em>cada persona importa.</em>
            </p>
            <span class="aps-valor__heart" aria-hidden="true">🤍</span>
        </div>`;

    wrapper.appendChild(bar);
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

/* IntersectionObserver para los nodos y etiquetas APS */
let apsObserver = null;
function setupApsObserver() {
    if (apsObserver) apsObserver.disconnect();
    if (reduced) {
        document.querySelectorAll('.aps-node,.aps-label-top,.aps-label-bottom').forEach(el => {
            el.classList.add('reveal');
        });
        return;
    }

    /* Usar el scroll container como root para detectar visibilidad horizontal */
    const scrollRoot = document.getElementById('aps-scroll');

    apsObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('reveal');
                apsObserver.unobserve(e.target);
            }
        });
    }, {
        root: scrollRoot,
        threshold: 0.15,
        rootMargin: '0px 30px 0px 30px',
    });

    document.querySelectorAll('.aps-node:not(.reveal),.aps-label-top:not(.reveal),.aps-label-bottom:not(.reveal)')
        .forEach(el => apsObserver.observe(el));
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

/* Conceptos clave por etapa (iconos circulares debajo del texto) */
const APS_CONCEPTS = {
    1: [
        {icon:'🗺️', name:'Organización de servicios'},
        {icon:'🏥', name:'Niveles de atención'},
        {icon:'👥', name:'Acceso a la población'},
    ],
    2: [
        {icon:'💊', name:'Promoción de la salud'},
        {icon:'🛡️', name:'Prevención de la enfermedad'},
        {icon:'🤝', name:'Participación comunitaria'},
        {icon:'🏠', name:'Atención cercana y accesible'},
        {icon:'⚖️', name:'Equidad en salud'},
        {icon:'👨‍👩‍👧', name:'Participación de personas, familias y comunidades'},
    ],
    3: [
        {icon:'🌱', name:'Promoción del bienestar'},
        {icon:'🏘️', name:'Entornos saludables'},
        {icon:'📣', name:'Empoderamiento comunitario'},
        {icon:'🤲', name:'Participación activa'},
    ],
    4: [
        {icon:'💼', name:'Financiación del sistema'},
        {icon:'🏥', name:'Acceso a servicios'},
        {icon:'📋', name:'Organización del sistema'},
        {icon:'🔄', name:'Transformación del modelo'},
    ],
    5: [
        {icon:'⚖️', name:'Equidad en salud'},
        {icon:'🌍', name:'Sistemas integrales'},
        {icon:'👤', name:'Centrado en personas'},
        {icon:'📈', name:'Reducción de desigualdades'},
    ],
    6: [
        {icon:'🏘️', name:'Atención integral'},
        {icon:'🤝', name:'Participación comunitaria'},
        {icon:'🔗', name:'Acción intersectorial'},
        {icon:'📍', name:'Enfoque territorial'},
    ],
    7: [
        {icon:'⚖️', name:'Derecho fundamental'},
        {icon:'🏃', name:'Atención oportuna'},
        {icon:'✅', name:'Atención eficaz'},
        {icon:'💚', name:'Atención de calidad'},
    ],
    8: [
        {icon:'🛤️', name:'Rutas de atención'},
        {icon:'🌐', name:'Compromiso global'},
        {icon:'🏥', name:'Atención accesible'},
        {icon:'🔄', name:'Atención sostenible'},
    ],
    9: [
        {icon:'🏘️', name:'Trabajo territorial'},
        {icon:'👨‍⚕️', name:'Equipos Básicos de Salud'},
        {icon:'📊', name:'Equidad y bienestar'},
        {icon:'🛡️', name:'Prevención'},
    ],
    10: [
        {icon:'👣', name:'Fortalecimiento continuo'},
        {icon:'🤝', name:'Participación comunitaria'},
        {icon:'💚', name:'Atención integral'},
        {icon:'📍', name:'Acercamiento al territorio'},
    ],
};

function openApsModal(index) {
    const item  = apsData[index];
    const modal = document.getElementById('aps-modal');
    if (!modal) return;

    document.getElementById('aps-modal-etapa').textContent    = `ETAPA ${item.etapa}`;
    document.getElementById('aps-modal-year').textContent     = item.year;
    document.getElementById('aps-modal-title').textContent    = item.title;
    document.getElementById('aps-modal-subtitle').textContent = item.subtitle;
    document.getElementById('aps-modal-desc').textContent     = item.description;
    document.getElementById('aps-modal-why').textContent      = item.why;
    document.getElementById('aps-modal-img').src              = item.image || '';
    document.getElementById('aps-modal-img').alt              = item.title;

    /* Título dinámico de la sección central */
    document.getElementById('aps-modal-moment-title').textContent =
        index === 0 ? '¿Qué estaba pasando?' : 'El gran momento del viaje';

    /* Enlace */
    const linkEl = document.getElementById('aps-modal-link');
    if (item.link) { linkEl.href = item.link; linkEl.hidden = false; }
    else           { linkEl.hidden = true; }

    /* Iconos de conceptos */
    const iconsRow = document.getElementById('aps-modal-icons');
    const concepts = APS_CONCEPTS[item.etapa] || [];
    iconsRow.innerHTML = concepts.map(c => `
        <div class="aps-modal__concept">
            <div class="aps-modal__concept-icon">${c.icon}</div>
            <span class="aps-modal__concept-name">${c.name}</span>
        </div>`).join('');

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
