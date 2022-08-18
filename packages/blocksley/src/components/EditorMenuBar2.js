export default {

  props: {
    editor: {
      default: null,
      type: Object,
    }
  },

  data() {
    return {
      menu: {
        isActive: false,
        left: 0,
        bottom: 0,
      },
    }
  },

  render() {
    if (!this.editor) {
      return null
    }

    return this.$slots.default()
  },
  beforeRouteLeave (to, from, next) {
    //this.editor.unregisterPlugin('menu_tab')
  },
  beforeDestroy() {
    //this.editor.unregisterPlugin('menu_tab')
  },

}
