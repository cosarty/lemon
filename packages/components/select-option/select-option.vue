<template>
  <div><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createName } from '../../utils'
export default defineComponent({
  name: createName('SelectOption'),
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>