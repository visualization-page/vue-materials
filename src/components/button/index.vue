<template>
  <div
    class="ybutton"
    :class="{
      'ybutton-type__inline': subType === 1,
      'ybutton-type__block': subType === 2,
      'ybutton-type__fixed': subType === 3,
      'ybutton-type__fixed--bottom': subType === 3 && fixedPosition === 'bottom',
      'ybutton-type__fixed--top': subType === 3 && fixedPosition === 'top'
    }"
    :style="{
      margin: (subType === 1 || subType === 2) && `${marginTb || 0}px ${marginLr || 10}px`
    }"
    @click="handleClick"
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
        color,
        borderColor: yBorderColor,
        backgroundImage: backgroundImage && `url(${backgroundImage})`
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
      marginTb: Number,
      marginLr: Number,
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
      },
      backgroundImage: String,
      click: String
    },

    computed: {
      // isTsBg () {
      //   return (/ffffff|white|255, ?255, ?255/.test(this.backgroundColor) || !this.backgroundColor) && !this.backgroundImage
      // },
      // yColor () {
      //   return this.isTsBg ? null : this.color || '#ffffff'
      // },
      yBorderColor () {
       return this.borderColor || this.backgroundColor || '#eeeeee'
      }
    },

    methods: {
      handleClick () {
        const click = this.click.split('_')
        // type: link; tel
        const isTel = click[0] === 'tel'
        const isInnerPage = click[0] === 'inner'
        let val = click[1]
        if (click.length > 2) {
          val = click.slice(1, click.length).join('_')
        }
        if (isInnerPage) {
          this.$router.push(val)
        } else if (isTel) {
          location.href = `tel://${val}`
        } else if (/^http/.test(val)) {
          window.open(val)
        } else {
          alert('链接应该以http或者https开头')
        }
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
      background-repeat no-repeat
      background-size 100% 100%
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
          box-shadow 0 -2px 6px rgba(0, 0, 0, .3)
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
