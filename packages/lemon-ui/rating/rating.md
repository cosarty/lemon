### [Rating Props](https://vue.miaya.art/zh-cn/components/rating#ratingprops)

| 属性          | 描述                                                                                                                            | 类型          | 可选值           | 默认    |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------ | :------------ | :--------------- | :------ |
| colors        | icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色 | array/object  |                  |         |
| **texts**     | 辅助文字                                                                                                                        | `array`       | -                |         |
| **show-text** | 是否显示辅助文字                                                                                                                | boolean       |                  |         |
| icon-classes  | 设置不同分段的图标                                                                                                              | array/object  |                  |         |
| **icon**      | 指定评分的图标                                                                                                                  | `Element`     | `-`              | `-`     |
| **max**       | 指定评分的最大值                                                                                                                | `number`      | `-`              | `5`     |
| **v-model**   | 评分的值                                                                                                                        | `number`      | `-`              | `0`     |
| **disable**   | 设置只读                                                                                                                        | `boolean`     | `'true','false'` | `false` |
| **change**    | Rating 的值变化事件                                                                                                             | `RatingEvent` | `-`              |         |
