---
editLink: true
sidebar : false
---

# 测试

## 学习 {#my-anchor}

:tada: :100:

{{ 1+1 }}

<span v-for="i in 3" >{{ i }}</span>


<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
const data = useData()
console.log('data: ', data);
const count = ref(0)
</script>


The count is: {{ count }}

<button  @click="count++">Increment</button>

```js
// line-numbers is enabled
const a = name
Hello {{ 1 + 1 }} // [!code focus]
```

<<< @/snippet.js#snippet{1}

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

<!-- <Wave /> -->

[跳转](./api-examples)