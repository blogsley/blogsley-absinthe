import { Rich } from './Rich'
import { Editor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export class Paragraph extends Rich {
  constructor (options={}) {
    super(options)
    if (options.value) {
      this.html = '<p>' + this.value + '</p>'
    }
    this.editor = new Editor({
      content: this.html,
      extensions: [
        StarterKit,
      ]
    })
    this.content = this.editor.getJSON()
  }
}
Paragraph.type = 'Paragraph'
