<template>
  <div :class="bem('item')">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { createName, createBEM } from '../utils'
import './select-option.scss'
export default defineComponent({
  name: createName('SelectOption'),

  setup(props) {
    const bem = createBEM('select-option')
    return { bem }
  }
})
</script>

<style scoped>
</style>