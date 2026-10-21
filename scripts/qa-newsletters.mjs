import assert from "node:assert/strict";
import fs from "node:fs";
import {createRequire} from "node:module";
import {spawn} from "node:child_process";
import {setTimeout as delay} from "node:timers/promises";
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.QA_PLAYWRIGHT_MODULE||"playwright");
const base="http://127.0.0.1:3022";
const server=spawn(process.execPath,["node_modules/next/dist/bin/next","start","--hostname","127.0.0.1","--port","3022"],{stdio:"inherit"});
let browser;
try{
 let ready=false;for(let i=0;i<100;i++){try{ready=(await fetch(base)).ok;}catch{}if(ready)break;await delay(300);}assert.ok(ready);
 browser=await chromium.launch();
 const names=fs.readdirSync(".next/server/app/portfolio").filter(x=>x.endsWith(".html")&&fs.readFileSync(".next/server/app/portfolio/"+x,"utf8").includes("newsletter-frame"));
 assert.ok(names.length>0);
 for(const name of names){
  for(const width of [390,1440]){
   const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:"reduce"});
   assert.equal((await page.goto(base+"/portfolio/"+name.replace(".html",""),{waitUntil:"domcontentloaded"})).status(),200);
   await page.locator(".newsletter-frame").first().waitFor({state:"attached"});
   await page.evaluate(()=>document.fonts.ready);
   const frames=await page.locator(".newsletter-frame").evaluateAll(nodes=>nodes.map(n=>{const r=n.getBoundingClientRect(),article=n.closest("article").getBoundingClientRect();return {left:r.left,top:r.top,width:r.width,right:r.right,articleWidth:article.width};}));
   assert.ok(frames.every(f=>f.width>=f.articleWidth-4),name+" full content width");
   const byChapter=await page.locator("article[id]").evaluateAll(nodes=>nodes.map(a=>[...a.querySelectorAll(".newsletter-frame")].map(n=>{const r=n.getBoundingClientRect();return {left:r.left,top:r.top,bottom:r.bottom};})));
   for(const group of byChapter){for(let i=1;i<group.length;i++){assert.ok(Math.abs(group[i].left-group[i-1].left)<2);assert.ok(group[i].top>=group[i-1].bottom);}}
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),name+" overflow");
   console.log(name,width,frames.length+" full-width stacked newsletters PASS");
   await page.close();
  }
 }
 const page=await browser.newPage({viewport:{width:390,height:900}});
 assert.equal((await page.goto(base+"/campaigns/rge-services/index.html",{waitUntil:"networkidle"})).status(),200);
 assert.equal(await page.locator("article").count(),3);
 assert.ok(await page.locator("img").evaluateAll(images=>images.every(i=>i.complete&&i.naturalWidth===1080&&i.naturalHeight===1350)));
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 for(const name of ["01-brand-web","02-apps-systems","03-content-growth"]){
  for(const format of ["feed","story"]){assert.equal((await fetch(base+"/campaigns/rge-services/"+name+"-"+format+".png")).status,200);}
 }
 console.log("Campaign kit, six PNG downloads and mobile layout PASS");
 await page.goto(base+"/portfolio/microbeau",{waitUntil:"domcontentloaded"});
 await page.locator(".newsletter-frame").first().scrollIntoViewIfNeeded();
 await page.screenshot({path:process.env.QA_SCREENSHOT||"newsletter-qa.png"});
 await page.close();
}finally{await browser?.close();server.kill();}
