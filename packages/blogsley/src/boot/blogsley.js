import { store } from '../store'
import iam from '../iam'
import HeaderShell from '../components/HeaderShell.vue'
import FooterShell from '../components/FooterShell.vue'

export default async (app, options) => {
  // Vue.prototype.$iam = new IAM(store)
  app.use(iam, { store })
  app.component('header-shell', HeaderShell)
  app.component('footer-shell', FooterShell)
}
