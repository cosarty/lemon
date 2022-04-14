<template>
  <div>
    <le-tabs>
      <le-tab></le-tab>
    </le-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

// import { useCurrentInstance } from '../packages/hooks'
export default defineComponent({
  setup() {
    const checked = ref('543')

    watch(checked, (cc) => {
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
.box {
  width: 6000px;
  height: 7000px;
  text-align: center;
  margin-top: 2000px;
}
</style>
