<template>
  <div class="ytext">
    <div
      class="ytext__title"
      v-if="subType === 2"
      :style="{
        textAlign
      }"
    >
      <div
        class="ytext__title--main"
        :class="{
          'ytext__bold': isBold
        }"
        :style="{
          fontSize: `${fontSize}px`
        }"
      >
        {{ text }}
      </div>
      <div
        v-if="subText"
        class="ytext__title--sub"
      >
        {{ subText }}
      </div>
    </div>
    <template v-else>
      <div class="ytext__pre-img" v-if="preImg">
        <img :src="preImg" alt="" :style="{ width: `${preWidth}px`, height: `${preHeight}px` }">
      </div>
      <div
        class="ytext__content"
        :class="{
          'ytext__content--indent': textAlign === 'left',
          'ytext__bold': isBold
        }"
        :style="{
          textAlign,
          color,
          fontSize: `${fontSize}px`
        }"
        v-html="escapeText"
      />
      <div class="ytext__aft-img" v-if="aftImg && false">
        <img :src="aftImg" alt="" :style="{ width: `${aftWidth}px`, height: `${aftHeight}px` }">
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'ytext',

    props: {
      subType: {
        type: Number,
        default: 1  // 1 图片+段落，2 标题
      },
      text: {
        type: String,
        default: ''
      },
      // isTextIndent: Boolean,
      textAlign: {
        type: String,
        default: 'left'
      },
      color: {
        type: String,
        default: '#333'
      },
      fontSize: {
        type: Number,
        default: 14
      },
      isBold: [Boolean, Number],
      preImg: String,
      preWidth: Number,
      preHeight: Number,
      aftImg: String,
      aftWidth: Number,
      aftHeight: Number,
      subText: String
    },

    computed: {
      escapeText () {
        return this.text
          .replace(/<([a-z\/]+)/g, '&lt;$1')
          .replace(/([a-z]+)>/g, '$1&gt;')
          .replace(/\n/g, '<br>')
      }
    }
  }
</script>

<style lang="stylus">
  .ytext
    margin-bottom 1.2em
    &__bold
      font-weight bold
    &__pre-img,
    &__aft-img
      font-size 0
      text-align center
      img
        max-width 100%
    &__content
      padding 0 10px
      margin-top 10px
      &--indent
        text-indent 2em
    &__title
      padding 10px
      &--main
        font-size 18px
      &--sub
        font-size 12px
        color #999
</style>
