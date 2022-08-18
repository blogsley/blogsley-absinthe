<template>
  <q-drawer
    v-model="toolDrawerOpen"
    class="drawer"
    side="right"
  >
    <div class="button-column" style="float: right; height: 100%">
      <q-btn to="/" :exact="true" flat icon="home"/>
      <q-btn to="/users" flat icon="mdi-account-multiple"/>
      <q-btn to="/pages" flat icon="mdi-book-open-page-variant"/>
      <q-btn to="/images" flat icon="mdi-folder-image"/>
    </div>

    <div id="blocksley-toolbox" class="toolbox"></div>

  </q-drawer>
</template>

<script>
import UiMixin from '@mixins/ui'
export default {
  name: 'ToolDrawer',
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
  .toolbox {
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
    background-color: #222222;
    font-size: .8125rem;
    font-weight: 600;
    }
</style>
