<template>
  <q-page padding>
    <blocksley :state="state"/>
  </q-page>
</template>

<script>
import { shallowRef } from 'vue'

import { Blocksley, BlocksleyState } from '@blocksley/blocksley'
import { Title, List, Image, Paragraph, Heading, Quote, Html, Page } from '@blocksley/blocksley/src/blocks'

import { UiMixin, PageMixin } from '@blocksley/blocksley/src/mixins'
import BlockChooser from '@blocksley/blocksley/src/components/BlockChooser/index.vue'
import ImageChooser from '@blocksley/blocksley/src/components/ImageChooser/index.vue'

export default {
  name: 'PageIndex',
  mixins: [UiMixin, PageMixin],
  components: {
    Blocksley,
  },
  data () {
    return {
      title: 'New Page',
      post: {
        title: 'My Post',
        block: '{}',
        body: 'Blogsley rocks!!!'
      },
      state: new BlocksleyState({
        blockChooser: shallowRef(BlockChooser),
        imageChooser: shallowRef(ImageChooser),
        block: new Page({
          children: [
            new Title(),
            new Paragraph({ value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }),
            new Quote({ value: 'Four score and seven years ago ...'}),
            new Image({ src: '/images/journal-on-desk.jpg', title: 'Journal on Desk' }),
            new Heading({ value: 'Heading' }),
            new Paragraph({ value: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }),
            new Html({ html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' }),
            new List({ value: ['Get Milk', 'Get Bread', 'Get Butter'] })
          ]
        })
      })
    }
  },
  created () {
    console.log('demo created')
    console.log(this.$blocksley)
    console.log(this.$page)
    if (!this.$page) {
      this.$page = this.state
    } else {
      this.state = this.$page
    }
    console.log(this.$page)
  }
}
</script>
