<template>
<div>
  <footer-shell>
    <q-btn-group flat spread>
      <q-btn to="/" :exact="true" flat icon="home"/>
      <q-btn to="/users" flat icon="mdi-account-multiple"/>
      <q-btn to="/pages" flat icon="mdi-book-open-page-variant"/>
      <q-btn to="/images" flat icon="mdi-folder-image"/>
    </q-btn-group>
  </footer-shell>
  </div>
</template>

<script>
import UiMixin from '@mixins/ui'
export default {
  name: 'PageUpdateFooter',
  mixins: [
    UiMixin
  ],
  props: [],
  components: {
  },
  data () {
    return {
      seamless: false
    }
  },
  methods: {
  }
}
</script>
