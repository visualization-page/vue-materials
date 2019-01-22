<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: 'ybutton',

  props: {
    text: {
      type: String,
      default: '文本'
    }
  }
}
</script>
