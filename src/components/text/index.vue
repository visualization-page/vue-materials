<template>
  <p>{{ config.text }}</p>
</template>

<script>
export default {
  name: 'ytext',

  props: {
    config: Object
  }
}
</script>
