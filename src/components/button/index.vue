<template>
  <div
    class="ybutton"
    :class="{
      'ybutton-type__inline': subType === 1,
      'ybutton-type__block': subType === 2,
      'ybutton-type__fixed': subType === 3,
      'ybutton-type__fixed--bottom': fixedPosition === 'bottom',
      'ybutton-type__fixed--top': fixedPosition === 'top'
    }"
    @click="$emit('on-click')"
  >
    <div
      class="ybutton__wrapper"
      :class="{
        'ybutton-size__large': size === 'large',
        'ybutton-size__middle': size === 'middle',
        'ybutton-size__small': size === 'small'
      }"
      :style="{
        backgroundColor,
        color: yColor,
        borderColor: yBorderColor
      }"
    >
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ybutton',

    props: {
      subType: {
        type: Number,
        default: 1  // 1 inline-block按钮，2 block按钮，3 固定按钮
      },
      size: {
        type: String,
        default: 'middle' // large middle small
      },
      text: String,
      backgroundColor: String,
      color: String,
      borderColor: String,
      fixedPosition: {
        type: String,
        default: 'bottom'
      }
    },

    computed: {
      isTsBg () {
        return /ffffff|white|255, ?255, ?255/.test(this.backgroundColor) || !this.backgroundColor
      },
      yColor () {
        return this.isTsBg ? null : '#ffffff'
      },
      yBorderColor () {
       return this.isTsBg ? '#eeeeee' : this.borderColor || this.backgroundColor
      }
    }
  }
</script>

<style lang="stylus">
  .ybutton
    font-size 14px
    cursor pointer
    color #666666
    &__wrapper
      height inherit
      transition background-color .3s
      border-width 1px
      border-style solid
      &:hover
        background-color rgba(0, 0, 0, .1)
    &-type
      &__inline
        display inline-block
      &__block
        text-align center
      &__fixed
        position fixed
        text-align center
        width 100%
        left 0
        &--bottom
          bottom 0
        &--top
          top 0
        &>div
          border-radius 0
    &-size
      &__large
        padding 10px 23px
        border-radius 4px
      &__middle
        padding 7px 13px
        border-radius 3px
      &__small
        font-size 12px
        padding 3px 10px
        border-radius 2px
</style>
