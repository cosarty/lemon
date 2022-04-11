<template>
  <div class="box">
    <div>
      <le-select>
        <le-select-option>d</le-select-option>
        <le-select-option>2</le-select-option>
        <le-select-option>3</le-select-option>
        <le-select-option>3</le-select-option>
        <le-select-option>3</le-select-option>
        <le-select-option>3</le-select-option>
        <le-select-option>3</le-select-option>
      </le-select>
    </div>
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
.box {
  position: relative;
  height: 1000px;
  width: 3000px;
}

.box > div {
  position: absolute;
  top: 600px;
  left: 2000px;
}
</style>
