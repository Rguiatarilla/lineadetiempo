/**
 * data.js — Datos de las dos líneas de tiempo
 * apsData:  10 eventos de Atención Primaria en Salud (línea vertical)
 * scData:   19 eventos de Salud Colectiva (línea horizontal)
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
        icon: "assets/images/icono-02-aps.jpg",
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
        icon: "assets/images/icono-10-aps.jpg",
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
        icon: "assets/images/icono-14-aps.jpg",
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
        icon: "assets/images/icono-17-aps.jpg",
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
        icon: "assets/images/icono-22-aps.jpg",
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
        icon: "assets/images/icono-23-aps.jpg",
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
        icon: "assets/images/icono-24-aps.jpg",
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
        icon: "assets/images/icono-25-aps.jpg",
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
        icon: "assets/images/icono-27-aps.jpg",
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
        icon: "assets/images/icono-29-aps.jpg",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80",
        link: "https://www.minsalud.gov.co/salud/publica/Paginas/equipos-basicos-en-salud.aspx"
    }
];

/* ══════════════════════════════════════════════════════
   SALUD COLECTIVA (SC) — línea horizontal tipo infografía
   ══════════════════════════════════════════════════════ */
const scData = [
    {
        year: "1918 – 1941",
        title: "Campañas Sanitarias contra el Pian en Antioquia",
        description: "Las campañas contra el pian en Antioquia llevaron por primera vez de manera sistemática la atención médica desde las ciudades hacia las zonas rurales y marginadas. Se implementaron unidades sanitarias descentralizadas, comisiones de higiene rural y médicos itinerantes.",
        icon: "assets/images/icono-01-sc.jpg",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
        link: "https://revistas.unal.edu.co/index.php/achsc/article/view/97207"
    },
    {
        year: "1955 – 1956",
        title: "Seminarios Internacionales (Viña del Mar / Tehuacán)",
        description: "Los seminarios de Viña del Mar y Tehuacán promovieron en América Latina una visión más amplia de la salud, considerando no solo la atención de la enfermedad, sino también la prevención, la comunidad y las condiciones que influyen en la salud de las personas.",
        icon: "assets/images/icono-03-sc.jpg",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
        link: "https://www.scielo.br/j/sausoc/a/bTHWsnDCM3h9Fpj73YGSLgn/?lang=pt"
    },
    {
        year: "1956",
        title: "Depto. Medicina Preventiva y Salud Pública (U. de Antioquia)",
        description: "La creación de este departamento, impulsada por Héctor Abad Gómez, fortaleció en Colombia un enfoque preventivo y comunitario de la salud. Su propuesta buscaba acercar la formación médica a las comunidades y reconocer los problemas sociales relacionados con la salud.",
        icon: "assets/images/icono-04-sc.jpg",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80",
        link: "https://gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-S0213911120300662"
    },
    {
        year: "1958",
        title: "Programa de Promotoras Rurales de Salud (Santo Domingo)",
        description: "El programa fortaleció una nueva forma de entender la salud en las zonas rurales: la comunidad podía participar activamente en el cuidado, la prevención y la solución de sus propios problemas de salud. Las promotoras, capacitadas en higiene, educación sanitaria, saneamiento, primeros auxilios y vacunación, permitieron acercar estos conocimientos a las comunidades.",
        icon: "assets/images/icono-05-sc.jpg",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80",
        link: "https://gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-S0213911120300662"
    },
    {
        year: "1963",
        title: "Escuela Nacional de Salud Pública (Medellín)",
        description: "Héctor Abad Gómez fundó la Escuela Nacional de Salud Pública para profundizar en el estudio de la medicina social. Este hecho fortaleció la formación académica en salud pública y consolidó en Colombia una mirada que buscaba comprender la salud más allá de la enfermedad individual.",
        icon: "assets/images/icono-06-sc.jpg",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
        link: "https://www.gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-resumen-S0213911120300662"
    },
    {
        year: "1972",
        title: "Seminario de Ciencias Sociales Aplicadas a la Medicina (Cuenca)",
        description: "El seminario, impulsado por Juan César García, reunió investigadores y docentes de América Latina para discutir cómo las ciencias sociales podrían ayudar a comprender la relación entre sociedad, salud y enfermedad. Representó un punto clave en el surgimiento de la Medicina Social Latinoamericana.",
        icon: "assets/images/icono-07-sc.jpg",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
        link: "https://www.scielo.br/j/csc/a/JwYtGBwxKGFSGp6Jv6rbSQM/?lang=pt"
    },
    {
        year: "1975",
        title: "Tesis 'O Dilema Preventivista' (Sergio Arouca)",
        description: "Sergio Arouca cuestionó los límites de la medicina preventiva, señalando que su enfoque individual y liberal no era suficiente para explicar los problemas de salud en su dimensión social. Su propuesta abrió espacio para nuevas formas de comprender la relación entre salud, enfermedad y sociedad.",
        icon: "assets/images/icono-08-sc.jpg",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
        link: "https://books.scielo.org/id/q7gtd"
    },
    {
        year: "1976",
        title: "Fundación del CEBES (Brasil)",
        description: "Se fundó el Centro Brasileño de Estudios de Salud, un espacio de debate y producción de conocimiento que promovió una comprensión de la salud como un fenómeno social y político. El CEBES contribuyó a cuestionar el modelo de atención vigente e impulsar propuestas de democratización de la salud.",
        icon: "assets/images/icono-09-sc.jpg",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&auto=format&fit=crop&q=80",
        link: "https://cebes.org.br/ano-1976/5830/"
    },
    {
        year: "1978",
        title: "1° Encuentro Nacional de Posgrados (Bahía)",
        description: "En este encuentro se discutió y comenzó a consolidarse la Salud Colectiva como un nuevo campo de conocimiento, superando una visión de la salud centrada únicamente en la enfermedad y la atención médica. Se propuso comprender la salud como proceso social, económico, político e histórico.",
        icon: "assets/images/icono-11-sc.jpg",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&auto=format&fit=crop&q=80",
        link: "https://abrasco.org.br/passado-presente-e-futuro-da-saude-coletiva-em-sessao-alusiva-aos-35-anos-da-abrasco-em-salvador/"
    },
    {
        year: "1979",
        title: "Fundación de ABRASCO (Brasil)",
        description: "El 27 de septiembre de 1979 se fundó la Asociación Brasileña de Posgrado en Salud Colectiva (ABRASCO), agrupando profesionales, docentes y estudiantes bajo la denominación de 'Salud Colectiva'. Su creación contribuyó a institucionalizar y consolidar este campo académico en América Latina.",
        icon: "assets/images/icono-12-sc.jpg",
        image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=600&auto=format&fit=crop&q=80",
        link: "https://abrasco.org.br/sobre-a-abrasco/historia-e-memoria/"
    },
    {
        year: "1984",
        title: "Fundación de ALAMES (Ouro Preto)",
        description: "La creación de la Asociación Latinoamericana de Medicina Social (ALAMES) fortaleció la articulación del movimiento latinoamericano de Medicina Social, consolidando una mirada de la salud como un fenómeno social y colectivo vinculado con las condiciones de vida y los derechos.",
        icon: "assets/images/icono-13-sc.jpg",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
        link: "https://alames.org/"
    },
    {
        year: "1987",
        title: "Asesinato de Héctor Abad Gómez",
        description: "Fue asesinado el 25 de agosto de 1987 en Medellín. Su legado destacó la importancia de una salud comprometida con la justicia social, los derechos humanos y las condiciones de vida de las comunidades, aportando al desarrollo de la Medicina Social y la Salud Colectiva en Latinoamérica.",
        icon: "assets/images/icono-15-sc.jpg",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
        link: "https://centrodememoriahistorica.gov.co/no-olvidamos-a-hector-abad-gomez/"
    },
    {
        year: "1988",
        title: "Constitución de Brasil y creación del SUS",
        description: "La Constitución de Brasil de 1988 reconoció la salud como un derecho de todas las personas y una responsabilidad del Estado. A partir de este reconocimiento se creó el Sistema Único de Salud (SUS), basado en el acceso universal, la atención integral y la participación social.",
        icon: "assets/images/icono-16-sc.jpg",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
        link: "https://www.scielo.br/j/sausoc/a/QKtFb9PkdpcTnz7YNJyMzjN/?lang=pt"
    },
    {
        year: "1993",
        title: "Área de Evaluación CAPES en 'Saúde Coletiva'",
        description: "La CAPES creó formalmente el área de evaluación 'Saúde Coletiva', lo que permitió reconocer y consolidar la Salud Colectiva como un campo académico propio, fortaleciendo los programas de posgrado y la investigación.",
        icon: "assets/images/icono-18-sc.jpg",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
        link: "https://abrasco.org.br/sobre-a-abrasco/historia-e-memoria/"
    },
    {
        year: "1998",
        title: "Artículo 'Saúde Coletiva' (Paim y Almeida Filho)",
        description: "Paim y Almeida Filho plantearon que la Salud Colectiva no debía ser simplemente una nueva versión de la salud pública tradicional. Su aporte fue proponerla como un campo científico abierto a nuevos paradigmas, fortaleciendo su identidad y sus fundamentos teóricos.",
        icon: "assets/images/icono-19-sc.jpg",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
        link: "https://www.scielo.br/j/rsp/a/PDRmKQr7vRTRqRJtSgSdw7y/?lang=pt"
    },
    {
        year: "2003",
        title: "Doctorado en Salud Pública (U. Nacional de Colombia)",
        description: "La Universidad Nacional de Colombia creó en 2003 el Programa Interfacultades de Doctorado en Salud Pública. Fue el primer doctorado en esta área en el país, orientado a formar investigadores de alto nivel con énfasis en los determinantes sociales de la salud.",
        icon: "assets/images/icono-20-sc.jpg",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80",
        link: "https://doctoradosaludp.unal.edu.co/"
    },
    {
        year: "2007 – 2011",
        title: "Modelo de Salud Mental Comunitaria (Ordenanza 026 Nariño)",
        description: "Nariño adoptó el Modelo de Atención Primaria en Salud Mental de Base Comunitaria, llevando la atención de los hospitales hacia las comunidades. Para 2011, había sido implementado en el 100% de los municipios del departamento con aproximadamente 4.000 agentes formados.",
        icon: "assets/images/icono-21-sc.jpg",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80",
        link: "https://glia.idsn.gov.co/tme-normatividad/"
    },
    {
        year: "2019 – 2026",
        title: "Política 'La Salud en Todos los Derechos' y Ciudad Bienestar (Pasto)",
        description: "El Concejo de Pasto adoptó la Política Pública en Salud Colectiva 'La Salud en Todos los Derechos'. Su construcción contó con la participación de más de 1.500 personas y busca incorporar la salud en todas las políticas públicas del municipio, reconociendo los determinantes sociales como eje transversal.",
        icon: "assets/images/icono-26-sc.jpg",
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&auto=format&fit=crop&q=80"
    },
    {
        year: "2025",
        title: "XVIII Congreso ALAMES (Río de Janeiro)",
        description: "ALAMES realizó su XVIII Congreso Latinoamericano de Medicina Social y Salud Colectiva en la Universidad Estatal de Río de Janeiro, conmemorando 40 años de la organización. El encuentro reunió a más de 2.500 participantes y retomó como eje la determinación social de la salud.",
        icon: "assets/images/icono-28-sc.jpg",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
        link: "https://www.socialmedicine.info/index.php/socialmedicine/article/view/2347"
    }
];
