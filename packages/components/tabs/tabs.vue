<template>
  <div :class="bem()">你好<slot></slot></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { createName, createBEM } from '../utils'
import { tabsProps } from './tabs'
import './tabs.scss'
export default defineComponent({
  name: createName('Tabs'),
  props: tabsProps,
  setup() {
    const bem = createBEM('Tabs')
    return { bem }
  }
})
</script>