fetch('http://localhost:3000/api/presentaciones', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: "guia-2-pre-llegada",
    programa: "Guía Pre-llegada a ENAE",
    slides: [
      {
        type: "portada_oscura",
        titulo: "Guía Pre-llegada",
        subtitulo: "Últimas semanas antes de viajar, llegada a Murcia y primeros pasos"
      },
      {
        type: "texto_foto_completa",
        titulo: "Objetivo de la guía",
        texto: "A medida que se acerca el inicio de tus clases presenciales, es importante revisar los últimos detalles de tu viaje y preparar todo lo que necesitarás durante tus primeros días en Murcia.\n\nEsta guía reúne la información práctica que te ayudará a organizar tu llegada: documentos, opciones de transporte, primeros pasos al instalarte, trámites iniciales y recursos útiles para moverte con confianza desde el primer momento.\n\nTe recomendamos tener esta guía a mano durante el viaje.",
        foto: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "kpis_metricas",
        titulo: "Checklist por momento",
        kpis: [
          { valor: "30 días", label: "Confirmar vuelos y seguro" },
          { valor: "15 días", label: "Avisar llegada y correo" },
          { valor: "7 días", label: "Mapas offline y justificantes" },
          { valor: "48 horas", label: "Supermercado y tranvía" }
        ]
      },
      {
        type: "texto_dos_fotos",
        titulo: "Documentos y Cómo Llegar",
        texto_izq: "Documentos esenciales en mano:\n• Pasaporte y visado.\n• Carta de admisión ENAE.\n• Seguro médico y póliza.\n• Reserva de alojamiento.\n• Copias de título apostilladas.",
        texto_der: "Cómo llegar a Murcia:\n• Aeropuerto de Corvera: a 20 min.\n• Aeropuerto de Alicante: a 60 min (conexiones ALSA).\n• Desde Madrid: Autobús desde T4 o Tren Renfe desde Atocha.",
        destacado: "Lleva los documentos importantes en equipaje de mano.",
        foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
        foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "texto_dos_fotos",
        titulo: "Primer día y Transporte",
        texto_izq: "Tu primer día:\n• Llega al alojamiento y revisa Wi-Fi, agua y enchufes.\n• Avisa a tu familia de tu llegada.\n• Localiza farmacia y supermercado.\n• Descansa sin hacer trámites pesados.",
        texto_der: "Transporte en la ciudad:\n• Tranvía: Medio más usado para ir al campus (usa tarjeta recargable).\n• Autobús: TMP Murcia (Línea 39).\n• Taxi: Útil para llegadas nocturnas (968 248 800).",
        destacado: "Los primeros trámites serán más fáciles si primero descansas.",
        foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
        foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "texto_dos_fotos",
        titulo: "Primeros Días en ENAE",
        texto_izq: "Asiste a la inducción:\nConfirma horarios, aulas y criterios de evaluación. Lleva portátil, cargador y adaptador europeo. Pregunta en Empleo por tu CV y LinkedIn.",
        texto_der: "Trámites al instalarte:\n• Empadronamiento (cuando tengas domicilio).\n• NIE (si tu situación lo requiere).\n• Cuenta bancaria y Tarjeta SIM.\n• Inscripción consular recomendada.",
        destacado: "Comprueba acceso a CANVAS y correo institucional.",
        foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
        foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "texto_dos_fotos",
        titulo: "Vida diaria en Murcia",
        texto_izq: "Horarios locales:\n• Comida: 13:30 - 15:00\n• Cena: 21:00 - 22:00\n• Comercios: 9:00 - 13:30 y 16:30 - 20:00\n• Bancos: de mañana (L-V).",
        texto_der: "Información práctica:\n• Emergencias: 112\n• Moneda: Euro\n• Enchufe: 220V Europeo\n• Clima: Invierno moderado, pero trae algo de ropa de abrigo.",
        destacado: "Vestimenta: Casual para clase; formal para eventos.",
        foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
        foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "texto_dos_fotos",
        titulo: "Contactos ENAE",
        texto_izq: "Departamentos ENAE (+34 968 899 899):\n• Ext. 7: IT / Soporte\n• Ext. 5: Finanzas / Pagos\n• Ext. 2: Gestión Académica",
        texto_der: "Otros departamentos:\n• Ext. 2: Admisiones (Becas y matrícula)\n• Ext. 3 y 4: Empleo y Prácticas",
        destacado: "Guarda estos teléfonos para cuando llegues.",
        foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
        foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "solo_texto_centrado",
        titulo: "Enlaces Útiles para tu llegada",
        texto: "Ayuntamiento de Murcia, Tranvía de Murcia, Extranjería, AEMET, Renfe y ALSA."
      }
    ]
  })
}).then(res => res.json()).then(console.log).catch(console.error);
