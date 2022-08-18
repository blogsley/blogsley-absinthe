module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.js'
	],
	swSrc: 'sw.js',
	swDest: 'dist/sw.js',
  mode: 'production', // this inlines the module imports when using yarn build
	navigateFallback: '/index.html',
	skipWaiting: true,
	clientsClaim: true,
	runtimeCaching: [{
	  urlPattern: /storage/,
	  handler: 'CacheFirst',
	  options: {
		cacheName: 'storage-images'
	  }
	}],
      manifest: {
        name: 'Blogsley',
        short_name: 'Blogsley',
        description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#007d7e',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
};