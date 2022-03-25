<template>
  <div>
    <button @click="handelClick">点击</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import { useCurrentInstance } from '../packages/hooks'
export default defineComponent({
  setup() {
    const visible = ref(false)
    const global = useCurrentInstance()

    const handelClick = () => {
      global.$modal('')
    }
    return {
      handelClick,
      visible
    }
  }
})
</script>


<style lang="scss">
</style>
