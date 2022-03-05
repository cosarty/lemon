<template>
  <div>
    <le-select placeholder="请选择" v-model="value">
      <le-select-option label="苹果" value="a" disabled></le-select-option>
      <le-select-option label="香蕉" value="b" disabled></le-select-option>
      <le-select-option label="葡萄" value="c" disabled></le-select-option>
    </le-select>
  </div>
  <!-- <router-view /> -->
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  setup() {
    const value = ref<string>('')

    watch(value, () => {
      console.log(value.value)
    })

    return { value }
  },
})
</script>


<style lang="scss">
</style>
