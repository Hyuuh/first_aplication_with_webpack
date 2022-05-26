const CACHE_NAME = 'STORIES_CACHE-V1';

self.addEventListener('install', () => {
  caches.open(CACHE_NAME).then((cache) => {
    cache.addAll(['/index.html', '/app.js']);
  });
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil(
    caches.keys().then((cacheNames) => {
      const promises = cacheNames.map((cacheName) => {
        if (CACHE_NAME !== cacheName) return caches.delete(cacheName);
      });

      return Promise.all(promises);
    }),
  );
});

function searchInCacheOrMakeRequest(request) {
  const cachePromise = caches.open(CACHE_NAME);
  const matchPromise = cachePromise.then((cache) => cache.match(request));

  return Promise.all([cachePromise, matchPromise]).then(([cache, cacheResponse]) => {
    const fetchPromise = fetch(request).then((fetchResponse) => {
      cache.put(request, fetchResponse.clone());

      return fetchResponse;
    });
    return cacheResponse || fetchPromise;
  });
}

self.addEventListener('fetch', (ev) => {
  ev.respondWith(
    caches.match(ev.request)
      .then(() => searchInCacheOrMakeRequest(ev.request)).catch(() => {
        if (ev.request.mode === 'navigate') {
          return caches.match(ev.request);
        }
      }),
  );
});
