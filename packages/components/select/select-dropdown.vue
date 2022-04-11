<template>
  <Teleport to="body">
    <div
      :class="bem('dropdown')"
      :style="{ width: drowWidth }"
      v-show="visible"
    >
      <div :class="bem('dropdown__wrapper')">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { createBEM, addUnit } from '../utils'
import { selectDropDownProps } from './select'
import './select.scss'
export default defineComponent({
  props: selectDropDownProps,
  setup(props) {
    const bem = createBEM('Select')
    const drowWidth = computed(() => addUnit(props.width!))
    console.log('drowWidth: ', drowWidth.value)
    return { bem, drowWidth }
  }
})
</script>

<style scoped>
</style>