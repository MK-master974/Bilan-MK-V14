/* Ancienne adresse d'Évalys : ce service worker efface l'ancienne version et renvoie vers la nouvelle adresse. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith('pbk-')) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://mk-master974.github.io/evalys/');
})()));
