if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let f={};const r=e=>n(e,a),o={module:{uri:a},exports:f,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),f)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"434af078512000203212119bf342c673"},{url:"/_next/static/6Z-EfGwZ7vhY3oU0Qt-61/_buildManifest.js",revision:"c787e621022e84d6fbac9c413463191e"},{url:"/_next/static/6Z-EfGwZ7vhY3oU0Qt-61/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/11a89e4f.d3f9392fcbee444e.js",revision:"d3f9392fcbee444e"},{url:"/_next/static/chunks/185.297a52fb1f1c13c6.js",revision:"297a52fb1f1c13c6"},{url:"/_next/static/chunks/238.9f9e261b13a79e53.js",revision:"9f9e261b13a79e53"},{url:"/_next/static/chunks/274.1623827977547200.js",revision:"1623827977547200"},{url:"/_next/static/chunks/311.fe827f5751aa2bb3.js",revision:"fe827f5751aa2bb3"},{url:"/_next/static/chunks/430.5deae8b32547d2f3.js",revision:"5deae8b32547d2f3"},{url:"/_next/static/chunks/450.e77207616c819b41.js",revision:"e77207616c819b41"},{url:"/_next/static/chunks/463.52910f04fdd61d44.js",revision:"52910f04fdd61d44"},{url:"/_next/static/chunks/465.382875ed3cf85633.js",revision:"382875ed3cf85633"},{url:"/_next/static/chunks/496.ea34425822b9134f.js",revision:"ea34425822b9134f"},{url:"/_next/static/chunks/62.9a476d76ff2bae3a.js",revision:"9a476d76ff2bae3a"},{url:"/_next/static/chunks/642.58bf1d7778d51c7d.js",revision:"58bf1d7778d51c7d"},{url:"/_next/static/chunks/735.2cbac3648759b0d3.js",revision:"2cbac3648759b0d3"},{url:"/_next/static/chunks/77.a3676037fdad76b7.js",revision:"a3676037fdad76b7"},{url:"/_next/static/chunks/807.b68d12cf422964a3.js",revision:"b68d12cf422964a3"},{url:"/_next/static/chunks/816.14a7bf3ecd6405c6.js",revision:"14a7bf3ecd6405c6"},{url:"/_next/static/chunks/829.b66f33ff6982cc79.js",revision:"b66f33ff6982cc79"},{url:"/_next/static/chunks/876.a065c77fe1dcc41d.js",revision:"a065c77fe1dcc41d"},{url:"/_next/static/chunks/890.a6ff6f1ddbb74aa2.js",revision:"a6ff6f1ddbb74aa2"},{url:"/_next/static/chunks/910.443751a20396d895.js",revision:"443751a20396d895"},{url:"/_next/static/chunks/961.bfddfccfa0fbd9d0.js",revision:"bfddfccfa0fbd9d0"},{url:"/_next/static/chunks/978.f51dfaa65f5888a1.js",revision:"f51dfaa65f5888a1"},{url:"/_next/static/chunks/99.fda8324bd659ead7.js",revision:"fda8324bd659ead7"},{url:"/_next/static/chunks/fd9d1056-66c9e7a5acda58cf.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/framework-43d7685e6f9e17f6.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/main-app-4cfb2f147e309d11.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/main-dd24bde8c21a0f0c.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/pages/_error-27e8dd6ee4f94f8f.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/pages/index-097b16c5f527a292.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/pages/meet-3f33b2008c663688.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/pages/meet/%5Bid%5D-ac6994d872f9af23.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/pages/my-account/%5B%5B...target%5D%5D-3e918975fb73fc50.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/pages/page/%5Balias%5D-abbb43fe9369d83e.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/pages/search/%5Bterm%5D-9379c896f56857ce.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/pages/sitemap.xml-02d142b4258b54c3.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f7da42c0c7ae4c13.js",revision:"6Z-EfGwZ7vhY3oU0Qt-61"},{url:"/_next/static/css/7cd216a50753d67b.css",revision:"7cd216a50753d67b"},{url:"/android-icon-144x144.png",revision:"5c7902bf9514b0394a87df9032c9b896"},{url:"/android-icon-192x192.png",revision:"fd9492ac3f82767791a6f6ec237fbb5d"},{url:"/android-icon-36x36.png",revision:"9f23367ec8fd80e9a332835407245c9b"},{url:"/android-icon-48x48.png",revision:"55fa4a71e4fe0119d9938e5a14b9ea91"},{url:"/android-icon-72x72.png",revision:"93c84be156fa14abd8cdfcdb6a6d7f99"},{url:"/android-icon-96x96.png",revision:"757bf7da81eebeafeba637c810a15dd4"},{url:"/apple-icon-114x114.png",revision:"d006f884797fecdba0605fc493160d4b"},{url:"/apple-icon-120x120.png",revision:"d30c8fab2df71ce9fc0c525f263321f6"},{url:"/apple-icon-144x144.png",revision:"5c7902bf9514b0394a87df9032c9b896"},{url:"/apple-icon-152x152.png",revision:"de868f70de7e07b20da795df9cd72597"},{url:"/apple-icon-180x180.png",revision:"4c7363ef403426d347f1e68d6abade1b"},{url:"/apple-icon-57x57.png",revision:"3c292c36d10653cd7eaf3167ef606e57"},{url:"/apple-icon-60x60.png",revision:"dc51f9f9d6e456a51a1005242387b0c3"},{url:"/apple-icon-72x72.png",revision:"93c84be156fa14abd8cdfcdb6a6d7f99"},{url:"/apple-icon-76x76.png",revision:"063498b89e12efbcc94a4ee76455ad50"},{url:"/apple-icon-precomposed.png",revision:"3445fb6a797229af6bcff684cb5680c6"},{url:"/apple-icon.png",revision:"3445fb6a797229af6bcff684cb5680c6"},{url:"/banner.png",revision:"32687b7620822aaf5e775f30a73cd9f6"},{url:"/beep.mp3",revision:"c4109ef85ba930a76e7410f5fa573770"},{url:"/blocks/0.png",revision:"b4cdb872825de4e89c04409455326321"},{url:"/blocks/1.png",revision:"c828cbc06c773af928b09b072c160f9c"},{url:"/blocks/10.png",revision:"22d139089993351d1fdf6aa7a5448cef"},{url:"/blocks/11.png",revision:"e795425cbf8e187462f9223d55fcb560"},{url:"/blocks/12.png",revision:"c0ef5b20dbcb49ded2d437420f24727a"},{url:"/blocks/13.png",revision:"3409b53fce38d458c16db10a190e1467"},{url:"/blocks/14.png",revision:"2d47a4842e848f57a9e6514bf0753f63"},{url:"/blocks/15.png",revision:"284b0d837871ce49db84d7bd6d8fd26b"},{url:"/blocks/16.png",revision:"2cc94895f66b9e9f9d532ab7e6db87c6"},{url:"/blocks/17.png",revision:"0a1af3702e59f127b5229ce1a6b3d9e3"},{url:"/blocks/18.png",revision:"1a1f2eae06089f3f9cef62b4a60119b5"},{url:"/blocks/19.png",revision:"6840141e0d285fa8276ce5bd2d7b6b01"},{url:"/blocks/2.png",revision:"bf9038cf0212f10cab59725d2f139554"},{url:"/blocks/20.png",revision:"5d70ad933956d264abbdfb3bc7f26bbf"},{url:"/blocks/21.png",revision:"103b112d2e6ab21b76230b3f0acf0b20"},{url:"/blocks/22.png",revision:"99ae6dc5fbb81c73d86a2523235af5d0"},{url:"/blocks/23.png",revision:"1dbb837e7a29f8d521017c695df8bc41"},{url:"/blocks/3.png",revision:"b1bebbb1e7e5bb2c5efa1e1f9c2c844f"},{url:"/blocks/4.png",revision:"e09987dada4d8583e8c51a687c4332d0"},{url:"/blocks/5.png",revision:"06f5b3352a044cbb2229b666749f8250"},{url:"/blocks/6.png",revision:"a8ac6eed0a3aa2f8f0a0a97d4efce609"},{url:"/blocks/7.png",revision:"88f5b8d3115e63f8c25a34ac141dddad"},{url:"/blocks/8.png",revision:"f4d6f373c353f1b1c018c1b44713d279"},{url:"/blocks/9.png",revision:"a1320fa9b226416316ccfd646183a8f8"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/clinicas.csv",revision:"49885f13104ddf6f853d910e60fffa9a"},{url:"/favicon-16x16.png",revision:"1c1dc07360725265e9183e6c1b6875a5"},{url:"/favicon-32x32.png",revision:"69652f501bda9782fed3feb01113170b"},{url:"/favicon-96x96.png",revision:"757bf7da81eebeafeba637c810a15dd4"},{url:"/favicon.ico",revision:"eb661dae3d33fcba6e3ce692584009c5"},{url:"/get-started/mobile.png",revision:"cfa3bd6324ba5a1fd73f2317a884424e"},{url:"/ia.png",revision:"d5c169cdf4ff7177da64c6015f165083"},{url:"/icon.png",revision:"710b7129f107fd86d1892f6baef97d6b"},{url:"/icons/1240x600-icon.png",revision:"e920acb13e71db5447204ac273993ab3"},{url:"/icons/apple-icon-180.png",revision:"5c069878cafe03d1d6484b727685b02d"},{url:"/icons/manifest-icon-192.maskable.png",revision:"6fd103379c5298ad27e7593354617327"},{url:"/icons/manifest-icon-512.maskable.png",revision:"0fbccec8871c53ad71b10e59aff5d737"},{url:"/images/bg1.svg",revision:"049fde0c73edab2460eb993b663e937e"},{url:"/images/bg2.svg",revision:"b98bc23962bd9f2f72be041e573d6874"},{url:"/images/ia.jpg",revision:"2c982e1b05a3fbb697808fed6d29210f"},{url:"/images/no_photo.png",revision:"210272344c90c2d6545f192936eb7b4f"},{url:"/images/vaccine.png",revision:"e0b21ff4fb19b1d8be9112b8d9b66f1b"},{url:"/logo/logo.png",revision:"5e8031d082231c4eb11d5786984904f9"},{url:"/manifest.json",revision:"7bfc05fa5a4ea726628a072eedd4146c"},{url:"/ms-icon-144x144.png",revision:"5c7902bf9514b0394a87df9032c9b896"},{url:"/ms-icon-150x150.png",revision:"678ff618f119a5b71299a3fbe7d32259"},{url:"/ms-icon-310x310.png",revision:"e43d1cea6c047a856431286359fa3ea3"},{url:"/ms-icon-70x70.png",revision:"a5f84fb0c6d9fca8f629689a5d921874"},{url:"/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"/user/user.png",revision:"88b53f71608796f2f4ddcc1875678806"},{url:"/whatsapp.png",revision:"2b5545f8e364a15baae77a3e9ca51bf6"},{url:"/whatsapp/icon.png",revision:"7bdc37d1a0a520adc99c98ccba28d473"},{url:"/whatsapp/link.png",revision:"be312251e367a9ec899ba0819a4fa9aa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
