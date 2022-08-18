<template>
  <viewer-shell :vu="this">
    <div v-if="this.block.value" v-html="`<h1>${this.block.value}</h1>`"></div>
    <div v-else style="opacity:.55"><h1>Your title here ...</h1></div>
  </viewer-shell>
</template>

<script>
import ViewerShell from '../../../components/ViewerShell.vue'
import BlockViewer from '../../../components/BlockViewer.vue'

export default {
  name: 'TitleBlockViewer',
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

<style lang="scss" scoped>
h1 {
  font-size: 2em;
}
</style>
