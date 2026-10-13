/**
 * Instagram publishing adapter. Server-only. Not an API route: publication requires
 * a separate authenticated admin workflow, explicit approval and durable job state.
 * Instagram Login API: create a media container, then publish that container.
 */
import "server-only";

export type InstagramProject = "belong" | "evolusa" | "personal-cfo";
export type InstagramPublishInput = {
  project: InstagramProject;
  mediaUrl: string;
  caption: string;
  mediaType: "IMAGE" | "REELS";
  approved: true;
};
const TOKEN_ENV: Record<InstagramProject, string> = {
  belong: "INSTAGRAM_BELONG_TOKEN",
  evolusa: "INSTAGRAM_EVOLUSA_TOKEN",
  "personal-cfo": "INSTAGRAM_PERSONAL_CFO_TOKEN",
};
const API = "https://graph.instagram.com/v24.0";
async function metaPost(path: string, token: string, params: Record<string,string>) {
  const body = new URLSearchParams(params);
  const response = await fetch(API+path, {method:"POST",headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/x-www-form-urlencoded"},body,cache:"no-store"});
  const json = await response.json() as {id?:string;error?:{message?:string;code?:number}};
  if(!response.ok || !json.id) throw new Error(`Instagram publishing request failed (HTTP ${response.status}, code ${json.error?.code??"unknown"})`);
  return json.id;
}
export async function publishApprovedInstagramMedia(input: InstagramPublishInput): Promise<{mediaId:string}> {
  if(input.approved!==true) throw new Error("Publication requires explicit approval.");
  const token = process.env[TOKEN_ENV[input.project]];
  if(!token) throw new Error("Instagram account not configured.");
  const media = new URL(input.mediaUrl);
  if(media.protocol!=="https:") throw new Error("Public HTTPS media URL required.");
  if(input.caption.length>2200) throw new Error("Instagram caption is too long.");
  if(input.mediaType==="REELS") throw new Error("Reel processing and status polling not implemented yet.");
  const containerId = await metaPost("/me/media",token,input.mediaType==="IMAGE"
    ? {image_url:media.toString(),caption:input.caption}
    : {media_type:"REELS",video_url:media.toString(),caption:input.caption});
  const mediaId = await metaPost("/me/media_publish",token,{creation_id:containerId});
  return {mediaId};
}
