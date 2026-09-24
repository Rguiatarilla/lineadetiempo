/**
 * data.js
 * Datos del timeline: APS y Salud Colectiva
 * Cada entrada representa un hito histórico con categoría, imagen y enlace de referencia.
 */

const timelineData = [
    {
        year: "1918 – 1941",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Campañas Sanitarias contra el Pian en Antioquia",
        description: "Primera estrategia colombiana sistemática de traslado de medicina urbana al campo. Estableció unidades descentralizadas y comisiones de higiene rural. Fue el antecedente para sentar las bases de la medicina social rural que lideraría Héctor Abad Gómez.",
        icon: "assets/images/icono-01-sc.jpg",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
        link: "https://revistas.unal.edu.co/index.php/achsc/article/view/97207"
    },
    {
        year: "1920",
        category: "aps",
        tag: "APS",
        title: "Informe Dawson: Organización de Servicios",
        description: "El Informe Dawson propuso una nueva forma de organizar los servicios de salud, articulando diferentes niveles de atención y acercándose a las necesidades de la población. Aunque la Atención Primaria en Salud aún no estaba definida como estrategia, el informe fue un antecedente histórico clave para promover una atención más cercana, integrada y organizada alrededor de las necesidades de las personas.",
        icon: "assets/images/icono-02-aps.jpg",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format&fit=crop&q=80",
        link: "https://es.scribd.com/document/248032306/Informe-Dawson-1920"
    },
    {
        year: "1955 – 1956",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Seminarios Internacionales OPS/OMS (Viña del Mar / Tehuacán)",
        description: "Iniciaron la transformación docente de la medicina preventiva y social regional. Héctor Abad Gómez participa en Tehuacán y se vincula luego a la Universidad de Antioquia.",
        icon: "assets/images/icono-03-sc.jpg",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
        link: "https://doi.org/10.1590/S0104-12901994000200002"
    },
    {
        year: "1956",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Depto. Medicina Preventiva y Salud Pública (U. de Antioquia)",
        description: "Fundado por Héctor Abad Gómez, institucionalizó el enfoque preventivo/comunitario y lideró la primera vacunación masiva antipolio. Impulsó el contacto temprano con comunidades.",
        icon: "assets/images/icono-04-sc.jpg",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80",
        link: "https://www.gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-resumen-S0213911120300662"
    },
    {
        year: "1958",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Programa de Promotoras Rurales de Salud (Santo Domingo)",
        description: "Iniciado por Abad Gómez tras su experiencia en México. Capacitó mujeres rurales en saneamiento, vacunación y primeros auxilios, siendo la base del Sistema Nacional de Salud en 1976.",
        icon: "assets/images/icono-05-sc.jpg",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80",
        link: "https://doi.org/10.11144/Javeriana.rgps19.prsp"
    },
    {
        year: "1963",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Escuela Nacional de Salud Pública (Medellín)",
        description: "Fundada por Héctor Abad Gómez ante la necesidad de profundizar en la medicina social. Hoy constituye la Facultad Nacional de Salud Pública que lleva su nombre.",
        icon: "assets/images/icono-06-sc.jpg",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
        link: "https://www.gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-resumen-S0213911120300662"
    },
    {
        year: "1972",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Seminario de Ciencias Sociales Aplicadas a la Medicina (Cuenca)",
        description: "Convocado por Juan César García. Marcó el rompimiento explícito con el enfoque funcionalista y positivista, articulando las bases críticas de la medicina social en Latinoamérica.",
        icon: "assets/images/icono-07-sc.jpg",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
        link: "https://doi.org/10.18294/sc.2011.267"
    },
    {
        year: "1975",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Tesis 'O Dilema Preventivista' (Sergio Arouca)",
        description: "Arouca cuestiona la concepción liberal e individualista de la medicina preventiva usando marcos marxistas y foucaultianos, abriendo paso a la construcción teórica de la Salud Colectiva.",
        icon: "assets/images/icono-08-sc.jpg",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
        link: "https://doi.org/10.1590/S0104-12901994000200002"
    },
    {
        year: "1976",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Fundación del CEBES (Brasil)",
        description: "Creado para luchar por la democratización social y el derecho a la salud en dictadura. Lanzó la revista 'Saúde em Debate' y articuló la Reforma Sanitaria.",
        icon: "assets/images/icono-09-sc.jpg",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&auto=format&fit=crop&q=80",
        link: "https://doi.org/10.1590/S0104-12902015S01018"
    },
    {
        year: "1978",
        category: "aps",
        tag: "APS",
        title: "Declaración de Alma-Ata: Nacimiento de la APS moderna",
        description: "La Declaración de Alma-Ata marcó un momento fundamental para la salud pública al reconocer la salud como un derecho humano fundamental y posicionar la Atención Primaria en Salud como una estrategia esencial para alcanzar la meta de 'Salud para Todos'. A partir de este momento, la atención en salud empieza a comprenderse de una manera más integral: no se trata solamente de atender y tratar las enfermedades, sino también de promover la salud, prevenir la enfermedad, facilitar el acceso a los servicios y responder a las necesidades de las personas y las comunidades. La Atención Primaria en Salud impulsa una atención más cercana, accesible y equitativa, donde la participación de las personas, las familias y las comunidades se convierte en un elemento fundamental para cuidar y mejorar la salud.",
        icon: "assets/images/icono-10-aps.jpg",
        image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600&auto=format&fit=crop&q=80",
        link: "https://www.paho.org/es/documentos/declaracion-alma-ata"
    },
    {
        year: "1978",
        category: "sc",
        tag: "Salud Colectiva",
        title: "1° Encuentro Nacional de Posgrados (Bahía)",
        description: "Se adoptó oficialmente por primera vez el término 'Salud Colectiva' para consolidar un campo crítico unificado frente a la salud pública funcionalista.",
        icon: "assets/images/icono-11-sc.jpg",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&auto=format&fit=crop&q=80",
        link: "https://doi.org/10.1590/S0104-12901994000200002"
    },
    {
        year: "1979",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Fundación de ABRASCO (Brasil)",
        description: "Institucionalizó académicamente la Salud Colectiva mediante redes de comunicación científica y formación de grado y posgrado.",
        icon: "assets/images/icono-12-sc.jpg",
        image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=600&auto=format&fit=crop&q=80",
        link: "https://abrasco.org.br/sobre-a-abrasco/historia-e-memoria/"
    },
    {
        year: "1984",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Fundación de ALAMES (Ouro Preto)",
        description: "Creación de la Asociación Latinoamericana de Medicina Social impulsada por la red de Juan César García, con el colombiano Saúl Franco Agudelo como cofundador.",
        icon: "assets/images/icono-13-sc.jpg",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
        link: "https://alames.org/"
    },
    {
        year: "1986",
        category: "aps",
        tag: "APS",
        title: "Carta de Ottawa: Promoción de la Salud",
        description: "La Carta de Ottawa amplió la manera de comprender la salud al reconocer que esta no depende únicamente de los servicios médicos, sino también de las condiciones en las que las personas nacen, crecen, viven, trabajan y se desarrollan. Este enfoque fortalece la Atención Primaria en Salud, resaltando que no basta con tratar la enfermedad; también es necesario promover el bienestar, prevenir enfermedades y generar condiciones que favorezcan una mejor calidad de vida. A partir de este momento, se fortalecen la promoción de la salud, la prevención de la enfermedad y la participación activa de las personas y las comunidades en el cuidado de su salud.",
        icon: "assets/images/icono-14-aps.jpg",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80",
        link: "https://www.who.int/teams/health-promotion/enhanced-wellbeing/first-global-conference"
    },
    {
        year: "1987",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Asesinato de Héctor Abad Gómez",
        description: "Costo político del compromiso con la medicina social y los DDHH. Su legado sobre violencia y salud pública fue continuado por Saúl Franco en ALAMES y Brasil.",
        icon: "assets/images/icono-15-sc.jpg",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
        link: "https://centrodememoriahistorica.gov.co/no-olvidamos-a-hector-abad-gomez/"
    },
    {
        year: "1988",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Constitución de Brasil y creación del SUS",
        description: "El artículo 196 consagra la salud como derecho y deber del Estado, materializando el proyecto político de la Reforma Sanitaria mediante el Sistema Único de Salud.",
        icon: "assets/images/icono-16-sc.jpg",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
        link: "https://doi.org/10.1590/S0104-12902015S01018"
    },
    {
        year: "1993",
        category: "aps",
        tag: "APS",
        title: "Ley 100 en Colombia (SGSSS)",
        description: "La Ley 100 de 1993 creó el Sistema General de Seguridad Social en Salud y reorganizó la forma en que se financiaban, administraban y prestaban los servicios de salud en Colombia. Aunque la Ley 100 no estableció por sí sola la Atención Primaria en Salud, representó un cambio importante en la organización del sistema y en la manera de garantizar el acceso de la población a los servicios de salud. Este proceso se convirtió en un antecedente para las transformaciones posteriores del sistema, que avanzaría hacia una atención más integral, cercana a las personas y orientada a sus necesidades.",
        icon: "assets/images/icono-17-aps.jpg",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
        link: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248"
    },
    {
        year: "1993",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Área de Evaluación CAPES en 'Saúde Coletiva'",
        description: "Brasil reconoce oficialmente la Salud Colectiva como área del conocimiento independiente en el sistema de educación superior y posgrados.",
        icon: "assets/images/icono-18-sc.jpg",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
        link: "https://abrasco.org.br/sobre-a-abrasco/historia-e-memoria/"
    },
    {
        year: "1998",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Artículo 'Saúde Coletiva' (Paim y Almeida Filho)",
        description: "Texto epistemológico fundacional que define la Salud Colectiva como un campo científico interdisciplinario y abierto, contrapuesto a la salud pública tradicional.",
        icon: "assets/images/icono-19-sc.jpg",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
        link: "https://doi.org/10.1590/S0034-89101998000400001"
    },
    {
        year: "2003",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Doctorado en Salud Pública (U. Nacional de Colombia)",
        description: "Primer doctorado en esta área en Colombia, enfocado en formar investigadores sobre determinantes sociales e integrar lo biológico con lo socio-político.",
        icon: "assets/images/icono-20-sc.jpg",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80",
        link: "https://www.doctoradosaludp.unal.edu.co/el-doctorado/"
    },
    {
        year: "2007 – 2011",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Modelo de Salud Mental Comunitaria (Ordenanza 026 Nariño)",
        description: "Implementó un modelo de base comunitaria en el 100% de municipios nariñenses con más de 4.000 agentes locales, trasladando la atención fuera de instituciones.",
        icon: "assets/images/icono-21-sc.jpg",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80",
        link: "https://glia.idsn.gov.co/tme-normatividad/"
    },
    {
        year: "2008",
        category: "aps",
        tag: "APS",
        title: "Informe OMS: La APS más necesaria que nunca",
        description: "Treinta años después de Alma-Ata, la Organización Mundial de la Salud (OMS) publicó el Informe sobre la Salud en el Mundo 2008, dedicado a la Atención Primaria en Salud. El informe señaló que aún persistían importantes desigualdades en salud y resaltó la necesidad de avanzar hacia sistemas más equitativos, integrales y centrados en las personas. Este nuevo impulso reafirmó la importancia de los principios de Alma-Ata y destacó que la Atención Primaria en Salud debía fortalecer la equidad, la integralidad y una atención orientada a las necesidades de las personas y las comunidades. Los principios de Alma-Ata seguían vigentes, pero todavía existían grandes desafíos para alcanzar una atención sanitaria para todos.",
        icon: "assets/images/icono-22-aps.jpg",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80",
        link: "https://comunidad.semfyc.es/wp-content/uploads/11-documentos2.pdf"
    },
    {
        year: "2011",
        category: "aps",
        tag: "APS",
        title: "Ley 1438 de Colombia: Institucionalización de la APS",
        description: "Con la Ley 1438 de 2011, Colombia adopta la Atención Primaria en Salud como estrategia para orientar el sistema hacia una atención integral, cercana a las personas, las familias y las comunidades. La Atención Primaria en Salud integra servicios de salud, acción intersectorial y participación comunitaria, con énfasis en la promoción de la salud, la prevención de la enfermedad y el reconocimiento de las necesidades de cada territorio. 2011 marca un punto clave: la Atención Primaria en Salud pasa de ser un referente internacional a tener un lugar explícito dentro del sistema de salud colombiano.",
        icon: "assets/images/icono-23-aps.jpg",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=80",
        link: "https://consultorsalud.com/ley-1438-de-2011-reforma-al-sgsss/"
    },
    {
        year: "2015",
        category: "aps",
        tag: "APS",
        title: "Ley Estatutaria 1751 de Colombia",
        description: "La Ley Estatutaria 1751 de 2015 reconoce en Colombia la salud como un derecho fundamental autónomo e irrenunciable, tanto individual como colectivo. Este reconocimiento cambia la manera de entender la salud, al establecer que no se trata solamente de recibir un servicio, sino de garantizar el derecho a una atención oportuna, eficaz y de calidad. Para la Atención Primaria en Salud, este avance reafirma la importancia de poner en el centro a las personas, las familias y las comunidades, promoviendo una atención integral y cercana a sus necesidades.",
        icon: "assets/images/icono-24-aps.jpg",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
        link: "https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/ley_1751_2015.htm"
    },
    {
        year: "2016 – 2018",
        category: "aps",
        tag: "APS",
        title: "PAIS, RIAS y Declaración de Astaná",
        description: "En Colombia, la Política de Atención Integral en Salud y las Rutas Integrales de Atención en Salud fortalecen la implementación de la Atención Primaria en Salud, orientando la atención hacia las personas, las familias y las comunidades, y organizando las acciones de promoción, prevención, atención y cuidado de acuerdo con las necesidades de la población. En 2018, la Declaración de Astaná reafirma a nivel mundial el compromiso con la Atención Primaria en Salud y retoma los principios de Alma-Ata, destacando la importancia de una atención integral, accesible, sostenible y centrada en las personas y las comunidades.",
        icon: "assets/images/icono-25-aps.jpg",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80",
        link: "https://www.who.int/publications/i/item/WHO-HIS-SDS-2018.61"
    },
    {
        year: "2019 – 2026",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Política 'La Salud en Todos los Derechos' y Ciudad Bienestar (Pasto)",
        description: "Acuerdo 034 de 2019. Experiencia territorial basada en la Determinación Social de Jaime Breilh, reconocida internacionalmente por OPS en 2023 como referente regional.",
        icon: "assets/images/icono-26-sc.jpg",
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&auto=format&fit=crop&q=80",
        link: "https://www.pasto.gov.co/index.php/acuerdos/acuerdos-2019?download=15336:acuerdo-034-14-ago-2019"
    },
    {
        year: "2022 – 2024",
        category: "aps",
        tag: "APS",
        title: "Plan Decenal PDSP y despliegue de Equipos Básicos",
        description: "El Plan Decenal de Salud Pública orienta las acciones de salud pública hacia la promoción de la salud, la prevención de la enfermedad, la equidad y el bienestar de la población. En este proceso, se fortalece el trabajo territorial mediante los Equipos Básicos de Salud, que acercan las acciones de promoción, prevención, atención y cuidado a las personas, familias y comunidades, especialmente en los territorios con mayores necesidades.",
        icon: "assets/images/icono-27-aps.jpg",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop&q=80",
        link: "https://www.minsalud.gov.co/plandecenal/Paginas/PDSP-2022-2031.aspx"
    },
    {
        year: "2025",
        category: "sc",
        tag: "Salud Colectiva",
        title: "XVIII Congreso ALAMES (Río de Janeiro)",
        description: "Conmemoración de 40 años de ALAMES. Saúl Franco lidera el balance ratificando la vigencia de la Determinación Social frente a la desigualdad regional.",
        icon: "assets/images/icono-28-sc.jpg",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
        link: "https://www.socialmedicine.info/index.php/socialmedicine/article/view/2347"
    },
    {
        year: "2025 – 2026",
        category: "aps",
        tag: "APS",
        title: "Consolidación Territorial de la APS en Colombia",
        description: "La Atención Primaria en Salud continúa fortaleciéndose en Colombia mediante el trabajo territorial, la participación comunitaria y el acercamiento de los servicios a las personas, las familias y las comunidades. Los Equipos Básicos de Salud desempeñan un papel importante al llevar acciones de promoción, prevención y cuidado directamente a los territorios, reconociendo sus necesidades y características. Así, la Atención Primaria en Salud avanza hacia una atención más cercana, integral y orientada a las necesidades de cada comunidad.",
        icon: "assets/images/icono-29-aps.jpg",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80",
        link: "https://www.minsalud.gov.co/salud/publica/Paginas/equipos-basicos-en-salud.aspx"
    }
];
