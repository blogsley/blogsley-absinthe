<template>
  <q-page padding>
    <!-- <form @submit.prevent="handleSubmit">
        <q-input autocomplete="username" v-model="username" type="username" label="Username" />
        <q-input autocomplete="current-password" v-model="password" type="password" label="Password" />
        <q-btn flat color="primary" type="submit" label="Submit" />
    </form> -->

    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-card>
          <q-tabs
            v-model="loginRegisterTab"
            dense
            align="justify"
            narrow-indicator
          >
            <q-tab name="login" label="Login" />
            <q-tab name="register" label="Register" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="loginRegisterTab" animater>
            <q-tab-panel name="login">
              <q-form @submit.prevent="handleSubmit">
                  <q-input
                    autocomplete="username"
                    v-model="username"
                    type="username"
                    label="Username"
                    :error="badLogin"
                    @change="badLogin=false"
                  />
                  <q-input
                    autocomplete="current-password"
                    v-model="password"
                    type="password"
                    label="Password"
                    :error="badLogin"
                    error-message="Bad username OR password"
                    @change="badLogin=false"
                  />
                  <q-btn flat color="primary" type="submit" label="Submit" />
              </q-form>
            </q-tab-panel>
            <q-tab-panel name="register">
              <q-form @submit.prevent="handleRegister">
                  <q-input autocomplete="username" v-model="username" type="username" label="Username" />
                  <q-input autocomplete="email" v-model="email" type="email" label="Email" />
                  <q-input v-model="password1" type="password" label="Password" />
                  <q-input
                    ref="password2"
                    v-model="password2"
                    type="password"
                    label="Confirm Password"
                    lazy-rules="ondemand"
                    :rules="[val => (val == password1) || 'Passwords do not match']"
                  />
                  <q-btn flat color="primary" type="submit" label="Submit" />
              </q-form>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<style>
</style>

<script>
import gql from 'graphql-tag'

import { UiMixin, PageMixin, UserMixin } from '@mixins'

export default {
  name: 'LoginPage',
  mixins: [UiMixin, PageMixin, UserMixin],
  props: ['isLogout'],
  data () {
    return {
      title: 'Login',
      email: '',
      username: '',
      password: '',
      password1: '',
      password2: '',
      loginRegisterTab: 'login',
      badLogin: false
    }
  },
  mounted () {
    if (this.isLogout) {
      this.$store.dispatch('logout')
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push('/')
      }).catch((exc) => {
        console.log(exc)
        console.log('bad login')
      })
    },
    handleRegister () {
      this.$refs.password2.validate()
      if (this.$refs.password2.hasError) {
        return false
      }
      this.$apollo.mutate({
        mutation: gql`
          mutation ($data: UserInput!) {
            createUser(data: $data) {
              id
            }
          }`,
        variables: {
          data: {
            username: this.username,
            password: this.password1,
            email: this.email
          }
        }
      }).then((data) => {
        if (data.data) {
          this.$store.dispatch('login', {
            username: this.username,
            password: this.password1
          }).then(() => {
            this.$router.push('/')
          })
        }
      })
    }
  }
}
</script>
