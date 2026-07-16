import puppeteer from 'puppeteer';
const SCR='/private/tmp/claude-501/-Users-mint/ac29b292-8e7c-4bc0-b5e4-380b7025dbcc/scratchpad';
const b = await puppeteer.launch({ headless: true });
const p = await b.newPage();
await p.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await p.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
await new Promise(r=>setTimeout(r,1500));
async function shotOf(text, file){
  const found = await p.evaluate((t)=>{
    const el = [...document.querySelectorAll('h2,h3,span')].find(e=>e.textContent.trim().includes(t));
    if(!el) return false;
    el.scrollIntoView({block:'start'});
    window.scrollBy(0,-40);
    return true;
  }, text);
  await new Promise(r=>setTimeout(r,700));
  await p.screenshot({ path: `${SCR}/${file}` });
  return found;
}
console.log('validated:', await shotOf('Validated by Research','ms-cmp.png'));
console.log('howworks:', await shotOf('Simple for hosts','ms-hiw.png'));
console.log('whofor:', await shotOf('Who Knod Is For','ms-who.png'));
await b.close();
