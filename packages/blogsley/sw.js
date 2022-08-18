import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'

console.log('REGISTERED!!!!!!!!!!!!!')

cleanupOutdatedCaches()

const manifest = self.__WB_MANIFEST

console.log(manifest)

if (manifest) {
    precacheAndRoute(manifest)
}

self.addEventListener('message', (event) => {
    console.log(event)
    if (event.data && event.data.type === 'SKIP_WAITING')
      self.skipWaiting()
})


self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
    //console.log('fetch')
    //console.log(event)

    const pattern = /.*\/storage\/.*/
    if (event.request.url.match(pattern)) {
        // console.log('match')
        event.respondWith(async function () {
        const cache = await caches.open('storage-images')
        const cachedResponse = await cache.match(event.request.url)
        // console.log(cachedResponse)
        return cachedResponse
        }())
    }
})
