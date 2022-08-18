<template>
    <bubble-menu :editor="editor">

      <q-btn-group flat class="bubble-menu">

        <q-btn
          :class="{ 'is-active': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <q-icon name="mdi-format-bold" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <q-icon name="mdi-format-italic" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <q-icon name="mdi-format-strikethrough" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': editor.isActive('underline') }"
          @click="editor.chain().focus().toggleUnderline().run()"
        >
          <q-icon name="mdi-format-underline" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': editor.isActive('code') }"
          @click="editor.chain().focus().toggleCode().run()"
        >
          <q-icon name="mdi-code-tags" />
        </q-btn>

      </q-btn-group>

    </bubble-menu>

</template>

<script>
import { BubbleMenu } from '@tiptap/vue-3'

export default {
  name: 'AuxMenu',
  mixins: [ ],
  props: ['vu', 'editor'],
  components: {
    BubbleMenu
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
