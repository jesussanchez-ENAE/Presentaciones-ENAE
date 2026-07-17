const puppeteer = require('puppeteer');

(async () => {
  console.log('Iniciando Puppeteer para capturar Figma...');
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: 1920, height: 1080 }
  });
  const page = await browser.newPage();
  
  const url = 'https://www.figma.com/proto/Du6trfVFYQJleh3t3OJTxD/Dossiers?node-id=445-5502&p=f&viewport=84%2C379%2C0.04&t=3Np8nGV1rnLN3WUn-1&scaling=contain&content-scaling=fixed&page-id=445%3A5484';
  console.log(`Navegando a: ${url}`);
  
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  
  console.log('Esperando 10 segundos adicionales para que renderice el canvas...');
  await new Promise(r => setTimeout(r, 10000));
  
  const screenshotPath = 'scratch/figma_design.png';
  await page.screenshot({ path: screenshotPath });
  console.log(`Captura guardada en ${screenshotPath}`);
  
  await browser.close();
})();
