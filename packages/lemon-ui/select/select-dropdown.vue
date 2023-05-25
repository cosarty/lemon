
<template>
  <Teleport to="body">
    <div
      ref="dropdownRef"
      :class="bem('dropdown', [isPosition])"
      :style="dropdownStyle"
      v-show="visible"
    >
      <div :class="bem('dropdown__wrapper')">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  CSSProperties,
  watch,
  reactive,
  toRefs
} from 'vue'
import { createBEM, addUnit, useRect } from '../utils'
import { useAway, useWindowChange } from '../../hooks'
import { selectDropDownProps, selectDropDownEmit } from './select'
import './select.scss'

export default defineComponent({
  props: selectDropDownProps,
  emits: selectDropDownEmit,
  setup(props, { emit, expose }) {
    const bem = createBEM('Select')
    const isPosition = ref<'bottom' | 'top'>('bottom')
    const placement = reactive<{ [index: string]: number | string }>({
      left: 0,
      right: 0
    })

    const dropdownRef = ref<HTMLDivElement | undefined>(undefined)

    const dropdownStyle = computed<CSSProperties>(() => {
      return {
        width: addUnit(props.width!),
        ...toRefs(placement)
      }
    })

    const { height, scrollX, scrollY } = useWindowChange()

    watch(
      () => props.visible,
      () => {
        setPosition()
      }
    )

    const setPosition = () => {
      const { height: dropDownHeight } = useRect(dropdownRef!)

      const { bottom, left, height: prenHeight } = useRect(props.prentRef!)
      const istop = height.value - bottom - 10 > dropDownHeight
      const opsitionType = istop ? 'bottom' : 'top'
      isPosition.value = opsitionType
      const addTop = istop ? 0 : prenHeight + dropDownHeight + 20

      ;(placement.left = addUnit(scrollX.value + left)),
        (placement.top = addUnit(scrollY.value + bottom - addTop))
    }

    expose({
      setPosition
    })

    useAway(dropdownRef, () => {
      emit('update:visible', false)
    })

    return { bem, dropdownStyle, dropdownRef, isPosition }
  }
})
</script>

<style scoped>
</style>