<template>
  <div>
    <!-- <le-select placeholder="请选择" v-model="value" multiple disabled>
        <le-select-option label="苹果" value="a" disabled></le-select-option>
        <le-select-option label="香蕉" value="b"></le-select-option>
        <le-select-option label="葡萄" value="c" disabled></le-select-option>
      </le-select> -->
    <!-- <le-rating :max="6" v-model="value" @change="onChange" /> -->
    <le-switch
      @change="onChange"
      v-model="value"
      inactive-value="no"
      inactive-color="red"
      active-color="black"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('no')

    // watch(value, () => {
    //   console.log(value.value)
    // })
    const onChange = (v: any) => {
      console.log(v)
    }

    return { value, onChange }
  },
})
</script>


<style lang="scss">
</style>
