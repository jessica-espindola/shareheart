var cacheName = "pwaTeste+-v1.0";

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) =>
        cache.addAll([
          "./index.html",
          "./institutions.html",
          "./assets/css/style.css",
          "./assets/css/style-header-footer.css",
          "./assets/css/style-institutions.css",
          "./assets/css/style-responsive.css",
          "./assets/images/shareHeartLogo.png",
          "./assets/images/shareHeartLogo-simbolo.png",
          "./assets/images/icons/16.png",
          "./assets/images/icons/32.png",
          "./assets/images/icons/40.png",
          "./assets/images/icons/50.png",
          "./assets/images/icons/64.png",
          "./assets/images/icons/80.png",
          "./assets/images/icons/180.png",
          "./assets/images/icons/1024.png",
          "./assets/images/banner-um.png",
          "./assets/images/banner-dois.png",
          "./assets/images/banner-tres.png",
          "./assets/images/GitHub_Logo.png",
          "./assets/images/banner-doacao.png",
        ])
      )
  );
});

self.addEventListener("message", function (event) {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function (event) {
  //Atualizacao internet
  event.respondWith(
    (async function () {
      try {
        return await fetch(event.request);
      } catch (err) {
        return caches.match(event.request);
      }
    })()
  );
});
