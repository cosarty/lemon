<template>
  <le-overlary :show="visible" @popupClick="modalHanelClick" destroy>
    <div class="le-modal-Wrapper">
      <slot name="title" v-if="!title"></slot>
      <slot></slot>
      <slot name="footer" v-if="showFooter"></slot>
    </div>
  </le-overlary>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { createName } from '../../utils'
import { modalProps, modalEmit } from './modal'
import './modal.scss'

export default defineComponent({
  name: createName('Modal'),
  props: modalProps,
  emits: modalEmit,
  setup(props, { emit }) {
    const visible = ref<boolean>(props.modelValue)

    watch(
      () => props.modelValue,
      (pre) => {
        visible.value = pre
      }
    )
    const modalHanelClick = () => {
      emit('update:modelValue', false)
    }

    return { visible, modalHanelClick }
  }
})
</script>

<style scoped>
</style>