<template>
  <editor-shell :vu="this" :editor="editor">
    <template v-slot:title><span>Paragraph</span></template>
    <template v-slot:menu><main-menu :vu="this" :editor="editor"/></template>
    <template v-slot:aux-menu><aux-menu :editor="editor" /></template>
    <template v-slot:default><editor-content class="editor__content" :editor="editor"/></template>
  </editor-shell>
</template>

<script>
import MainMenu from './MainMenu.vue'
import AuxMenu from './AuxMenu.vue'
import { EditorContent } from '@tiptap/vue-3'

import RichEditor from '../../../components/RichEditor.vue'
import EditorShell from '../../../components/EditorShell.vue'

export default {
  name: 'ParagraphEditor',
  extends: RichEditor,
  props: ['frame', 'block'],
  components: {
    EditorShell,
    EditorContent,
    MainMenu,
    AuxMenu
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
