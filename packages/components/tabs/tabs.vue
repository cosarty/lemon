<template>
  <div :class="bem()" :style="{ ['--tabs-title-active-color']: activeColor }">
    <div :class="bem('nav', [tabPostision, { border: border }])">
      <div :class="bem('header', [animation])">
        <span
          v-for="(item, index) in mountTab"
          :key="index"
          :class="
            bem('title', {
              active: item.name === currentActive,
              disabled: item.disabled
            })
          "
          @click.stop="tabTitkeClickHandle(item.name, index, item.disabled)"
          :ref="setTabRef"
          >{{ item.title }}</span
        >
        <div
          :class="bem('header__line')"
          v-if="animation === 'sliding'"
          :style="lineStyle"
        ></div>
      </div>
    </div>
    <div :class="bem('context')"><slot></slot></div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  provide,
  watch,
  reactive,
  onMounted,
  nextTick
} from 'vue'
import { createName, createBEM, addUnit } from '../utils'
import { tabsProps, tabsKey, keyType, tabPropsType } from './tabs'
import './tabs.scss'
export default defineComponent({
  name: createName('Tabs'),
  props: tabsProps,
  setup(props, { slots, emit }) {
    const bem = createBEM('Tabs')
    const mountTab = ref<tabPropsType[]>([])
    const currentActive = ref<keyType | undefined>(props.active)
    const tabTitleRef = ref<HTMLSpanElement[]>([])
    const lineStyle = reactive<{ left: string; width: string }>({
      left: '0',
      width: '0'
    })
    const tabTitkeClickHandle = (
      key: keyType,
      idx: number,
      disabled: boolean
    ) => {
      if (disabled) return
      setOffset(idx)
      emit('change', key)
      currentActive.value = key
    }
    // 设置滑块的位置
    const setOffset = (idx: number) => {
      if (props.animation !== 'sliding') return
      const el = tabTitleRef.value[idx]
      lineStyle.left = addUnit(el.offsetLeft)
      lineStyle.width = addUnit(el.offsetWidth)
    }
    const transmitTab = (info: tabPropsType, cb?: (idx: number) => void) => {
      if (!info?.title) return
      let { name } = info

      //  判断用户有没有传key没有就按下标
      const id = mountTab.value.length
      // 如果key不存在就给它设置下标，传回调，放着里怕用户传的是数字就先回调
      !name && cb && cb(id)

      name = name ?? id
      mountTab.value.push({ ...info, name })
      if (!currentActive.value) currentActive.value = mountTab.value[0].name
    }
    // 销毁依赖
    const destoryKey = (key: keyType) => {
      mountTab.value = mountTab.value.filter((k) => k.name == key)
    }
    const setTabRef = (el: HTMLSpanElement) => {
      if (el) {
        tabTitleRef.value.push(el)
      }
    }
    watch(currentActive, (cur) => {
      emit('update:active', cur)
    })
    onMounted(() => {
      nextTick(() => {
        setOffset(
          mountTab.value.findIndex((i) => i.name === currentActive.value)
        )
      })
    })

    watch(
      () => props.animation,
      () => {
        setOffset(
          mountTab.value.findIndex((i) => i.name === currentActive.value)
        )
      }
    )

    provide(tabsKey, {
      transmitTab,
      destoryKey,
      currentActive
    })

    return {
      bem,
      mountTab,
      currentActive,
      tabTitkeClickHandle,
      setTabRef,
      lineStyle
    }
  }
})
</script>