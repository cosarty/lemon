<template>
  <div :class="bem('item', { checked: checked })" @click="updateValue">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted
} from 'vue'

import { createName, createBEM } from '../utils'
import { selectKey, selectOptionProps } from '../select/select'
import './select-option.scss'
export default defineComponent({
  name: createName('SelectOption'),
  props: selectOptionProps,
  setup(props, { slots }) {
    const bem = createBEM('select-option')
    const prent = inject(selectKey)
    const checked = computed(() => {
      if (Array.isArray(prent!.prentValue.value)) {
        return prent!.prentValue.value.includes(props.value)
      }

      return prent!.prentValue.value === props.value
    })

    const getlable = computed(() => {
      const children = slots.default?.()[0].children

      if (typeof children === 'string' && !props.lable) {
        return children
      }
      return props.lable
    })

    const updateprentDependens = () =>
      getlable.value &&
      prent!.updateDepends({ lable: getlable.value!, value: props.value })

    const updateValue = () =>
      props.value && prent!.updatePrentValue(props.value)

    onMounted(() => {
      updateprentDependens()
    })

    onBeforeUnmount(() => {
      updateprentDependens()
    })
    return { bem, updateValue, checked }
  }
})
</script>

<style scoped>
</style>