/**
 * app.js — Línea de tiempo de Atención Primaria en Salud
 * APS → infografía horizontal tipo "Un viaje por la historia"
 * Depende de js/data.js (apsData)
 */
'use strict';

const ANIM = { step:80, max:480, thresh:0.10, margin:'0px 0px -40px 0px' };
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ════════════════════════════════════════════════════════════
   APS — INFOGRAFÍA HORIZONTAL (Un viaje por la historia)
   ════════════════════════════════════════════════════════════ */
let apsModalIdx = -1;

/* Iconos SVG temáticos por etapa de APS (línea, color heredado) */
const APS_ICONS = {
    /* 1 · 1920 Informe Dawson → documento/informe */
    1: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><path d="M9 12h6M9 16h6M9 8h2"/></svg>`,
    /* 2 · 1978 Alma-Ata → declaración mundial / globo con cinta */
    2: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/></svg>`,
    /* 3 · 1986 Carta de Ottawa → promoción / hoja-corazón */
    3: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 7-10 3 1 7 5 7 10a7 7 0 0 1-7 7z"/><path d="M11 20v-9"/></svg>`,
    /* 4 · 1993 Ley 100 → sistema/ley (edificio + balanza) */
    4: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V9l8-5 8 5v12"/><path d="M4 21h16"/><path d="M10 21v-5h4v5"/><path d="M9 11h.01M15 11h.01"/></svg>`,
    /* 5 · 2008 Informe OMS → agenda mundial / globo con lupa */
    5: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M11 4a11 11 0 0 1 0 14M4 11h14"/><path d="m20 20-3-3"/></svg>`,
    /* 6 · 2011 Ley 1438 → comunidad / personas */
    6: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="2.6"/><circle cx="16.5" cy="9" r="2.1"/><path d="M4 19c0-2.8 2.2-4.6 5-4.6s5 1.8 5 4.6"/><path d="M14.5 19c0-2 1-3.3 3-3.3s3 1.3 3 3.3"/></svg>`,
    /* 7 · 2015 Ley Estatutaria → derecho / balanza */
    7: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 21h10"/><path d="M5 7h14"/><path d="M5 7 2.5 12a2.5 2.5 0 0 0 5 0z"/><path d="M19 7l-2.5 5a2.5 2.5 0 0 0 5 0z"/></svg>`,
    /* 8 · 2016-2018 PAIS/RIAS/Astaná → rutas de atención */
    8: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h6a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h7"/></svg>`,
    /* 9 · 2022-2024 Plan Decenal → equipos básicos de salud (maletín médico) */
    9: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M12 11v4M10 13h4"/></svg>`,
    /* 10 · 2025-2026 Consolidación en territorio → ubicación/territorio */
    10:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
};

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
        const apsIcon = APS_ICONS[item.etapa] || '';
        node.innerHTML = `
            <button class="aps-node__circle"
                    aria-label="Etapa ${item.etapa}: ${item.title}. Haz clic para ver más."
                    data-idx="${i}">
                <span class="aps-node__icon">${apsIcon}</span>
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
    document.getElementById('aps-modal-prev')?.addEventListener('click', () => apsModalNav(-1));
    document.getElementById('aps-modal-next')?.addEventListener('click', () => apsModalNav(+1));
    document.addEventListener('keydown', e => {
        if (document.getElementById('aps-modal')?.hidden) return;
        if (e.key === 'Escape') closeApsModal();
        if (e.key === 'ArrowLeft')  apsModalNav(-1);
        if (e.key === 'ArrowRight') apsModalNav(+1);
    });
}

/* Navegar a la etapa anterior (-1) o siguiente (+1) sin cerrar el modal */
function apsModalNav(dir) {
    const next = apsModalIdx + dir;
    if (next < 0 || next >= apsData.length) return;
    openApsModal(next, dir);
}

/* Conceptos clave por etapa (iconos circulares debajo del texto) */
const APS_CONCEPTS = {
    1: [
        {icon:'🗺️', name:'Organización de servicios', desc:'Ordenar los servicios de salud en una red coordinada para que funcionen de manera articulada.'},
        {icon:'🏥', name:'Niveles de atención', desc:'Clasificar la atención según su complejidad, desde lo básico y cercano hasta lo especializado.'},
        {icon:'👥', name:'Acceso a la población', desc:'Acercar los servicios de salud a las personas según sus necesidades reales.'},
    ],
    2: [
        {icon:'💊', name:'Promoción de la salud', desc:'Fomentar hábitos y condiciones que mantengan sanas a las personas, no solo tratar enfermedades.'},
        {icon:'🛡️', name:'Prevención de la enfermedad', desc:'Actuar antes de que aparezca la enfermedad para evitar o reducir sus riesgos.'},
        {icon:'🤝', name:'Participación comunitaria', desc:'Involucrar a la comunidad en las decisiones y el cuidado de su propia salud.'},
        {icon:'🏠', name:'Atención cercana y accesible', desc:'Llevar la atención al entorno de las personas, fácil de alcanzar y usar.'},
        {icon:'⚖️', name:'Equidad en salud', desc:'Dar a cada persona lo que necesita para tener las mismas oportunidades de salud.'},
        {icon:'👨‍👩‍👧', name:'Personas, familias y comunidades', desc:'Entender la salud desde las personas, sus familias y sus comunidades.'},
    ],
    3: [
        {icon:'🌱', name:'Promoción del bienestar', desc:'Impulsar condiciones de vida que favorezcan una mejor calidad de vida.'},
        {icon:'🏘️', name:'Entornos saludables', desc:'Crear espacios (hogar, trabajo, barrio) que protejan y mejoren la salud.'},
        {icon:'📣', name:'Empoderamiento comunitario', desc:'Dar a la comunidad voz y capacidad para decidir sobre su salud.'},
        {icon:'🤲', name:'Participación activa', desc:'La comunidad no solo recibe, también actúa en el cuidado de la salud.'},
    ],
    4: [
        {icon:'💼', name:'Financiación del sistema', desc:'Definir cómo se paga y sostiene económicamente el sistema de salud.'},
        {icon:'🏥', name:'Acceso a servicios', desc:'Garantizar que las personas puedan usar los servicios cuando los necesiten.'},
        {icon:'📋', name:'Organización del sistema', desc:'Reorganizar cómo se administran y prestan los servicios de salud.'},
        {icon:'🔄', name:'Transformación del modelo', desc:'Cambiar la forma en que se entiende y entrega la salud en el país.'},
    ],
    5: [
        {icon:'⚖️', name:'Equidad en salud', desc:'Reducir las diferencias injustas en el acceso y los resultados de salud.'},
        {icon:'🌍', name:'Sistemas integrales', desc:'Construir sistemas que atiendan a la persona de forma completa y continua.'},
        {icon:'👤', name:'Centrado en personas', desc:'Poner a las personas y sus necesidades en el centro de la atención.'},
        {icon:'📈', name:'Reducción de desigualdades', desc:'Cerrar las brechas de salud entre distintos grupos de población.'},
    ],
    6: [
        {icon:'🏘️', name:'Atención integral', desc:'Atender la salud de manera completa, en todas las etapas de la vida.'},
        {icon:'🤝', name:'Participación comunitaria', desc:'La comunidad participa en la planeación y el cuidado de su salud.'},
        {icon:'🔗', name:'Acción intersectorial', desc:'Trabajar entre varios sectores (salud, educación, ambiente) por el bienestar.'},
        {icon:'📍', name:'Enfoque territorial', desc:'Adaptar la salud a las características y necesidades de cada territorio.'},
    ],
    7: [
        {icon:'⚖️', name:'Derecho fundamental', desc:'La salud se reconoce como un derecho autónomo e irrenunciable de todos.'},
        {icon:'🏃', name:'Atención oportuna', desc:'Recibir la atención en el momento adecuado, sin demoras que la perjudiquen.'},
        {icon:'✅', name:'Atención eficaz', desc:'Que la atención realmente resuelva y responda a los problemas de salud.'},
        {icon:'💚', name:'Atención de calidad', desc:'Servicios seguros, dignos y centrados en el bienestar de la persona.'},
    ],
    8: [
        {icon:'🛤️', name:'Rutas de atención', desc:'Caminos claros que organizan la promoción, prevención, atención y cuidado.'},
        {icon:'🌐', name:'Compromiso global', desc:'Astaná reafirma a nivel mundial el compromiso con la Atención Primaria.'},
        {icon:'🏥', name:'Atención accesible', desc:'Servicios al alcance de todas las personas, sin barreras.'},
        {icon:'🔄', name:'Atención sostenible', desc:'Un modelo que se puede mantener en el tiempo de forma estable.'},
    ],
    9: [
        {icon:'🏘️', name:'Trabajo territorial', desc:'Llevar las acciones de salud directamente a cada territorio y comunidad.'},
        {icon:'👨‍⚕️', name:'Equipos Básicos de Salud', desc:'Equipos que acercan el cuidado a los hogares y zonas con más necesidades.'},
        {icon:'📊', name:'Equidad y bienestar', desc:'Orientar las acciones hacia la equidad y el bienestar de la población.'},
        {icon:'🛡️', name:'Prevención', desc:'Priorizar la promoción de la salud y la prevención de la enfermedad.'},
    ],
    10: [
        {icon:'👣', name:'Fortalecimiento continuo', desc:'La APS se refuerza día a día para construir salud junto a las comunidades.'},
        {icon:'🤝', name:'Participación comunitaria', desc:'Las comunidades siguen siendo protagonistas en el cuidado de su salud.'},
        {icon:'💚', name:'Atención integral', desc:'Cuidado completo de promoción, prevención y atención en cada etapa de la vida.'},
        {icon:'📍', name:'Acercamiento al territorio', desc:'Los equipos llevan el cuidado directamente a los hogares y territorios.'},
    ],
};

function openApsModal(index, dir) {
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

    /* Iconos de conceptos (clicables, muestran una pequeña descripción) */
    const iconsRow = document.getElementById('aps-modal-icons');
    const concepts = APS_CONCEPTS[item.etapa] || [];
    iconsRow.innerHTML = concepts.map((c, ci) => `
        <button type="button" class="aps-modal__concept" data-ci="${ci}"
                aria-expanded="false" aria-controls="aps-concept-info">
            <div class="aps-modal__concept-icon">${c.icon}</div>
            <span class="aps-modal__concept-name">${esc(c.name)}</span>
            <span class="aps-modal__concept-hint" aria-hidden="true">ⓘ</span>
        </button>`).join('')
        + `<div class="aps-modal__concept-info" id="aps-concept-info" hidden></div>`;

    /* Click en cada concepto: muestra/oculta su descripción */
    const infoBox = iconsRow.querySelector('.aps-modal__concept-info');
    iconsRow.querySelectorAll('.aps-modal__concept').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.ci);
            const c  = concepts[ci];
            const alreadyActive = btn.classList.contains('active');

            iconsRow.querySelectorAll('.aps-modal__concept').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-expanded', 'false');
            });

            if (alreadyActive) {
                infoBox.hidden = true;
                infoBox.classList.remove('show');
                return;
            }

            btn.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
            infoBox.innerHTML = `
                <span class="aps-modal__concept-info-icon">${c.icon}</span>
                <span class="aps-modal__concept-info-text">
                    <strong>${esc(c.name)}</strong>
                    ${esc(c.desc || '')}
                </span>`;
            infoBox.hidden = false;
            void infoBox.offsetWidth;
            infoBox.classList.add('show');
        });
    });

    /* Botones de navegación + contador */
    const btnPrev = document.getElementById('aps-modal-prev');
    const btnNext = document.getElementById('aps-modal-next');
    const counter = document.getElementById('aps-modal-counter');
    if (btnPrev) btnPrev.disabled = index <= 0;
    if (btnNext) btnNext.disabled = index >= apsData.length - 1;
    if (counter) counter.textContent = `${index + 1} / ${apsData.length}`;

    /* Animación de deslizamiento al navegar entre etapas */
    const panel = modal.querySelector('.aps-modal__panel');
    if (panel && dir && !reduced) {
        panel.classList.remove('aps-anim-next', 'aps-anim-prev');
        void panel.offsetWidth;
        panel.classList.add(dir > 0 ? 'aps-anim-next' : 'aps-anim-prev');
    }

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
    renderAps();
    document.getElementById('panel-aps').dataset.init = '1';
});
