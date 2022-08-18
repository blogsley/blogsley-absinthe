import { Rich } from './Rich'
import { Editor } from '@tiptap/vue-3'

import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'

export class Quote extends Rich {
  constructor (options={}) {
    super(options)
    if (options.value) {
      this.html = '<blockquote>' + this.value + '</blockquote>'
    } else if (!this.html) {
      this.html = '<blockquote><p></p></blockquote>'
    }
    this.editor = new Editor({
      content: this.html,
      extensions: [
        StarterKit,
        Underline,
        Placeholder.configure({
          placeholder:
            'Write something … It’ll be shared with everyone else looking at this example.',
        }),
      ]
    })
    this.content = this.editor.getJSON()
  }
}
Quote.type = 'Quote'
