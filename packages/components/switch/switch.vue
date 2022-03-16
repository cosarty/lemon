<template>
  <label :class="['le-switch', `le-switch__${size}`]">
    <input type="checkbox" />
    <span></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createName } from '../../utils'
import { switchProps } from './switch'
import './switch.scss'
export default defineComponent({
  name: createName('Switch'),
  props: switchProps,
  emits: ['update:modelValue', 'change'],
  setup() {
    return {}
  },
})
</script>
