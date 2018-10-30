/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "56564ac575798ef44b9c0928d9f8e4c6"
  },
  {
    "url": "about/index.html",
    "revision": "d3cfe240629c0bb06f1bc7e26665f2d0"
  },
  {
    "url": "assets/css/1.styles.f07b7644.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/2.styles.48df321d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.39c6e5c3.css",
    "revision": "1c4fb83dfcac86247c07167347aa661f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f07b7644.js",
    "revision": "3051f7f8e9b9ca1052ec0b586cf83e31"
  },
  {
    "url": "assets/js/10.f5139c4c.js",
    "revision": "4a05a36b7cfe707604e3b03ddacd2c67"
  },
  {
    "url": "assets/js/11.ca3c05ce.js",
    "revision": "423b22ac598f5ffbdea1ee9a035810b4"
  },
  {
    "url": "assets/js/12.405aad87.js",
    "revision": "ef0a2a79be468936c073bea1505614ce"
  },
  {
    "url": "assets/js/13.ad60d74a.js",
    "revision": "62235120fdbb861f2e7115ff347de579"
  },
  {
    "url": "assets/js/2.48df321d.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/3.46d840d6.js",
    "revision": "5acae4c949b7922c8f31d1efeaf0524c"
  },
  {
    "url": "assets/js/4.b3947037.js",
    "revision": "34a1543068de1868025f788f66e2d20f"
  },
  {
    "url": "assets/js/5.0eabcb93.js",
    "revision": "234d82b8edb68e1614084051f5e569ab"
  },
  {
    "url": "assets/js/6.954551f8.js",
    "revision": "d2acb337d4b8006da72fb0d1bb7713cb"
  },
  {
    "url": "assets/js/7.7bf47816.js",
    "revision": "cc190ab78336e0f929000e8d52400931"
  },
  {
    "url": "assets/js/8.76ecd591.js",
    "revision": "c5963565cd19f9d04127719dc293ac06"
  },
  {
    "url": "assets/js/9.3e690fc3.js",
    "revision": "81067cb31bb9e99903c9f1f425670fb4"
  },
  {
    "url": "assets/js/app.39c6e5c3.js",
    "revision": "31ffe065b7a405b61a0c60f6a3af4a21"
  },
  {
    "url": "coding/1stprogram.html",
    "revision": "de7871158daef3123923242dd9f04475"
  },
  {
    "url": "coding/2intcompare.html",
    "revision": "6c03942b7af647b6f208d8533b6a3438"
  },
  {
    "url": "coding/cnote.html",
    "revision": "b13970b28a91589d35321207437191ad"
  },
  {
    "url": "coding/environment.html",
    "revision": "39f510154aa88ace4fc384e9d9489298"
  },
  {
    "url": "coding/images/create1.jpg",
    "revision": "9ab240064086e537058f48e6433e1eac"
  },
  {
    "url": "coding/images/create2.jpg",
    "revision": "9aac60b5541c90991b348c9151a8ff4e"
  },
  {
    "url": "coding/images/create3.jpg",
    "revision": "47e00c2640affce7ee3ff8bacaffb3a6"
  },
  {
    "url": "coding/images/create4.jpg",
    "revision": "5329997001d741513f4a8ff49e3b09d6"
  },
  {
    "url": "coding/images/helloworld.jpg",
    "revision": "5266622eea1dc24c254dfb4223921e6b"
  },
  {
    "url": "coding/images/register1.jpg",
    "revision": "b51a3b4dfdb068a9734f15521a54e382"
  },
  {
    "url": "coding/images/setting1.jpg",
    "revision": "d9a66d09c3bc06543ba53a9a32b8f24c"
  },
  {
    "url": "coding/images/setting2.jpg",
    "revision": "8b0f956e4b9a5bccd0f9a83e5d11024c"
  },
  {
    "url": "coding/images/setting3.jpg",
    "revision": "918ec1f1edf7e925252f97a9018ef68b"
  },
  {
    "url": "coding/index.html",
    "revision": "7edaf81443b4827537cb1f136037e657"
  },
  {
    "url": "computer/index.html",
    "revision": "d10d8f0a7e57401fdce281da8d975df4"
  },
  {
    "url": "guide/index.html",
    "revision": "0e8dfbe6e61d10e10ae53fe8f8f67b6d"
  },
  {
    "url": "index.html",
    "revision": "160c8663257d1f11581e74d13011de47"
  },
  {
    "url": "jiang/index.html",
    "revision": "021a4079c13830af569c1014f370a6f6"
  },
  {
    "url": "Od.png",
    "revision": "44c78b62a2d11172b08ac5c1224c7b9a"
  },
  {
    "url": "test/index.html",
    "revision": "08a127d3a845e7f534a60e836433d7d4"
  },
  {
    "url": "Valine.js",
    "revision": "7a7100411616a0eb8bebc1ad94912d8a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
