<template>
  <div :class="bem()" v-if="showTab"><slot></slot></div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  ref
} from 'vue'
import { createName, createBEM } from '../utils'
import { tabProps, tabsKey } from '../tabs/tabs'
import './tab.scss'
export default defineComponent({
  name: createName('Tab'),
  props: tabProps,
  setup(props) {
    const bem = createBEM('Tab')
    const activekey = ref(props!.name)

    const context = inject(tabsKey)
    if (!context) {
      return console.error('tab组件必须挂载在tabs下')
    }

    onMounted(() => {
      context.transmitTab(
        Object.assign({ ...props }, { name: activekey.value }),
        (name) => {
          activekey.value = name
        }
      )
    })

    const showTab = computed(
      () => activekey.value === context.currentActive.value
    )

    onUnmounted(() => {
      context.destoryKey(activekey.value)
    })

    return { bem, showTab }
  }
})
</script>