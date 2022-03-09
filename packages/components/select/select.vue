<template>
  <div class="select-content" ref="SelectRef" @click="selectClickHandel">
    <div v-if="multiple && select.length !== 0" class="select-content-multiple">
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
import { defineComponent, provide, ref, watch, reactive, toRefs } from 'vue'

import { useAway } from '../../hooks'
import { createName } from '../../utils'
import { SelectOptionProxy } from './inteface'
import SelectMenu from './select-menu.vue'
import ClearIcon from './clear-icon.vue'

import './select.scss'

interface SelectType {
  label: string
  value: number | string
}

const defaultSelect: SelectType = {
  label: '',
  value: '',
} as SelectType

export default defineComponent({
  name: createName('Select'),
  components: {
    SelectMenu,
    ClearIcon,
  },
  props: {
    // 完成 multiple disabled
    modelValue: {
      type: [String, Array, Number],
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
      select: SelectType[]
    }>({
      options: new Map(),
      select: [defaultSelect],
    })
    const SelectRef = ref<Element | undefined>(undefined)

    const checkSelectValue = (selected: any, isAdd?: boolean) => {
      const select = getOptions(selected)
      console.log('select: ', select)

      const idx = state.select.findIndex((s) => s.value === select[0]?.value)
      if (props.multiple) {
        idx !== -1 && state.select.splice(idx, 1)
        idx === -1 && isAdd && state.select.push(select[0])
        ctx.emit(
          'update:modelValue',
          state.select.map((selects) => selects.value)
        )
      }

      if (!props.multiple) {
        state.select[0] = select[0]
        ctx.emit('update:modelValue', state.select[0]?.value)
      }
    }

    const removeCheck = (selected: any) => {
      checkSelectValue(selected)
    }

    const addOptions = (vm: SelectOptionProxy) => {
      state.options.set(vm.value, vm)
    }
    const handleOptionsClick = (vm: SelectOptionProxy) => {
      checkSelectValue(vm.value, true)
    }
    const destoryOption = (vm: SelectOptionProxy) => {
      state.options.delete(vm.value)
      if (vm.value === props.modelValue) {
        ctx.emit('update:modelValue', '')
        return
      }
      checkSelectValue(vm.value)
    }
    const getOptions = (option: any): SelectType[] => {
      const value = Array.isArray(option) ? option : [option]
      const result: any = []
      if (state.options.size === 0) return []
      value.forEach((v: string | number) => {
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

    watch([() => props.modelValue, () => state.options.entries()], () => {
      state.select = getOptions(props.modelValue)
    })

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

