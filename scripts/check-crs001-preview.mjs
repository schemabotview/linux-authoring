import puppeteer from 'puppeteer';
import { build } from 'esbuild';
const bundle = await build({stdin:{contents:"export { SCENES, REFERENCE_SCENES } from './src/scenes'",resolveDir:process.cwd()},bundle:true,platform:'node',format:'esm',write:false});
const {SCENES, REFERENCE_SCENES} = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
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
 const data=await page.evaluate(()=>({title:document.querySelector('.slide-panel h2')?.textContent,nodes:document.querySelectorAll('.react-flow__node').length,overflow:document.documentElement.scrollWidth>innerWidth,slideGeometry:(()=>{const r=document.querySelector('.slide-panel__scaler').getBoundingClientRect();return {top:Math.round(r.top),bottom:Math.round(r.bottom),height:Math.round(r.height),viewportHeight:innerHeight}})(),panels:[...document.querySelectorAll('.slide-panel')].map(e=>({scroll:e.scrollHeight,height:e.clientHeight})),text:document.body.innerText}));
 if(width===1440 && (data.slideGeometry.top<24 || data.slideGeometry.bottom>height-24))throw new Error(`Slide clearance failed: ${id}`);
 await page.screenshot({path:`${out}/${id}-${width}.png`});results.push({id,width,geometry,...data});
 if(!data.title || data.nodes!==countNodes(SCENES[`crs-001-${id}-scene`].nodes) || data.overflow) throw new Error(`Rendering check failed: ${id} at ${width}`);
 }
}
await page.goto(`${process.env.PREVIEW_URL ?? 'http://127.0.0.1:5177/linux-authoring/'}#/crs-001-sec-001`,{waitUntil:'networkidle0'});
await page.click('button[aria-label="Next section (Shift+→)"]');
await page.waitForFunction(()=>location.hash.endsWith('sec-002'));
await page.keyboard.down('Shift');await page.keyboard.press('ArrowLeft');await page.keyboard.up('Shift');
await page.waitForFunction(()=>location.hash.endsWith('sec-001'));
// The overview is reached through a real section link, using the existing shell route.
await page.setViewport({width:1440,height:900});
await page.goto(`${process.env.PREVIEW_URL ?? 'http://127.0.0.1:5177/linux-authoring/'}#/crs-001-sec-003`,{waitUntil:'networkidle0'});
await page.click('a[href="#/linux-system-map"]');
await page.waitForFunction(()=>location.hash==='#/linux-system-map');
const overview=[];
for (const [width,height] of [[1440,900],[1440,1728],[390,844]]) {
 await page.setViewport({width,height});await new Promise(r=>setTimeout(r,400));
 const data=await page.evaluate(()=>({nodes:document.querySelectorAll('.react-flow__node').length,overflow:document.documentElement.scrollWidth>innerWidth,text:document.body.innerText}));
 if(data.nodes!==countNodes(REFERENCE_SCENES['linux-system-map'].nodes)||data.overflow)throw new Error('Overview render mismatch');
 overview.push({width,height,...data});await page.screenshot({path:`${out}/system-map-${width}-${height}.png`});
}
await page.goBack();await page.waitForFunction(()=>location.hash.endsWith('sec-003'));
await page.setViewport({width:1600,height:1920});
await page.goto(`${process.env.PREVIEW_URL ?? 'http://127.0.0.1:5177/linux-authoring/'}?capture=1#/linux-system-map`,{waitUntil:'networkidle0'});
await new Promise(r=>setTimeout(r,400));
await page.screenshot({path:`${out}/system-map-poster.png`});
await page.goto(`${process.env.PREVIEW_URL ?? 'http://127.0.0.1:5177/linux-authoring/'}#/crs-001-sec-003`,{waitUntil:'networkidle0'});
await page.waitForFunction(()=>location.hash.endsWith('sec-003'));
const poster = await page.evaluate(async()=>{ const response=await fetch('maps/linux-system-map.png');return {status:response.status,contentType:response.headers.get('content-type')}; });
if(poster.status!==200 || !poster.contentType?.startsWith('image/png'))throw new Error('Missing overview poster');
if(errors.length) throw new Error(errors.join('\n'));
writeFileSync(`${out}/results.json`,JSON.stringify({errors,results,overview,poster},null,2));console.log(JSON.stringify({errors,results:results.map(({text,...r})=>r)},null,2));await browser.close();
