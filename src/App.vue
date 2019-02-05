<template>
  <div id="app">
    <div class="app-left">
      <div
        v-for="item in list"
        :key="item.name"
        class="app-left__item"
        @click="$router.push(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="app-right">
      <router-view/>
    </div>
  </div>
</template>

<script>
import nav from './views/component-page/nav'

export default {
  data () {
    return {
      list: nav
    }
  }
}
</script>

<style lang="stylus">
html, body, #app
  height 100%
body
  margin: 0
  padding 0
.app-left
  float: left
  width 200px
  height inherit
  border-right 1px #eee solid
  &__item
    padding-left 15px
    line-height 40px
    border-bottom 1px #eee solid
    cursor pointer
.app-right
  margin-left 200px
</style>
