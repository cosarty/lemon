<template>
  <div
    :class="bem('wrapper', { active: dropdownVisible })"
    ref="prentRef"
    @click.stop="selectClickHandle"
  >
    <div :class="bem('content')">
      <div :class="bem('input')" v-if="false">
        <input type="text" readonly :value="'你好'" />
      </div>
      <div v-else :class="bem('multiple')">fddsf，fdsfdsf dsadsad</div>
    </div>

    <div :class="bem('icon')">
      <arrow-icon />
    </div>
  </div>
  <select-dropdown
    :prent-ref="prentRef"
    :width="dropdownWidth"
    v-model:visible="dropdownVisible"
    ref="selectDropdownRef"
    ><slot></slot
  ></select-dropdown>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue'

import { createName, createBEM, useRect } from '../utils'
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
      nextTick(() => {
        if (prentRef.value) {
          const { width } = useRect(prentRef.value)

          dropdownWidth.value = width
        }
      })
    }

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

