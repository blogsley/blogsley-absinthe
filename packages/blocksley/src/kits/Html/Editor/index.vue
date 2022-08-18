<template>
  <div>
  <editor-shell :vu="this" :editor="editor">
    <template v-slot:title><span>HTML</span></template>
    <template v-slot:menu><main-menu :vu="this" :editor="editor"/></template>
    <template v-slot:aux-menu><aux-menu :editor="editor" /></template>
    <editor-content class="editor__content" :editor="editor" />
    <floating-menu :editor="editor" />

    <q-dialog v-model="showImgChooser">
      <component :is="state.imageChooser" :select="insertImage" />
    </q-dialog>
  </editor-shell>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue'
import FloatingMenu from './FloatingMenu.vue'
import AuxMenu from './AuxMenu.vue'
import ImageChooser from '../../../components/ImageChooser.vue'
import { EditorContent } from '@tiptap/vue-3'

import RichEditor from '../../../components/RichEditor.vue'
import EditorShell from '../../../components/EditorShell.vue'

export default {
  name: 'HtmlBlockEditor',
  extends: RichEditor,
  props: ['frame', 'block'],
  inject: ['state'],
  components: {
    EditorContent,
    EditorShell,
    MainMenu,
    FloatingMenu,
    AuxMenu,
    ImageChooser
  },
  data () {
    return {
      edit: false,
      showImgChooser: false
    }
  },
  mounted () {
    console.log('html editor mounted')
    console.log(this.editor)
  },
  methods: {
    showImagePrompt () {
      this.showImgChooser = true
    },
    insertImage () {
      //this.editor.commands.image()
      this.editor.chain().focus().image().run()
      //this.editor.chain().focus().setImage({ src: url }).run()
    }
  }
}
</script>

<style lang="scss">
</style>
