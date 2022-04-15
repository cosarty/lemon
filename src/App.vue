<template>
  <le-tabs v-model:active="checked" animation="sliding">
    <le-tab title="nihao" name="hg">我是1</le-tab>
    <le-tab name="b" title="nihhao" disabled="">我是2</le-tab>
    <le-tab title="nih2">我是3</le-tab>
  </le-tabs>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

// import { useCurrentInstance } from '../packages/hooks'
export default defineComponent({
  setup() {
    const checked = ref()

    watch(checked, () => {
      console.log(checked.value)
    })

    const handleChange = (v: any) => {
      console.log(v)
    }

    return { checked, handleChange }
  }
})
</script>


<style lang="scss">
</style>
