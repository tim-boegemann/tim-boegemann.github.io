'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "705d201ad841257cf6878fba3efa0783",
"/": "705d201ad841257cf6878fba3efa0783",
"main.dart.js": "af8ffed6b782e12e7a941eb3cd7bad45",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "cf13f53e11c864ae8808ff6826261863",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/27ed268f08c53acf119fec446bc4ec060e240d": "82663ba08bc769408a49d9b7bc454c72",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/84b51d0b20e31c426f429f4b8048b026666a59": "664f5283d2fc82c5c6b34d325f8fe043",
".git/objects/df/e6f8f43580b0469fe5e091a52793c802a448da": "f73c76892a5192590ebeb2f93a6d1e81",
".git/objects/da/dcd637b4fa4cf7b8344f4fcb52bf1f1fbe9d54": "2fea0167d34740acab3cb72bac0a6077",
".git/objects/da/4fd77b4a42751b3a00fa5355cdf38464f826a0": "d4a3d05819a68d355ac13a79b6c1e31e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f36454e8b36f62971c96e717ff624adc10b32b": "ccf4479ea7ad844c6bc64b0d9c702a6e",
".git/objects/f2/5aea35ca26014872d30a737823bcd9a45ef7dd": "c2022edc480d185330b0377ec12a4e01",
".git/objects/e4/246521752e3973fbd7c3f845b6f7cb44c97b02": "f5257efb9b424ab072d44ca79b667b1b",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fb/30451eb43588d204641db25653d5eb77656885": "cc551dfdac241e944eeb233239cc5a86",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/pack/pack-3eeea124db8009a953a0635ee7ed160689c0965c.idx": "841177040cbd093e79c5d4f35ee50965",
".git/objects/pack/pack-3eeea124db8009a953a0635ee7ed160689c0965c.pack": "2ff504c545a77017cfe044773d220169",
".git/objects/16/218b7fe8e4f5a47d5a7efcd2e8c5ec989b01c1": "c1ff4f488c4241327ceb9fe5ca0b7122",
".git/objects/16/6c1a1317f13db827deb8cbe2566d1ed2f91712": "110f6edd84dae2149349ecb02b97f66e",
".git/objects/73/65d640deed71f11351773b076a9bd1c460ded3": "18a5d0f5d3998b0bc0771080bfc7c3d4",
".git/objects/1a/f23e5588cf5144c16ffb7478a69477e166dc3f": "0ad7ba9b5d50009db469d5c9ae76755b",
".git/objects/28/28466bf5d89bd5698d4661d8826bce41393a91": "279493df6e1871a1a4023cf401fd3537",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/0fe8ef7a149415e4cccf69ede3fe5f27637fcc": "90cdd9a4ecc136d55d59ac75453b3fd4",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/81/91312cc687b188442d1ad3ed818e3a402edc89": "01146c93a40d5a48c76b9a2ea2e2a5c3",
".git/objects/81/5222c10e8ad59fe136ebef33d11340ffde2615": "03c8d5cacba33733ba5976777e803d94",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/5980d80a425921d3f654986690d0de24e6f5ec": "2cfc8856f6e99a3be344db3ee7f4f038",
".git/objects/96/99144fb2f48753310b5e144a2194a713ccd3ad": "5748cc56acc2228b4b8c2e76f7c5eeb2",
".git/objects/6d/58c374ffe56f72709c2961cef7a53693d59f32": "00fb619b6a48b51800d5555559bfe514",
".git/objects/d2/fe827e48c1e7822fa321a5831dc74cc5a76743": "ae4153ad2bf173c0b0dae8fe05125d5e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/70aabb4b163726693552a52fd4f3e20373506b": "a163b3557c274cdca93d4009bb091a2a",
".git/objects/a1/06b4d9c626398147219f4d6f4040a13380e8bb": "3f97cc1ebe580d9a48cf711ffb64c5ab",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f0/104094e3e71cd88795d9018f7112d342fe4ea5": "d57bb360e842c648fd6df2bcb68f6c0b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ce/576223beac0e9dd4d52fdfa851c126f465b9c5": "e34052f9b2cda0054c9d9391147cff55",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/716b3afa36ab5cf7f6cbb99a3c0a98b0f9ba56": "358e4900e6de64b83b8f16bd21fe8679",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/c918cf586f8c5b4da661baccbddafd4f97294b": "e8bac9edb5ff93c589f0609f4cf80834",
".git/objects/2d/800b79412da3678fdbcc2862f8c14460c51850": "737e0901761c7352db523ac1be2ee6cb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2e/8d1e96ad3580dd62de8ab3f0740c6b987d1e68": "cc724e63f8c47026d1a4de4d6bcb04b6",
".git/objects/47/c2c8572b7eba2f5266aa02f48f8b04380f1122": "166aff729ee1ab599a658dedf31e7a9e",
".git/objects/13/8518c8963493858c65cd8db0e57d4ea7e89eec": "51c70fdc1f17c92f544629c7ea39af5e",
".git/objects/14/9f39fcd21697d99fc01fd0511fbf02dea09316": "e820821a605ff476dc21c96ac150dc95",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f0471a01e6bc9cf769bd17b1a094bfc9",
".git/logs/refs/heads/main": "f0471a01e6bc9cf769bd17b1a094bfc9",
".git/logs/refs/remotes/origin/HEAD": "2cba06cc1d83fd97fc971e99ef52a2ae",
".git/logs/refs/remotes/origin/main": "58636d1e0494378f8e169dfecf2720e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fa48a33c3e8071fdc8f235f69689f91d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fa48a33c3e8071fdc8f235f69689f91d",
".git/index": "bc3eb84d739d455d870e36c3b44f0a4d",
".git/packed-refs": "25386978be2e211e8424c392b3e135f1",
".git/COMMIT_EDITMSG": "6a8ccf71652d394cf92794e8b879e14a",
".git/FETCH_HEAD": "53388e373a95a1201fadf32bc63598ce",
"assets/AssetManifest.json": "bc5408b7093180a75e255571c8517051",
"assets/NOTICES": "18341f5e89e6af14af291711e75374cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/placePingu_scaled.png": "c0b5483e98db7a0d09cb5af75256f290",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
