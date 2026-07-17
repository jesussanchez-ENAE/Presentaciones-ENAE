const fs = require('fs');
const path = require('path');

const presDir = path.join(__dirname, '../presentaciones');
const baseTemplateHtml = fs.readFileSync(path.join(presDir, '_PLANTILLA-BASE.html'), 'utf8');

const files = fs.readdirSync(presDir).filter(f => f.endsWith('.html') && f !== '_PLANTILLA-BASE.html');

for (const file of files) {
  const filePath = path.join(presDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract the JSON data
  const match = content.match(/<script id="presentacion-data"[^>]*>([\s\S]*?)<\/script>/);
  if (match) {
    let dataObj = null;
    try {
      dataObj = JSON.parse(match[1]);
    } catch(e) {
      console.error(`Error parsing JSON in ${file}`);
      continue;
    }
    
    // Inject into the new template
    const newDataBlock = `<script id="presentacion-data" type="application/json">\n${JSON.stringify(dataObj, null, 2)}\n</script>`;
    
    let newHtml = baseTemplateHtml.replace(/<script id="presentacion-data"[^>]*>[\s\S]*?<\/script>/, newDataBlock);
    
    // Also try to restore the title if dataObj.programa is available
    if (dataObj.programa) {
      newHtml = newHtml.replace(/<title>[^<]*<\/title>/, `<title>${dataObj.programa} — ENAE</title>`);
    } else if (dataObj.nombre) {
      newHtml = newHtml.replace(/<title>[^<]*<\/title>/, `<title>${dataObj.nombre} — ENAE</title>`);
    }
    
    fs.writeFileSync(filePath, newHtml, 'utf8');
    console.log(`Updated ${file} with the new animated template.`);
  } else {
    console.log(`No presentacion-data found in ${file}. Skipping.`);
  }
}
