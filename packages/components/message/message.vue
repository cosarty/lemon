<template>
  <transition name="le-message-fade">
    <div v-show="visible" class="le-message">
      <div>消息组件</div>
      <span v-if="showClose" class="le-message__close" @click="close"
        ><message-close-icon
      /></span>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { createName } from '../../utils'
import messageCloseIcon from './message-close-icon.vue'
import { messageProps } from './message'
import './message.scss'

export default defineComponent({
  name: createName('Message'),
  components: {
    messageCloseIcon,
  },
  props: messageProps,
  setup() {
    const visible = ref<boolean>(false)

    onMounted(() => {
      visible.value = true
    })
    const close = () => {
      visible.value = false
    }
    return {
      visible,
      close,
    }
  },
})
</script>