import puppeteer from 'puppeteer';
import {mkdirSync,writeFileSync} from 'node:fs';
const out=process.env.REVIEW_OUT ?? 'scripts/out/crs-001-review';mkdirSync(out,{recursive:true});
const browser=await puppeteer.launch({executablePath:process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
const results=[];
for(const [width,height] of [[1440,900],[390,844]]) {
 await page.setViewport({width,height});
 for(let i=1;i<=7;i++) {
 const id=`sec-${String(i).padStart(3,'0')}`;
 await page.goto(`${process.env.PREVIEW_URL ?? 'http://127.0.0.1:5177/linux-authoring/'}#/crs-001-${id}`,{waitUntil:'networkidle0'});
 if(width===390) {
 const hide=await page.$('button[aria-label="Hide slide"]');if(hide)await hide.click();
 await new Promise(r=>setTimeout(r,350));
 await page.screenshot({path:`${out}/${id}-390-scene.png`});
 }
 if(width===390) {const b=await page.$('button[aria-label="Show slide"]');if(b)await b.click();}
 await new Promise(r=>setTimeout(r,200));
 const data=await page.evaluate(()=>({title:document.querySelector('.slide-panel h2')?.textContent,nodes:document.querySelectorAll('.react-flow__node').length,overflow:document.documentElement.scrollWidth>innerWidth,panels:[...document.querySelectorAll('.slide-panel')].map(e=>({scroll:e.scrollHeight,height:e.clientHeight})),text:document.body.innerText}));
 await page.screenshot({path:`${out}/${id}-${width}.png`});results.push({id,width,...data});
 if(!data.title || data.nodes!==(i===1?4:3) || data.overflow) throw new Error(`Rendering check failed: ${id} at ${width}`);
 }
}
await page.goto(`${process.env.PREVIEW_URL ?? 'http://127.0.0.1:5177/linux-authoring/'}#/crs-001-sec-001`,{waitUntil:'networkidle0'});
await page.click('button[aria-label="Next section (Shift+→)"]');
await page.waitForFunction(()=>location.hash.endsWith('sec-002'));
await page.keyboard.down('Shift');await page.keyboard.press('ArrowLeft');await page.keyboard.up('Shift');
await page.waitForFunction(()=>location.hash.endsWith('sec-001'));
if(errors.length) throw new Error(errors.join('\n'));
writeFileSync(`${out}/results.json`,JSON.stringify({errors,results},null,2));console.log(JSON.stringify({errors,results:results.map(({text,...r})=>r)},null,2));await browser.close();
