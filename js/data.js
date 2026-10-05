/**
 * data.js — Datos de las dos líneas de tiempo
 * apsData:  10 etapas de Atención Primaria en Salud (línea horizontal)
 * scData:   3 etapas de Salud Colectiva con 14 hitos en total (línea horizontal)
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
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format&fit=crop&q=80",
        link: "https://es.scribd.com/document/248032306/Informe-Dawson-1920"
    },
    {
        etapa: 2,
        year: "1978",
        title: "Una nueva forma de entender la salud",
        subtitle: "Declaración de Alma-Ata",
        description: "La Declaración de Alma-Ata reconoció la salud como un derecho humano fundamental y posicionó la Atención Primaria en Salud como una estrategia esencial para alcanzar la meta de 'Salud para Todos'.",
        why: "La APS propone que la atención no debe limitarse a tratar enfermedades. También debe promover la salud, prevenir enfermedades, garantizar el acceso, involucrar a las comunidades y responder a las necesidades de las personas.",
        image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600&auto=format&fit=crop&q=80",
        link: "https://www.paho.org/es/documentos/declaracion-alma-ata"
    },
    {
        etapa: 3,
        year: "1986",
        title: "La salud se construye más allá del consultorio",
        subtitle: "Carta de Ottawa",
        description: "La Carta de Ottawa amplió la manera de comprender la salud al reconocer que esta no depende únicamente de los servicios médicos, sino también de las condiciones en las que las personas nacen, crecen, viven, trabajan y se desarrollan.",
        why: "Este enfoque fortalece la APS, resaltando que no basta con tratar la enfermedad; también es necesario promover el bienestar, prevenir enfermedades y generar condiciones que favorezcan una mejor calidad de vida.",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80",
        link: "https://www.who.int/teams/health-promotion/enhanced-wellbeing/first-global-conference"
    },
    {
        etapa: 4,
        year: "1993",
        title: "Colombia transforma las reglas del sistema de salud",
        subtitle: "Ley 100 (SGSSS)",
        description: "La Ley 100 de 1993 creó el Sistema General de Seguridad Social en Salud y reorganizó la forma en que se financiaban, administraban y prestaban los servicios de salud en Colombia.",
        why: "Aunque la Ley 100 no estableció la APS directamente, representó un cambio importante en la organización del sistema y se convirtió en un antecedente para las transformaciones posteriores.",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
        link: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248"
    },
    {
        etapa: 5,
        year: "2008",
        title: "La APS vuelve al centro de la agenda mundial",
        subtitle: "Informe OMS 2008",
        description: "Treinta años después de Alma-Ata, la OMS publicó el Informe sobre la Salud en el Mundo 2008, señalando que aún persistían importantes desigualdades y resaltando la necesidad de sistemas más equitativos e integrales.",
        why: "Los principios de Alma-Ata seguían vigentes, pero todavía existían grandes desafíos para alcanzar una atención sanitaria para todos. La APS debía fortalecer la equidad y la integralidad.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80",
        link: "https://comunidad.semfyc.es/wp-content/uploads/11-documentos2.pdf"
    },
    {
        etapa: 6,
        year: "2011",
        title: "Colombia apuesta por la APS como estrategia de Estado",
        subtitle: "Ley 1438",
        description: "Con la Ley 1438 de 2011, Colombia adopta la Atención Primaria en Salud como estrategia para orientar el sistema hacia una atención integral, cercana a las personas, las familias y las comunidades.",
        why: "2011 marca un punto clave: la APS pasa de ser un referente internacional a tener un lugar explícito dentro del sistema de salud colombiano, integrando servicios, acción intersectorial y participación comunitaria.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=80",
        link: "https://consultorsalud.com/ley-1438-de-2011-reforma-al-sgsss/"
    },
    {
        etapa: 7,
        year: "2015",
        title: "La salud: un derecho fundamental",
        subtitle: "Ley Estatutaria 1751",
        description: "La Ley Estatutaria 1751 de 2015 reconoce en Colombia la salud como un derecho fundamental autónomo e irrenunciable, tanto individual como colectivo.",
        why: "Este avance reafirma la importancia de poner en el centro a las personas, las familias y las comunidades, promoviendo una atención integral y cercana a sus necesidades.",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
        link: "https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/ley_1751_2015.htm"
    },
    {
        etapa: 8,
        year: "2016 – 2018",
        title: "Nuevas rutas para llegar a cada territorio",
        subtitle: "PAIS, RIAS y Declaración de Astaná",
        description: "Colombia formula la Política de Atención Integral en Salud (PAIS) y las Rutas Integrales de Atención (RIAS), organizando las acciones de promoción, prevención, atención y cuidado según las necesidades de la población.",
        why: "En 2018, la Declaración de Astaná reafirma a nivel mundial el compromiso con la APS, destacando la importancia de una atención integral, accesible y centrada en las personas.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80",
        link: "https://www.who.int/publications/i/item/WHO-HIS-SDS-2018.61"
    },
    {
        etapa: 9,
        year: "2022 – 2024",
        title: "Una nueva hoja de ruta para acompañar a las personas",
        subtitle: "Plan Decenal PDSP",
        description: "El Plan Decenal de Salud Pública orienta las acciones hacia la promoción de la salud, la prevención, la equidad y el bienestar. Los Equipos Básicos de Salud acercan el cuidado a los territorios con mayores necesidades.",
        why: "El trabajo territorial y los Equipos Básicos representan la forma concreta en que la APS llega a las personas, familias y comunidades en cada rincón del país.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop&q=80",
        link: "https://www.minsalud.gov.co/plandecenal/Paginas/PDSP-2022-2031.aspx"
    },
    {
        etapa: 10,
        year: "2025 – 2026",
        title: "De Alma-Ata al territorio: una historia que continúa",
        subtitle: "Consolidación APS en Colombia",
        description: "La APS se fortalece cada día para construir salud junto a las personas, sus comunidades y sus territorios. Los Equipos Básicos llevan acciones de promoción, prevención y cuidado directamente a los hogares.",
        why: "La APS no es solo un modelo de atención. Es una forma de entender la salud desde las personas, sus familias, sus comunidades y sus territorios. Cada paso cuenta, cada historia transforma, cada persona importa.",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80",
        link: "https://www.minsalud.gov.co/salud/publica/Paginas/equipos-basicos-en-salud.aspx"
    }
];

/* ══════════════════════════════════════════════════════
   SALUD COLECTIVA (SC) — 3 etapas, cada una en su tarjeta
   con su rango de años y sus hitos.
   ══════════════════════════════════════════════════════ */
const scData = [
    {
        etapa: 1,
        year: "1918 – 1959",
        title: "Primeros pasos de la salud hacia las comunidades",
        subtitle: "De la atención rural a la medicina social",
        intro: "Las campañas sanitarias, los seminarios internacionales y las primeras experiencias comunitarias en Antioquia abrieron el camino hacia una mirada más amplia y social de la salud.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
        hitos: [
            {
                year: "1918 – 1941",
                title: "Campañas Sanitarias contra el Pian en Antioquia",
                description: "Las campañas contra el pian en Antioquia llevaron por primera vez de manera sistemática la atención médica desde las ciudades hacia las zonas rurales y marginadas. Se implementaron unidades sanitarias descentralizadas, comisiones de higiene rural y médicos itinerantes, mostrando que la salud debía atender también las condiciones de vida y las necesidades de las comunidades rurales, y no centrarse únicamente en la enfermedad individual.",
                link: "https://revistas.unal.edu.co/index.php/achsc/article/view/97207"
            },
            {
                year: "1955 – 1956",
                title: "Seminarios Internacionales (Viña del Mar / Tehuacán)",
                description: "Los seminarios de Viña del Mar y Tehuacán promovieron en América Latina una visión más amplia de la salud, considerando no solo la atención de la enfermedad, sino también la prevención, la comunidad y las condiciones que influyen en la salud de las personas. Estos encuentros hacen parte de los antecedentes que contribuyeron a la evolución de una mirada más integral y colectiva de la salud, que posteriormente se relacionaría con el desarrollo de la Atención Primaria en Salud.",
                link: "https://www.scielo.br/j/sausoc/a/bTHWsnDCM3h9Fpj73YGSLgn/?lang=pt"
            },
            {
                year: "1956",
                title: "Depto. Medicina Preventiva y Salud Pública (U. de Antioquia)",
                description: "La creación de este departamento, impulsada por Héctor Abad Gómez, fortaleció en Colombia un enfoque preventivo y comunitario de la salud. Su propuesta buscaba acercar la formación médica a las comunidades y reconocer los problemas sociales relacionados con la salud, constituyendo un antecedente importante para el posterior desarrollo de la Medicina Social y la Salud Colectiva.",
                link: "https://gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-S0213911120300662"
            },
            {
                year: "1958",
                title: "Programa de Promotoras Rurales de Salud (Santo Domingo)",
                description: "El programa fortaleció una nueva forma de entender la salud en las zonas rurales: la comunidad podía participar activamente en el cuidado, la prevención y la solución de sus propios problemas de salud. Las promotoras, capacitadas en higiene, educación sanitaria, saneamiento, primeros auxilios y vacunación, permitieron acercar estos conocimientos a las comunidades y reducir la dependencia de especialistas. Este modelo se convirtió en un antecedente importante de la atención comunitaria y territorial que posteriormente caracterizaría a la Salud Colectiva.",
                link: "https://gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-S0213911120300662"
            },
            {
                year: "1963",
                title: "Escuela Nacional de Salud Pública (Medellín)",
                description: "Héctor Abad Gómez fundó la Escuela Nacional de Salud Pública para profundizar en el estudio de la medicina social. Este hecho fortaleció la formación académica en salud pública y consolidó en Colombia una mirada que buscaba comprender la salud más allá de la enfermedad individual.",
                link: "https://www.gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-resumen-S0213911120300662"
            }
        ]
    },
    {
        etapa: 2,
        year: "1960 – 1975",
        title: "La Medicina Social Latinoamericana toma forma",
        subtitle: "Determinación social y crítica al modelo preventivo",
        intro: "Los aportes de Jaime Breilh, los seminarios de ciencias sociales en salud y la crítica de Sergio Arouca cuestionaron la mirada biológica e individual, abriendo paso a comprender la salud como un proceso social e histórico.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
        hitos: [
            {
                year: "1960 – 1975",
                title: "Jaime Breilh y la Determinación Social de la Salud",
                description: "Principal referente de la Medicina Social y la Salud Colectiva latinoamericana. Contribuyó al desarrollo y posicionamiento de la categoría de Determinación Social de la Salud, desde la cual propone comprender el proceso salud-enfermedad como resultado de procesos históricos, sociales, económicos, políticos, culturales y ambientales que configuran las condiciones de vida y los modos de vivir de las colectividades.",
                link: "https://www.comunidadandina.org/"
            },
            {
                year: "1972",
                title: "Seminario de Ciencias Sociales Aplicadas a la Medicina (Cuenca)",
                description: "El seminario, impulsado por Juan César García, reunió investigadores y docentes de América Latina para discutir cómo las ciencias sociales podrían ayudar a comprender la relación entre sociedad, salud y enfermedad. Representó un punto clave en el surgimiento de la Medicina Social Latinoamericana, al cuestionar que los problemas de salud pudieran explicarse únicamente desde una perspectiva biológica e individual.",
                link: "https://www.scielo.br/j/csc/a/JwYtGBwxKGFSGp6Jv6rbSQM/?lang=pt"
            },
            {
                year: "1975",
                title: "Tesis 'O Dilema Preventivista' (Sergio Arouca)",
                description: "Sergio Arouca cuestionó los límites de la medicina preventiva, señalando que su enfoque individual y liberal no era suficiente para explicar los problemas de salud en su dimensión social. Su propuesta abrió espacio para nuevas formas de comprender la relación entre salud, enfermedad y sociedad, aportando al desarrollo de la Medicina Social Latinoamericana y posteriormente de la Salud Colectiva.",
                link: "https://books.scielo.org/id/q7gtd"
            }
        ]
    },
    {
        etapa: 3,
        year: "1976 – 1988",
        title: "Institucionalización de la Salud Colectiva",
        subtitle: "Del CEBES al SUS: la salud como derecho colectivo",
        intro: "La fundación del CEBES, ABRASCO y ALAMES consolidó la Salud Colectiva como campo académico y movimiento latinoamericano, hasta llegar al reconocimiento de la salud como derecho con la Constitución de Brasil y la creación del SUS en 1988.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
        hitos: [
            {
                year: "1976",
                title: "Fundación del CEBES (Brasil)",
                description: "Se fundó el Centro Brasileño de Estudios de Salud, un espacio de debate y producción de conocimiento que promovió una comprensión de la salud como un fenómeno social y político, no únicamente como un problema médico. El CEBES contribuyó a cuestionar el modelo de atención vigente y a impulsar propuestas de democratización de la salud, convirtiéndose en un referente del movimiento de Reforma Sanitaria Brasileña y del proceso que posteriormente daría origen al Sistema Único de Salud.",
                link: "https://cebes.org.br/ano-1976/5830/"
            },
            {
                year: "1978",
                title: "1° Encuentro Nacional de Posgrados (Bahía)",
                description: "En este encuentro se discutió y comenzó a consolidarse la Salud Colectiva como un nuevo campo de conocimiento, superando una visión de la salud centrada únicamente en la enfermedad y la atención médica. Se propuso comprender la salud y la enfermedad como procesos sociales, económicos, políticos e históricos, articulando las ciencias sociales, la epidemiología y las políticas de salud. Además, se impulsó la organización de los programas de posgrado, antecedente de la creación de ABRASCO en 1979.",
                link: "https://abrasco.org.br/passado-presente-e-futuro-da-saude-coletiva-em-sessao-alusiva-aos-35-anos-da-abrasco-em-salvador/"
            },
            {
                year: "1979",
                title: "Fundación de ABRASCO (Brasil)",
                description: "El 27 de septiembre de 1979 se fundó la Asociación Brasileña de Posgrado en Salud Colectiva (ABRASCO), agrupando profesionales, docentes y estudiantes de Medicina Social, Medicina Preventiva y Salud Pública bajo la denominación de 'Salud Colectiva'. Su creación contribuyó a institucionalizar y consolidar la Salud Colectiva como un campo académico organizado en América Latina.",
                link: "https://abrasco.org.br/sobre-a-abrasco/historia-e-memoria/"
            },
            {
                year: "1984",
                title: "Fundación de ALAMES (Ouro Preto)",
                description: "La creación de la Asociación Latinoamericana de Medicina Social (ALAMES) fortaleció la articulación del movimiento latinoamericano de Medicina Social, consolidando una mirada de la salud como un fenómeno social y colectivo. Su creación permitió unir experiencias, conocimientos y actores de diferentes países alrededor de una visión de salud vinculada con las condiciones de vida, la sociedad y los derechos.",
                link: "https://alames.org/"
            },
            {
                year: "1987",
                title: "Asesinato de Héctor Abad Gómez",
                description: "Fue asesinado el 25 de agosto de 1987 en Medellín. Su legado destacó la importancia de una salud comprometida con la justicia social, los derechos humanos y las condiciones de vida de las comunidades, aportando al desarrollo de la Medicina Social y la Salud Colectiva en Latinoamérica.",
                link: "https://centrodememoriahistorica.gov.co/no-olvidamos-a-hector-abad-gomez/"
            },
            {
                year: "1988",
                title: "Constitución de Brasil y creación del SUS",
                description: "La Constitución de Brasil de 1988 reconoció la salud como un derecho de todas las personas y una responsabilidad del Estado. A partir de este reconocimiento se creó el Sistema Único de Salud (SUS), basado en el acceso universal, la atención integral y la participación social, fortaleciendo una visión de la salud como un derecho colectivo.",
                link: "https://www.scielo.br/j/sausoc/a/QKtFb9PkdpcTnz7YNJyMzjN/?lang=pt"
            }
        ]
    }
];
