<template>
  <transition
    name="le-message-fade"
    @before-leave="onClose"
    @after-leave="$emit('destory')"
  >
    <div
      :id="`le-message-deep${id}`"
      v-show="visible"
      class="le-message"
      @mouseenter="clearTimer"
      @mouseleave="startTime"
      :style="setMessageOffset"
    >
      <div>
        <slot></slot>
      </div>
      <span v-if="showClose" class="le-message__close" @click="close">
        <message-close-icon />
      </span>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import type { CSSProperties } from 'vue'
import { useTimeOut } from '../../hooks'
import { createName } from '../../utils'
import messageCloseIcon from './message-close-icon.vue'
import { messageProps, messageEmit } from './message'
import './message.scss'

export default defineComponent({
  name: createName('Message'),
  components: {
    messageCloseIcon
  },
  props: messageProps,
  emits: messageEmit,
  setup(props) {
    const visible = ref<boolean>(false)
    let stopTimer: (() => void) | undefined = undefined

    const setMessageOffset = computed<CSSProperties>(() => ({
      zIndex: props.zIndex,
      top: `${props.offset}px`
    }))

    const startTime = () => {
      if (props.duration > 0) {
        ;({ stop: stopTimer } = useTimeOut(() => {
          if (visible.value) close()
        }, props.duration))
      }
    }

    const clearTimer = () => {
      stopTimer?.()
    }

    onMounted(() => {
      visible.value = true
      startTime()
    })
    const close = () => {
      visible.value = false
    }
    return {
      visible,
      close,
      clearTimer,
      startTime,
      setMessageOffset
    }
  }
})
</script>
