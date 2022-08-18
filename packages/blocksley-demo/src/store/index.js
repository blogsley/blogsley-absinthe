import { createStore } from 'vuex'

//import main from './main'
import main from '@blocksley/blocksley/src/store/main'

// Create a new store instance.
export const store = createStore({
  modules: {
    main,
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