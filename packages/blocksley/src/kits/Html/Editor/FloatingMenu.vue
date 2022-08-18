<template>
  <floating-menu :editor="editor" :tippy-options="{  maxWidth: 'none' }">
    <q-btn-group flat class="bubble-menu">
      <q-btn
        @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        <q-icon name="mdi-format-paragraph" />
      </q-btn>

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
    </q-btn-group>
  </floating-menu>

</template>

<script>
import { FloatingMenu } from '@tiptap/vue-3'
export default {
  name: 'HtmlFloatingMenu',
  mixins: [ ],
  props: ['vu', 'editor'],
  components: {
    FloatingMenu
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
