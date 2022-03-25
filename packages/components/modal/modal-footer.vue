<template>
  <div class="le-modal-footer--default">
    <button @click="footerHandleClick('close')">{{ cancel }}</button>
    <button @click="footerHandleClick('confirm')">{{ done }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['cancel', 'done'],
  emits: ['close', 'confirm'],
  setup(props, { emit }) {
    const footerHandleClick = (action: 'close' | 'confirm') => {
      emit(action)
    }
    return { footerHandleClick }
  }
})
</script>

<style scoped>
</style>