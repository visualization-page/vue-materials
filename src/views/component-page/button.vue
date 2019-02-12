<template>
  <div style="padding: 10px">
    <btn text="默认按钮"/>
    <btn
      text="block 按钮"
      :category="2"
      background-color="blue"
    />
    <btn
      text="大号按钮"
      size="large"
      background-image="http://g.hiphotos.baidu.com/image/h%3D300/sign=ecd44d0923738bd4db21b431918a876c/f7246b600c338744dd981da85c0fd9f9d62aa080.jpg"
      color="#fff"
    />
    <br>
    <btn
      text="小号按钮"
      size="small"
      border-color="red"
      color="red"
    />
    <btn
      text="悬浮按钮"
      :category="3"
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
