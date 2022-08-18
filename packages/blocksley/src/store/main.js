import { shallowRef } from "@vue/reactivity"

const state = {
  theme: 'light',
  navDrawerOpen: false,
  toolDrawerOpen: false,
  view: null,
  vu: null,
  page: null,
  navbox: null,
  header: null,
  footer: null,
  editor: null,
  edited: null,
  image: null
}
  
  const getters = {
    theme: (state) => state.theme,
    navDrawerOpen: (state) => state.navDrawerOpen,
    toolDrawerOpen: (state) => state.toolDrawerOpen,
    view: (state) => state.view,
    vu: (state) => state.vu,
    page: (state) => state.page,
    navbox: (state) => state.navbox,
    header: (state) => state.header,
    footer: (state) => state.footer,
    $editor: (state) => state.editor,
    edited: (state) => state.edited,
    $image: (state) => state.image
  }
  
  const actions = {
    setTheme: ({ commit }, value) => {
      commit('theme', value)
    },
    setNavDrawerOpen: ({ commit }, value) => {
      commit('navDrawerOpen', value)
    },
    toggleNavDrawer: ({ commit, state }) => {
      commit('navDrawerOpen', !state.navDrawerOpen)
    },
    setToolDrawerOpen: ({ commit }, value) => {
      commit('toolDrawerOpen', value)
    },
    toggleToolDrawer: ({ commit, state }) => {
      commit('toolDrawerOpen', !state.toolDrawerOpen)
    },
    setView: ({ commit }, data) => {
      commit('view', shallowRef(data))
    },
    setVu: ({ commit }, data) => {
      commit('vu', shallowRef(data))
    },
    setPage: ({ commit }, data) => {
      commit('page', data)
    },
    setNavbox: (context, navbox) => {
      context.commit('navbox', shallowRef(navbox))
    },
    setHeader: (context, header) => {
      context.commit('header', shallowRef(header))
    },
    setFooter: (context, footer) => {
      context.commit('footer', shallowRef(footer))
    },
    setEditor: (context, editor) => {
      context.commit('editor', editor)
    },
    setEdited: (context, edited) => {
      context.commit('edited', edited)
    },
    setImage: (context, image) => {
      context.commit('image', image)
    }
  }
  
  const mutations = {
    theme: (state, data) => {
      state.theme = data
    },
    navDrawerOpen: (state, data) => {
      state.navDrawerOpen = data
    },
    toolDrawerOpen: (state, data) => {
      state.toolDrawerOpen = data
    },
    view: (state, data) => {
      state.view = data
    },
    vu: (state, data) => {
      state.view = data
    },
    page: (state, data) => {
      state.page = data
    },
    navbox: (state, navbox) => {
      if (state.navbox === navbox) {
        return
      }
      state.navbox = navbox
    },
    header: (state, header) => {
      state.header = header
    },
    footer: (state, footer) => {
      if (state.footer === footer) {
        return
      }
      state.footer = footer
    },
    editor: (state, editor) => {
      state.editor = editor
    },
    edited: (state, edited) => {
      state.edited = edited
    },
    image: (state, image) => {
      state.image = image
    }
  }
  export default {
    // namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
  