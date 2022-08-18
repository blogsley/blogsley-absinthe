import { Rich } from './Rich'
import { Editor } from '@tiptap/vue-3'

import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'

//import { Image } from '../nodes'

export class Html extends Rich {
  constructor (options) {
    super(options)
    this.html = this.value
    this.editor = new Editor({
      content: this.html,
      extensions: [
        StarterKit,
        Underline,
        //new Image(),
        Image,
        Link,
      ]
    })
    this.content = this.editor.getJSON()
  }
}
Html.type = 'Html'