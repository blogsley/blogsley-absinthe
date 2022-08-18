<template>
  <q-layout view="lHr LpR lFr">
    <q-footer>
      <q-bar style="background-color:black; color:white">
        <q-btn
          flat
          dense
          round
          @click="navDrawerOpen = !navDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toggle
          v-model="light"
          checked-icon="brightness_5"
          unchecked-icon="dark_mode"
        />
        <q-space />
        <q-btn
          flat
          dense
          round
          @click="toolDrawerOpen = !toolDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

      </q-bar>
    </q-footer>

    <q-drawer
      v-model="navDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-toolbar class="app-toolbar">
        <q-toolbar-title>
        <q-icon name="mdi-cube-outline"/>
          Blocksley Demo
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          @click="navDrawerOpen = !navDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="cancel" />
        </q-btn>
      </q-toolbar>

      <q-list>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="edit" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Edit</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/json">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>JSON</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator/>
      <q-item>Quasar v{{ $q.version }}</q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <tool-drawer /> -->
    <q-drawer
      v-model="toolDrawerOpen"
      bordered
      content-class="bg-grey-2"
      side="right"
    >
      <q-toolbar class="app-toolbar">
        <q-toolbar-title>
        <q-icon name="build"/>
          Toolbox
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          @click="toolDrawerOpen = !toolDrawerOpen"
          aria-label="Toolbox"
        >
          <q-icon name="cancel" />
        </q-btn>
      </q-toolbar>

      <div id="blocksley-toolbox" />

    </q-drawer>


  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { UiMixin } from '@blocksley/blocksley/src/mixins'

export default {
  name: 'MyLayout',
  mixins: [UiMixin],
  components: {
  },
  data () {
    return {
      light: true
    }
  },
  mounted () {
    this.setNavDrawerOpen(this.$q.platform.is.desktop)
    this.setToolDrawerOpen(this.$q.platform.is.desktop)
  },
  watch: {
    light () {
      this.$q.dark.set(!this.light)
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
