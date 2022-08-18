<template>
  <q-drawer
    v-model="navDrawerOpen"
    class="drawer"
    side="left"
  >
      <div class="button-column" style="float: left">
      <q-btn to="/" :exact="true" flat icon="home" />
      <q-btn to="/users" flat icon="mdi-account-multiple" />
      <q-btn to="/pages" flat icon="mdi-book-open-page-variant"/>
      <q-btn to="/images" flat icon="mdi-folder-image"/>
      <q-btn to="/logout" flat icon="power_settings_new"/>
    </div>
    <div class="navbox">
      <component :is="navbox" />
    </div>

  </q-drawer>
</template>

<script>
import UiMixin from '@mixins/ui'
export default {
  name: 'NavDrawer',
  mixins: [UiMixin],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  beforeMount () {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .navbox {
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
    background-color: #222222;
    font-size: .8125rem;
    font-weight: 600;
  }
</style>
