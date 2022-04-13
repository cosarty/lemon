<template>
  <div
    :class="bem('wrapper', { active: dropdownVisible })"
    ref="prentRef"
    @click.stop="selectClickHandle"
  >
    <div :class="bem('content')">
      <div :class="bem('input')" v-if="!multiple">
        <input type="text" readonly :value="prentValue" />
      </div>
      <div v-else :class="bem('multiple')">
        <span
          :class="bem('multiple__item')"
          v-for="(item, index) in prentValue"
          :key="index"
          @click.stop="clearItem(item)"
          >{{ item }}<clear-icon v-if="clearable"
        /></span>
      </div>
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
import { defineComponent, nextTick, ref, provide, watch, readonly } from 'vue'
import { createName, createBEM, useRect } from '../utils'
import { useAway } from '../../hooks'
import arrowIcon from './arrow-icon.vue'
import clearIcon from './clear-icon.vue'
import selectDropdown from './select-dropdown.vue'
import { dependType, selectProps, selectKey } from './select'

import './select.scss'
import ClearIcon from './clear-icon.vue'

export default defineComponent({
  name: createName('Select'),

  components: {
    arrowIcon,
    selectDropdown,
    clearIcon,
    ClearIcon
  },
  props: selectProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const bem = createBEM('Select')
    const dropdownWidth = ref<number>(0)
    const dropdownVisible = ref<boolean>(false)
    const prentRef = ref<HTMLDivElement | undefined>()
    const selectDropdownRef = ref<
      InstanceType<typeof selectDropdown> | undefined
    >(undefined)
    const setdepend = ref<dependType[]>([])
    const prentValue = ref<any[] | any>(props.modelValue)

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

    const updatePrentValue = (value: unknown) => {
      if (props.multiple) {
        prentValue.value = Array.isArray(prentValue.value)
          ? prentValue.value
          : []
        if (prentValue.value.includes(value)) {
          prentValue.value = prentValue.value.filter((i: any) => i !== value)
        } else {
          prentValue.value = [...prentValue.value, value]
        }
        //
      } else {
        prentValue.value = value
      }
    }

    const updateDepends = (value: dependType) => {
      const isAdd = setdepend.value.findIndex((i) => i.value === value.value)

      if (!~isAdd) {
        setdepend.value.push(value)
      } else {
        setdepend.value.splice(isAdd, 1)
      }
    }

    const clearItem = (value: unknown) => updatePrentValue(value)
    watch(prentValue, (cur) => {
      // ;(selectDropdownRef.value as any).setPosition()
      emit('update:modelValue', cur)
      emit('change', cur)
    })

    provide(selectKey, {
      updateDepends,
      prentValue,
      updatePrentValue
    })

    return {
      bem,
      prentRef,
      dropdownVisible,
      selectClickHandle,
      dropdownWidth,
      selectDropdownRef,
      prentValue,
      clearItem
    }
  }
})
</script>

