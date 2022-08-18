<template>
  <q-layout view="lHr LpR lFr">

    <q-header :v-if="header" elevated reveal>
      <component :is="header" />
    </q-header>

    <nav-drawer />

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer :v-if="footer" reveal>
      <component :is="footer" />
    </q-footer>

    <tool-drawer />

  </q-layout>
</template>

<script>
import { UiMixin } from '@mixins'
import NavDrawer from '@components/NavDrawer.vue'
import ToolDrawer from '@components/ToolDrawer.vue'
export default {
  name: 'DefaultLayout',
  mixins: [UiMixin],
  components: {
    NavDrawer,
    ToolDrawer
  },
  mounted () {
    this.setNavDrawerOpen(this.$q.platform.is.desktop)
    this.setToolDrawerOpen(this.$q.platform.is.desktop)
  }

}
</script>

<style>
</style>
