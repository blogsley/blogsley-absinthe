<template>
  <q-toolbar class="footer-shell">

  <div  class="header-title">
    <slot name="icon" class="header-icon"/>
    <slot/>
  </div>
  <q-space />
  <!--
  <q-btn
    flat
    @click="navDrawerOpen = !navDrawerOpen"
    aria-label="Menu"
    class="header-menu"
  >
    <q-icon name="menu" />
  </q-btn>
-->
<tippy
    interactive
    placement="top-start"
    boundary="viewport"
    trigger="click"
    arrow>
  <q-btn flat icon="menu"/>
  <template v-slot:content>
    <component :is="navbox" />
  </template>
</tippy>

  </q-toolbar>
</template>

<script>
import UiMixin from '@mixins/ui'

export default {
  name: 'FooterShell',
  mixins: [UiMixin],
  props: {
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="scss">

.drawer-shell {
}

</style>
