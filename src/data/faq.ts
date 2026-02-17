export interface FaqQuestion {
  id: string;
  question: string;
  answer: string;
  regions?: string[];
  relatedArticles?: string[];
  isOfficial?: boolean;
}

export interface FaqCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: FaqQuestion[];
}

export const faqData: FaqCategory[] = [
  {
    id: "presupuesto",
    title: "Presupuesto y Recursos Financieros",
    description: "Financiamiento, asignación de recursos y continuidad presupuestaria del SBAP.",
    icon: "💰",
    questions: [
      {
        id: "pres-01",
        question: "¿El SBAP contará con presupuesto propio y suficiente para operar desde el primer día?",
        answer: "Sí. La Ley 21.600 establece que el SBAP es un servicio público con patrimonio propio. El presupuesto para el primer año de operación está contemplado en la Ley de Presupuestos del Sector Público, asegurando continuidad operativa. Además, se están gestionando los recursos necesarios para cubrir las brechas identificadas en las regiones durante las sesiones de gestión del cambio.",
        regions: ["Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Araucanía"],
        relatedArticles: ["Ley 21.600"],
        isOfficial: true,
      },
      {
        id: "pres-02",
        question: "¿Cómo se asignarán los recursos financieros a cada región?",
        answer: "La distribución presupuestaria regional se realizará considerando criterios como la cantidad de áreas protegidas, superficie administrada, dotación de personal y necesidades operativas específicas de cada región. Se busca corregir las brechas históricas de financiamiento que existían bajo la administración de CONAF, priorizando las regiones con mayor déficit operativo.",
        regions: ["Los Lagos", "Aysén", "Magallanes", "Biobío"],
      },
      {
        id: "pres-03",
        question: "¿Se mantendrán los ingresos por concepto de entradas a parques y reservas?",
        answer: "Los ingresos por concepto de tarifas de ingreso a las áreas protegidas del Estado serán administrados por el SBAP. La Ley 21.600 contempla que estos recursos contribuyan al financiamiento de la gestión y conservación de las áreas protegidas, lo que representa una mejora respecto al modelo anterior donde estos fondos no siempre retornaban directamente a las áreas que los generaban.",
        regions: ["Araucanía", "Los Lagos", "Magallanes"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "pres-04",
        question: "¿Qué pasará con los proyectos financiados con fondos internacionales (GEF, KfW, etc.)?",
        answer: "Los proyectos con financiamiento internacional que actualmente ejecuta CONAF en materia de biodiversidad y áreas protegidas serán traspasados al SBAP, asegurando la continuidad de los compromisos adquiridos con organismos internacionales. Se está trabajando en la articulación institucional necesaria para garantizar una transición ordenada de estos convenios.",
        regions: ["Región Metropolitana", "Valparaíso"],
      },
      {
        id: "pres-05",
        question: "¿Los guardaparques seguirán manejando caja chica para gastos operativos urgentes?",
        answer: "El SBAP implementará mecanismos de gestión financiera que permitan atender las necesidades operativas urgentes en terreno. Se está diseñando un sistema de soporte administrativo y financiero regional que sea más eficiente y oportuno que el existente, considerando las particularidades del trabajo en áreas protegidas remotas.",
        regions: ["Atacama", "Aysén", "Magallanes"],
      },
    ],
  },
  {
    id: "traspaso-bienes",
    title: "Traspaso de Bienes y Continuidad Institucional",
    description: "Transferencia de activos, convenios, comodatos y continuidad de proyectos.",
    icon: "🏛️",
    questions: [
      {
        id: "bien-01",
        question: "¿Qué bienes se traspasan de CONAF al SBAP?",
        answer: "Se traspasan al SBAP todos los bienes muebles e inmuebles, activos y recursos que CONAF destinaba a la administración de áreas protegidas del Estado. Esto incluye vehículos, equipamiento, infraestructura dentro de las áreas protegidas y los sistemas informáticos asociados. El traspaso se realiza mediante un proceso formal de inventario y acta de entrega.",
        regions: ["Todas las regiones"],
        relatedArticles: ["Ley 21.600"],
        isOfficial: true,
      },
      {
        id: "bien-02",
        question: "¿Qué ocurre con los comodatos y convenios vigentes que tiene CONAF con terceros?",
        answer: "Los convenios, comodatos y acuerdos de colaboración vigentes relacionados con la administración de áreas protegidas serán traspasados al SBAP por el solo ministerio de la ley. Esto incluye convenios con municipalidades, universidades, organizaciones comunitarias y otros organismos del Estado. Se realizará una revisión caso a caso para asegurar la continuidad de cada instrumento.",
        regions: ["O'Higgins", "Maule", "Biobío", "Los Ríos"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "bien-03",
        question: "¿Se mantendrán las concesiones turísticas vigentes en parques nacionales?",
        answer: "Las concesiones otorgadas dentro de áreas protegidas del Estado continuarán vigentes bajo la administración del SBAP. La Ley 21.600, en su artículo 94, regula el régimen de concesiones, estableciendo un marco normativo actualizado que busca compatibilizar el uso público con la conservación de la biodiversidad.",
        regions: ["Araucanía", "Los Lagos", "Magallanes"],
        relatedArticles: ["Art. 94, Ley 21.600"],
      },
      {
        id: "bien-04",
        question: "¿Qué pasa con los proyectos y programas en ejecución durante la transición?",
        answer: "Todos los proyectos y programas en ejecución relacionados con áreas protegidas continuarán sin interrupción. Se ha definido un protocolo de traspaso que incluye la transferencia de documentación técnica, estados de avance y compromisos pendientes, para asegurar que ningún proyecto quede detenido por el cambio institucional.",
        regions: ["Coquimbo", "Valparaíso", "O'Higgins"],
      },
      {
        id: "bien-05",
        question: "¿Cuándo entra en operaciones el SBAP?",
        answer: "La Ley 21.600 establece plazos definidos para la entrada en operaciones del SBAP. El proceso de instalación es gradual, comenzando con la constitución de las autoridades del servicio, seguido del traspaso de personal y bienes, hasta alcanzar la plena operatividad. Las fechas específicas dependen de los decretos de implementación que dicte el Ministerio del Medio Ambiente.",
        regions: ["Todas las regiones"],
        relatedArticles: ["Ley 21.600"],
        isOfficial: true,
      },
    ],
  },
  {
    id: "condiciones-laborales",
    title: "Condiciones Laborales y Remuneraciones",
    description: "Turnos, jornadas, remuneraciones y condiciones contractuales del personal.",
    icon: "⚖️",
    questions: [
      {
        id: "lab-01",
        question: "¿Se mantendrán las remuneraciones actuales al pasar al SBAP?",
        answer: "La Ley 21.600 garantiza que el traspaso de personal se realizará sin menoscabo de las remuneraciones. Los funcionarios que se incorporen al SBAP mantendrán, como mínimo, las condiciones económicas que percibían en CONAF. Adicionalmente, al pasar a ser funcionarios públicos, se accede a la escala de remuneraciones del sector público con sus respectivos beneficios.",
        regions: ["Todas las regiones"],
        relatedArticles: ["Ley 21.600"],
        isOfficial: true,
      },
      {
        id: "lab-02",
        question: "¿Qué pasará con el sistema de turnos de los guardaparques?",
        answer: "El régimen de turnos y jornadas laborales de los guardaparques será regulado en el reglamento interno del SBAP. Se está trabajando en un modelo que reconozca las particularidades del trabajo en áreas protegidas (estacionalidad, remoteness, emergencias) y que sea compatible con la normativa laboral del sector público. Se busca mejorar las condiciones actuales, especialmente en turnos extensos que afectan la calidad de vida.",
        regions: ["Antofagasta", "Atacama", "Araucanía", "Los Lagos", "Aysén", "Magallanes"],
      },
      {
        id: "lab-03",
        question: "¿Se pagarán las horas extraordinarias y trabajo en días festivos?",
        answer: "Como funcionarios públicos del SBAP, el personal tendrá derecho al pago de horas extraordinarias y trabajo en días festivos conforme a la legislación vigente para el sector público. Esto representa una mejora significativa respecto a la situación en CONAF, donde este aspecto presentaba irregularidades en algunas regiones.",
        regions: ["Atacama", "Coquimbo", "Araucanía"],
      },
      {
        id: "lab-04",
        question: "¿Qué ocurre con los jornales transitorios y el personal a honorarios?",
        answer: "La situación del personal con contratos a jornal transitorio y a honorarios está siendo abordada en el marco de la dotación del SBAP. Se busca regularizar la situación contractual del personal que cumple funciones permanentes, avanzando hacia contratos que ofrezcan mayor estabilidad laboral. La definición de la dotación del SBAP contempla la absorción de estos trabajadores en la medida que las funciones lo requieran.",
        regions: ["Valparaíso", "Maule", "Biobío", "Los Ríos"],
      },
      {
        id: "lab-05",
        question: "¿Se reconocerá la antigüedad laboral acumulada en CONAF?",
        answer: "La continuidad laboral y el reconocimiento de la antigüedad es un aspecto contemplado en las disposiciones transitorias de la Ley 21.600. El traspaso de personal se realiza reconociendo la trayectoria de los funcionarios, lo que incide en beneficios como bienios, asignación de experiencia y otros derechos asociados a la antigüedad.",
        regions: ["Todas las regiones"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "lab-06",
        question: "¿Se mantendrá la alimentación y viáticos para el personal en terreno?",
        answer: "El SBAP contempla asignaciones y viáticos para el personal que desempeña funciones en terreno, particularmente en áreas protegidas alejadas de centros urbanos. Se está trabajando en un reglamento que reconozca las condiciones operativas especiales del trabajo en conservación, incluyendo alimentación, alojamiento y traslado cuando corresponda.",
        regions: ["Atacama", "Aysén", "Magallanes"],
      },
    ],
  },
  {
    id: "dotacion-personal",
    title: "Dotación, Personal y Contrataciones",
    description: "Cantidad de personal, contrataciones, distribución regional y perfiles.",
    icon: "👥",
    questions: [
      {
        id: "dot-01",
        question: "¿Cuántos funcionarios tendrá el SBAP y cómo se distribuirán regionalmente?",
        answer: "La dotación del SBAP se está definiendo en base a un estudio de brechas de personal que considera la cantidad de áreas protegidas, superficie, visitación, amenazas y necesidades operativas de cada región. Se busca superar el déficit histórico de guardaparques y personal de apoyo, con una distribución que priorice las regiones con mayor brecha entre dotación actual y necesidades reales.",
        regions: ["Todas las regiones"],
      },
      {
        id: "dot-02",
        question: "¿Se aumentará la dotación de guardaparques?",
        answer: "Uno de los objetivos del SBAP es contar con una dotación de guardaparques acorde a los estándares internacionales de gestión de áreas protegidas. Se ha identificado un déficit significativo que se busca reducir progresivamente. El aumento de dotación dependerá de los recursos presupuestarios asignados al servicio, pero está dentro de las prioridades de la nueva institucionalidad.",
        regions: ["Antofagasta", "Atacama", "Aysén", "Magallanes", "Araucanía"],
      },
      {
        id: "dot-03",
        question: "¿Qué pasa con el personal de CONAF que no trabaja en áreas protegidas?",
        answer: "El SBAP absorbe específicamente al personal que desempeña funciones relacionadas con la administración de áreas protegidas del Estado y biodiversidad. El personal de CONAF dedicado a funciones forestales (plantaciones, incendios forestales fuera de SNASPE) permanecerá en CONAF, que continuará existiendo como corporación dedicada al ámbito forestal.",
        regions: ["Región Metropolitana", "Biobío", "Maule"],
      },
      {
        id: "dot-04",
        question: "¿Se contratará personal nuevo o solo se traspasa el existente?",
        answer: "El SBAP incorporará tanto al personal traspasado desde CONAF como a nuevos funcionarios que se requieran para cubrir las brechas de dotación. Las nuevas contrataciones se realizarán mediante los mecanismos regulares del sector público (concursos públicos), lo que abre oportunidades para profesionales especializados en conservación, fiscalización ambiental y gestión de áreas protegidas.",
        regions: ["Todas las regiones"],
      },
      {
        id: "dot-05",
        question: "¿Habrá oficinas provinciales o solo regionales?",
        answer: "La estructura territorial del SBAP contempla presencia tanto a nivel regional como provincial, considerando la extensión geográfica y la distribución de las áreas protegidas en el territorio. La definición específica de oficinas provinciales se abordará en el proceso de diseño organizacional del servicio, priorizando la cercanía a las áreas protegidas y la eficiencia operativa.",
        regions: ["Coquimbo", "Valparaíso", "Biobío", "Los Lagos"],
      },
    ],
  },
  {
    id: "fiscalizacion",
    title: "Fiscalización y Nuevas Competencias",
    description: "Facultades de fiscalización, sanción y nuevas atribuciones del SBAP.",
    icon: "🔍",
    questions: [
      {
        id: "fisc-01",
        question: "¿Qué facultades de fiscalización tendrá el SBAP que CONAF no tenía?",
        answer: "La Ley 21.600 otorga al SBAP facultades de fiscalización significativamente más robustas que las que tenía CONAF. Esto incluye la capacidad de aplicar sanciones administrativas, realizar inspecciones, decomisar especies y productos, y denunciar infracciones ante tribunales ambientales. Los guardaparques tendrán atribuciones de fiscalización expresamente reconocidas por ley, lo que fortalece su rol en la protección de la biodiversidad.",
        regions: ["Tarapacá", "Atacama", "Araucanía", "Los Lagos", "Aysén"],
        relatedArticles: ["Art. 108, Ley 21.600"],
      },
      {
        id: "fisc-02",
        question: "¿Los guardaparques podrán fiscalizar actividades mineras dentro de áreas protegidas?",
        answer: "La Ley 21.600, en su artículo 60, regula la relación entre actividades mineras y áreas protegidas. El SBAP tendrá competencia para fiscalizar que las actividades que se realicen dentro o en las cercanías de áreas protegidas cumplan con las condiciones ambientales establecidas. Esto se coordinará con otros organismos competentes como el Sernageomin y la Superintendencia del Medio Ambiente.",
        regions: ["Atacama", "Antofagasta", "Tarapacá"],
        relatedArticles: ["Art. 60, Ley 21.600"],
      },
      {
        id: "fisc-03",
        question: "¿Habrá capacitación en las nuevas competencias de fiscalización?",
        answer: "Sí. Se contempla un programa de capacitación e inducción para todo el personal del SBAP, con énfasis en las nuevas facultades de fiscalización, el marco normativo de la Ley 21.600, procedimientos sancionatorios y coordinación con otros organismos del Estado. La capacitación será diferenciada según el perfil y funciones de cada funcionario.",
        regions: ["Todas las regiones"],
      },
      {
        id: "fisc-04",
        question: "¿Cómo se coordinará la fiscalización con Carabineros y otros organismos?",
        answer: "El SBAP establecerá protocolos de coordinación interinstitucional con Carabineros, PDI, Sernapesca, SAG, Superintendencia del Medio Ambiente y otros organismos con competencias en el territorio. Esta articulación institucional es clave para una fiscalización efectiva, especialmente en áreas remotas donde la presencia de guardaparques es a menudo la única autoridad estatal permanente.",
        regions: ["Aysén", "Magallanes", "Los Lagos", "Araucanía"],
      },
      {
        id: "fisc-05",
        question: "¿Qué responsabilidad legal tendrán los guardaparques al fiscalizar?",
        answer: "La Ley 21.600, en su artículo 113, establece el régimen de responsabilidad de los funcionarios del SBAP en el ejercicio de sus funciones de fiscalización. Se contempla protección jurídica para los funcionarios que actúen en el marco de sus atribuciones legales, y se definirán protocolos claros de actuación para resguardar tanto la legalidad de los procedimientos como la seguridad del personal.",
        regions: ["Tarapacá", "Atacama", "Maule", "Biobío"],
        relatedArticles: ["Art. 113, Ley 21.600"],
      },
    ],
  },
  {
    id: "carrera-funcionaria",
    title: "Carrera Funcionaria y Desarrollo Profesional",
    description: "Calificaciones, ascensos, capacitación y desarrollo de carrera.",
    icon: "📈",
    questions: [
      {
        id: "carr-01",
        question: "¿Existirá carrera funcionaria en el SBAP?",
        answer: "Sí. Como servicio público, el SBAP se regirá por el Estatuto Administrativo, lo que implica un sistema de carrera funcionaria con escalafones, grados, calificaciones y mecanismos de promoción. Esto representa una diferencia sustancial respecto a CONAF (que era una corporación privada), ya que otorga derechos de carrera funcionaria a todo el personal de planta.",
        regions: ["Todas las regiones"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "carr-02",
        question: "¿Cómo será el sistema de calificaciones y evaluación de desempeño?",
        answer: "El sistema de calificaciones del SBAP se regirá por las normas del Estatuto Administrativo y el reglamento de calificaciones del sector público. Se contempla un sistema que valore tanto las competencias técnicas específicas de la conservación como el desempeño en las funciones propias del cargo. Las calificaciones inciden directamente en las posibilidades de ascenso y promoción.",
        regions: ["Región Metropolitana", "Maule", "Biobío"],
      },
      {
        id: "carr-03",
        question: "¿Habrá programas de capacitación y especialización para el personal?",
        answer: "El SBAP contempla un plan de capacitación integral que incluye inducción al nuevo servicio, formación en el marco normativo de la Ley 21.600, especialización técnica en conservación de biodiversidad, manejo de áreas protegidas, fiscalización ambiental y desarrollo de habilidades de gestión. Se busca profesionalizar progresivamente la función de guardaparque y del personal de conservación.",
        regions: ["Todas las regiones"],
      },
      {
        id: "carr-04",
        question: "¿Se reconocerán los títulos y especializaciones del personal de CONAF?",
        answer: "Los títulos profesionales, técnicos y las especializaciones del personal traspasado serán reconocidos en el marco de la carrera funcionaria del SBAP. Además, se está trabajando en la definición de perfiles de cargo que valoren la experiencia práctica en terreno, reconociendo que muchos guardaparques poseen un conocimiento invaluable adquirido en años de trabajo en áreas protegidas.",
        regions: ["Araucanía", "Los Ríos", "Los Lagos"],
      },
      {
        id: "carr-05",
        question: "¿Podrán los guardaparques ascender a cargos directivos?",
        answer: "La estructura de cargos del SBAP contempla posibilidades de movilidad y ascenso para todos los funcionarios, incluyendo guardaparques. El sistema de carrera funcionaria del sector público establece mecanismos de promoción basados en mérito, calificaciones y concursos internos, lo que abre oportunidades de desarrollo profesional que antes eran más limitadas.",
        regions: ["Biobío", "Araucanía", "Aysén"],
      },
    ],
  },
  {
    id: "estructura-organizacion",
    title: "Estructura y Organización del SBAP",
    description: "Organigrama, direcciones regionales, gobernanza interna.",
    icon: "🏗️",
    questions: [
      {
        id: "estr-01",
        question: "¿Cómo se organizará internamente el SBAP?",
        answer: "El SBAP tendrá una estructura que incluye una Dirección Nacional, subdirecciones temáticas y Direcciones Regionales en cada una de las 16 regiones del país. El diseño organizacional busca equilibrar la conducción estratégica nacional con la autonomía operativa regional, reconociendo que las realidades territoriales de las áreas protegidas son muy diversas a lo largo de Chile.",
        regions: ["Todas las regiones"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "estr-02",
        question: "¿Quién será la máxima autoridad del SBAP?",
        answer: "El SBAP será dirigido por un Director o Directora Nacional, designado mediante el Sistema de Alta Dirección Pública. Esta figura tendrá la responsabilidad de conducir estratégicamente el servicio, representarlo ante otras instituciones y velar por el cumplimiento de sus funciones legales. Cada región contará además con un Director Regional.",
        regions: ["Región Metropolitana"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "estr-03",
        question: "¿Cuál será la relación del SBAP con el Ministerio del Medio Ambiente?",
        answer: "El SBAP será un servicio público dependiente del Ministerio del Medio Ambiente. Esto significa que las políticas y directrices estratégicas sobre biodiversidad y áreas protegidas emanarán del Ministerio, mientras que el SBAP será el organismo ejecutor encargado de implementarlas en terreno. Esta relación fortalece la institucionalidad ambiental del país.",
        regions: ["Región Metropolitana", "Valparaíso"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "estr-04",
        question: "¿Existirá un consejo consultivo o instancia de participación ciudadana?",
        answer: "La Ley 21.600 contempla instancias de participación y consulta en la gestión de áreas protegidas. Se establecerán mecanismos para incorporar la visión de comunidades locales, pueblos originarios, academia y sociedad civil en la toma de decisiones sobre la gestión de áreas protegidas, fortaleciendo la gobernanza participativa.",
        regions: ["Araucanía", "Los Ríos", "Los Lagos", "Aysén"],
        relatedArticles: ["Ley 21.600"],
      },
    ],
  },
  {
    id: "reglamentos-normativa",
    title: "Reglamentos y Marco Normativo",
    description: "Ley 21.600, reglamentos pendientes y marco legal del traspaso.",
    icon: "📜",
    questions: [
      {
        id: "regl-01",
        question: "¿Qué es la Ley 21.600 y qué establece?",
        answer: "La Ley 21.600 crea el Servicio de Biodiversidad y Áreas Protegidas (SBAP) y el Sistema Nacional de Áreas Protegidas (SNAP). Es el marco legal que establece la nueva institucionalidad para la conservación de la biodiversidad en Chile, definiendo las funciones, atribuciones, estructura y financiamiento del SBAP, así como las normas para la gestión de áreas protegidas terrestres y acuáticas continentales.",
        regions: ["Todas las regiones"],
        relatedArticles: ["Ley 21.600"],
        isOfficial: true,
      },
      {
        id: "regl-02",
        question: "¿Qué reglamentos se necesitan para que el SBAP opere completamente?",
        answer: "La Ley 21.600 mandata la dictación de varios reglamentos complementarios que detallan aspectos específicos de la operación del SBAP: reglamento de categorías de áreas protegidas, reglamento de concesiones, reglamento de planes de manejo, reglamento de fiscalización y sanciones, entre otros. El Ministerio del Medio Ambiente está trabajando en la elaboración de estos instrumentos.",
        regions: ["Región Metropolitana"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "regl-03",
        question: "¿Qué pasa con los sitios Ramsar y los compromisos internacionales?",
        answer: "La Ley 21.600, en su artículo 37, establece disposiciones específicas sobre los sitios Ramsar (humedales de importancia internacional) y otros compromisos internacionales de conservación. El SBAP asumirá la responsabilidad de cumplir con las obligaciones derivadas de los tratados internacionales de biodiversidad suscritos por Chile, fortaleciendo la gobernanza de estos sitios.",
        regions: ["Tarapacá", "Atacama", "Valparaíso"],
        relatedArticles: ["Art. 37, Ley 21.600"],
      },
      {
        id: "regl-04",
        question: "¿El SBAP administrará áreas protegidas marinas?",
        answer: "La Ley 21.600 establece que el SBAP tiene competencia sobre áreas protegidas terrestres y acuáticas continentales. Las áreas marinas protegidas continuarán bajo la administración de otros organismos competentes (como Sernapesca para los parques marinos). Sin embargo, el SBAP participará en la coordinación de la gestión integrada de ecosistemas en zonas costeras donde exista continuidad ecológica entre áreas terrestres y marinas.",
        regions: ["Arica", "Atacama", "Valparaíso", "Los Lagos"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "regl-05",
        question: "¿Qué pronunciamiento ha emitido la Contraloría General de la República sobre el traspaso?",
        answer: "La Contraloría General de la República tiene un rol clave en la toma de razón de los actos administrativos del traspaso. Se están tramitando los decretos y resoluciones necesarios para la instalación del SBAP, sujetos al control de legalidad de la Contraloría. Cualquier pronunciamiento específico de la CGR será comunicado oportunamente a los funcionarios afectados.",
        regions: ["Región Metropolitana", "Valparaíso"],
        relatedArticles: ["Ley 21.600"],
      },
    ],
  },
  {
    id: "infraestructura",
    title: "Infraestructura, Equipamiento y Conectividad",
    description: "Oficinas, vehículos, tecnología y conectividad en áreas protegidas.",
    icon: "🏢",
    questions: [
      {
        id: "infr-01",
        question: "¿Se mejorarán las oficinas y la infraestructura de guardería?",
        answer: "El SBAP tiene como prioridad mejorar la infraestructura de guardería y oficinas administrativas en áreas protegidas. Se ha realizado un levantamiento de brechas de infraestructura a nivel nacional y se está diseñando un plan de inversión que aborde las necesidades más urgentes, incluyendo la construcción y reparación de guarderías, centros de visitantes y oficinas regionales.",
        regions: ["Antofagasta", "Atacama", "Aysén", "Magallanes"],
      },
      {
        id: "infr-02",
        question: "¿Se renovará la flota de vehículos?",
        answer: "La renovación de la flota vehicular es una de las brechas identificadas en las sesiones de gestión del cambio. El SBAP está evaluando las necesidades de transporte de cada región, considerando las características geográficas y la accesibilidad de las áreas protegidas. Se priorizará la adquisición de vehículos adecuados para terreno difícil y se buscará implementar un plan de mantenimiento preventivo.",
        regions: ["Atacama", "Coquimbo", "Araucanía", "Los Lagos", "Aysén"],
      },
      {
        id: "infr-03",
        question: "¿Se mejorará la conectividad y comunicaciones en áreas protegidas remotas?",
        answer: "La conectividad es un desafío crítico que el SBAP abordará como prioridad. Se está trabajando en soluciones de conectividad que incluyen ampliación de cobertura de telecomunicaciones, implementación de sistemas satelitales de comunicación de emergencia y acceso a internet en guarderías. Esto es esencial tanto para la gestión operativa como para la seguridad del personal en áreas remotas.",
        regions: ["Atacama", "Aysén", "Magallanes", "Arica", "Tarapacá"],
      },
      {
        id: "infr-04",
        question: "¿Se implementarán sistemas informáticos propios del SBAP?",
        answer: "El SBAP desarrollará e implementará sistemas informáticos propios para la gestión de áreas protegidas, incluyendo plataformas de registro de visitantes, sistemas de monitoreo de biodiversidad, gestión documental y trámites en línea. Se está trabajando en la migración y mejora de los sistemas que actualmente opera CONAF, con foco en conectividad y plataformas digitales.",
        regions: ["Región Metropolitana", "Valparaíso"],
      },
      {
        id: "infr-05",
        question: "¿Qué pasará con la infraestructura de uso público (senderos, miradores, camping)?",
        answer: "La infraestructura de uso público en áreas protegidas será administrada por el SBAP. Se contempla un programa de mejoramiento y mantención de senderos, miradores, zonas de camping, señalética y servicios higiénicos, con estándares de calidad que mejoren la experiencia de los visitantes y sean compatibles con la conservación del patrimonio natural.",
        regions: ["Araucanía", "Los Lagos", "Magallanes", "Aysén"],
      },
    ],
  },
  {
    id: "seguridad-salud",
    title: "Seguridad y Salud Laboral",
    description: "Riesgos en terreno, elementos de protección, protocolos de emergencia.",
    icon: "🛡️",
    questions: [
      {
        id: "seg-01",
        question: "¿Se proporcionarán elementos de protección personal adecuados?",
        answer: "El SBAP dotará a todo su personal de los elementos de protección personal (EPP) necesarios para el desempeño seguro de sus funciones. Esto incluye uniformes técnicos, equipamiento de seguridad para trabajo en terreno, elementos de comunicación de emergencia y equipamiento específico según las condiciones climáticas y geográficas de cada área protegida.",
        regions: ["Antofagasta", "Atacama", "Aysén", "Magallanes"],
      },
      {
        id: "seg-02",
        question: "¿Habrá protocolos de seguridad para el trabajo en terreno?",
        answer: "Se están desarrollando protocolos de seguridad específicos para el trabajo en áreas protegidas, que contemplen riesgos como fauna silvestre, condiciones climáticas extremas, terreno difícil, aislamiento y situaciones de emergencia. Estos protocolos incluirán procedimientos de comunicación, sistemas de monitoreo de personal en terreno y planes de evacuación.",
        regions: ["Atacama", "Araucanía", "Aysén", "Magallanes"],
      },
      {
        id: "seg-03",
        question: "¿Qué cobertura de salud tendrán los funcionarios del SBAP?",
        answer: "Como funcionarios públicos, el personal del SBAP tendrá acceso a la cobertura de salud del sector público, incluyendo la posibilidad de afiliarse a Fonasa o Isapre según su elección. Además, se contempla la contratación de seguros complementarios de salud y accidentes laborales, considerando los riesgos específicos del trabajo en áreas protegidas.",
        regions: ["Todas las regiones"],
      },
      {
        id: "seg-04",
        question: "¿Cómo se abordarán los riesgos de salud mental asociados al aislamiento?",
        answer: "El SBAP reconoce que el trabajo en áreas protegidas remotas conlleva desafíos de salud mental asociados al aislamiento. Se contempla implementar programas de bienestar del personal que incluyan apoyo psicológico, rotación de destinos, mejoramiento de condiciones de habitabilidad en guarderías y políticas de conectividad que permitan mantener contacto con familia y redes de apoyo.",
        regions: ["Atacama", "Aysén", "Magallanes"],
      },
    ],
  },
  {
    id: "areas-protegidas",
    title: "Gestión de Áreas Protegidas y Conservación",
    description: "Manejo de SNASPE, planes de manejo, conservación de biodiversidad.",
    icon: "🌿",
    questions: [
      {
        id: "area-01",
        question: "¿Qué cambios habrá en la gestión de parques nacionales y reservas?",
        answer: "La Ley 21.600 establece un nuevo sistema de categorías de áreas protegidas alineado con estándares internacionales (UICN). La gestión se profesionalizará con planes de manejo obligatorios, mayor fiscalización y un enfoque integral de conservación de la biodiversidad. Cada área protegida deberá contar con un plan de manejo aprobado que defina la zonificación, usos permitidos y estrategias de conservación.",
        regions: ["Todas las regiones"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "area-02",
        question: "¿Cómo se compatibilizará el turismo con la conservación?",
        answer: "El SBAP implementará un modelo de gestión que equilibre el uso público de las áreas protegidas con la conservación de la biodiversidad. Esto incluye la definición de capacidad de carga de visitantes, zonificación de uso público, regulación de actividades recreativas y turísticas, y cobro de tarifas diferenciadas. El objetivo es que el turismo en áreas protegidas sea una herramienta de conservación, no una amenaza.",
        regions: ["Araucanía", "Los Lagos", "Magallanes", "Atacama"],
      },
      {
        id: "area-03",
        question: "¿Se crearán nuevas áreas protegidas?",
        answer: "La Ley 21.600 establece un procedimiento para la creación de nuevas áreas protegidas del Estado, con criterios técnicos basados en representatividad ecosistémica, amenazas a la biodiversidad y conectividad ecológica. El SBAP podrá proponer al Ministerio del Medio Ambiente la creación de nuevas áreas protegidas y la reclasificación de las existentes según las nuevas categorías de manejo.",
        regions: ["Región Metropolitana", "Valparaíso", "O'Higgins"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "area-04",
        question: "¿Qué pasará con el control de especies invasoras y la restauración ecológica?",
        answer: "El SBAP tendrá competencias específicas en materia de control de especies exóticas invasoras y restauración ecológica dentro de áreas protegidas. Se contempla el desarrollo de programas de control de especies invasoras, restauración de ecosistemas degradados y monitoreo de biodiversidad como funciones permanentes del servicio, con presupuesto dedicado y personal especializado.",
        regions: ["Araucanía", "Los Ríos", "Los Lagos", "Aysén"],
      },
      {
        id: "area-05",
        question: "¿Cómo se abordarán las prohibiciones dentro de áreas protegidas?",
        answer: "La Ley 21.600, en su artículo 108, establece un catálogo de prohibiciones dentro de las áreas protegidas del Estado, que incluye actividades como la caza, extracción de recursos, introducción de especies exóticas y modificación del hábitat sin autorización. El SBAP tendrá la facultad de fiscalizar el cumplimiento de estas prohibiciones y aplicar sanciones administrativas a los infractores.",
        regions: ["Tarapacá", "Araucanía", "Los Lagos"],
        relatedArticles: ["Art. 108, Ley 21.600"],
      },
    ],
  },
  {
    id: "participacion-comunitaria",
    title: "Participación Comunitaria y Pueblos Originarios",
    description: "Relación con comunidades locales, consulta indígena y gobernanza territorial.",
    icon: "🤝",
    questions: [
      {
        id: "part-01",
        question: "¿Cómo se incorporará la participación de pueblos originarios en la gestión de áreas protegidas?",
        answer: "La Ley 21.600 reconoce el rol de los pueblos originarios en la conservación de la biodiversidad y establece mecanismos de participación en la gestión de áreas protegidas ubicadas en territorios indígenas. Se contempla la consulta indígena conforme al Convenio 169 de la OIT, la coadministración de áreas protegidas con comunidades indígenas y el reconocimiento de prácticas tradicionales de manejo de recursos naturales.",
        regions: ["Araucanía", "Los Ríos", "Los Lagos", "Arica", "Tarapacá", "Atacama"],
        relatedArticles: ["Ley 21.600", "Convenio 169 OIT"],
      },
      {
        id: "part-02",
        question: "¿Existirán instancias de coadministración con comunidades locales?",
        answer: "Sí. La Ley 21.600 contempla la posibilidad de establecer acuerdos de coadministración y gobernanza compartida entre el SBAP y comunidades locales, pueblos originarios y organizaciones de la sociedad civil. Estos acuerdos reconocen que la conservación efectiva de la biodiversidad requiere la participación activa de las comunidades que habitan en el entorno de las áreas protegidas.",
        regions: ["Araucanía", "Los Ríos", "Aysén"],
        relatedArticles: ["Ley 21.600"],
      },
      {
        id: "part-03",
        question: "¿Cómo se resolverán los conflictos territoriales con comunidades aledañas?",
        answer: "El SBAP implementará mecanismos de diálogo y resolución de conflictos con comunidades aledañas a las áreas protegidas. Se busca pasar de un enfoque de exclusión a uno de integración, donde las comunidades locales sean aliadas de la conservación. Esto incluye mesas de trabajo territoriales, programas de beneficio comunitario y acuerdos de uso sustentable de recursos en zonas de amortiguación.",
        regions: ["Araucanía", "Los Lagos", "Biobío", "Maule"],
      },
      {
        id: "part-04",
        question: "¿Se contratará personal local o indígena en las áreas protegidas?",
        answer: "El SBAP valora el conocimiento local y la vinculación territorial del personal. Si bien las contrataciones se rigen por los procedimientos del sector público, se reconoce la importancia de incorporar personas de las comunidades locales e indígenas, que aportan conocimiento tradicional y facilitan la relación con el territorio. Se está evaluando la inclusión de criterios de pertinencia territorial en los procesos de selección.",
        regions: ["Arica", "Tarapacá", "Araucanía", "Los Ríos", "Aysén"],
      },
    ],
  },
];
