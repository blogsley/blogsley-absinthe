import boot from './boot'

import { directive as ClickAway } from 'vue3-click-away'
import { VueDraggableNext } from 'vue-draggable-next'

import {
  Quasar,
  Ripple,
  ClosePopup,
  TouchHold,
  Notify,
} from 'quasar'

import { Blocksley } from './components'
import './css/blocksley.scss'
/*
export default {
  install: (app, options) => {
    // Plugin code goes here
  }
}
*/
export default { 
  install: async (app, options) => {

  console.log('blocksley booting ...')
  console.log(Blocksley)
  console.log(options)

  app.mixin({
    mounted() {
      this.$el.__vue__ = this
    }
  })

  await boot(app, options)
  
  app.config.globalProperties.$blocksley = { page: null }
  app.component('blocksley', Blocksley)
  
  app.directive('click-away', ClickAway)
  app.component('draggable', VueDraggableNext)
  
  app.use(Quasar, {
    config: {
    },
   directives: [
      Ripple,
      ClosePopup,
      TouchHold
    ],
    plugins: {
      Notify
    }
  })
}
}