<template>
  <editor-menu-bar :editor="editor">

    <q-btn-group class="menu-btn-group">

      <q-btn
        @click="editor.chain().focus().undo().run()"
      >
      <q-icon name="mdi-undo" />
      </q-btn>

      <q-btn
        @click="editor.chain().focus().redo().run()"
      >
        <q-icon name="mdi-redo" />
      </q-btn>

      <q-btn @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        <q-icon name="mdi-format-list-bulleted" />
      </q-btn>
      <q-btn @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
        <q-icon name="mdi-format-list-numbered" />
      </q-btn>

    </q-btn-group>

  </editor-menu-bar>
</template>

<script>
import EditorMenuBar from '../../../components/EditorMenuBar.vue'
export default {
  name: 'BasicToolbar',
  mixins: [ ],
  props: ['vu', 'editor'],
  components: {
    EditorMenuBar
  },
  methods: {
  }
}
</script>
