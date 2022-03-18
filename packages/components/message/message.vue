<template>
  <div>消息组件</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { messageProps } from './message'

export default defineComponent({
  props: messageProps,
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>