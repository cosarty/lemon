<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createName } from '../../utils'

export default defineComponent({
  name: createName('Select'),
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
div {
  color: var(--le-success-base);
}
</style>