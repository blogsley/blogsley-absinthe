// FILE: vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

import { ViteAliases } from 'vite-aliases'

/*import replace from '@rollup/plugin-replace'
import { injectManifest } from 'rollup-plugin-workbox'
//import { generateSW } from 'rollup-plugin-workbox'

import  workboxConfig from './workbox-config'*/
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  envDir: 'src/config',
  build: {       
     outDir: 'dist',
  },
  publicDir: 'public',
  //css: { preprocessorOptions: { scss: { charset: false } } },
  //assetsInclude: ['/src/assets/*.svg'],

  plugins: [
    ViteAliases(),
    //injectManifest(workboxConfig),
    /*injectManifest({
      swSrc: 'sw.js',
      swDest: 'dist/sw.js',
      globDirectory: 'dist',
      mode: 'production', // this inlines the module imports when using yarn build
    }),
    replace({
      'is_vite_preview': true, // this is used to conditionally call Workbox's precacheAndRoute function
    }),*/
    VitePWA({
      mode: "development",
      base: "/",
      //srcDir: "src/pwa",
      srcDir: "./",
      filename: "sw.js",
      includeAssets: ["/favicon.png"],
      strategies: "injectManifest",

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
            src: 'public/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'public/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'public/icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'public/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'public/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),

    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/css/quasar-variables.scss'
    })
  ]
})
