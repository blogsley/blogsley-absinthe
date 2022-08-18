<template>
  <div ref="shell"
    tabindex="-1"
    class="editor-shell"
    @keyup="onKeyUp"
    @focus="onFocus"
    @blur="onBlur"
  >
    <div class="shell-header" :class="{'sticky-header': stickyHeader}">
    <!-- <div class="shell-header" :class="{'sticky-header': stickyHeader}"> -->
      <q-bar class="shell-bar" @click="barClick">
        <!--<shell-fab direction="right" icon="drag_indicator" >
          <q-btn fab-mini icon="keyboard_arrow_up"  @click="frame.move('up')"/>
          <q-btn  fab outlined class="grippy" icon="drag_indicator" />
          <q-btn  fab-mini icon="keyboard_arrow_down"  @click="frame.move('down')"/>
        </shell-fab>-->
        <q-btn flat icon="drag_indicator" class="grippy"/>
        <slot name="title"/>
        <q-space />
        <tippy 
            interactive
            :animate-fill="false" 
            theme="light"
            animation="fade"
            trigger="click"
            arrow>
          <template v-slot:default>
            <q-btn fab-mini flat icon="more_vert"/>
          </template>
          <template v-slot:content>
          <q-list>
            <q-item @click="frame.use('Viewer')" clickable>
              <q-item-section avatar>
                <q-icon name="visibility" />
              </q-item-section>
              <q-item-section>
                <q-item-label>View</q-item-label>
              </q-item-section>
            </q-item>
            <q-item @click="frame.use('Editor')" clickable>
              <q-item-section avatar>
                <q-icon name="edit" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Edit</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator/>
            <q-item @click="frame.remove()" clickable>
              <q-item-section avatar>
                <q-icon name="delete" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Delete</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          </template>
        </tippy>

      </q-bar>

      <q-toolbar v-if="this.$slots.menu" ref="toolbar" v-show="toolbarVisible" class="shell-toolbar">
        <slot v-if="!this.menu.isActive" name="menu"/>
        <slot v-else name="aux"/>
      </q-toolbar>
    </div>
    <div
      class="shell-inner"
      v-bind:class="{ 'child-shell': !isRoot }"
      @contextmenu="contentContext"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
import ShellFab from './ShellFab.vue'
import AddBlockBtn from './AddBlockBtn.vue'
export default {
  name: 'EditorShell',
  props: {
    vu: null,
    editor: null
  },
  inject: ['state'],
  components: {
    ShellFab,
    AddBlockBtn
  },
  data () {
    return {
      frame: { grippy: false },
      block: {},
      view: null,
      parent: null,
      $_activeChild: null,
      // toolbarVisible: this.$q.platform.is.desktop,
      toolbarVisible: true,
      menu: {
        isActive: false,
        visible: false,
        left: 0,
        bottom: 0
      },
      delay: 250,
      barClicks: 0,
      contentClicks: 0,
      // stickyHeader: this.$q.platform.is.desktop
      stickyHeader: true
    }
  },
  computed: {
    isRoot () {
      return this.parent === null
    },
    activeChild: {
      get () {
        return this.$_activeChild
      },
      set (child) {
        // console.log('set active child')
        // console.log(child)
        // console.trace()
        if (this.$_activeChild && this.$_activeChild !== child) {
          this.$_activeChild.close()
        }
        this.$_activeChild = child
        if (!this.$_activeChild) {
          this.showToolbar()
        }
      }
    },
    grippy: {
      get () {
        return this.frame.grippy
      },
      set (val) {
        this.frame.grippy = val
      }
    }
  },
  mounted () {
    this.frame = this.vu.frame
    this.block = this.vu.block
    // console.log(this.block)
    this.onOpen()
  },
  beforeDestroy () {
    this.onClose()
  },
  methods: {
    insertBlock (block) {
      console.log('insertBlock: ', block.title)
      this.success = true
      this.frame.$emit('action', { type: 'new', kind: block.name, block: this.block })
    },
    onAction (action) {
      this.$emit('action', action)
    },
    onOpen () {
      // console.log('shell opened')
      //
      const closest = this.$el.parentElement.closest('.editor-shell')
      this.parent = closest ? closest.__vue__ : null

      if (this.parent) {
        // console.log('parent shell')
        // console.log(this.parent)
        this.parent.hideToolbar()
        this.parent.activeChild = this
      }
      this.$refs.shell.focus()
    },
    close () {
      console.log('close shell')
      this.frame.use('Viewer')
    },
    onClose () {
      console.log('shell closed')
      // this.$refs.shell.blur()
    },
    onKeyUp (evt) {
      // console.log('keyup')
      // console.log(e)
      // TODO: This needs more work
      if (evt.key === 'Escape' && this.parent) {
        // this.close()
        this.frame.use('Editor')
      }
    },
    onFocus (evt) {
      if (evt.defaultPrevented) {
        return
      }
      evt.preventDefault()
      // console.log('shell focus')
      // console.log(evt)
      this.activeChild = null
      this.showToolbar()
    },
    onBlur (evt) {
      if (evt.defaultPrevented) {
        return
      }
      evt.preventDefault()
      // console.log('shell blur')
      // console.log(evt)
    },
    onEditorFocus (args) {
      // console.log('editor focus')
      // console.log(args)
      this.onFocus(args.event)
    },
    onEditorBlur (args) {
      // console.log('editor blur')
      // console.log(args)
    },
    hideMenu (e) {
      // console.log('hide menu')
      // e.preventDefault()
      this.toggleMenu()
    },
    toggleMenu (e) {
      this.menu.visible = !this.menu.visible
      if (this.menu.visible) {
        this.$refs.menu.show(e)
      } else {
        this.$refs.menu.hide(e)
      }
    },
    showToolbar () {
      this.toolbarVisible = true
    },
    hideToolbar () {
      this.toolbarVisible = false
    },
    toggleToolbar (e) {
      this.toolbarVisible = !this.toolbarVisible
    },
    toggleGrippy () {
      this.grippy = !this.grippy
    },
    toggleStickyHeader () {
      this.stickyHeader = !this.stickyHeader
    },
    barClick (e) {
      // console.log('detect bar click')
      this.barClicks++
      if (this.barClicks === 1) {
        setTimeout(() => {
          switch (this.barClicks) {
            case 1:
              // console.log('single click')
              break
            default:
              // console.log('double click')
              this.toggleToolbar()
          }
          this.barClicks = 0
        }, this.delay)
      }
    },
    contentClick (e) {
      // console.log('content click')
      // console.log(e)
      e.preventDefault()
      this.contentClicks++
      if (this.contentClicks === 1) {
        setTimeout(() => {
          switch (this.contentClicks) {
            case 1:
              console.log('single click')
              // this.toggleMenu()
              break
            default:
              console.log('double click')
              // this.toggleMenu()
          }
          this.contentClicks = 0
        }, this.delay)
      }
    },
    contentContext (e) {
      // console.log('context click')
      // console.log(e)
      if (e.defaultPrevented) {
        return
      }
      if (!this.$q.platform.is.desktop) {
        // this.hideKeyboard()
        e.preventDefault()
      }
      // this.toggleMenu(e)
    },
    hideKeyboard () {
      if (
        document.activeElement &&
        document.activeElement.blur &&
        typeof document.activeElement.blur === 'function'
      ) {
        document.activeElement.blur()
      }
    }
  }
}
</script>

<style lang="scss">
</style>
