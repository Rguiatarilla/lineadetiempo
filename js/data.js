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
        description: "Las campañas contra el pian en Antioquia llevaron por primera vez de manera sistemática la atención médica desde las ciudades hacia las zonas rurales y marginadas. Se implementaron unidades sanitarias descentralizadas, comisiones de higiene rural y médicos itinerantes, mostrando que la salud debía atender también las condiciones de vida y las necesidades de las comunidades rurales, y no centrarse únicamente en la enfermedad individual.",
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
        description: "Los seminarios de Viña del Mar y Tehuacán promovieron en América Latina una visión más amplia de la salud, considerando no solo la atención de la enfermedad, sino también la prevención, la comunidad y las condiciones que influyen en la salud de las personas. Estos encuentros hacen parte de los antecedentes que contribuyeron a la evolución de una mirada más integral y colectiva de la salud, que posteriormente se relacionaría con el desarrollo de la Atención Primaria en Salud.",
        icon: "assets/images/icono-03-sc.jpg",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
        link: "https://www.scielo.br/j/sausoc/a/bTHWsnDCM3h9Fpj73YGSLgn/?lang=pt"
    },
    {
        year: "1956",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Depto. Medicina Preventiva y Salud Pública (U. de Antioquia)",
        description: "La creación de este departamento, impulsada por Héctor Abad Gómez, fortaleció en Colombia un enfoque preventivo y comunitario de la salud. Su propuesta buscaba acercar la formación médica a las comunidades y reconocer los problemas sociales relacionados con la salud, constituyendo un antecedente importante para el posterior desarrollo de la Medicina Social y la Salud Colectiva.",
        icon: "assets/images/icono-04-sc.jpg",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80",
        link: "https://gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-S0213911120300662"
    },
    {
        year: "1958",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Programa de Promotoras Rurales de Salud (Santo Domingo)",
        description: "El programa fortaleció una nueva forma de entender la salud en las zonas rurales: la comunidad podía participar activamente en el cuidado, la prevención y la solución de sus propios problemas de salud. Las promotoras, capacitadas en higiene, educación sanitaria, saneamiento, primeros auxilios y vacunación, permitieron acercar estos conocimientos a las comunidades y reducir la dependencia de especialistas. Este modelo se convirtió en un antecedente importante de la atención comunitaria y territorial que posteriormente caracterizaría a la Salud Colectiva.",
        icon: "assets/images/icono-05-sc.jpg",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80",
        link: "https://gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-S0213911120300662"
    },
    {
        year: "1963",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Escuela Nacional de Salud Pública (Medellín)",
        description: "Héctor Abad Gómez fundó la Escuela Nacional de Salud Pública para profundizar en el estudio de la medicina social. Este hecho fortaleció la formación académica en salud pública y consolidó en Colombia una mirada que buscaba comprender la salud más allá de la enfermedad individual.",
        icon: "assets/images/icono-06-sc.jpg",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
        link: "https://www.gacetasanitaria.org/es-hector-abad-gomez-1921-1987-medico-educador-articulo-resumen-S0213911120300662"
    },
    {
        year: "1972",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Seminario de Ciencias Sociales Aplicadas a la Medicina (Cuenca)",
        description: "El seminario, impulsado por Juan César García, reunió investigadores y docentes de América Latina para discutir cómo las ciencias sociales podrían ayudar a comprender la relación entre sociedad, salud y enfermedad. Representó un punto clave en el surgimiento de la Medicina Social Latinoamericana, al cuestionar que los problemas de salud pudieran explicarse únicamente desde una perspectiva biológica e individual.",
        icon: "assets/images/icono-07-sc.jpg",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
        link: "https://www.scielo.br/j/csc/a/JwYtGBwxKGFSGp6Jv6rbSQM/?lang=pt"
    },
    {
        year: "1975",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Tesis 'O Dilema Preventivista' (Sergio Arouca)",
        description: "Sergio Arouca cuestionó los límites de la medicina preventiva, señalando que su enfoque individual y liberal no era suficiente para explicar los problemas de salud en su dimensión social. Su propuesta abrió espacio para nuevas formas de comprender la relación entre salud, enfermedad y sociedad, aportando al desarrollo de la Medicina Social Latinoamericana y posteriormente de la Salud Colectiva.",
        icon: "assets/images/icono-08-sc.jpg",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
        link: "https://books.scielo.org/id/q7gtd"
    },
    {
        year: "1976",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Fundación del CEBES (Brasil)",
        description: "Se fundó el Centro Brasileño de Estudios de Salud, un espacio de debate y producción de conocimiento que promovió una comprensión de la salud como un fenómeno social y político, no únicamente como un problema médico. El CEBES contribuyó a cuestionar el modelo de atención vigente y a impulsar propuestas de democratización de la salud, convirtiéndose en un referente del movimiento de Reforma Sanitaria Brasileña y del proceso que posteriormente daría origen al Sistema Único de Salud.",
        icon: "assets/images/icono-09-sc.jpg",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&auto=format&fit=crop&q=80",
        link: "https://cebes.org.br/ano-1976/5830/"
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
        description: "En este encuentro se discutió y comenzó a consolidarse la Salud Colectiva como un nuevo campo de conocimiento, superando una visión de la salud centrada únicamente en la enfermedad y la atención médica. Se propuso comprender la salud y la enfermedad como procesos sociales, económicos, políticos e históricos, articulando las ciencias sociales, la epidemiología y las políticas de salud. Además, se impulsó la organización de los programas de posgrado, antecedente de la creación de ABRASCO en 1979.",
        icon: "assets/images/icono-11-sc.jpg",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&auto=format&fit=crop&q=80",
        link: "https://abrasco.org.br/passado-presente-e-futuro-da-saude-coletiva-em-sessao-alusiva-aos-35-anos-da-abrasco-em-salvador/"
    },
    {
        year: "1979",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Fundación de ABRASCO (Brasil)",
        description: "El 27 de septiembre de 1979 se fundó la Asociación Brasileña de Posgrado en Salud Colectiva (ABRASCO), agrupando profesionales, docentes y estudiantes de Medicina Social, Medicina Preventiva y Salud Pública bajo la denominación de 'Salud Colectiva'. Su creación contribuyó a institucionalizar y consolidar la Salud Colectiva como un campo académico organizado en América Latina.",
        icon: "assets/images/icono-12-sc.jpg",
        image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=600&auto=format&fit=crop&q=80",
        link: "https://abrasco.org.br/sobre-a-abrasco/historia-e-memoria/"
    },
    {
        year: "1984",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Fundación de ALAMES (Ouro Preto)",
        description: "La creación de la Asociación Latinoamericana de Medicina Social (ALAMES) fortaleció la articulación del movimiento latinoamericano de Medicina Social, consolidando una mirada de la salud como un fenómeno social y colectivo. Su creación permitió unir experiencias, conocimientos y actores de diferentes países alrededor de una visión de salud vinculada con las condiciones de vida, la sociedad y los derechos.",
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
        description: "Fue asesinado el 25 de agosto de 1987 en Medellín. Su legado destacó la importancia de una salud comprometida con la justicia social, los derechos humanos y las condiciones de vida de las comunidades, aportando al desarrollo de la Medicina Social y la Salud Colectiva en Latinoamérica.",
        icon: "assets/images/icono-15-sc.jpg",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
        link: "https://centrodememoriahistorica.gov.co/no-olvidamos-a-hector-abad-gomez/"
    },
    {
        year: "1988",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Constitución de Brasil y creación del SUS",
        description: "La Constitución de Brasil de 1988 reconoció la salud como un derecho de todas las personas y una responsabilidad del Estado. A partir de este reconocimiento se creó el Sistema Único de Salud (SUS), basado en el acceso universal, la atención integral y la participación social, fortaleciendo una visión de la salud como un derecho colectivo.",
        icon: "assets/images/icono-16-sc.jpg",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
        link: "https://www.scielo.br/j/sausoc/a/QKtFb9PkdpcTnz7YNJyMzjN/?lang=pt"
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
        description: "La Coordinación de Perfeccionamiento de Personal de Nivel Superior (CAPES) creó formalmente el área de evaluación 'Saúde Coletiva', lo que permitió reconocer y consolidar la Salud Colectiva como un campo académico propio, fortaleciendo los programas de posgrado y la investigación.",
        icon: "assets/images/icono-18-sc.jpg",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
        link: "https://abrasco.org.br/sobre-a-abrasco/historia-e-memoria/"
    },
    {
        year: "1998",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Artículo 'Saúde Coletiva' (Paim y Almeida Filho)",
        description: "Paim y Almeida Filho plantearon que la Salud Colectiva no debía ser simplemente una nueva versión de la salud pública tradicional. Su aporte fue proponerla como un campo científico abierto a nuevos paradigmas, fortaleciendo su identidad, sus fundamentos teóricos y su desarrollo como campo propio.",
        icon: "assets/images/icono-19-sc.jpg",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
        link: "https://www.scielo.br/j/rsp/a/PDRmKQr7vRTRqRJtSgSdw7y/?lang=pt"
    },
    {
        year: "2003",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Doctorado en Salud Pública (U. Nacional de Colombia)",
        description: "La Universidad Nacional de Colombia creó en 2003 el Programa Interfacultades de Doctorado en Salud Pública, que inició actividades en febrero de 2004. Fue el primer doctorado en Salud Pública del país y representó un avance importante en la consolidación académica del campo en Colombia. Su propósito fue formar investigadores de alto nivel capaces de producir conocimiento sobre los problemas de salud, con énfasis en los determinantes sociales. El programa fortaleció una mirada integral de la salud, articulando dimensiones biológicas, sociales, políticas y económicas y dando continuidad a una tradición de medicina social comprometida con la comprensión de las condiciones que afectan la salud de las poblaciones.",
        icon: "assets/images/icono-20-sc.jpg",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80",
        link: "https://doctoradosaludp.unal.edu.co/"
    },
    {
        year: "2007 – 2011",
        category: "sc",
        tag: "Salud Colectiva",
        title: "Modelo de Salud Mental Comunitaria (Ordenanza 026 Nariño)",
        description: "Mediante la Ordenanza 026 de 2007, Nariño adoptó el Modelo de Atención Primaria en Salud Mental de Base Comunitaria, buscando llevar la atención en salud mental de los hospitales hacia las comunidades. El modelo fortaleció la promoción, la prevención y la intervención temprana, mediante la formación y participación de agentes de salud mental comunitarios. Para 2011, había sido implementado en el 100% de los municipios del departamento y se habían formado aproximadamente 4.000 agentes. Este proceso representó una aplicación territorial de los principios de la Atención Primaria en Salud y la Medicina Social, acercando el cuidado de la salud mental a las comunidades y reconociendo las necesidades propias de cada territorio.",
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
        description: "Mediante el Acuerdo Municipal 034 de 2019, el Concejo de Pasto adoptó la Política Pública en Salud Colectiva 'La Salud en Todos los Derechos', con vigencia hasta 2032. Su construcción contó con la participación de más de 1.500 personas y parte de una idea fundamental: la salud es un derecho integral y está relacionada con las condiciones sociales, económicas, ambientales y territoriales en las que viven las comunidades. La política busca incorporar la salud en todas las políticas públicas del municipio y reconoce los determinantes sociales de la salud como un eje transversal. Para llevar este enfoque a la práctica, la Secretaría de Salud desarrolla la estrategia Ciudad Bienestar, como un espacio de encuentro, participación y movilización social en defensa del derecho a la salud. Ciudad Bienestar articula procesos pedagógicos, formación de agentes comunitarios, participación ciudadana y espacios de gobernanza, como las Mesas Territoriales por el Derecho a la Salud. De esta manera, la experiencia de Pasto representa una aplicación territorial del enfoque latinoamericano de Salud Colectiva.",
        icon: "assets/images/icono-26-sc.jpg",
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&auto=format&fit=crop&q=80"
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
        description: "En agosto de 2025, ALAMES realizó su XVIII Congreso Latinoamericano de Medicina Social y Salud Colectiva en la Universidad Estatal de Río de Janeiro, conmemorando 40 años de la organización. El encuentro reunió a más de 2.500 participantes de América Latina y permitió hacer un balance de cuatro décadas de trabajo y pensamiento en torno a la Medicina Social y la Salud Colectiva. El congreso retomó como eje la determinación social de la salud, los derechos sociales, la democracia y la soberanía de los pueblos, reafirmando una visión de la salud como un proceso colectivo relacionado con las condiciones de vida y con los derechos de las poblaciones. Más que ser solamente un encuentro académico, representó la continuidad de una corriente latinoamericana que busca comprender la salud desde una perspectiva social, política y territorial.",
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
