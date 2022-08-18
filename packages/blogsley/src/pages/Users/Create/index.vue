<template>
  <q-page padding>
    <div class="fields">
      <q-input outlined autocomplete="username" v-model="user.username" label="Username" />
      <q-input outlined autocomplete="email" v-model="user.email" label="Email" />
      <q-input outlined autocomplete="firstname" v-model="user.firstName" label="First Name" />
      <q-input outlined autocomplete="lastname" v-model="user.lastName" label="Last Name" />
      <q-input outlined autocomplete="password" v-model="user.password" label="Password" />
    </div>
  </q-page>
</template>

<script>
import gql from 'graphql-tag'
const directives = import.meta.env.VITE_STANDALONE ? '@client' : ''

import { UiMixin, PageMixin } from '@mixins'
import Navbox from './Navbox.vue'
import Header from './Header.vue'

export default {
  mixins: [UiMixin, PageMixin],
  props: [],
  components: {
  },
  data () {
    return {
      title: 'Add User',
      user: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      }
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
          mutation ($data: UserInput!) {
            createUser (data: $data) ${directives} {
              id
            }
          }`,
        // Parameters
        variables: {
          data: Object.assign({}, this.user)
        }
      }).then((data) => {
        console.log(data)
        this.id = data.data.createUser.id
        this.$q.notify('User Created')
        this.$router.replace(`/users/${this.id}`)
        // this.$router.go(-1)
      })
    },
    onSwitch () {
      this.setView(this)
      this.setNavbox(Navbox)
      this.setHeader(Header)
    }
  }
}
</script>
