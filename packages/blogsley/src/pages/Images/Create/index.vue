<template>
  <q-page padding>
    <!-- <ImageUploader/> -->
    <component :is="uploader"/>
  </q-page>
</template>

<script>
import { shallowRef } from '@vue/reactivity'
import { UiMixin, PageMixin } from '@mixins'
import Navbox from './Navbox.vue'
import ImageUploader from '@components/ImageUploader/index.vue'
import StandAloneImageUploader from '@components/StandAloneImageUploader/index.vue'

export default {
  name: 'CreateImage',
  mixins: [UiMixin, PageMixin],
  props: [],
  components: {
    // ImageUploader
  },
  data () {
    return {
      title: 'Add Images',
      uploader: shallowRef(import.meta.env.VITE_STANDALONE ? StandAloneImageUploader : ImageUploader)
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    })
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  methods: {
    onSwitch () {
      this.setView(this)
      this.setNavbox(Navbox)
    }
  }
}
</script>
