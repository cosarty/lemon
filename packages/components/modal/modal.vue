<template>
  <le-overlary
    :show="visible"
    @popupClick="modalHanelClick"
    :to="appendTo"
    transition="le-modal-fade"
    :destroy="destroyOnClose"
  >
    <div class="le-modal-wrapper" v-show="visible" :style="setWarpperWidth">
      <div class="le-modal-title">
        <slot name="title">
          <div class="le-modal-title--default">
            {{ title }}
          </div>
        </slot>
      </div>
      <span
        class="le-modal-wrapper__close"
        v-if="showClose"
        @click="closeModal('close')"
      >
        <clear-icon />
      </span>
      <slot>{{ content }}</slot>
      <div class="le-modal-footer" v-if="showFooter">
        <slot name="footer">
          <modal-footer
            @close="closeModal('close')"
            @confirm="closeModal('confirm')"
            :done="done"
            :cancel="cancel"
          />
        </slot>
      </div>
    </div>
  </le-overlary>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
import { createName } from '../../utils'
import { modalProps, modalEmit } from './modal'
import modalFooter from './modal-footer.vue'
import clearIcon from './clear-icon.vue'
import './modal.scss'

export default defineComponent({
  name: createName('Modal'),
  props: modalProps,
  emits: modalEmit,
  components: {
    modalFooter,
    clearIcon
  },
  setup(props, { emit }) {
    const visible = ref<boolean>(props.modelValue)

    const closeModal = (action: string) => {
      emit(action as keyof typeof emit)
      emit('update:modelValue', false)
    }
    const setWarpperWidth = computed(() => {
      const width = Number(props.width) ? `${props.width}px` : props.width

      return { width }
    })

    watch(
      () => props.modelValue,
      (pre) => {
        visible.value = pre
      }
    )
    const modalHanelClick = () => {
      if (!props.maskCloseClick) return
      emit('update:modelValue', false)
    }

    return { visible, modalHanelClick, closeModal, setWarpperWidth }
  }
})
</script>

<style scoped>
</style>