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
    "revision": "cc7ab645ca2da23ad494b446b9e10808"
  },
  {
    "url": "about/index.html",
    "revision": "c0bbd8bb32543192fd3e0eba1eeff812"
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
    "url": "assets/css/styles.00bcf1aa.css",
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
    "url": "assets/js/1.23236846.js",
    "revision": "8e02f800c8b60b1fe376c6145c8e0b0c"
  },
  {
    "url": "assets/js/10.470868d7.js",
    "revision": "a04d4b8059028c142611536ea6359397"
  },
  {
    "url": "assets/js/11.df569771.js",
    "revision": "1d1492ad7f7bb574ff4ff2fa6be5c688"
  },
  {
    "url": "assets/js/12.7a35d766.js",
    "revision": "f67bfe40056f90df2ae6b7aea57d4966"
  },
  {
    "url": "assets/js/2.6e144277.js",
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
    "url": "assets/js/5.a8411a85.js",
    "revision": "b5cd1b76a7ccbd4a970ad1a0193c0d6c"
  },
  {
    "url": "assets/js/6.81c9ef36.js",
    "revision": "f362bd0a2f6ff4900b825c623b673f72"
  },
  {
    "url": "assets/js/7.93b809aa.js",
    "revision": "ec13a216168dacdf7ce1781c5a302cd6"
  },
  {
    "url": "assets/js/8.f9ab3263.js",
    "revision": "42d2883aed76f11a15da79e73f6b7359"
  },
  {
    "url": "assets/js/9.8786f263.js",
    "revision": "4fd87fd41d25b7f68e9bf58c7c346242"
  },
  {
    "url": "assets/js/app.00bcf1aa.js",
    "revision": "681a40f04724b365ffaf1841e9261721"
  },
  {
    "url": "coding/1stprogram.html",
    "revision": "83ddc5a5d4a42143371a7e4d1d3370aa"
  },
  {
    "url": "coding/2intcompare.html",
    "revision": "838540482d760980cb277ac32d9dd9bb"
  },
  {
    "url": "coding/cnote.html",
    "revision": "c789f693617453fb9ce5bbd67ffe97e6"
  },
  {
    "url": "coding/environment.html",
    "revision": "7951b4721596896491e13a1dfc44e41b"
  },
  {
    "url": "coding/index.html",
    "revision": "1856ddba69b93bb511487d3890a634a3"
  },
  {
    "url": "computer/index.html",
    "revision": "d083286f8b070aa51b81479d6d270b25"
  },
  {
    "url": "guide/index.html",
    "revision": "956fe4f6ce1a558a00e817558604fe30"
  },
  {
    "url": "index.html",
    "revision": "826977e6a1a1a95fb3d929dc6266bf01"
  },
  {
    "url": "jiang/index.html",
    "revision": "e3092913867512fc005ba8f3858e7f73"
  },
  {
    "url": "Od.jpg",
    "revision": "f686ebd317bdf302a31a460531841853"
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
