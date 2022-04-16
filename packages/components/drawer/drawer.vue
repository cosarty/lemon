<template>
  <div :class="bem()">fdsgds</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { createName, createBEM } from '../utils'
import './drawer.scss'
export default defineComponent({
  name: createName('Drawer'),
  setup() {
    const bem = createBEM('Drawer')
    return { bem }
  }
})
</script>