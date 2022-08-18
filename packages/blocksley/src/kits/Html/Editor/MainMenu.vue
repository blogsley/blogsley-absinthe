<template>
  <editor-menu-bar :editor="editor" class="menu-btn-group">
    <q-btn-group flat class="menu-btn-group">

      <q-btn
        @click="editor.chain().focus().undo().run()"
      >
      <q-icon name="mdi-undo" />
      </q-btn>

      <q-btn
        @click="editor.chain().focus().undo().run()"
      >
        <q-icon name="mdi-redo" />
      </q-btn>

      <q-btn
        @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        <q-icon name="mdi-format-paragraph" />
      </q-btn>

      <tippy
          interactive
          placement="top-start"
          boundary="viewport"
          trigger="mouseenter"
          arrow>
        <q-btn flat>H</q-btn>
        <template v-slot:content>
          <q-btn-group flat class="menu-btn-group">
            <q-btn
              @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
              :class="editor.isActive('heading', { level: 2 }) ? 'is-active' : ''"
            >
              h2
            </q-btn>
            <q-btn
              @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
              :class="editor.isActive('heading', { level: 3 }) ? 'is-active' : ''"
            >
              h3
            </q-btn>
            <q-btn
              @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
              :class="editor.isActive('heading', { level: 4 }) ? 'is-active' : ''"
            >
              h4
            </q-btn>
            <q-btn
              @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
              :class="editor.isActive('heading', { level: 5 }) ? 'is-active' : ''"
            >
              h5
            </q-btn>
            <q-btn
              @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
              :class="editor.isActive('heading', { level: 6 }) ? 'is-active' : ''"
            >
              h6
            </q-btn>
          </q-btn-group>
        </template>
      </tippy>


      <q-btn @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        <q-icon name="mdi-format-list-bulleted" />
      </q-btn>
      <q-btn @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
        <q-icon name="mdi-format-list-numbered" />
      </q-btn>
      <q-btn @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
        <q-icon name="mdi-code-not-equal-variant" />
      </q-btn>
      <q-btn @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
        <q-icon name="mdi-format-quote-close" />
      </q-btn>

      <q-btn @click="editor.chain().focus().setHorizontalRule().run()">
        <q-icon name="mdi-minus" />
      </q-btn>
      <q-btn @click="editor.chain().focus().setHardBreak().run()">
        <q-icon name="mdi-keyboard-return" />
      </q-btn>

      <!--<q-btn @click="insertImage">
        <q-icon name="mdi-image" />
      </q-btn>

      <add-block-btn :select="insertImage"/>-->



      <!--
      <q-btn flat
        @click="vu.editText"
      >
        <q-icon name="mdi-language-html5" />
      </q-btn>
      -->
      <!--
      <q-btn flat
        class="menubar__button"
        @click="hideKeyboard"
      >
        <q-icon name="keyboard" />
      </q-btn>
      -->
    </q-btn-group>
  </editor-menu-bar>
</template>

<script>
import EditorMenuBar from '../../../components/EditorMenuBar.vue'
import AddBlockBtn from '../../../components/AddBlockBtn.vue'

export default {
  name: 'BasicToolbar',
  mixins: [ ],
  props: {
    vu: null,
    editor: null,
    contentClass: {
      type: String,
      default: 'menubar'
    }
  },
  components: {
    EditorMenuBar,
    AddBlockBtn
  },
  mounted () {
    console.log('context menu')
    console.log(this)
  },
  methods: {
    insertImage () {
      this.vu.insertImage()
    }
  }
}
</script>
