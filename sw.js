const CACHE_NAME = "gift-v1";
const ASSETS = [
  "./",
  "index.html",
  "manifest.json",
  "icons/192.png", // Aggiungi questa
  "icons/512.png", // Aggiungi questa
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
