<script>
import BlockEditor from './BlockEditor.vue'

export default {
  extends: BlockEditor,
  computed: {
    editor () { return this.block.editor }
  },
  mounted () {
  },
  unmounted () {
    this.block.html = this.editor.getHTML()
    this.block.content = this.editor.getJSON()
  }
}
</script>
