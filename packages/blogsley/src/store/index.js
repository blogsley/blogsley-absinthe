import { createStore } from 'vuex'

//import main from './main'
import main from '@blocksley/blocksley/src/store/main'
import user from './user'
import net from './net'

// Create a new store instance.
export const store = createStore({
  modules: {
    main,
    user,
    net
  },
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
