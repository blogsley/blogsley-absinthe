<template>
  <q-page padding>
    <Form :image="this.image" />
  </q-page>
</template>

<script>
import gql from 'graphql-tag'
const directives = import.meta.env.VITE_STANDALONE ? '@client' : ''

import { UiMixin, PageMixin } from '@mixins'
import Navbox from './Navbox.vue'
import Header from './Header.vue'
import Form from '../Form.vue'

export default {
  mixins: [UiMixin, PageMixin],
  props: ['id'],
  components: {
    Form
  },
  apollo: {
    image: {
      query: gql`
        query imageQuery($id: ID!) {
          image(id: $id) ${directives} {
            id
            title
            filename
            src
          }
        }`,
      fetchPolicy: 'network-only',
      variables () {
        return {
          id: this.imageId
        }
      }
    }
  },
  data () {
    return {
      title: 'Image',
      imageId: this.$route.params.id
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    save () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!, $data: ImageInput!) {
            updateImage(id: $id, data: $data) ${directives} {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.imageId,
          data: this.image
        }
      })
      this.$q.notify('Image Saved')
    },
    destroy () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!) {
            deleteImage(id: $id) ${directives} {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.id
        }
      }).then((data) => {
        this.$q.notify('Image Deleted')
        this.$router.go(-1)
      })
    },
    onSwitch () {
      this.setNavbox(Navbox)
      this.setHeader(Header)
    }
  }
}
</script>
