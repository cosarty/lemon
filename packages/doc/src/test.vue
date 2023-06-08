<template>
  <div>
   测试哈哈哈
  </div>
  <button @click="count++">{{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<style scoped>

</style>