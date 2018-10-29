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
    "revision": "ed9aabda8f7692f652b32701ffd90739"
  },
  {
    "url": "about/index.html",
    "revision": "0fdd9748a2efa5362a882b34d39166c3"
  },
  {
    "url": "assets/css/3.styles.b18a32be.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/4.styles.3f93db38.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.4a38e0b3.css",
    "revision": "1c4fb83dfcac86247c07167347aa661f"
  },
  {
    "url": "assets/img/create1.9ab24006.jpg",
    "revision": "9ab240064086e537058f48e6433e1eac"
  },
  {
    "url": "assets/img/create2.9aac60b5.jpg",
    "revision": "9aac60b5541c90991b348c9151a8ff4e"
  },
  {
    "url": "assets/img/create3.47e00c26.jpg",
    "revision": "47e00c2640affce7ee3ff8bacaffb3a6"
  },
  {
    "url": "assets/img/create4.53299970.jpg",
    "revision": "5329997001d741513f4a8ff49e3b09d6"
  },
  {
    "url": "assets/img/helloworld.5266622e.jpg",
    "revision": "5266622eea1dc24c254dfb4223921e6b"
  },
  {
    "url": "assets/img/register1.b51a3b4d.jpg",
    "revision": "b51a3b4dfdb068a9734f15521a54e382"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/setting1.d9a66d09.jpg",
    "revision": "d9a66d09c3bc06543ba53a9a32b8f24c"
  },
  {
    "url": "assets/img/setting2.8b0f956e.jpg",
    "revision": "8b0f956e4b9a5bccd0f9a83e5d11024c"
  },
  {
    "url": "assets/img/setting3.918ec1f1.jpg",
    "revision": "918ec1f1edf7e925252f97a9018ef68b"
  },
  {
    "url": "assets/js/1.c29fac53.js",
    "revision": "c1c0a989f973b9d4957ed99bb6b128a9"
  },
  {
    "url": "assets/js/10.70d4ae9c.js",
    "revision": "6843851867258816fe3e62aa6b2b0407"
  },
  {
    "url": "assets/js/11.f16877fa.js",
    "revision": "497d1ffb2aa68c3c08d14e6eeb469ddd"
  },
  {
    "url": "assets/js/12.58b8b541.js",
    "revision": "99ee61c5e3bd75e26d28666136ec6f0a"
  },
  {
    "url": "assets/js/13.2ef46cd8.js",
    "revision": "5d72d3c2f3470b0781eb98f9c8805dfc"
  },
  {
    "url": "assets/js/2.f5978083.js",
    "revision": "48dc44eea7fcbf93c1e7a521661ba504"
  },
  {
    "url": "assets/js/3.b18a32be.js",
    "revision": "9f50a07a93a0f23c430a17e26c1b65a8"
  },
  {
    "url": "assets/js/4.3f93db38.js",
    "revision": "ce923773449c7deff2f27f52d41182f6"
  },
  {
    "url": "assets/js/5.b2144440.js",
    "revision": "766f8b518c08e229d90abd23879d0eb1"
  },
  {
    "url": "assets/js/6.b26daa69.js",
    "revision": "70d91741ff998c9c7ee2ba3f62b54cd2"
  },
  {
    "url": "assets/js/7.ee358001.js",
    "revision": "d5a88aeaa52df8e4abeef3368ae7b9ff"
  },
  {
    "url": "assets/js/8.44b0643e.js",
    "revision": "f51978c87042e34b866deb34635514d7"
  },
  {
    "url": "assets/js/9.2a394086.js",
    "revision": "044e97a9d85cd45536fdd1c02cd8a27a"
  },
  {
    "url": "assets/js/app.4a38e0b3.js",
    "revision": "e1e867a85625d6c1c5455cfcb2c464de"
  },
  {
    "url": "coding/1stprogram.html",
    "revision": "1cc0bbb249be9ae84f0b5cc486dcba0e"
  },
  {
    "url": "coding/2intcompare.html",
    "revision": "f5f1eb09a08b0ec232ece8154bf0bd77"
  },
  {
    "url": "coding/cnote.html",
    "revision": "e3401426093b8c3225951872d1a6501c"
  },
  {
    "url": "coding/environment.html",
    "revision": "5aa72c97ee495d8113143f15feb0ff7c"
  },
  {
    "url": "coding/index.html",
    "revision": "6492a5897fdafb1bccc6a4279023ec58"
  },
  {
    "url": "computer/index.html",
    "revision": "0add84f7264e18c177340ab25a2d7418"
  },
  {
    "url": "guide/index.html",
    "revision": "ab7217dca2bb56bbb26f38ce80f0ae2c"
  },
  {
    "url": "index.html",
    "revision": "1df09792ab828df8b14ca6faaa0221f0"
  },
  {
    "url": "jiang/index.html",
    "revision": "cb8c179b60a108f889cd9b49475b6ce6"
  },
  {
    "url": "Od.png",
    "revision": "44c78b62a2d11172b08ac5c1224c7b9a"
  },
  {
    "url": "test/index.html",
    "revision": "23d5b80cf31de52e7bcf794c2ce4eac8"
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
