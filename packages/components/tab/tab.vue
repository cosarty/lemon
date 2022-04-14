<template>
  <div :class="bem()">fdsfd</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { createName, createBEM } from '../utils'
import './tab.scss'
export default defineComponent({
  name: createName('Tab'),
  setup() {
    const bem = createBEM('Tab')
    return { bem }
  }
})
</script>