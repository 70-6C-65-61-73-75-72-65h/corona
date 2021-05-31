// import * as api from "./service/api";
// // const BASE_URL = `https://disease.sh/v3/covid-19`;
// const staticCacheName = "s-app-v1";
// const assetUrls = ["index.html"];

// window.self.addEventListener("install", (event) => {
//   window.event.waitUntil(
//     caches.open(staticCacheName).then((cache) => cache.addAll(assetUrls))
//   );
// });
// window.self.addEventListener("activate", (event) => {});

// window.self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       // This returns the previously cached response
//       // or fetch a new once if not already in the cache
//       return response || fetch(event.request);
//     })
//   );
// });

// async function getVaccineTotalFetch() {
//   const res = await api.getVaccineTotal();
// }
