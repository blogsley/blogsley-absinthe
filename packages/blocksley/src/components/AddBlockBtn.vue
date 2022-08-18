<template>
<tippy 
    interactive
    :animate-fill="false" 
    animation="fade"
    trigger="click"
    arrow>

  <q-btn fab-mini icon="add"/>
  <template v-slot:content>
    <component :is="state.blockChooser" :select="select" />
  </template>

</tippy>
</template>

<script>
export default {
  mixins: [],
  props: {
    select: null
  },
  inject: ['state'],
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>
