<template>
  <div>
  <coder-shell :vu="this" :editor="editor">
    <template v-slot:title><span>HTML</span></template>
    <textarea ref="editor"></textarea>
  </coder-shell>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/htmlmixed/htmlmixed.js'

import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";

import MainMenu from './MainMenu.vue'
import AuxMenu from './AuxMenu.vue'

import CodeEditor from '../../../components/CodeEditor.vue'
import CoderShell from '../../../components/CoderShell.vue'

export default {
  extends: CodeEditor,
  name: 'HtmlBlockEditor',
  props: ['frame', 'block'],
  inject: ['state'],
  components: {
    CoderShell,
    MainMenu,
    AuxMenu
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    console.log('cm mounted')
    const editor = this.editor = CodeMirror.fromTextArea(this.$refs.editor, {
      mode: 'htmlmixed',
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      tabSize: 2
    })

    const html = prettier.format(this.block.html, {
      parser: "html",
      plugins: [parserHtml]
    })

    editor.setValue(html)
  },
  unmounted () {
    const value = this.editor.getValue()
    this.block.html = value
    this.block.editor.commands.setContent(value)
  },

  methods: {
  }
}
</script>

<style lang="scss">
</style>
