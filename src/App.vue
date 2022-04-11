<template>
  <div>
    <le-select>
      <le-select-option>1</le-select-option>
      <le-select-option>2</le-select-option>
      <le-select-option>3</le-select-option>
    </le-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

// import { useCurrentInstance } from '../packages/hooks'
export default defineComponent({
  setup() {
    const checked = ref()

    const boxChange = (v: any) => {
      console.log(v)
    }

    return { checked, boxChange }
  }
})
</script>


<style lang="scss">
</style>
