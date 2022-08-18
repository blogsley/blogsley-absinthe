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
