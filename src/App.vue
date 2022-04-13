<template>
  <div>
    <le-select v-model="checked" multiple clearable>
      <le-select-option :value="1">1</le-select-option>
      <le-select-option :value="3">2</le-select-option>
      <le-select-option :value="4">kgfl;fjkljh</le-select-option>
      <le-select-option :value="438279">kgkls</le-select-option>
      <le-select-option value="543">fdjklj</le-select-option>
      <le-select-option value="87">gjfkdl</le-select-option>
      <le-select-option value="gjfkdl">gfjdl</le-select-option>
      <le-select-option value="kgkls">riep</le-select-option>
    </le-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

// import { useCurrentInstance } from '../packages/hooks'
export default defineComponent({
  setup() {
    const checked = ref()

    watch(checked, (cc) => {
      console.log(checked.value)
    })

    return { checked }
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
