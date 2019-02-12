<template>
  <div>
    <ytext
      text="Flex 布局语法教程"
      :sub-type="2"
      sub-text="如果所有项目的flex-grow属性都为1"
      text-align="center"
    />
    <ytext
      text="如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。"
      pre-img="http://g.hiphotos.baidu.com/image/h%3D300/sign=ecd44d0923738bd4db21b431918a876c/f7246b600c338744dd981da85c0fd9f9d62aa080.jpg"
      :pre-width="150"
    />
    <ytext
      pre-img="http://g.hiphotos.baidu.com/image/h%3D300/sign=ecd44d0923738bd4db21b431918a876c/f7246b600c338744dd981da85c0fd9f9d62aa080.jpg"
    />
    <ytext
      text="flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。"
    />
    <ytext
      text="flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。"
    />
  </div>
</template>

<script>
import ytext from '@/components/text/index.vue'

export default {
  data () {
    return {

    }
  },

  components: {
    ytext
  }
}
</script>

<style lang="stylus">
</style>
