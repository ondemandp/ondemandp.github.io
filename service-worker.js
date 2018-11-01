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
    "revision": "4acac4130255e30b47fc2f1e39123176"
  },
  {
    "url": "about/index.html",
    "revision": "9c8872249e38df34fc295b9da6c64206"
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
    "url": "assets/css/styles.751f0744.css",
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
    "url": "assets/js/10.3b0361e8.js",
    "revision": "a6f9d40c9348a0a3777a4eeceff76ae3"
  },
  {
    "url": "assets/js/11.0c5eb007.js",
    "revision": "7971e8cdaa1b0effe4678bfe6cc39119"
  },
  {
    "url": "assets/js/12.a8635141.js",
    "revision": "078c733288b2f9be3912e24e6005d61a"
  },
  {
    "url": "assets/js/13.5878f772.js",
    "revision": "ce6b0995f8d88d6208808dc84c661a92"
  },
  {
    "url": "assets/js/14.b88d2a80.js",
    "revision": "cc056574809191300bdde06c93d3fcf3"
  },
  {
    "url": "assets/js/15.6c11cb9e.js",
    "revision": "ebdaf6a92bf98a8767c05129c0bf8551"
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
    "url": "assets/js/4.bf363f4f.js",
    "revision": "b87a17dbda645d260b738f2fb5b5e8db"
  },
  {
    "url": "assets/js/5.3bd48984.js",
    "revision": "43fc2c6db588051823940d6e3adadf6f"
  },
  {
    "url": "assets/js/6.eda91187.js",
    "revision": "32ec521eb60bb19c253132ac5c24ad97"
  },
  {
    "url": "assets/js/7.c58498e4.js",
    "revision": "ac12ebf5779932a501eb4350a933831b"
  },
  {
    "url": "assets/js/8.f590d6e9.js",
    "revision": "e22866fa64832e88aaddc000c55a935b"
  },
  {
    "url": "assets/js/9.383a70c9.js",
    "revision": "74b0e9a211bb8dc3667b1ef356ed36e0"
  },
  {
    "url": "assets/js/app.751f0744.js",
    "revision": "84b13e4cf6933935c47adc861c97e970"
  },
  {
    "url": "coding/1stprogram.html",
    "revision": "dd276ccd415e27b03afcb18467a81047"
  },
  {
    "url": "coding/2intcompare.html",
    "revision": "5d336f2ecc616c0b0c054508e2e28bf5"
  },
  {
    "url": "coding/buma.html",
    "revision": "aef6f6741ab93e50a2c4bccc1a89fb09"
  },
  {
    "url": "coding/cnote.html",
    "revision": "03c48c99afc16cf35d1c5a28e5f04ca3"
  },
  {
    "url": "coding/environment.html",
    "revision": "5b9d7a6b8e80c791505a5505292ae93f"
  },
  {
    "url": "coding/idname.html",
    "revision": "ea4138e4fe49a520f0218421bfc838f7"
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
    "revision": "bc3dc375909a8742fe78b487706c2dd3"
  },
  {
    "url": "computer/index.html",
    "revision": "8812bc3aedfff5606616d67a428d99f7"
  },
  {
    "url": "guide/index.html",
    "revision": "8a877fa1974e1824dfb714caa4933b03"
  },
  {
    "url": "icon.png",
    "revision": "d02d3348fc06db197ddb252eaf19bd05"
  },
  {
    "url": "index.html",
    "revision": "e6a8f1376608ce0013440670a2828c78"
  },
  {
    "url": "jiang/index.html",
    "revision": "7fd604b069160474100e8204331559e7"
  },
  {
    "url": "test/index.html",
    "revision": "56182556ca314a0c2004ed61ed7949b5"
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
