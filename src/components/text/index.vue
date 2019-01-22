<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: 'ytext',

  props: {
    text: {
      type: String,
      default: '文本'
    }
  }
}
</script>
