<template>
  <editor-menu-bar :editor="this.editor">

    <q-btn-group class="menu-btn-group">

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

    </q-btn-group>

  </editor-menu-bar>
</template>

<script>
import EditorMenuBar from '../../../components/EditorMenuBar.vue'
export default {
  name: 'MainMenu',
  mixins: [ ],
  props: ['vu', 'editor'],
  components: {
    EditorMenuBar
  },
  methods: {
  }
}
</script>
