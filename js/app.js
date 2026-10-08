/**
 * app.js  v6
 * APS  → infografía horizontal tipo "Un viaje por la historia"
 * SC   → 3 tarjetas de etapa (con rango de años) + modal por hito
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
   SC — ILUSTRACIÓN DE FONDO + NODOS (icono + título)
   ════════════════════════════════════════════════════════════ */
let scObserver = null;

/* Íconos SVG de línea, uno por tipo de hito (se asignan por índice global) */
const SC_ICONS = [
    /* megáfono / campaña */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 8a4 4 0 0 1 0 8"/><path d="M8 18v2"/></svg>`,
    /* personas / seminario internacional */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="2.6"/><circle cx="16.5" cy="9" r="2.1"/><path d="M4 19c0-2.8 2.2-4.6 5-4.6s5 1.8 5 4.6"/><path d="M14.5 19c0-2 1-3.3 3-3.3s3 1.3 3 3.3"/></svg>`,
    /* edificio / departamento universitario */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V8l8-4 8 4v13"/><path d="M4 21h16"/><path d="M9 21v-5h6v5"/><path d="M9 11h.01M15 11h.01"/></svg>`,
    /* mano con corazón / promotoras */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-6-4-6-8a3 3 0 0 1 6-1 3 3 0 0 1 6 1c0 4-6 8-6 8z"/></svg>`,
    /* birrete / escuela */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-4 10 4-10 4z"/><path d="M6 11v4c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5v-4"/><path d="M22 9v4"/></svg>`,
    /* idea / determinación social */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 3z"/></svg>`,
    /* libros / seminario ciencias sociales */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a1 1 0 0 1 1-1h5v15H5a1 1 0 0 0-1 1z"/><path d="M20 5a1 1 0 0 0-1-1h-5v15h5a1 1 0 0 1 1 1z"/></svg>`,
    /* documento / tesis */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><path d="M9 13h6M9 17h6M9 9h2"/></svg>`,
    /* bandera / fundación institución */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/></svg>`,
    /* red / asociación */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M12 7v4M12 11l-5.5 5M12 11l5.5 5"/></svg>`,
    /* lazo / memoria */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11s3-2.5 3-5a3 3 0 0 0-6 0c0 2.5 3 5 3 5z"/><path d="M12 11l-4 10M12 11l4 10"/></svg>`,
    /* balanza / derecho - constitución */
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 21h10"/><path d="M5 7h14"/><path d="M5 7l-2.5 5a2.5 2.5 0 0 0 5 0z"/><path d="M19 7l-2.5 5a2.5 2.5 0 0 0 5 0z"/></svg>`,
];

/* Lista plana de los hitos con su etapa e índices */
function flattenScHitos() {
    const flat = [];
    scData.forEach((etapa, ei) => {
        etapa.hitos.forEach((hito, hi) => flat.push({ etapa, ei, hito, hi }));
    });
    return flat;
}

/* Línea de tiempo: 4 etapas en zigzag sobre la cinta tejida.
   Al hacer clic en una etapa se despliegan sus hitos debajo. */
let scActiveEtapa = -1;

function renderSc() {
    const nodesEl = document.getElementById('sc-zig-nodes');
    if (!nodesEl) return;
    nodesEl.innerHTML = '';

    scData.forEach((etapa, ei) => {
        const posClass = ei % 2 === 0 ? 'sc-zig-node--up' : 'sc-zig-node--down';

        const node = document.createElement('div');
        node.className = `sc-zig-node sc-stage--${etapa.etapa} ${posClass} reveal`;
        node.setAttribute('role', 'listitem');
        node.style.setProperty('--sc-stagger', `${Math.min(ei * 120, 600)}ms`);

        node.innerHTML = `
            <button class="sc-zig-node__btn" data-etapa="${ei}"
                    aria-expanded="false" aria-controls="sc-etapa-detail"
                    aria-label="Etapa ${etapa.etapa}, ${esc(etapa.year)}: ${esc(etapa.title)}">
                <span class="sc-zig-node__num">${etapa.etapa}</span>
            </button>
            <span class="sc-zig-node__label">
                <span class="sc-zig-node__kicker">Etapa ${etapa.etapa} · ${esc(etapa.year)}</span>
                <span class="sc-zig-node__title">${esc(etapa.title)}</span>
            </span>`;

        nodesEl.appendChild(node);
    });

    /* Click en cada etapa (todo el nodo) */
    nodesEl.querySelectorAll('.sc-zig-node').forEach(node => {
        const btn = node.querySelector('.sc-zig-node__btn');
        const ei  = parseInt(btn.dataset.etapa);
        node.querySelector('.sc-zig-node__label')?.addEventListener('click', () => selectScEtapa(ei));
        btn.addEventListener('click', () => selectScEtapa(ei));
    });

    setupScModal();

    /* Hitos ocultos por defecto: no se abre ninguna etapa al inicio */
}

/* Mostrar/ocultar los hitos de una etapa en el panel inferior */
function selectScEtapa(ei) {
    const etapa  = scData[ei];
    const detail = document.getElementById('sc-etapa-detail');
    if (!etapa || !detail) return;

    /* Si se vuelve a hacer clic en la etapa activa, se cierra */
    if (scActiveEtapa === ei) {
        scActiveEtapa = -1;
        detail.hidden = true;
        document.querySelectorAll('.sc-zig-node').forEach(n => {
            n.classList.remove('active');
            n.querySelector('.sc-zig-node__btn')?.setAttribute('aria-expanded', 'false');
        });
        return;
    }

    scActiveEtapa = ei;

    /* Marcar el nodo activo */
    document.querySelectorAll('.sc-zig-node').forEach((n, i) => {
        n.classList.toggle('active', i === ei);
        const btn = n.querySelector('.sc-zig-node__btn');
        if (btn) btn.setAttribute('aria-expanded', i === ei ? 'true' : 'false');
    });

    /* Tarjetas de hito */
    const hitosHtml = etapa.hitos.map((hito, hi) => {
        const iconHtml = hito.icon
            ? `<img class="sc-hito__icon-img" src="${hito.icon}" alt="" loading="lazy">`
            : '';
        return `
            <button class="sc-hito sc-hito--${hito.variant || 'teal'}"
                    style="--i:${hi}"
                    data-etapa="${ei}" data-hito="${hi}"
                    aria-label="${esc(hito.year)}: ${esc(hito.title)}. Ver detalle.">
                <span class="sc-hito__icon">${iconHtml}</span>
                <span class="sc-hito__text">
                    <span class="sc-hito__year">${esc(hito.year)}</span>
                    <span class="sc-hito__title">${esc(hito.title)}</span>
                </span>
            </button>`;
    }).join('');

    detail.className = `sc-etapa-detail sc-stage--${etapa.etapa}`;
    detail.innerHTML = `
        <div class="sc-etapa-detail__head">
            <span class="sc-etapa-detail__kicker">Etapa ${etapa.etapa} · ${esc(etapa.year)}</span>
            <h3 class="sc-etapa-detail__title">${esc(etapa.title)}</h3>
            <p class="sc-etapa-detail__intro">${esc(etapa.intro || '')}</p>
        </div>
        <div class="sc-etapa-detail__hitos">${hitosHtml}</div>`;
    detail.hidden = false;

    /* Click en cada hito abre el modal */
    detail.querySelectorAll('.sc-hito').forEach(btn => {
        btn.addEventListener('click', () => {
            openScModal(parseInt(btn.dataset.etapa), parseInt(btn.dataset.hito));
        });
    });
}

/* Hito actualmente abierto (para el retorno de foco al cerrar el modal) */
let scLastTrigger = null;

/* ── Modal SC (detalle de hito) ───────────────────────────────── */
let scFlatIndex = -1;   /* índice actual dentro de flattenScHitos() */

function setupScModal() {
    document.getElementById('sc-modal-backdrop')?.addEventListener('click', closeScModal);
    document.getElementById('sc-modal-close')?.addEventListener('click',    closeScModal);
    document.getElementById('sc-modal-prev')?.addEventListener('click', () => scModalNav(-1));
    document.getElementById('sc-modal-next')?.addEventListener('click', () => scModalNav(+1));

    document.addEventListener('keydown', e => {
        if (document.getElementById('sc-modal')?.hidden) return;
        if (e.key === 'Escape') closeScModal();
        if (e.key === 'ArrowLeft')  scModalNav(-1);
        if (e.key === 'ArrowRight') scModalNav(+1);
    });
}

/* Navegar al hito anterior (-1) o siguiente (+1) sin cerrar el modal */
function scModalNav(dir) {
    const flat = flattenScHitos();
    const curr = flat[scFlatIndex];
    const next = scFlatIndex + dir;
    if (next < 0 || next >= flat.length) return;
    const entry = flat[next];

    /* ¿Cambia de etapa? Mostrar pantalla de transición antes del hito */
    if (curr && entry.ei !== curr.ei && !reduced) {
        showStageSplash(entry.ei, () => openScModal(entry.ei, entry.hi, dir));
    } else {
        openScModal(entry.ei, entry.hi, dir);
    }
}

/* Pantalla breve que anuncia la nueva etapa, luego ejecuta el callback */
function showStageSplash(etapaIdx, done) {
    const etapa  = scData[etapaIdx];
    const splash = document.getElementById('sc-stage-splash');
    const panel  = document.getElementById('sc-modal-panel');
    if (!etapa || !splash) { done(); return; }

    /* El color del splash coincide con la primera variante de la etapa */
    if (panel) panel.dataset.variant = etapa.hitos[0]?.variant || 'teal';

    document.getElementById('sc-stage-splash-num').textContent    = etapa.etapa;
    document.getElementById('sc-stage-splash-kicker').textContent = 'Etapa ' + etapa.etapa;
    document.getElementById('sc-stage-splash-title').textContent  = etapa.title;
    document.getElementById('sc-stage-splash-years').textContent  = etapa.year;

    splash.hidden = false;
    splash.classList.remove('out');
    void splash.offsetWidth;
    splash.classList.add('in');

    /* Función para cerrar el splash y mostrar el hito */
    const finish = () => {
        if (splash.hidden) return;
        window.clearTimeout(showStageSplash._t);
        splash.classList.remove('in');
        splash.classList.add('out');
        window.setTimeout(() => {
            splash.hidden = true;
            splash.classList.remove('out');
            done();
        }, 420);
    };

    /* Botón "Saltar" para no esperar los 5 s */
    const skip = document.getElementById('sc-stage-splash-skip');
    if (skip) skip.onclick = finish;

    /* Auto-cierre tras 3 segundos */
    window.clearTimeout(showStageSplash._t);
    showStageSplash._t = window.setTimeout(finish, 3000);
}

/* Modal de HITO: descripción completa de un hito.
   `dir` (opcional): +1 siguiente, -1 anterior, para animar la transición. */
function openScModal(etapaIdx, hitoIdx, dir) {
    const etapa = scData[etapaIdx];
    const hito  = etapa?.hitos[hitoIdx];
    const modal = document.getElementById('sc-modal');
    if (!hito || !modal) return;

    /* Calcular índice plano para la navegación */
    const flat = flattenScHitos();
    scFlatIndex = flat.findIndex(f => f.ei === etapaIdx && f.hi === hitoIdx);

    /* Recordar el nodo que abrió el modal para devolverle el foco al cerrar */
    scLastTrigger = document.querySelector(
        `.sc-hito[data-etapa="${etapaIdx}"][data-hito="${hitoIdx}"]`);

    /* Variante de color del póster (teal / green / orange) */
    const panel = document.getElementById('sc-modal-panel');
    if (panel) panel.dataset.variant = hito.variant || 'teal';

    /* Animación de transición al navegar entre hitos */
    const content = document.getElementById('sc-modal-content') || panel;
    if (content && dir && !reduced) {
        content.classList.remove('sc-anim-next', 'sc-anim-prev');
        void content.offsetWidth;   /* reinicia la animación */
        content.classList.add(dir > 0 ? 'sc-anim-next' : 'sc-anim-prev');
    }

    document.getElementById('sc-modal-img').src           = hito.icon || etapa.image || '';
    document.getElementById('sc-modal-img').alt           = hito.title;
    document.getElementById('sc-modal-etapa').textContent = `Etapa ${etapa.etapa} · ${etapa.year}`;
    document.getElementById('sc-modal-year').textContent  = hito.year;
    document.getElementById('sc-modal-title').textContent = hito.title;
    document.getElementById('sc-modal-desc').textContent  = hito.description;

    /* Nota opcional del pie (ej. "Héctor Abad Gómez") */
    document.getElementById('sc-modal-footer').textContent = hito.footer || '';

    const linkEl = document.getElementById('sc-modal-link');
    if (hito.link) { linkEl.href = hito.link; linkEl.hidden = false; }
    else           { linkEl.hidden = true; }

    /* Actualizar botones de navegación */
    const btnPrev = document.getElementById('sc-modal-prev');
    const btnNext = document.getElementById('sc-modal-next');
    const counter = document.getElementById('sc-modal-counter');
    if (btnPrev) btnPrev.disabled = scFlatIndex <= 0;
    if (btnNext) btnNext.disabled = scFlatIndex >= flat.length - 1;
    if (counter) counter.textContent = `${scFlatIndex + 1} / ${flat.length}`;

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('sc-modal-close')?.focus();
}

function closeScModal() {
    const modal = document.getElementById('sc-modal');
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (scLastTrigger) scLastTrigger.focus();
    scLastTrigger = null;
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
