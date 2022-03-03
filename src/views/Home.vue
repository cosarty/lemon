<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" ref="hello">
      <p>dsafsdfgjlsgu</p>
      <template #provid>
        <div><span> 我叫蔡夏柠 </span></div>
      </template>
    </HelloWorld>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const hello = ref<any>(null)

    onMounted(() => {
      // console.log(hello.value.color)
    })

    return { hello }
  },
})
</script>
