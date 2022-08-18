<template>
  <viewer-shell :vu="this">
    <div v-html="body" class="viewer__content"/>
  </viewer-shell>
</template>

<script>

import { BlocksleyState, serialize, render } from '@blocksley/blocksley'

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
      body: render(this.block)
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
