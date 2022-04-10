<template>
  <div>
    <le-check-box-group @change="boxChange" v-model="checked">
      <le-check-box :value="['a']">选中</le-check-box>
      <le-check-box :value="2">你好</le-check-box>
    </le-check-box-group>
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
