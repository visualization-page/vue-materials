<template>
  <div class="app-components">
  </div>
</template>

<script>
  const componentsData = require('../../../vue-ssr-template/src/components/config')
  import render from '../../../vue-ssr-template/src/views/render'
  import ybutton from '@/components/button/index'
  import ytext from '@/components/text/index'
  const components = {
    ybutton,
    ytext
  }

  export default {
    components: {
      render,
      ...components
    },

    data () {
      return {
        current: componentsData.data[0],
        list: componentsData.data,
        all: components
      }
    },

    methods: {
    }
  }
</script>

<style lang="stylus">
  .app-components
    height inherit
</style>
