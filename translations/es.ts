export const es = {
  // Navigation
  navigation: {
    home: "Inicio",
    addEntry: "Agregar Entrada",
    community: "Comunidad",
    stats: "Estadísticas",
    toggleMenu: "Alternar menú"
  },

  // Stats Dashboard
  stats: {
    totalCollected: "Total Recolectado",
    collectionEntries: "Entradas de Recolección",
    milestonesAchieved: "Hitos Alcanzados",
    weightEquivalent: "Peso Equivalente",
    milestoneProgress: "PROGRESO DE HITOS",
    achievedMilestones: "HITOS ALCANZADOS",
    environmentalImpact: "IMPACTO AMBIENTAL",
    plasticBottlesEquivalent: "Botellas de Plástico Equivalentes",
    garbageTrucks: "Camiones de Basura",
    planetSavingActions: "Acciones para Salvar el Planeta",
    plasticBottlesDescription: "Botellas de plástico aproximadas evitadas de contaminar",
    garbageTrucksDescription: "Capacidad de camión de basura llenada (10m³ ≈ 330 bolsas)",
    planetSavingDescription: "Cada entrada de recolección representa una acción para salvar nuestro planeta",
    keepMomentumGoing: "¡MANTÉN EL IMPULSO!",
    keepMomentumDescription: "Cada pieza de basura recolectada hace nuestro planeta más limpio. ¡Publica tus fotos de limpieza en Instagram con #onebagbetter e inspira a otros a unirse al movimiento!",
    followInstagram: "Sigue @onebagbetter en Instagram",
    truck: "camión",
    trucks: "camiones",
    bags: "bolsas"
  },

  // Collection Entry Form
  form: {
    title: "AGREGA TU RECOLECCIÓN",
    labels: {
      amount: "Cantidad Recolectada *",
      unit: "Unidad *",
      name: "Tu Nombre (Opcional)",
      location: "Ubicación (Opcional)"
    },
    placeholders: {
      amount: "Ingresa la cantidad",
      name: "Ingresa tu nombre",
      location: "¿Dónde recolectaste basura?"
    },
    units: {
      bags: "Bolsas de Basura",
      bagsShort: "Bolsas",
      kg: "Kilogramos",
      kgShort: "kg",
      lbs: "Libras",
      lbsShort: "lbs"
    },
    validation: {
      amountRequired: "La cantidad es requerida",
      amountInvalid: "Por favor ingresa una cantidad válida entre 0.1 y 10,000",
      unitInvalid: "Por favor selecciona una unidad válida"
    },
    buttons: {
      cancel: "Cancelar",
      submit: "Registrar Recolección",
      submitting: "Registrando..."
    },
    success: {
      title: "¡Excelente trabajo!",
      description: "Tu recolección de basura ha sido registrada.",
      shareTitle: "📸 ¡Comparte tus fotos de limpieza en Instagram con #onebagbetter!",
      twitter: "Twitter",
      instagram: "Instagram",
      facebook: "Facebook",
      hashtag: "Usa el hashtag: #onebagbetter"
    },
    tips: {
      ruleOfThumb: "💡 Regla general: 1 bolsa (30L) ≈ 1kg de empaques plásticos",
      nameCredit: "👤 Agrega tu nombre para obtener crédito por tus esfuerzos de limpieza",
      locationShare: "💡 Agrega ubicación para compartir más detalles en redes sociales"
    },
    helperText: "¡Cada pieza de basura recolectada hace la diferencia! 🌱",
    helperTextInstagram: "Publica tus fotos de limpieza en Instagram con #onebagbetter",
    shareText: "¡Acabo de recolectar {amount} {unit} de basura{location}{name}! 🌱 ¡Únete al movimiento para limpiar nuestro planeta! #onebagbetter"
  },

  // Activity Feed
  activity: {
    title: "ACTIVIDAD RECIENTE",
    loading: "Cargando actividad...",
    error: "Error al cargar el feed de actividad",
    tryAgain: "Intentar de Nuevo",
    noActivity: "¡Aún no hay recolecciones!",
    noActivityDescription: "Sé el primero en registrar una recolección de basura y comenzar a hacer la diferencia.",
    collected: "Recolectó {amount}",
    collectedBy: "{name} recolectó {amount}",
    shareHint: "Comparte tu limpieza con",
    shareHintShort: "Comparte con",
    pagination: {
      page: "Página {current} de {total}",
      previous: "Anterior",
      next: "Siguiente"
    },
    refresh: "Actualizar actividad"
  },

  // Milestone Progress
  milestones: {
    nextMilestone: "Siguiente Hito",
    complete: "completo",
    toGo: "por alcanzar",
    allAchieved: "¡TODOS LOS HITOS ALCANZADOS!",
    allAchievedDescription: "¡Eres un verdadero campeón ambiental! 🌍"
  },

  // Milestone Alert
  alerts: {
    milestoneTitle: "🎉 ¡HITO DE {milestone} BOLSAS!",
    milestoneMessage: "¡Increíble! Has contribuido a recolectar {milestone} bolsas de basura. ¡Cada bolsa hace nuestro planeta más limpio!",
    awesome: "¡Genial!",
    share: "🐦 Compartir",
    close: "Cerrar alerta de hito",
    shareText: "🎉 ¡Acabo de alcanzar el hito de {milestone} bolsas en recolección de basura! ¡Únete al movimiento para limpiar nuestro planeta! #onebagbetter"
  },

  // Legal Pages
  legal: {
    title: "Aviso Legal / Legal Notice",
    lastUpdated: "Última actualización:",
    environmentalInitiative: "🌱 Iniciativa Ambiental",
    environmentalDescription: "Este sitio web opera con fines ambientales no comerciales para fomentar los esfuerzos de limpieza comunitaria.",
    
    operatorInfo: {
      title: "Información del Operador del Sitio Web",
      operator: "Operador:",
      basedIn: "Con sede en:",
      email: "Correo electrónico:"
    },
    
    purpose: {
      title: "Propósito y Naturaleza",
      description: "One Bag Better es una iniciativa ambiental no comercial diseñada para:",
      points: [
        "Fomentar la participación comunitaria en esfuerzos de limpieza ambiental",
        "Rastrear el impacto colectivo de las actividades de recolección de basura",
        "Proporcionar motivación y reconocimiento por la administración ambiental",
        "Crear conciencia sobre la responsabilidad ambiental"
      ],
      noCommercial: "Este sitio web opera sin intención comercial y no genera ingresos."
    },
    
    law: {
      title: "Ley Aplicable y Jurisdicción",
      description: "Este sitio web opera desde España y cumple con la ley española, incluyendo:",
      lssi: "LSSI-CE (Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico)",
      gdpr: "RGPD (Reglamento General de Protección de Datos)",
      spanish: "Ley Española de Protección de Datos (LOPDGDD)"
    },
    
    intellectualProperty: {
      title: "Propiedad Intelectual",
      description: "El contenido, diseño y funcionalidad de este sitio web son propiedad del operador. La misión ambiental y los datos comunitarios se comparten para el bien común de la protección ambiental."
    },
    
    liability: {
      title: "Limitación de Responsabilidad",
      description: "Este sitio web se proporciona \"tal como está\" con fines ambientales y educativos. El operador no ofrece garantías sobre la precisión de los datos enviados por la comunidad y no es responsable de ningún daño que surja del uso de este sitio web."
    },
    
    contact: {
      title: "Información de Contacto",
      description: "Para preguntas sobre este aviso legal o el funcionamiento del sitio web, por favor contacta:",
      instagram: "Instagram:"
    },
    
    relatedDocs: {
      title: "Documentos Legales Relacionados",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones"
    },
    
    backButton: "Volver a One Bag Better"
  },

  // Privacy Policy
  privacy: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización:",
    promise: {
      title: "🌱 Nuestra Promesa de Privacidad",
      description: "No recopilamos datos personales ni pagos. Solo recopilamos basura—para que juntos podamos ganar tiempo para lo que importa."
    },
    
    infoCollected: {
      title: "1. Información que Recopilamos",
      description: "One Bag Better está diseñado pensando en la privacidad. Recopilamos información mínima y no personal:",
      doCollect: "Lo que SÍ Recopilamos:",
      doCollectItems: [
        "Datos de Recolección de Basura: Cantidad recolectada (bolsas, kg, lbs)",
        "Ubicación Opcional: Ubicación general si eliges compartirla (ej., \"Berlín\", \"Central Park\")",
        "Nombre Opcional: Nombre o apodo si quieres crédito por tu limpieza",
        "Marcas de Tiempo: Cuándo se crean las entradas de recolección",
        "Almacenamiento Local: Tu preferencia de banner de bienvenida (almacenada solo en tu navegador)"
      ],
      dontCollect: "Lo que NO Recopilamos:",
      dontCollectItems: [
        "❌ Direcciones de correo electrónico",
        "❌ Números de teléfono",
        "❌ Información de pago",
        "❌ Documentos de identificación personal",
        "❌ Cookies de seguimiento",
        "❌ Direcciones IP para seguimiento",
        "❌ Huella digital del dispositivo",
        "❌ Análisis de terceros",
        "❌ Datos publicitarios"
      ]
    },
    
    howWeUse: {
      title: "2. Cómo Usamos Tu Información",
      description: "Los datos mínimos que recopilamos se usan exclusivamente para:",
      items: [
        "Mostrar estadísticas comunitarias (total de bolsas recolectadas, entradas, etc.)",
        "Mostrar actividad comunitaria reciente en el feed de actividad",
        "Calcular estimaciones de impacto ambiental (botellas salvadas, camiones de basura llenados)",
        "Proporcionar celebraciones de hitos y seguimiento de progreso",
        "Generar contenido compartible para redes sociales (solo cuando eliges compartir)"
      ]
    },
    
    dataStorage: {
      title: "3. Almacenamiento y Seguridad de Datos",
      description: "Tus datos de recolección se almacenan de forma segura en nuestros servidores con las siguientes protecciones:",
      items: [
        "Los datos se almacenan en una base de datos segura con controles de acceso",
        "No se vinculan identificadores personales a las entradas de recolección",
        "Los datos se usan únicamente para estadísticas comunitarias y motivación",
        "No creamos perfiles de usuario ni rastreamos comportamiento individual",
        "El almacenamiento local (basado en navegador) se usa solo para preferencias de UI"
      ]
    },
    
    dataSharing: {
      title: "4. Compartir Datos",
      noSharing: "No compartimos, vendemos o distribuimos tus datos a terceros.",
      onlySharing: "El único \"compartir\" que ocurre es:",
      items: [
        "Estadísticas comunitarias mostradas públicamente en el sitio web (agregadas, anónimas)",
        "Feed de actividad reciente mostrando nombres/ubicaciones opcionales que elegiste proporcionar",
        "Funciones de compartir en redes sociales que TÚ controlas e inicias"
      ]
    },
    
    socialMedia: {
      title: "5. Integración con Redes Sociales",
      description: "Nuestra plataforma incluye funciones opcionales de redes sociales:",
      items: [
        "Los botones de compartir generan texto basado en tu entrada de recolección",
        "Tú controlas lo que se publica en tus cuentas de redes sociales",
        "Enlazamos a nuestra cuenta de Instagram @onebagbetter para construcción de comunidad",
        "No hay publicación automática ni compartir datos con plataformas de redes sociales"
      ]
    },
    
    cookies: {
      title: "6. Cookies y Seguimiento",
      description: "Usamos almacenamiento mínimo del navegador:",
      items: [
        "Almacenamiento Local: Recuerda si has visto el banner de bienvenida",
        "Sin Cookies de Seguimiento: No usamos cookies para rastrear tu comportamiento",
        "Sin Análisis de Terceros: Sin Google Analytics, Facebook Pixel, etc.",
        "Sin Publicidad: Sin redes publicitarias o píxeles de marketing"
      ]
    },
    
    rights: {
      title: "7. Tus Derechos",
      description: "Dado que recopilamos datos mínimos y no personales, tus derechos son directos:",
      items: [
        "Transparencia: Esta política explica exactamente lo que recopilamos",
        "Control: Tú eliges qué información opcional proporcionar",
        "Acceso: Los datos comunitarios son visibles para todos en la plataforma",
        "Sin Cuenta Requerida: Usa el servicio sin crear cuentas"
      ]
    },
    
    children: {
      title: "8. Privacidad de Menores",
      description: "Nuestro servicio es seguro para todas las edades ya que no recopilamos información personal. Sin embargo, recomendamos supervisión adulta para niños que participen en actividades de limpieza."
    },
    
    changes: {
      title: "9. Cambios a Esta Política",
      description: "Podemos actualizar esta política de privacidad para reflejar cambios en nuestro servicio. Cualquier cambio se publicará en esta página con una fecha actualizada."
    },
    
    contact: {
      title: "10. Contáctanos",
      description: "¿Preguntas sobre privacidad? Contáctanos en Instagram"
    },
    
    backButton: "Volver a One Bag Better"
  },

  // Terms & Conditions
  terms: {
    title: "Términos y Condiciones",
    lastUpdated: "Última actualización:",
    
    about: {
      title: "1. Acerca de One Bag Better",
      description: "One Bag Better es una plataforma comunitaria que rastrea los esfuerzos de recolección de basura para inspirar acción ambiental. Creemos en la transparencia y simplicidad - no recopilamos datos personales ni pagos, solo recopilamos datos de basura."
    },
    
    whatWeCollect: {
      title: "2. Lo que Recopilamos",
      description: "Cuando usas nuestro servicio, solo recopilamos:",
      items: [
        "Cantidad de basura recolectada (en bolsas, kg o lbs)",
        "Información de ubicación opcional (si eliges proporcionarla)",
        "Nombre opcional (si eliges proporcionarlo para crédito)",
        "Marca de tiempo de cuándo se creó la entrada"
      ],
      dontCollect: "NO recopilamos: Direcciones de correo electrónico, números de teléfono, información de pago, identificación personal, cookies de seguimiento, o cualquier otro dato personal."
    },
    
    howWeUse: {
      title: "3. Cómo Usamos Tu Información",
      description: "La información mínima que recopilamos se usa únicamente para:",
      items: [
        "Mostrar estadísticas y progreso comunitario",
        "Mostrar actividades de recolección recientes (si proporcionas nombre/ubicación)",
        "Calcular métricas de impacto ambiental",
        "Motivar a la comunidad con logros de hitos"
      ]
    },
    
    dataStorage: {
      title: "4. Almacenamiento de Datos",
      description: "Tus datos de recolección se almacenan localmente en nuestros servidores únicamente con el propósito de mostrar estadísticas comunitarias. No compartimos, vendemos o distribuimos esta información a terceros."
    },
    
    socialMedia: {
      title: "5. Integración con Redes Sociales",
      description: "Nuestra plataforma incluye funciones de compartir en redes sociales que te ayudan a compartir tu impacto ambiental. Cuando usas estas funciones:",
      items: [
        "Generamos texto compartible basado en tu entrada de recolección",
        "Tú controlas lo que se comparte en tus cuentas de redes sociales",
        "Fomentamos el uso del hashtag #onebagbetter para construir comunidad",
        "Podemos enlazar a nuestra cuenta de Instagram @onebagbetter"
      ]
    },
    
    responsibilities: {
      title: "6. Responsabilidades del Usuario",
      description: "Al usar One Bag Better, aceptas:",
      items: [
        "Proporcionar información precisa sobre tus actividades de recolección de basura",
        "Usar la plataforma para su propósito ambiental previsto",
        "Respetar a la comunidad y evitar spam o contenido inapropiado",
        "Tomar responsabilidad por tu propia seguridad durante las actividades de limpieza"
      ]
    },
    
    disclaimer: {
      title: "7. Descargo de Responsabilidad",
      description: "One Bag Better se proporciona \"tal como está\" para motivación comunitaria y conciencia ambiental. No somos responsables de:",
      items: [
        "Seguridad durante las actividades de recolección de basura",
        "Precisión de los datos enviados por usuarios",
        "Disponibilidad del servicio en todo momento",
        "Cálculos de impacto ambiental (estos son estimaciones)"
      ]
    },
    
    changes: {
      title: "8. Cambios a los Términos",
      description: "Podemos actualizar estos términos ocasionalmente para reflejar cambios en nuestro servicio. El uso continuado de la plataforma constituye aceptación de cualquier cambio."
    },
    
    contact: {
      title: "9. Contacto",
      description: "¿Preguntas sobre estos términos? Contáctanos en Instagram"
    },
    
    backButton: "Volver a One Bag Better"
  },

  // Hero Section
  hero: {
    subtitle: "Rastrea tu impacto ambiental e inspira a otros a unirse al movimiento de limpieza",
    totalCollected: "Total Recolectado",
    collectionEntries: "Entradas de Recolección",
    addCollection: "AGREGA TU RECOLECCIÓN",
    motivationalText: "Cada pieza de basura recolectada hace la diferencia. Comparte tu impacto ambiental e inspira a otros a unirse al movimiento."
  },

  // Main Page Sections
  mainPage: {
    impactDashboard: "PANEL DE IMPACTO",
    impactDescription: "Ve el impacto colectivo que estamos haciendo juntos limpiando nuestro planeta"
  },

  // Footer
  footer: {
    tagline: "Pequeñas acciones, gran cambio—únete a la comunidad de limpieza.",
    privacyPolicy: "Política de Privacidad",
    termsConditions: "Términos y Condiciones",
    legalNotice: "Aviso Legal",
    noDataCollection: "No recopilamos datos personales ni pagos. Solo recopilamos basura.",
    copyright: "© {year} One Bag Better. Haciendo el mundo más limpio, una bolsa a la vez."
  },

  // Language Switcher
  languageSwitcher: {
    label: "Idioma",
    english: "Inglés",
    spanish: "Español",
    switchTo: "Cambiar a {language}",
    currentLanguage: "Idioma actual: {language}"
  },

  // Common elements
  common: {
    loading: "Cargando...",
    error: "Ocurrió un error",
    retry: "Intentar de nuevo",
    close: "Cerrar",
    back: "Atrás",
    next: "Siguiente",
    previous: "Anterior",
    save: "Guardar",
    cancel: "Cancelar",
    submit: "Enviar",
    edit: "Editar",
    delete: "Eliminar",
    confirm: "Confirmar",
    yes: "Sí",
    no: "No"
  }
};