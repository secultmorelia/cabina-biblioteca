self.addEventListener('fetch', (event) => {
  // Un service worker básico para cumplir con los requisitos de instalación de PWA
  event.respondWith(fetch(event.request));
});
