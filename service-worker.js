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
    "revision": "f9234f46fb3011e4046d1c92c02ba50f"
  },
  {
    "url": "about/index.html",
    "revision": "66b83efd8481b4c1a23f0109d85cbd4a"
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
    "url": "assets/css/styles.a24f95fa.css",
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
    "url": "assets/js/10.f36952bf.js",
    "revision": "7dc4613b09022beb4f805f973263eda7"
  },
  {
    "url": "assets/js/11.d4bd78ad.js",
    "revision": "e478f34f7f27ef3c37985a2db1dacf80"
  },
  {
    "url": "assets/js/12.95675969.js",
    "revision": "1f06a36bc086f6afc11d6cbbc37fda6c"
  },
  {
    "url": "assets/js/13.5549ab24.js",
    "revision": "9641d5a941cb1ee32603421f16d42ccd"
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
    "url": "assets/js/8.291002dd.js",
    "revision": "bf2d835cba3963ede19317f4caf14fd0"
  },
  {
    "url": "assets/js/9.ea0264f6.js",
    "revision": "bc9053a3cdaad949075d298ce1f9cf0b"
  },
  {
    "url": "assets/js/app.a24f95fa.js",
    "revision": "c532c18974d51da800b7fb7d0d137bf4"
  },
  {
    "url": "coding/1stprogram.html",
    "revision": "d705c26230f61589f202c6864ea2eead"
  },
  {
    "url": "coding/2intcompare.html",
    "revision": "8ffb568e739f9e0b3e85942df2700545"
  },
  {
    "url": "coding/cnote.html",
    "revision": "7d40eb24aeae0e2963e2e74c441f7018"
  },
  {
    "url": "coding/environment.html",
    "revision": "b5a1ae793a07b3282b50efc185427880"
  },
  {
    "url": "coding/idname.html",
    "revision": "dfab0d3fb5a61ae483efb460254c162a"
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
    "revision": "8d0ef56017ec9c6d94fcc1a760977fe0"
  },
  {
    "url": "computer/index.html",
    "revision": "72d7b2df9891041810cd854bfb9a4f0c"
  },
  {
    "url": "guide/index.html",
    "revision": "c7d2ed13f37808157bca627bcd02aa1d"
  },
  {
    "url": "icon.png",
    "revision": "d02d3348fc06db197ddb252eaf19bd05"
  },
  {
    "url": "index.html",
    "revision": "2981f500c8c25150e2fa3e8efb6f4034"
  },
  {
    "url": "jiang/index.html",
    "revision": "5946bec1cd2aa71e09f3c88749777851"
  },
  {
    "url": "test/index.html",
    "revision": "c6083848c1b8b46d66279c7c325a46d0"
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
