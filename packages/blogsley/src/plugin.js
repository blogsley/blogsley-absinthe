import boot from './boot'

import './css/app.scss'

export default { 
  install: async (app, options) => {

  console.log('blogsley booting ...')
  console.log(options)

  /*app.mixin({
    mounted() {
      this.$el.__vue__ = this
    }
  })*/

  await boot(app, options)
  }
}