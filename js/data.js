/**
 * data.js — Datos de la línea de tiempo de Atención Primaria en Salud
 * apsData:  10 etapas de Atención Primaria en Salud (línea horizontal)
 */

/* ══════════════════════════════════════════════════
   ATENCIÓN PRIMARIA EN SALUD (APS)
   Línea horizontal tipo infografía "Un viaje por la historia"
   ══════════════════════════════════════════════════ */
const apsData = [
    {
        etapa: 1,
        year: "1920",
        title: "Los primeros pasos hacia una atención cercana",
        subtitle: "Informe Dawson",
        description: "El Informe Dawson planteó una nueva manera de organizar los servicios de salud, buscando articular diferentes niveles de atención y acercar los servicios a las necesidades de la población.",
        why: "Aunque todavía no existía la APS como estrategia definida, este informe constituye un antecedente histórico importante de la organización de servicios y de la idea de una atención más cercana e integrada.",
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=80",
        link: "https://es.scribd.com/document/248032306/Informe-Dawson-1920"
    },
    {
        etapa: 2,
        year: "1978",
        title: "Una nueva forma de entender la salud",
        subtitle: "Declaración de Alma-Ata",
        description: "La Declaración de Alma-Ata reconoció la salud como un derecho humano fundamental y posicionó la Atención Primaria en Salud como una estrategia esencial para alcanzar la meta de 'Salud para Todos'.",
        why: "La APS propone que la atención no debe limitarse a tratar enfermedades. También debe promover la salud, prevenir enfermedades, garantizar el acceso, involucrar a las comunidades y responder a las necesidades de las personas.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=80",
        link: "https://www.paho.org/es/documentos/declaracion-alma-ata"
    },
    {
        etapa: 3,
        year: "1986",
        title: "La salud se construye más allá del consultorio",
        subtitle: "Carta de Ottawa",
        description: "La Carta de Ottawa amplió la manera de comprender la salud al reconocer que esta no depende únicamente de los servicios médicos, sino también de las condiciones en las que las personas nacen, crecen, viven, trabajan y se desarrollan.",
        why: "Este enfoque fortalece la APS, resaltando que no basta con tratar la enfermedad; también es necesario promover el bienestar, prevenir enfermedades y generar condiciones que favorezcan una mejor calidad de vida.",
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&auto=format&fit=crop&q=80",
        link: "https://www.who.int/teams/health-promotion/enhanced-wellbeing/first-global-conference"
    },
    {
        etapa: 4,
        year: "1993",
        title: "Colombia transforma las reglas del sistema de salud",
        subtitle: "Ley 100 (SGSSS)",
        description: "La Ley 100 de 1993 creó el Sistema General de Seguridad Social en Salud y reorganizó la forma en que se financiaban, administraban y prestaban los servicios de salud en Colombia.",
        why: "Aunque la Ley 100 no estableció la APS directamente, representó un cambio importante en la organización del sistema y se convirtió en un antecedente para las transformaciones posteriores.",
        image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&auto=format&fit=crop&q=80",
        link: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248"
    },
    {
        etapa: 5,
        year: "2008",
        title: "La APS vuelve al centro de la agenda mundial",
        subtitle: "Informe OMS 2008",
        description: "Treinta años después de Alma-Ata, la OMS publicó el Informe sobre la Salud en el Mundo 2008, señalando que aún persistían importantes desigualdades y resaltando la necesidad de sistemas más equitativos e integrales.",
        why: "Los principios de Alma-Ata seguían vigentes, pero todavía existían grandes desafíos para alcanzar una atención sanitaria para todos. La APS debía fortalecer la equidad y la integralidad.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80",
        link: "https://comunidad.semfyc.es/wp-content/uploads/11-documentos2.pdf"
    },
    {
        etapa: 6,
        year: "2011",
        title: "Colombia apuesta por la APS como estrategia de Estado",
        subtitle: "Ley 1438",
        description: "Con la Ley 1438 de 2011, Colombia adopta la Atención Primaria en Salud como estrategia para orientar el sistema hacia una atención integral, cercana a las personas, las familias y las comunidades.",
        why: "2011 marca un punto clave: la APS pasa de ser un referente internacional a tener un lugar explícito dentro del sistema de salud colombiano, integrando servicios, acción intersectorial y participación comunitaria.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=80",
        link: "https://consultorsalud.com/ley-1438-de-2011-reforma-al-sgsss/"
    },
    {
        etapa: 7,
        year: "2015",
        title: "La salud: un derecho fundamental",
        subtitle: "Ley Estatutaria 1751",
        description: "La Ley Estatutaria 1751 de 2015 reconoce en Colombia la salud como un derecho fundamental autónomo e irrenunciable, tanto individual como colectivo.",
        why: "Este avance reafirma la importancia de poner en el centro a las personas, las familias y las comunidades, promoviendo una atención integral y cercana a sus necesidades.",
        image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=600&auto=format&fit=crop&q=80",
        link: "https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/ley_1751_2015.htm"
    },
    {
        etapa: 8,
        year: "2016 – 2018",
        title: "Nuevas rutas para llegar a cada territorio",
        subtitle: "PAIS, RIAS y Declaración de Astaná",
        description: "Colombia formula la Política de Atención Integral en Salud (PAIS) y las Rutas Integrales de Atención (RIAS), organizando las acciones de promoción, prevención, atención y cuidado según las necesidades de la población.",
        why: "En 2018, la Declaración de Astaná reafirma a nivel mundial el compromiso con la APS, destacando la importancia de una atención integral, accesible y centrada en las personas.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&auto=format&fit=crop&q=80",
        link: "https://www.who.int/publications/i/item/WHO-HIS-SDS-2018.61"
    },
    {
        etapa: 9,
        year: "2022 – 2024",
        title: "Una nueva hoja de ruta para acompañar a las personas",
        subtitle: "Plan Decenal PDSP",
        description: "El Plan Decenal de Salud Pública orienta las acciones hacia la promoción de la salud, la prevención, la equidad y el bienestar. Los Equipos Básicos de Salud acercan el cuidado a los territorios con mayores necesidades.",
        why: "El trabajo territorial y los Equipos Básicos representan la forma concreta en que la APS llega a las personas, familias y comunidades en cada rincón del país.",
        image: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?w=600&auto=format&fit=crop&q=80",
        link: "https://www.minsalud.gov.co/plandecenal/Paginas/PDSP-2022-2031.aspx"
    },
    {
        etapa: 10,
        year: "2025 – 2026",
        title: "De Alma-Ata al territorio: una historia que continúa",
        subtitle: "Consolidación APS en Colombia",
        description: "La APS se fortalece cada día para construir salud junto a las personas, sus comunidades y sus territorios. Los Equipos Básicos llevan acciones de promoción, prevención y cuidado directamente a los hogares.",
        why: "La APS no es solo un modelo de atención. Es una forma de entender la salud desde las personas, sus familias, sus comunidades y sus territorios. Cada paso cuenta, cada historia transforma, cada persona importa.",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80",
        link: "https://www.minsalud.gov.co/salud/publica/Paginas/equipos-basicos-en-salud.aspx"
    }
];
