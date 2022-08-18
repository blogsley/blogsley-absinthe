<template>
  <div>
  <editor-shell :vu="this">
    <template v-slot:title><span>Title</span></template>
    <q-input
      v-model="block.value"
      :autofocus="true"
      borderless
      placeholder="Your title here ..."
      input-class="title"/>
  </editor-shell>
  </div>
</template>

<script>
import BlockEditor from '../../../components/BlockEditor.vue'
import EditorShell from '../../../components/EditorShell.vue'

export default {
  name: 'TitleBlockEditor',
  extends: BlockEditor,
  props: ['frame', 'block'],
  components: {
    EditorShell
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  beforeDestroy () {
    this.block.html = `<h1>${this.block.value}</h1>`
  },
  methods: {
  }
}
</script>

<style lang="scss">
.title {
  font-size: 2em;
}
</style>
