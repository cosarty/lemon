### [Switch Props](https://vue.miaya.art/zh-cn/components/switch#switchprops)

| 属性               | 描述             | 类型          | 可选值                               | 默认     |
| :----------------- | :--------------- | :------------ | :----------------------------------- | :------- |
|                    |                  |               |                                      |          |
| **v-model**        | 切换状态对应的值 | `any`         | `-`                                  | `-`      |
| **checked-value**  | 选中时对应的值   | `any`         | `-`                                  | `true`   |
| **inactive-value** | 未选中时对应的值 | `any`         | `-`                                  | `false`  |
| **size**           | 开关大小         | `string`      | `'mini', 'small', 'medium', 'large'` | `medium` |
| **disabled**       | 禁用交互         | `boolean`     | `'true','false'`                     | `false`  |
| **change**         | 开关事件         | `SwitchEvent` | `-`                                  | `-`      |

| active-color   | switch的值为 `on` 时的颜色                             | string  | —    | #409EFF |
| -------------- | ------------------------------------------------------ | ------- | ---- | ------- |
| inactive-color | switch的值为 `off` 的颜色                              | string  | —    | #C0CCDA |
| inline-prompt  | 无论图标或文本是否显示在点内，只会呈现文本的第一个字符 | boolean | —    | false   |

