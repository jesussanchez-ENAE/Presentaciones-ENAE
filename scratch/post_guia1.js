fetch('http://localhost:3000/api/presentaciones', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: "guia-1-welcome-alumnos-internacionales",
    programa: "Welcome Guide - Alumnos Internacionales",
    slides: [
      {
        type: "portada_oscura",
        titulo: "Welcome Guide",
        subtitulo: "Primeros pasos tras la admisión para alumnos internacionales presenciales"
      },
      {
        type: "texto_foto_completa",
        titulo: "Bienvenido/a a ENAE",
        texto: "Nos alegra darte la bienvenida a ENAE Business School y acompañarte en el inicio de esta nueva etapa académica y profesional en Murcia. Estudiar en otro país implica preparar documentación, organizar el viaje y buscar alojamiento.\n\nHemos preparado esta guía para ayudarte a avanzar con claridad en cada uno de esos pasos. En ella encontrarás la información esencial para planificar tu llegada y comenzar tu experiencia.\n\nDesde este momento, cuentas con el equipo de ENAE para orientarte en el proceso. Esperamos darte la bienvenida muy pronto en Murcia.",
        foto: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "texto_dos_fotos",
        titulo: "Qué debes resolver primero",
        texto_izq: "1. Confirma programa, fecha de inicio e inducción.\n\n2. Revisa si necesitas visado de estudios o trámites previos de entrada (los consulados pueden tardar meses).\n\n3. Prepara documentos académicos apostillados, legalizados o compulsados.",
        texto_der: "4. Consulta pagos, recibos y justificantes con Finanzas (necesarios para visado o becas).\n\n5. Empieza búsqueda de alojamiento y presupuesto mensual. Murcia tiene opciones variadas, pero conviene reservar con margen.",
        destacado: "Todo el plan de viaje depende del calendario correcto.",
        foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
        foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "texto_dos_fotos",
        titulo: "Checklist tras recibir admisión",
        texto_izq: "• Revisa que tu nombre, pasaporte y datos estén correctos.\n• Guarda en una carpeta digital: carta de admisión, justificantes, calendario, seguro médico.\n• Solicita a ENAE cualquier certificado necesario para tu visado.",
        texto_der: "• Confirma con Gestión Académica la fecha de inicio.\n• Contacta con Finanzas si necesitas factura o recibo.\n• Comprueba que tendrás acceso a correo institucional y CANVAS.",
        destacado: "Empieza la preparación desde el primer día.",
        foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
        foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "texto_dos_fotos",
        titulo: "Documentación académica y visado",
        texto_izq: "Título oficial:\n• Copia Apostillada de Cédula de Identidad, Título Universitario y Notas.\n• Certificado de Carga horaria (>1.800h).\n• Certificado de acceso a posgrado emitido por tu país.",
        texto_der: "Visado de estudios:\n• Consulta requisitos en el consulado español.\n• El expediente tarda 1-3 meses. Conserva originales y copias.\n\nDoble título (Panamerican University):\n• Pasaporte, Título y Notas (traducidos al inglés) y Formulario Enrollment.",
        destacado: "La decisión sobre visado depende del consulado español.",
        foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
        foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "texto_dos_fotos",
        titulo: "Alojamiento",
        texto_izq: "BRAVO Murcia (Opción #1 recomendada):\nResidencia nueva con habitaciones y twodios. Código ENAE26 (6% de descuento).\n\nApartamentos Campus:\nCercanía a ENAE y acceso preferente para alumnos.",
        texto_der: "Otras opciones:\n• Smileroom Rent (centro)\n• Guru Alojamientos\n• Apartamentos El Recreo\n• Spotahome\n\nZonas recomendadas: Gran Vía, Santo Domingo, Juan Carlos I, Plaza Circular.",
        destacado: "Compara precio, ubicación, transporte y condiciones antes de reservar.",
        foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
        foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "kpis_metricas",
        titulo: "Presupuesto Mensual Orientativo",
        kpis: [
          { valor: "300-500€", label: "Piso Compartido" },
          { valor: "150-230€", label: "Luz, Agua, Gas, Int." },
          { valor: "200-350€", label: "Alimentación" },
          { valor: "125-235€", label: "Transporte y Ocio" }
        ]
      },
      {
        type: "texto_dos_fotos",
        titulo: "Preparación digital y Contactos",
        texto_izq: "• Revisa tu correo institucional con frecuencia.\n• Comprueba acceso a CANVAS.\n• Trae ordenador portátil.\n• Prepara CV y LinkedIn actualizado.",
        texto_der: "Departamentos ENAE (+34 968 899 899):\n• Ext. 7: IT / Soporte (CANVAS, contraseñas)\n• Ext. 5: Finanzas (Pagos, recibos)\n• Ext. 2: Académica y Admisiones\n• Ext. 3/4: Empleo y Prácticas",
        destacado: "Guarda datos de emergencia y mantén actualizado tu teléfono.",
        foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
        foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
      },
      {
        type: "solo_texto_centrado",
        titulo: "¡Prepara tu llegada!",
        texto: "Enlaces útiles: Extranjería, Tranvía de Murcia, TMP Autobuses, Renfe, ALSA, Idealista, Fotocasa."
      }
    ]
  })
}).then(res => res.json()).then(console.log).catch(console.error);
