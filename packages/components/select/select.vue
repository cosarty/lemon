<template>
  <div :class="bem('weapper')">
    <div :class="bem('input')">
      <input type="text" readonly />
    </div>
    <!-- <div :class="bem('multiple')"></div> -->
  </div>
  <div :class="bem('dropdown')">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { createName, createBEM } from '../utils'

import './select.scss'

export default defineComponent({
  name: createName('Select'),
  components: {
    // ClearIcon
  },
  props: {},
  emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    const bem = createBEM('Select')
    return { bem }
  }
})
</script>

