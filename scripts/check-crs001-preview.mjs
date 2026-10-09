import puppeteer from 'puppeteer';
import { build } from 'esbuild';
const bundle = await build({stdin:{contents:"export { SCENES } from './src/scenes'",resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',write:false});
const {SCENES} = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const countNodes = nodes => nodes.reduce((sum,node)=>sum+1+countNodes(node.children ?? []),0);
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
 await new Promise(r=>setTimeout(r,400));
 const geometry=await page.evaluate(()=>{
 const area=document.querySelector('.scene-area').getBoundingClientRect();
 const rects=[...document.querySelectorAll('.react-flow__node')].map(n=>n.getBoundingClientRect());
 const width=Math.max(...rects.map(r=>r.right))-Math.min(...rects.map(r=>r.left));
 const height=Math.max(...rects.map(r=>r.bottom))-Math.min(...rects.map(r=>r.top));
 return {sceneWidth:Math.round(area.width),sceneHeight:Math.round(area.height),diagramWidth:Math.round(width),diagramHeight:Math.round(height),widthUse:Math.round(width/area.width*100),heightUse:Math.round(height/area.height*100)};
 });
 const data=await page.evaluate(()=>({title:document.querySelector('.slide-panel h2')?.textContent,nodes:document.querySelectorAll('.react-flow__node').length,overflow:document.documentElement.scrollWidth>innerWidth,panels:[...document.querySelectorAll('.slide-panel')].map(e=>({scroll:e.scrollHeight,height:e.clientHeight})),text:document.body.innerText}));
 await page.screenshot({path:`${out}/${id}-${width}.png`});results.push({id,width,geometry,...data});
 if(!data.title || data.nodes!==countNodes(SCENES[`crs-001-${id}-scene`].nodes) || data.overflow) throw new Error(`Rendering check failed: ${id} at ${width}`);
 }
}
await page.goto(`${process.env.PREVIEW_URL ?? 'http://127.0.0.1:5177/linux-authoring/'}#/crs-001-sec-001`,{waitUntil:'networkidle0'});
await page.click('button[aria-label="Next section (Shift+→)"]');
await page.waitForFunction(()=>location.hash.endsWith('sec-002'));
await page.keyboard.down('Shift');await page.keyboard.press('ArrowLeft');await page.keyboard.up('Shift');
await page.waitForFunction(()=>location.hash.endsWith('sec-001'));
if(errors.length) throw new Error(errors.join('\n'));
writeFileSync(`${out}/results.json`,JSON.stringify({errors,results},null,2));console.log(JSON.stringify({errors,results:results.map(({text,...r})=>r)},null,2));await browser.close();
