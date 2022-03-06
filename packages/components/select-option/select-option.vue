<template>
  <div
    class="select-option"
    @click="handelClick"
    :class="{ 'select-option__active': setActive }"
  >
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue'
import { createName } from '../../utils'
import './select-option.scss'
export default defineComponent({
  name: createName('SelectOption'),
  props: {
    value: [String, Object],
    label: String,
    disabled: Boolean,
  },
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { updateValue, selectValue, multiple } = inject<any>('select', null)

    const handelClick = () => {
      updateValue(props.value)
    }
    const setActive = computed(() => {
      const { value } = props
      return multiple && Array.isArray(selectValue.value)
        ? selectValue.value.includes(value)
        : selectValue.value === props.value
    })

    return { handelClick, setActive }
  },
})
</script>

<style scoped>
</style>