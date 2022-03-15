<template>
  <div><rating-icon /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RatingIcon from './rating-icon.vue'
import { ratingEmit, ratingProps } from './rating'
import { createName } from '../../utils'
export default defineComponent({
  name: createName('Rating'),
  components: {
    RatingIcon,
  },
  props: ratingProps,
  emits: ratingEmit,
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>