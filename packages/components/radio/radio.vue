<template>
  <label class="le-radio" :class="{ 'le-radio--disabled': disabled }">
    <input
      type="radio"
      :value="checkValue"
      @change="checkHandel"
      :checked="checked"
      :disabled="disabled"
    />
    <span><slot></slot></span>
  </label>
</template>

<script>
import { ref, computed, watchEffect, inject } from 'vue'
import { createName } from '../utils'
import { radioProps, radioEmit, radioGroupKey } from './radio'
import './radio.scss'
export default {
  name: createName('Radio'),
  props: radioProps,
  emits: radioEmit,
  setup(props, { slots, emit }) {
    const value = ref()
    const ctx = inject(radioGroupKey, false)

    const isLable = computed(() => {
      const { children } = slots.default?.()[0]
      if (typeof children === 'string') return children
      return undefined
    })
    const checkValue = computed(() => props.value || isLable.value || checked)

    const checked = computed(() => checkValue.value === value.value)

    watchEffect(() => {
      if (typeof ctx === 'object' && ctx.parenValue.value) {
        value.value = ctx.parenValue.value
        return
      }

      value.value = props.modelValue
    })

    const checkHandel = (e) => {
      if (typeof ctx === 'object') {
        ctx.radioGroupChangeHanle(checkValue.value)
      }

      emit('update:modelValue', checkValue.value)
      emit('change', checkValue.value)
    }

    return { checkValue, checkHandel, value, checked }
  }
}
</script>

<style lang="scss" scoped>
</style>