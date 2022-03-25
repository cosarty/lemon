<template>
  <div>
    <button @click="handelClick">点击</button>
    <le-modal
      width="600px"
      v-model="visible"
      show-close
      title="标题"
      content="内容"
    >
    </le-modal>
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
      visible.value = true
      global.$modal({ content: 'gfd' })
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
