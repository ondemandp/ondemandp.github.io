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
    "revision": "9122a7e5c357f3320f1753446ac9cc48"
  },
  {
    "url": "about/index.html",
    "revision": "275d2c6f09ceed55f62ccb535272f8fa"
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
    "url": "assets/css/styles.b977f5f5.css",
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
    "url": "assets/js/1.0f2397f7.js",
    "revision": "07889004427fda69959351285872582f"
  },
  {
    "url": "assets/js/10.e09a1b19.js",
    "revision": "55af8656b2f90e5db44bf091d15f5886"
  },
  {
    "url": "assets/js/11.e58d2640.js",
    "revision": "1d1492ad7f7bb574ff4ff2fa6be5c688"
  },
  {
    "url": "assets/js/12.16d91e9e.js",
    "revision": "f67bfe40056f90df2ae6b7aea57d4966"
  },
  {
    "url": "assets/js/2.0d3ab16b.js",
    "revision": "fbb8a7859166277bd18d937ebb2d05b7"
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
    "url": "assets/js/5.cb46b192.js",
    "revision": "b5cd1b76a7ccbd4a970ad1a0193c0d6c"
  },
  {
    "url": "assets/js/6.8c2e7b4f.js",
    "revision": "4092b1cf0dbeaa0897846f0b591aa08b"
  },
  {
    "url": "assets/js/7.c6463462.js",
    "revision": "6a40940cbf5093f0f8ec53d080f32849"
  },
  {
    "url": "assets/js/8.c31585ae.js",
    "revision": "42d2883aed76f11a15da79e73f6b7359"
  },
  {
    "url": "assets/js/9.bd68da56.js",
    "revision": "3a1c4618bb27a9c715644b4ad9674f2a"
  },
  {
    "url": "assets/js/app.b977f5f5.js",
    "revision": "b8200758146e8aa1122fab5f084781bb"
  },
  {
    "url": "coding/1stprogram.html",
    "revision": "f9a128fc8699a02f3c1bf471639e32ee"
  },
  {
    "url": "coding/2intcompare.html",
    "revision": "f54a71a5d58d2fb481c91f6c1831402b"
  },
  {
    "url": "coding/cnote.html",
    "revision": "8abacee9cb3b304aba68dbb2fc53f581"
  },
  {
    "url": "coding/environment.html",
    "revision": "2348450c8bd5318b1a042d8ff3ce11e0"
  },
  {
    "url": "coding/index.html",
    "revision": "f01b70a7df5b98410a9c5e290c994957"
  },
  {
    "url": "computer/index.html",
    "revision": "139305fc9bc958c11b75a68b85987630"
  },
  {
    "url": "guide/index.html",
    "revision": "316109491d4a835c3b6cabc49f4acf86"
  },
  {
    "url": "index.html",
    "revision": "6d304f609b8f93510525d682cc2d5555"
  },
  {
    "url": "jiang/index.html",
    "revision": "ea3870af522121a750f9feed435c683e"
  },
  {
    "url": "Od.png",
    "revision": "44c78b62a2d11172b08ac5c1224c7b9a"
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
