<template>
  <div class="le-modal-footer--default">
    <button @click="footerHandleClick('close')">取消</button>
    <button @click="footerHandleClick('confirm')">确认</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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