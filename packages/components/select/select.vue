<template>
  <div :class="bem('wrapper')" ref="prentRef" @click.stop="selectClickHandle">
    <div :class="bem('content')">
      <div :class="bem('input')">
        <input type="text" readonly value="dsa" />
      </div>
      <div :class="bem('multiple')">fddsf</div>
    </div>

    <div :class="bem('icon')">
      <arrow-icon />
    </div>
  </div>
  <select-dropdown
    :width="dropdownWidth"
    :visible="dropdownVisible"
    ref="selectDropdownRef"
    ><slot></slot
  ></select-dropdown>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue'

import { createName, createBEM, useRect } from '../utils'
import { useAway } from '../../hooks'
import arrowIcon from './arrow-icon.vue'
import selectDropdown from './select-dropdown.vue'

import './select.scss'

export default defineComponent({
  name: createName('Select'),

  components: {
    arrowIcon,
    selectDropdown
  },
  props: {},
  emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    const bem = createBEM('Select')
    const dropdownWidth = ref<number>(0)
    const dropdownVisible = ref<boolean>(false)
    const prentRef = ref<HTMLDivElement | null>(null)
    const selectDropdownRef = ref<HTMLDivElement | undefined>(undefined)

    const selectClickHandle = () => {
      updateDropdownStatus()
      dropdownVisible.value = !dropdownVisible.value
    }

    const updateDropdownStatus = async () => {
      await nextTick()
      if (prentRef.value) {
        const { width } = useRect(prentRef.value)

        dropdownWidth.value = width
      }
    }

    useAway(selectDropdownRef, () => {
      dropdownVisible.value = false
    })

    return {
      bem,
      prentRef,
      dropdownVisible,
      selectClickHandle,
      dropdownWidth,
      selectDropdownRef
    }
  }
})
</script>

