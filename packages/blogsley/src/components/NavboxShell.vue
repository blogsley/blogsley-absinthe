<template>
  <div class="drawer-shell">
        <!-- {{ view.title }} -->
        <slot></slot>
  </div>
</template>

<script>
import UiMixin from '@mixins/ui'

export default {
  name: 'NavboxShell.vue',
  mixins: [
    UiMixin
  ],
  props: {
    showShortcuts: {
      type: Boolean,
      default: true
    }
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
  height: 100% !important;
}

</style>
