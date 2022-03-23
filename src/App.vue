<template>
  <div>
    <le-modal v-model="visible">
      <template #title>fdsgd</template>
      <template #footer>我是角</template>

      哈哈哈哈哈
    </le-modal>
    <button @click="handelClick">点击</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
// import { LeMessageCall } from '../packages/components'
import { useCurrentInstance } from '../packages/hooks'
export default defineComponent({
  setup() {
    const visible = ref(false)
    // const global = useCurrentInstance()
    onMounted(() => {
      // LeMessageCall()
    })

    const handelClick = () => {
      // global.$message('fgdh')
      visible.value = true
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
