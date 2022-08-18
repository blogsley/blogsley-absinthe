<template>
  <viewer-shell :vu="this">
    <div v-html="block.html" class="viewer__content"/>
  </viewer-shell>
</template>

<script>

import BlockViewer from '../../../components/BlockViewer.vue'
import ViewerShell from '../../../components/ViewerShell.vue'

export default {
  name: 'PageViewer',
  extends: BlockViewer,
  props: ['frame', 'block'],
  components: {
    ViewerShell
  },
  data () {
    return {
    }
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
</style>
