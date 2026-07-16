import puppeteer from 'puppeteer';
const S='/private/tmp/claude-501/-Users-mint/ac29b292-8e7c-4bc0-b5e4-380b7025dbcc/scratchpad';
const b=await puppeteer.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
const p=await b.newPage();
await p.setViewport({width:390,height:844,deviceScaleFactor:1,isMobile:true});
// Comparison section
await p.goto('http://localhost:3000/',{waitUntil:'load',timeout:20000});
await new Promise(r=>setTimeout(r,2000));
await p.evaluate(()=>{const e=[...document.querySelectorAll('h2')].find(x=>x.textContent.includes('Validated'));e&&e.scrollIntoView();window.scrollBy(0,-20);});
await new Promise(r=>setTimeout(r,400));
await p.screenshot({path:`${S}/v-cmp.png`});
// About banner
await p.goto('http://localhost:3000/about',{waitUntil:'load',timeout:20000});
await new Promise(r=>setTimeout(r,1500));
await p.screenshot({path:`${S}/v-about.png`});
await b.close();console.log('ok');
