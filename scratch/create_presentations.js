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
  nombre: "guia-internacional-es",
  programa: "Guía de Bienvenida Internacional",
  slides: [
    {
      type: "portada_oscura",
      titulo: "Guía de Bienvenida",
      subtitulo: "Alumnos Internacionales ENAE"
    },
    {
      type: "texto_dos_fotos",
      titulo: "Antes de Viajar",
      texto_izq: "Revisa tu carta de admisión y solicita el visado de estudios con suficiente antelación en el consulado español correspondiente. Además, asegúrate de preparar toda tu documentación académica (títulos y notas apostillados o legalizados).",
      texto_der: "Empieza la búsqueda de alojamiento (residencias como BRAVO Murcia o pisos compartidos) y planifica un presupuesto mensual que rondará los 800 - 1.300 euros. Confirma siempre tu fecha de llegada.",
      destacado: "Los trámites consulares pueden tardar meses. ¡Anticípate!",
      foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg", // Placeholder
      foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "kpis_metricas",
      titulo: "Presupuesto Mensual Estimado",
      kpis: [
        { valor: "400€", label: "Alojamiento" },
        { valor: "250€", label: "Alimentación" },
        { valor: "150€", label: "Luz, Agua, Internet" },
        { valor: "100€", label: "Ocio y Transporte" }
      ]
    },
    {
      type: "texto_foto_completa",
      titulo: "Tu Primer Día en Murcia",
      texto: "Al llegar, instálate en tu alojamiento y revisa que todo funcione correctamente (Wi-Fi, enchufes europeos de 220V, agua caliente). Comparte tu ubicación con tu familia.\n\nLocaliza el supermercado, la farmacia y la parada de tranvía más cercana. Te recomendamos no hacer trámites el primer día para poder descansar. ¡Disfruta de tus primeros momentos en la ciudad!",
      foto: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "texto_dos_fotos",
      titulo: "Trámites al Llegar",
      texto_izq: "1. Empadronamiento: Regístrate en el Ayuntamiento de Murcia.\n2. Tarjeta SIM: Consigue un número de teléfono local.\n3. Cuenta Bancaria: Necesaria para domiciliar pagos.",
      texto_der: "4. NIE: Si tu visado lo requiere, tramita tu tarjeta de identidad de extranjero.\n5. Salud: Asegúrate de tener activa tu póliza de seguro y localiza el centro médico más cercano.",
      destacado: "Asiste a la Inducción de ENAE para conocer todos los detalles de tu programa.",
      foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
      foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "solo_texto_centrado",
      titulo: "¡Tu experiencia internacional comienza ahora!",
      texto: "El equipo de ENAE Business School está aquí para apoyarte en cada paso."
    }
  ]
};

const presEn = {
  nombre: "guia-internacional-en",
  programa: "International Welcome Guide",
  slides: [
    {
      type: "portada_oscura",
      titulo: "Welcome Guide",
      subtitulo: "ENAE International Students"
    },
    {
      type: "texto_dos_fotos",
      titulo: "Before You Travel",
      texto_izq: "Review your admission letter and apply for your student visa well in advance at the corresponding Spanish consulate. Also, make sure to prepare all your academic documents (apostilled or legalized degrees and transcripts).",
      texto_der: "Start looking for accommodation (student residences like BRAVO Murcia or shared flats) and plan a monthly budget of around 800 - 1,300 euros. Always confirm your arrival date.",
      destacado: "Consular procedures can take months. Plan ahead!",
      foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
      foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "kpis_metricas",
      titulo: "Estimated Monthly Budget",
      kpis: [
        { valor: "400€", label: "Accommodation" },
        { valor: "250€", label: "Food & Groceries" },
        { valor: "150€", label: "Utilities & Internet" },
        { valor: "100€", label: "Transport & Leisure" }
      ]
    },
    {
      type: "texto_foto_completa",
      titulo: "Your First Day in Murcia",
      texto: "Upon arrival, settle into your accommodation and check that everything works properly (Wi-Fi, 220V European plugs, hot water). Share your location with your family.\n\nLocate the nearest supermarket, pharmacy, and tram stop. We recommend not doing any official paperwork on the first day so you can rest. Enjoy your first moments in the city!",
      foto: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "texto_dos_fotos",
      titulo: "Paperwork Upon Arrival",
      texto_izq: "1. Empadronamiento: Register at the Murcia City Hall.\n2. SIM Card: Get a local phone number.\n3. Bank Account: Necessary for setting up direct debits.",
      texto_der: "4. NIE/TIE: If your visa requires it, process your foreigner identity card.\n5. Health: Make sure your insurance policy is active and locate the nearest medical center.",
      destacado: "Attend the ENAE Induction to learn all the details of your program.",
      foto1: "../src/logos/LOGO_ENAE_HORIZONTAL.svg",
      foto2: "../src/logos/LOGO_ENAE_HORIZONTAL.svg"
    },
    {
      type: "solo_texto_centrado",
      titulo: "Your international experience begins now!",
      texto: "The ENAE Business School team is here to support you every step of the way."
    }
  ]
};

fs.writeFileSync(path.join(__dirname, '../presentaciones/guia-internacional-es.html'), buildHtml(presEs));
fs.writeFileSync(path.join(__dirname, '../presentaciones/guia-internacional-en.html'), buildHtml(presEn));

console.log('Presentations generated successfully.');
