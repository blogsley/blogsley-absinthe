// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

import { router } from "./router"
import { store } from "./store"

// main.js
/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // It's important to use type: 'modlue' here in dev.
    navigator.serviceWorker.register('/sw.js', { type: import.meta.env.DEV ? 'module' : 'classic' })
  })
}*/
import {Workbox} from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js', { type: import.meta.env.DEV ? 'module' : 'classic' });

  wb.register();
}

const app = createApp(App)

app.use(router)

app.use(store)

//TODO:  Blocksley does this for us.  Good or bad?
/*app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
})*/

import Blocksley from '@blocksley/blocksley'
app.use(Blocksley)

import Blogsley from './plugin'
app.use(Blogsley)

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')
