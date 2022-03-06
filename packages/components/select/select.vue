<template>
  <div class="select-content" @click="selectClickHandel" ref="SelectRef">
    <select-multiple
      v-if="multiple && Array.isArray(modelValue)"
      :checkSelect="checkSelect"
      @remove-check="updateValue"
    />
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      :readonly="!isSearch"
    />
    <select-menu v-show="selectMenuVisibel && !disabled"
      ><slot></slot
    ></select-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, watch, PropType, computed } from 'vue'

import { useAway } from '../../hooks'
import { createName } from '../../utils'
import { useState } from '../../hooks'
import SelectMenu from './select-menu.vue'

import SelectMultiple from './select-multiple.vue'
import './select.scss'

export default defineComponent({
  name: createName('Select'),
  components: {
    SelectMenu,

    SelectMultiple,
  },
  props: {
    modelValue: {
      type: [String, Array] as PropType<string | string[]>,
    },
    placeholder: { type: String, default: '' },
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
    const [selectValue, setSelectValue] = useState<string | string[]>([])

    const SelectRef = ref<Element | undefined>(undefined)

    // 设置选择属性
    const checkSelect = computed({
      get() {
        return selectValue.value as string[] | string
      },
      set(check: string | string[]) {
        if (props.multiple && !Array.isArray(check)) {
          const select = Array.isArray(selectValue.value)
            ? selectValue.value
            : [selectValue.value]
          if (!select.includes(check)) {
            setSelectValue([...select, check] as string[])
            return
          }

          setSelectValue(select.filter((i) => i !== check) as string[])
          return
        }

        if (Array.isArray(check)) {
          setSelectValue(check)
          return
        }

        setSelectValue(check.toString())
      },
    })

    const updateValue = (v: string) => {
      checkSelect.value = v
    }

    const selectClickHandel = () => {
      setSelectMenuVisibel(!selectMenuVisibel.value)
    }

    useAway(SelectRef, () => {
      setSelectMenuVisibel(false)
    })

    watch(
      () => props.modelValue,
      (cur) => {
        if (props.multiple && !Array.isArray(cur)) return
        checkSelect.value = cur as string | string[]
      },
      {
        immediate: true,
      }
    )

    watch(selectValue, (cur) => {
      emit('change', cur)
      emit('update:modelValue', cur)
    })

    // 暴露出去
    provide('select', { updateValue, selectValue, multiple: props.multiple })

    return {
      selectMenuVisibel,
      selectClickHandel,
      selectValue,
      SelectRef,
      checkSelect,
      updateValue,
    }
  },
})
</script>

