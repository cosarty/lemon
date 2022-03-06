<template>
  <div class="select-content-multiple">
    <span v-for="check of checkSelect" :key="check"
      >{{ check }} <clear-icon @click="$emit('removeCheck', check)"
    /></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ClearIcon from './clear-icon.vue'
export default defineComponent({
  components: {
    ClearIcon,
  },
  props: {
    checkSelect: {
      type: [String, Array] as PropType<string | string[]>,
      required: true,
    },
  },
  emits: ['removeCheck'],
  setup(props) {
    return {}
  },
})
</script>

<style scoped>
</style>