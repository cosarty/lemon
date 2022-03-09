<template>
  <div
    class="select-option"
    @click="selectOptionClick"
    :class="{ 'select-option__active': setActive }"
  >
    {{ label }}
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  computed,
  getCurrentInstance,
  onBeforeUnmount,
} from 'vue'
import { SelectOptionProxy } from './inteface'
import { createName } from '../../utils'
export default defineComponent({
  name: createName('SelectOption'),
  props: {
    value: [String, Object, Number],
    label: String,
    disabled: Boolean,
  },
  setup(props) {
    const select = inject<any>('select')

    const vm = getCurrentInstance()!.proxy as unknown as SelectOptionProxy
    select.addOptions(vm)

    onBeforeUnmount(() => {
      select.destoryOption(vm)
    })

    const selectOptionClick = () => {
      if (props.disabled) return
      select.handleOptionsClick(vm)
    }
    const setActive = computed(() => {
      const { value } = props

      if (Array.isArray(select.select.value)) {
        return (
          select.select.value.findIndex((v: any) => v.value === value) !== -1
        )
      }

      return false
    })

    return { selectOptionClick, setActive }
  },
})
</script>

<style scoped>
</style>