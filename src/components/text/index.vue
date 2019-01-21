<template>
  <p>{{ config.text }}</p>
</template>

<script>
export default {
  name: 'ytext',

  props: {
    config: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  }
}
</script>
