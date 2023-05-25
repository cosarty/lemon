<template>
  <div class="le-radio-group" :class="{ 'le-radio-group--usecol': usecol }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, watch } from 'vue'
import { createName } from '../utils'
import { radioGroupProps, radioEmit, radioGroupKey } from './radio'
import './radio.scss'
export default defineComponent({
  name: createName('RadioGroup'),
  props: radioGroupProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const parenValue = ref(props.modelValue)

    const radioGroupChangeHanle = (value: unknown) => {
      emit('change', value as any)
      parenValue.value = value as any
    }

    watch(parenValue, (pre) => emit('update:modelValue', pre))

    provide(radioGroupKey, {
      parenValue,
      radioGroupChangeHanle
    })
    return {}
  }
})
</script>

<style scoped>
</style>