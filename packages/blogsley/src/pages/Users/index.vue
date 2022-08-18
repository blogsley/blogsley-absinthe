<template>
  <q-page>
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else style="width: 500px; max-width: 90vw;">
      <q-list class="menu-list">
        <q-item v-for="edge in allUsers.edges" :key="edge.id" :to="`/users/${edge.node.id}`">
          <q-item-section avatar>
            <q-icon name="mdi-account" inverted color="grey-6" />
          </q-item-section>
          <q-item-section>
            {{ edge.node.username }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { UiMixin, PageMixin } from '@mixins'
import Navbox from './Navbox.vue'
import Header from './Header.vue'

import gql from 'graphql-tag'
const directives = import.meta.env.VITE_STANDALONE ? '@client' : ''

const userQuery = gql`
query userQuery {
  allUsers(first: 100) ${directives} {
    edges {
      node {
        id
        firstName
        lastName
        username
      }
    }
  }
}
`
export default {
  name: 'Users',
  mixins: [UiMixin, PageMixin],

  data () {
    return {
      title: 'Users'
    }
  },
  apollo: {
    allUsers: {
      query: userQuery,
      prefetch: false,
      fetchPolicy: 'network-only'
    }
  },
  methods: {
    onSwitch () {
      this.setView(this)
      this.setNavbox(Navbox)
      this.setHeader(Header)
    }
  }
}
</script>
