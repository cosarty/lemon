<template>
  <div>
    <le-radio-group usecol v-model="prent">
      <le-radio>男</le-radio>
      <le-radio>女</le-radio>
      <le-radio>未知</le-radio>
    </le-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

// import { useCurrentInstance } from '../packages/hooks'
export default defineComponent({
  setup() {
    const value = ref('男')
    const prent = ref('女')

    watch(value, (pre) => {
      console.log('value' + value.value)
    })
    watch(prent, (pre) => {
      console.log('prent' + prent.value)
    })

    const change = (v: string) => {
      console.log(v)
    }

    return { value, change, prent }
  }
})
</script>


<style lang="scss">
</style>
