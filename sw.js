if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const c=e=>s(e,d),o={module:{uri:d},exports:f,require:c};i[d]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(r(...e),f)))}}define(["./workbox-3e8df8c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CHU5JwnF.js",revision:null},{url:"assets/index-DsIOdrAO.css",revision:null},{url:"index.html",revision:"b5025ecdb003f0d03e9ddcc2eaf2b779"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.svg",revision:"7f1c4521acc10694fefef8f72dd2ea5f"},{url:"pwa-192x192.png",revision:"021df52501f4357c03eebd808f40dc6a"},{url:"pwa-512x512.png",revision:"d2f759aaabcb2c44ff52b27fde3de6e0"},{url:"pwa-maskable-192x192.png",revision:"7cd11dc5f0490b349d23eef5591d10e5"},{url:"pwa-maskable-512x512.png",revision:"8c97dc367a85a5a1eba523b24f79d03b"},{url:"manifest.webmanifest",revision:"c452912633990899ffe790f985ad0db9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
