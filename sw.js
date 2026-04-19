// ========================================
// 基礎問題精講III・C SRS - Service Worker
// 作成日時: 2026-04-19T15:00:00+09:00
// ========================================
// ★ CACHE_NAME は config.js の SW_CACHE_NAME と一致させること
// ========================================

var CACHE_NAME = "kisomon3c-srs-v1";

var ASSETS = [
  "./",
  "./index.html",
  "./config.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  var url = event.request.url;
  if (url.indexOf("script.google.com") !== -1 ||
      url.indexOf("googleapis.com") !== -1) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
