<template>
  <div class="le-rating">
    <span
      v-for="(item, key) in max"
      :key="key"
      :class="{ 'le-rating__is-disabled': disabled }"
      @mouseenter="setCurrentValue(item)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <rating-icon :class="activItem(item)" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import RatingIcon from './rating-icon.vue'
import { ratingEmit, ratingProps } from './rating'
import { createName } from '../utils'
import './rating.scss'
export default defineComponent({
  name: createName('Rating'),
  components: {
    RatingIcon
  },
  props: ratingProps,
  emits: ratingEmit,
  setup(props, ctx) {
    const currentValue = ref(props.modelValue)

    const activItem = (item: number) => {
      return item <= currentValue.value ? 'hoved ' : ''
    }

    const setCurrentValue = (item: number) => {
      if (props.disabled) return
      currentValue.value = item
    }

    const resetCurrentValue = () => {
      if (props.disabled) return
      currentValue.value = props.modelValue
    }
    const selectValue = (item: number) => {
      ctx.emit('update:modelValue', item)
      if (props.modelValue !== item) {
        ctx.emit('change', item)
      }
    }

    return {
      setCurrentValue,
      resetCurrentValue,
      activItem,
      selectValue
    }
  }
})
</script>

<style scoped>
</style>