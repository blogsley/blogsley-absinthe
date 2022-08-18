import { Rich } from './Rich'
import { Editor } from '@tiptap/vue-3'

import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

export class List extends Rich {
  constructor (options={}) {
    super(options)
    if (options.value) {
      this.html = '<ul>'
      options.value.forEach((item) => {
        this.html += '<li>' + item + '</li>'
      })
      this.html += '</ul>'
    }
    this.editor = new Editor({
      content: this.html,
      extensions: [
        StarterKit,
        Underline
      ]
    })
    this.content = this.editor.getJSON()
  }
}
List.type = 'List'