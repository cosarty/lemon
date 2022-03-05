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
    const { updateValue, selectValue } = inject<any>('select')

    const handelClick = () => {
      updateValue(props.value)
    }
    const setActive = computed(() => selectValue.value === props.value)

    return { handelClick, setActive }
  },
})
</script>

<style scoped>
</style>