<template>
  <div>
    <!-- <le-select placeholder="请选择" v-model="value" multiple disabled>
        <le-select-option label="苹果" value="a" disabled></le-select-option>
        <le-select-option label="香蕉" value="b"></le-select-option>
        <le-select-option label="葡萄" value="c" disabled></le-select-option>
      </le-select> -->
    <!-- <le-rating :max="6" v-model="value" @change="onChange" /> -->
    <!-- <le-switch
      @change="onChange"
      v-model="value"
      inactive-value="no"
      inactive-color="red"
      active-color="black"
    /> -->
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

      global.$message()
    })
  },
})
</script>


<style lang="scss">
</style>
