<template>
  <div><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, watch } from 'vue'
import { createName } from '../utils'
import './checkbox-group.scss'
import {
  checkBoxGroupKey,
  checkboxGroupProps,
  checkboxGroupEmit
} from './checkbox-group'
export default defineComponent({
  name: createName('CheckBoxGroup'),
  props: checkboxGroupProps,
  emits: checkboxGroupEmit,
  setup(props, { emit }) {
    const prenValue = ref(props.modelValue)

    const setPrentValue = (value: unknown) => {
      const exis = prenValue.value.indexOf(value)
      if (exis !== -1) {
        prenValue.value.splice(exis, 1)
      } else {
        prenValue.value.push(value)
      }

      emit('change', prenValue.value)
    }

    watch(
      prenValue,
      (pre) => {
        emit('update:modelValue', pre)
      },
      { deep: true }
    )

    provide(checkBoxGroupKey, { setPrentValue, props })

    return {}
  }
})
</script>

<style scoped>
</style>