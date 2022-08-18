<template>
  <div class="page-editor">
    <editor-shell :vu="this" class="page-editor">
      <draggable v-model="block.children"
        group="blocks"
        handle=".grippy"
        ghost-class="ghost"
        @start="onDragStart()"
        @end="onDragEnd()"
        item-key="id"
      >
        <frame v-for="child in block.children"
          :key="child.id"
          :block="child"
          @action="onAction"
          />
      </draggable>
    </editor-shell>
  </div>
</template>

<script>
import { List, Image, Paragraph, Heading, Html, Quote } from '../../../blocks'

import BlockEditor from '../../../components/BlockEditor.vue'
import Frame from '../../../components/Frame.vue'
import EditorShell from '../../../components/EditorShell.vue'

export default {
  name: 'PageEditor',
  extends: BlockEditor,
  props: ['frame', 'block'],
  inject: ['state'],
  components: {
    Frame,
    EditorShell
  },
  data () {
    return {
    }
  },
  created () {
    console.log('page editor created')
  },
  beforeDestroy () {
    console.log('page editor destroyed')
  },
  methods: {
    onDragStart () {
      console.log('drag start')
    },
    onDragEnd () {
      console.log('drag end')
    },
    onAction (action) {
      var block
      console.log(action)
      switch (action.type) {
        case 'add':
          block = new Add()
          this.block.insertAfter(action.block, block)
          break
        case 'remove':
          this.block.removeChild(action.block)
          break
        case 'move':
          this.block.moveChild(action.block, action.to)
          break
        case 'new':
          block = this.state.createBlock(action.kind)
          block.status = 'create'
          // this.block.replaceChild(action.block, block)
          this.block.insertAfter(action.block, block)
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.page-editor {
  // padding: 16px;
  // padding: 34px 16px 16px 16px;
  // padding: 16px 0px 0px 0px;
  // overflow: hidden;
}
</style>
