<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    navDrawerOpen: {
      get: function () {
        return this.$store.getters.navDrawerOpen
      },
      set: function (val) {
        this.$store.commit('navDrawerOpen', val)
      }
    },
    toolDrawerOpen: {
      get: function () {
        return this.$store.getters.toolDrawerOpen
      },
      set: function (val) {
        this.$store.commit('toolDrawerOpen', val)
      }
    },
    ...mapGetters([
      'view',
      'page',
      'navbox',
      'header',
      'footer',
      'edited'
    ])
  },
  beforeDestroy () {
  },
  methods: {
    ...mapActions([
      'setView',
      'setPage',
      'toggleNavDrawer',
      'setNavDrawerOpen',
      'toggleToolDrawer',
      'setToolDrawerOpen',
      'setNavbox',
      'setHeader',
      'setFooter',
      'setEditor',
      'setEdited',
      'setImage'
    ])
  }
}
</script>
