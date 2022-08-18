import { Rich } from './Rich'
import { Editor } from '@tiptap/vue-3'

import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

export class Heading extends Rich {
  constructor (options={}) {
    super(options)
    if (this.value) {
      this.html = '<h2>' + this.value + '</h2>'
    } else {
      this.html = '<h2></h2>'
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
Heading.type = 'Heading'