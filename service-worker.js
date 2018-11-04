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
    "revision": "065eb548c2da207ef399570a9f0dc55a"
  },
  {
    "url": "about/index.html",
    "revision": "469b6f218aa7903ff663b25e51664d94"
  },
  {
    "url": "assets/css/1.styles.547d5522.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/2.styles.48df321d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.559618f8.css",
    "revision": "1c4fb83dfcac86247c07167347aa661f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.547d5522.js",
    "revision": "dd0c1b40143099c2e37c99b6fad8a549"
  },
  {
    "url": "assets/js/10.e5990e00.js",
    "revision": "19a752c11760417d3475b3d4baa2dc5e"
  },
  {
    "url": "assets/js/11.67627ae5.js",
    "revision": "7894faffb608dec34d2cd410c11e53e1"
  },
  {
    "url": "assets/js/12.ff2a7e00.js",
    "revision": "ec400c0fbf0e22676bb6cfb71fa71cf4"
  },
  {
    "url": "assets/js/13.519ad67d.js",
    "revision": "169e2f4e302d798f8a89461e3696d1bb"
  },
  {
    "url": "assets/js/14.474db611.js",
    "revision": "34c35cd8fdf09e4f064da78d46f126b6"
  },
  {
    "url": "assets/js/2.48df321d.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/3.7e4cc370.js",
    "revision": "6c7af1e659fe18a2b63aa9e5b530a3fe"
  },
  {
    "url": "assets/js/4.ba7007c0.js",
    "revision": "10115e6dd3bd809537c569bab64deac9"
  },
  {
    "url": "assets/js/5.c6e44026.js",
    "revision": "b676cae27c58ac8c42734d8aa6608bff"
  },
  {
    "url": "assets/js/6.92b4b51a.js",
    "revision": "aa4ca49cf913b13138e4d2ae89c88546"
  },
  {
    "url": "assets/js/7.a7b3a31d.js",
    "revision": "7bb85a7a47ea27d77acb0e964567d5f0"
  },
  {
    "url": "assets/js/8.ee0d217f.js",
    "revision": "119e8a62ff1aaaf7acf0e3d41cbb9bf2"
  },
  {
    "url": "assets/js/9.059746c1.js",
    "revision": "48b72bfac7a7eadbdbb71002395d789b"
  },
  {
    "url": "assets/js/app.559618f8.js",
    "revision": "66f20d2a2d97a1da498176e2f65cdc6c"
  },
  {
    "url": "coding/1stprogram.html",
    "revision": "0c8c236e8a6f807fb6214c9838dbed1e"
  },
  {
    "url": "coding/2intcompare.html",
    "revision": "dbb3080236c70cb0b6b8e9bfc97fd698"
  },
  {
    "url": "coding/buma.html",
    "revision": "d2984f6756a605c701faa769902e0702"
  },
  {
    "url": "coding/cnote.html",
    "revision": "e36f3bb4b3d06ce8c3beb09aa0b9d0e4"
  },
  {
    "url": "coding/environment.html",
    "revision": "6631398d3b2e1c529114d2cb24320966"
  },
  {
    "url": "coding/idname.html",
    "revision": "067a9370b056e77b20398ddebdca4622"
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
    "revision": "ec16d96e082154be72fcca6b583eea61"
  },
  {
    "url": "computer/index.html",
    "revision": "3cb0c814b7b3db32e07a52aefd786177"
  },
  {
    "url": "guide/index.html",
    "revision": "5a40fa2cc07e2d87774059649f5a21d9"
  },
  {
    "url": "icon.png",
    "revision": "d02d3348fc06db197ddb252eaf19bd05"
  },
  {
    "url": "index.html",
    "revision": "8fe71cd76e64113f0fbc4cfcce432c1c"
  },
  {
    "url": "test/index.html",
    "revision": "ff7cc49548544d4edd0c4ed038bf2607"
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
