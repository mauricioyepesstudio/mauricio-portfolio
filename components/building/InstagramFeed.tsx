"use client";
import { useEffect, useState } from "react";
type Post = { id:string; caption:string; mediaType:string; image:string|null; url:string|null; publishedAt:string|null; likes:number|null; comments:number|null };
type Feed = { configured?:boolean; posts?:Post[]; error?:string; message?:string };
export default function InstagramFeed({project}:{project:string}) {
 const [feed,setFeed]=useState<Feed|null>(null);
 useEffect(()=>{let active=true;fetch("/api/social/instagram?project="+encodeURIComponent(project)).then(async r=>await r.json() as Feed).then(d=>{if(active)setFeed(d)}).catch(()=>{if(active)setFeed({error:"Instagram is temporarily unavailable."})});return()=>{active=false}},[project]);
 return <section className="mt-10 border-t border-line pt-8" aria-label="Verified Instagram publications">
  <div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="text-xl font-semibold text-paper">Instagram / Published posts</h3><span className="text-xs text-bone">Read-only · Source: Instagram API</span></div>
  {!feed&&<p className="mt-4 text-sm text-bone">Checking Instagram connection…</p>}
  {feed?.configured===false&&<p className="mt-4 text-sm text-bone">Account identified. Secure server connection pending; no publications or metrics are being simulated.</p>}
  {feed?.error&&<p className="mt-4 text-sm text-bone">{feed.error}</p>}
  {feed?.configured&&feed.posts?.length===0&&!feed.error&&<p className="mt-4 text-sm text-bone">No published posts returned for this account.</p>}
  {feed?.posts&&feed.posts.length>0&&<div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{feed.posts.map(post=><article key={post.id} className="overflow-hidden rounded-xl border border-line">{post.image&&<img src={post.image} alt={post.caption.slice(0,100)||"Instagram post"} loading="lazy" className="aspect-square w-full object-cover"/>}<div className="p-4"><p className="line-clamp-3 text-sm text-paper">{post.caption||post.mediaType}</p><p className="mt-3 text-xs text-bone">{post.publishedAt?new Date(post.publishedAt).toLocaleDateString("en-US"):"Date unavailable"} · {post.likes??"—"} likes · {post.comments??"—"} comments</p>{post.url&&<a href={post.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-gold underline">View on Instagram ↗</a>}</div></article>)}</div>}
 </section>;
}
