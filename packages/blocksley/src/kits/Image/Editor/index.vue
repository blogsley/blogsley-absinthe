<template>
  <editor-shell ref="shell" :vu="this">
    <template v-slot:title><span>Image</span></template>
    <template v-slot:menu><main-menu :vu="this"/></template>

    <img width="0px" :height="this.block.height" />
    <vue-draggable-resizable
      :draggable="false"
      @resizing="onResizing"
      :w="this.block.width"
      :h="this.block.height"
      :handles="['bm', 'mr', 'br']"
      class-name="resizer"
    >
      <img ref="image" :src="block.src" :width="this.block.width" :height="this.block.height" style="object-fit:cover;"/>
    </vue-draggable-resizable>

    <teleport to="#blocksley-toolbox">
      <toolbox :vu="this"/>
    </teleport>

  </editor-shell>

</template>

<script>
import { render } from '../../../renderers'

import BlockEditor from '../../../components/BlockEditor.vue'
import EditorShell from '../../../components/EditorShell.vue'
import MainMenu from './MainMenu.vue'
import Toolbox from './Toolbox.vue'

export default {
  name: 'ImageBlockEditor',
  extends: BlockEditor,
  props: ['frame', 'block'],
  components: {
    EditorShell,
    MainMenu,
    Toolbox
  },
  data () {
    return {
    }
  },
  mounted () {
    //this.setToolboxProps({vu: this, editor: this.editor})
    //this.setToolbox(Toolbox)
  },
  beforeDestroy () {
    this.block.html = render(this.block)
  },
  methods: {
    onResizing (left, top, width, height) {
      this.block.width = width
      this.block.height = height
    }
  }
}
</script>

<style lang="scss" scoped>
.resizer {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
