<template>
  <Teleport :to="to">
    <div class="le-teleport" v-show="show" v-if="isDestory">
      <Transition :name="transition">
        <slot></slot>
      </Transition>
      <Transition name="le-mask-fade">
        <div
          v-show="show"
          v-if="isOverlary"
          class="le-teleport--mask"
          @click="clickHandle"
        ></div>
      </Transition>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { createName } from '../utils'
import './overlary.scss'
export default defineComponent({
  name: createName('Overlary'),
  props: {
    to: {
      type: String,
      default: 'body'
    },
    isOverlary: {
      type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    destroy: {
      type: Boolean,
      default: false
    }
  },
  emits: ['popupClick'],

  setup(props, { emit }) {
    const isDestory = computed(() => {
      if (!props.destroy) return true
      return props.show
    })

    const clickHandle = (e: Event) => emit('popupClick', e)

    return { isDestory, clickHandle }
  }
})
</script>

