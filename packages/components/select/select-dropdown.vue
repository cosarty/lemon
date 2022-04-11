
<template>
  <Teleport to="body">
    <div
      ref="dropdownRef"
      :class="bem('dropdown', [isPosition])"
      :style="dropdownStyle"
      v-if="visible"
    >
      <div :class="bem('dropdown__wrapper')">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, CSSProperties } from 'vue'
import { createBEM, addUnit, useRect } from '../utils'
import { useAway, useWindowChange } from '../../hooks'
import { selectDropDownProps, selectDropDownEmit } from './select'
import './select.scss'

export default defineComponent({
  props: selectDropDownProps,
  emits: selectDropDownEmit,
  setup(props, { emit }) {
    const bem = createBEM('Select')
    const isPosition = ref<'bottom' | 'top'>('bottom')

    const dropdownRef = ref<HTMLDivElement | undefined>(undefined)

    const dropdownStyle = computed<CSSProperties>(() => ({
      width: addUnit(props.width!),
      ...setPosition()
    }))

    const { height, scrollX, scrollY } = useWindowChange()

    const setPosition = () => {
      const { height: dropDownHeight } = useRect(dropdownRef!)
      const { bottom, left, height: prenHeight } = useRect(props.prentRef!)
      const istop = height.value - bottom > dropDownHeight
      const opsitionType = istop ? 'bottom' : 'top'
      isPosition.value = opsitionType
      const addTop = istop ? 0 : prenHeight + dropDownHeight + 20
      return {
        left: addUnit(scrollX.value + left),
        top: addUnit(scrollY.value + bottom - addTop)
      }
    }

    useAway(dropdownRef, () => {
      emit('update:visible', false)
    })

    return { bem, dropdownStyle, dropdownRef, isPosition }
  }
})
</script>

<style scoped>
</style>