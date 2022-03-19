<template>
  <div>
    <button @click="handelClick">点击</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
// import { LeMessageCall } from '../packages/components'
import { useCurrentInstance } from '../packages/hooks'
export default defineComponent({
  setup() {
    const global = useCurrentInstance()
    onMounted(() => {
      // LeMessageCall()
    })

    const handelClick = () => {
      global.$message({
        message: '你好',
      })
    }
    return {
      handelClick,
    }
  },
})
</script>


<style lang="scss">
</style>
