<template>
  <div :class="bem()">fdsfd</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { createName, createBEM } from '../utils'
import { tabProps } from '../tabs/tabs'
import './tab.scss'
export default defineComponent({
  name: createName('Tab'),
  props: tabProps,
  setup() {
    const bem = createBEM('Tab')
    return { bem }
  }
})
</script>