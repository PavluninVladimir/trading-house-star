// @ts-ignore
import { registerRoute } from 'workbox-routing'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { precacheAndRoute } from 'workbox-precaching'
import { ExpirationPlugin } from 'workbox-expiration'
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies'

declare let self: ServiceWorkerGlobalScope
precacheAndRoute(self.__WB_MANIFEST)

const cacheName = 'my-api-cache';

const myPlugin = {
    cacheWillUpdate: async ({ response }) => {
        // const reg = /\/_nuxt\/\S+/gm
        // const regex = new RegExp(reg);
        // if (response.url.match(regex)) {
        //     const cache = await caches.open(cacheName);
        //     await cache.delete(response.url);
        //     console.log("1")
        //     return null;
        // }
        console.log(response, "sdsss")
        // Add in any other checks here, if needed.
        return response;
    },
};

// Кэшируем страницы (`HTML`) с помощью стратегии `Network First` (сначала сеть)
registerRoute(
    // проверяем, что запрос - это переход на новую страницу
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({
        // помещаем все файлы в кэш с названием 'pages'
        cacheName: 'pages',
        plugins: [
            // кэшируем только результаты со статусом 200
            new CacheableResponsePlugin({
                statuses: [200]
            })
        ]
    })
)


// registerRoute(
//     ({ request}) => request.destination === 'script' ||
//          request.destination === 'style',
//          new StaleWhileRevalidate({
//              cacheName: cacheName,
//              plugins:[myPlugin]
//          })
// )

registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200]
            }),
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 дней
            })
        ]
    })
)