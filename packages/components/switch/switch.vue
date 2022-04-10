/* eslint-disable @typescript-eslint/no-extra-semi */
<template>
  <label
    :class="[
      'le-switch',
      `le-switch__${size}`,
      disabled ? 'le-switch__disable' : ''
    ]"
    @click.prevent="switchClickHandle"
  >
    <input
      type="checkbox"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="disabled"
      @change="switchChange"
      ref="checkbox"
    />
    <span :style="setBackgroundColor"></span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { createName } from '../utils'

import './switch.scss'
export default defineComponent({
  name: createName('Switch'),
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    size: { type: String, default: 'medium' },
    activeColor: { type: String, default: '30d158' },
    inactiveColor: { type: String, default: 'e9e9e9' },
    inlinePrompt: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    const checkbox = ref<Element | null>(null)
    const checked = computed(() => props.activeValue === props.modelValue)

    const switchClickHandle = () => {
      if (props.disabled) return
      switchChange()
    }

    watch(checked, () => {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(checkbox.value as HTMLInputElement).checked = checked.value
    })

    const switchChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue
      ctx.emit('update:modelValue', val)
      ctx.emit('change', val)
      nextTick(() => {
        // eslint-disable-next-line @typescript-eslint/no-extra-semi
        ;(checkbox.value as HTMLInputElement).checked = checked.value
      })
    }

    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(checkbox.value as HTMLInputElement).checked = checked.value
    })

    //TODO 颜色切换有bug
    const setBackgroundColor = computed(() => {
      return {
        backgroundColor: checked.value ? props.activeColor : props.inactiveColor
      }
    })

    return { switchClickHandle, switchChange, checkbox, setBackgroundColor }
  }
})
</script>
