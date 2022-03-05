<template>
  <div class="select-content" @click="selectClickHandel">
    <input
      :value="selectValue"
      type="text"
      :placeholder="placeholder"
      :readonly="!isSearch"
    />
    <select-menu v-show="selectMenuVisibel"><slot></slot></select-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, watch } from 'vue'
import { createName } from '../../utils'
import { useState } from '../../hooks'
import SelectMenu from './select-menu'
import './select.scss'

export default defineComponent({
  name: createName('Select'),
  components: {
    SelectMenu,
  },
  props: {
    modelValue: String,
    placeholder: String,
    multiple: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    isSearch: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const [selectMenuVisibel, setSelectMenuVisibel] = useState<boolean>(false)
    const [selectValue, setSelectValue] = useState<string | undefined>(
      props.modelValue
    )

    const updateValue = (v: string) => {
      setSelectValue(v)
    }

    const selectClickHandel = () => {
      setSelectMenuVisibel(!selectMenuVisibel.value)
    }

    watch(
      () => props.modelValue,
      (cur) => setSelectValue(cur)
    )

    watch(selectValue, (cur) => {
      emit('change', cur)
      emit('update:modelValue', cur)
    })

    provide('select', { updateValue, selectValue })

    return { selectMenuVisibel, selectClickHandel, selectValue }
  },
})
</script>

