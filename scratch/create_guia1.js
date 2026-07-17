const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '../presentaciones/_PLANTILLA-BASE.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');

function buildHtml(data) {
    const newDataBlock = `<script id="presentacion-data" type="application/json">\n${JSON.stringify(data, null, 2)}\n</script>`;
    return templateHtml
        .replace(/<script id="presentacion-data"[^>]*>[\s\S]*?<\/script>/, newDataBlock)
        .replace(/<title>[^<]*<\/title>/, `<title>${data.programa} — ENAE</title>`);
}

const presEs = {
  nombre: "guia-1-welcome-es",
  programa: "Guía 1 Welcome Guide",
  slides: [
    {
      type: "portada_oscura",
      titulo: "Welcome Guide",
      subtitulo: "Primeros pasos tras la admisión para alumnos internacionales presenciales"
    },
    {
      type: "texto_foto_completa",
      titulo: "Bienvenido/a a ENAE",
      texto: "Nos alegra darte la bienvenida a ENAE Business School y acompañarte en el inicio de esta nueva etapa académica y profesional en Murcia. Estudiar en otro país implica mucho más que asistir al primer día de clase: supone preparar documentación, organizar el viaje, buscar alojamiento, familiarizarse con una nueva ciudad y adaptarse a un entorno académico internacional.\n\nHemos preparado esta guía para ayudarte a avanzar con claridad en cada uno de esos pasos. En ella encontrarás la información esencial para planificar tu llegada, completar los trámites necesarios y comenzar tu experiencia presencial en ENAE con la mayor tranquilidad posible.\n\nDesde este momento, cuentas con el equipo de ENAE para orientarte en el proceso de incorporación y resolver tus dudas.",
      foto: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "texto_dos_fotos",
      titulo: "Qué debes resolver primero",
      texto_izq: "1. Confirma programa, fecha de inicio e inducción. (Todo depende del calendario).\n\n2. Revisa si necesitas visado de estudios o trámites previos de entrada.\n\n3. Prepara documentos académicos apostillados, legalizados o compulsados.",
      texto_der: "4. Consulta pagos, recibos y justificantes con Finanzas.\n\n5. Empieza la búsqueda de alojamiento y prepara un presupuesto mensual orientativo.",
      destacado: "Los consulados pueden tardar varias semanas o meses en resolver el visado.",
      foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
      foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "texto_dos_fotos",
      titulo: "Checklist tras recibir admisión",
      texto_izq: "• Revisa que tu nombre, pasaporte y programa estén correctos.\n• Guarda en una carpeta digital: carta de admisión, justificantes de pago, plan de estudios y seguro médico.\n• Solicita a ENAE cualquier certificado necesario para tu visado.",
      texto_der: "• Confirma con Gestión Académica la fecha de la inducción.\n• Contacta con Finanzas si necesitas factura o recibos.\n• Comprueba que tendrás acceso a correo institucional y CANVAS.",
      destacado: "Conserva todos tus documentos para cualquier requerimiento oficial.",
      foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
      foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "texto_dos_fotos",
      titulo: "Documentación y Visado",
      texto_izq: "Para título oficial:\n• Copia Apostillada de tu Cédula de Identidad, Título Universitario y Certificado de Notas.\n• Si las notas no indican horas totales, pide un certificado de carga horaria (mín. 1.800h).\n• Certificado de acceso a posgrado emitido por tu universidad.",
      texto_der: "Para doble título (Panamerican University):\nTraducción oficial al inglés del pasaporte, título, expediente y Formulario Enrollment firmado.\n\nVisado de estudios:\nPrepara pasaporte, admisión, medios económicos y seguro médico. El trámite dura de 1 a 3 meses.",
      destacado: "La decisión sobre el visado depende exclusivamente del consulado.",
      foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
      foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "texto_dos_fotos",
      titulo: "Pagos y Alojamiento",
      texto_izq: "Pagos y Justificantes:\nConsulta tu plan de pagos y vencimientos con Finanzas. Solicita facturas o recibos para tu visado o becas. Comunica cualquier incidencia de pago antes del vencimiento.\n\nZonas recomendadas para vivir:\nGran Vía, Plaza Santo Domingo, Juan Carlos I o cerca del tranvía.",
      texto_der: "Opciones de alojamiento:\nEl alojamiento lo gestiona cada alumno. Te recomendamos opciones como:\n• BRAVO Murcia (Opción recomendada #1. Usa código ENAE26 para 6% dto).\n• Apartamentos Campus o El Recreo.\n• Smileroom Rent, Guru Alojamientos o plataformas como Spotahome e Idealista.",
      destacado: "ENAE te orienta, pero debes comparar precios y condiciones.",
      foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
      foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "kpis_metricas",
      titulo: "Presupuesto Mensual Orientativo",
      kpis: [
        { valor: "300-500€", label: "Piso Compartido" },
        { valor: "200-350€", label: "Alimentación" },
        { valor: "150-230€", label: "Luz, Agua, Gas, Int." },
        { valor: "125-235€", label: "Transporte y Ocio" }
      ]
    },
    {
      type: "texto_dos_fotos",
      titulo: "Preparación Académica",
      texto_izq: "• Revisa tu correo institucional con frecuencia.\n• Comprueba acceso a CANVAS.\n• Trae ordenador portátil para trabajos y presentaciones.\n• Mantén actualizados tus datos de emergencia.",
      texto_der: "Departamentos ENAE (+34 968 899 899):\n• Ext. 7: IT / Soporte (CANVAS, contraseñas)\n• Ext. 5: Finanzas (Pagos)\n• Ext. 2: Académica y Admisiones\n• Ext. 3 y 4: Empleo (CV, Prácticas)",
      destacado: "Actualiza tu CV y LinkedIn desde el primer día.",
      foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
      foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "solo_texto_centrado",
      titulo: "¡Prepara tu llegada!",
      texto: "Revisa recursos como Tranvía de Murcia, TMP (Buses), Renfe, ALSA y la cita previa de extranjería para organizarte mejor."
    }
  ]
};

fs.writeFileSync(path.join(__dirname, '../presentaciones/guia-1-welcome-es.html'), buildHtml(presEs));

console.log('Presentation generated successfully.');
