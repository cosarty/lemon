<template>
  <label :class="bem({ disabled: disabled })">
    <checkbox-icon
      :class="bem('icon', { disabled: disabled })"
      :checked="checked"
    />
    <input
      type="checkbox"
      :checked="checked"
      @change="checkBoxHandle()"
      :disabled="disabled"
    />
    <span
      ><slot>{{ lable }}</slot></span
    >
  </label>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, inject, watchEffect } from 'vue'
import { checkboxProps, checkboxEmit } from './checkbox'
import { createName, createBEM } from '../utils'
import { checkBoxGroupKey } from '../checkbox-group/checkbox-group'
import checkboxIcon from './checkbox-icon.vue'
import './checkbox.scss'

export default defineComponent({
  name: createName('Checkbox'),
  components: {
    checkboxIcon
  },
  props: checkboxProps,
  emits: checkboxEmit,
  setup(props, { emit, slots }) {
    const checked = ref<boolean>(!!props.modelValue)
    const bem = createBEM('CheckBox')

    const prent = inject(checkBoxGroupKey)

    const isLable = computed(() => {
      const children = slots.default?.()[0].children
      if (typeof children === 'string') return children
      return undefined
    })
    const checkValue = computed(() => props.value || isLable.value || checked)

    watchEffect(() => {
      if (!(prent && props.bindGroup)) return
      const ck = prent?.props?.modelValue.includes(checkValue.value)

      checked.value = ck!
    })

    const checkBoxHandle = () => {
      if (props.disabled) return

      if (prent && props.bindGroup) {
        prent.setPrentValue?.(checkValue.value)
        return
      }
      checked.value = !checked.value
      emit('change', checked.value)
    }

    watch(checked, (val) => {
      if (prent && props.bindGroup) return
      emit('update:modelValue', val)
    })

    return {
      bem,
      checked,
      checkBoxHandle
    }
  }
})
</script>

<style scoped>
</style>