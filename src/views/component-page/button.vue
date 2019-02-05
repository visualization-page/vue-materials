<template>
  <div style="padding: 10px">
    <btn text="默认按钮"/>
    <btn
      text="block 按钮"
      :sub-type="2"
      background-color="blue"
    />
    <btn
      text="大号按钮"
      size="large"
    />
    <br>
    <btn
      text="小号按钮"
      size="small"
    />
    <btn
      text="悬浮按钮"
      :sub-type="3"
      background-color="blue"
    />
  </div>
</template>

<script>
import btn from '@/components/button/index.vue'

export default {
  data () {
    return {

    }
  },

  components: {
    btn
  }
}
</script>

<style lang="stylus">
  .ybutton
    margin-top 10px
</style>
