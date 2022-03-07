<template>
  <div class="select-content" ref="SelectRef" @click="selectClickHandel">
    <div
      v-if="multiple && Array.isArray(modelValue)"
      class="select-content-multiple"
    >
      <span v-for="(_, i) of select" :key="i"
        >{{ _.label }} <clear-icon @click.stop="removeCheck(_.value)"
      /></span>
    </div>
    <input
      :value="select[0]?.label"
      v-if="!multiple"
      type="text"
      :placeholder="placeholder"
      :readonly="!isSearch"
    />
    <select-menu v-show="selectMenuVisibel && !disabled"
      ><slot></slot
    ></select-menu>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  ref,
  watch,
  reactive,
  toRefs,
  PropType,
} from 'vue'

import { useAway } from '../../hooks'
// import {  toRawType } from '@vue/shared'
import { createName } from '../../utils'
import { SelectOptionProxy } from './inteface'
import SelectMenu from './select-menu.vue'
import ClearIcon from './clear-icon.vue'

import './select.scss'

export default defineComponent({
  name: createName('Select'),
  components: {
    SelectMenu,
    ClearIcon,
  },
  props: {
    modelValue: {
      type: [String, Array, Number] as PropType<
        string | number | (string | number)[]
      >,
      default: undefined,
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
  setup(props, ctx) {
    const selectMenuVisibel = ref<boolean>(false)
    const state = reactive<{
      options: Map<string | number, SelectOptionProxy>
      select: { value: string | number; label: string }[]
    }>({
      options: new Map(),
      select: props.multiple ? [] : ({} as any),
    })
    const SelectRef = ref<Element | undefined>(undefined)

    // const checkModelValue = ()=>{

    // }

    const removeCheck = (selected: any) => {
      const value = ((props.modelValue as any[]) || []).slice()
      const idx = value.indexOf(selected)
      if (idx !== -1) {
        value.splice(idx, 1)
      }
      ctx.emit('update:modelValue', value)
    }

    const addOptions = (vm: SelectOptionProxy) => {
      state.options.set(vm.value, vm)
    }
    const handleOptionsClick = (vm: SelectOptionProxy) => {
      if (props.multiple && Array.isArray(props.modelValue)) {
        const value = ((props.modelValue as any[]) || []).slice()
        const idx = value.indexOf(vm.value)
        if (idx !== -1) {
          value.splice(idx, 1)
        } else {
          value.push(vm.value)
        }
        ctx.emit('update:modelValue', value)
      } else {
        ctx.emit('update:modelValue', vm.value)
      }
    }
    const destoryOption = (vm: SelectOptionProxy) => {
      state.options.delete(vm.value)
      if (vm.value === props.modelValue) {
        ctx.emit('update:modelValue', '')
      } else if (props.multiple) {
        const value = ((props.modelValue as any[]) || []).slice()
        const idx = value.indexOf(vm.value)
        if (idx !== -1) {
          value.splice(idx, 1)
        }
        ctx.emit('update:modelValue', value)
      }
    }
    const getOptions = (option: any): any[] => {
      if (props.multiple && Array.isArray(option)) {
        const result: any = []

        option.forEach((v: string | number) => {
          const op = state.options.get(v)
          op
            ? result.push({
                value: op.value,
                label: op.label,
              })
            : result.push({
                value: v,
                label: v,
              })
        })

        return result
      }
      const op = state.options.get(option)
      if (op) {
        return [
          {
            value: op.value,
            label: op.label,
          },
        ]
      }
      return [
        {
          value: option,
          label: option,
        },
      ]
    }

    watch(
      () => props.modelValue,
      () => {
        state.select = getOptions(props.modelValue)
      },
      { immediate: true, flush: 'post', deep: true }
    )
    useAway(SelectRef, () => {
      selectMenuVisibel.value = false
    })
    const selectClickHandel = () => {
      selectMenuVisibel.value = !selectMenuVisibel.value
    }

    provide('select', {
      addOptions,
      handleOptionsClick,
      destoryOption,
      ...toRefs(state),
      multiple: props.multiple,
    })
    return {
      ...toRefs(state),
      SelectRef,
      selectMenuVisibel,
      removeCheck,
      selectClickHandel,
    }
  },
})
</script>

