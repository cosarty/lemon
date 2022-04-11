### [Select Props](https://vue.miaya.art/zh-cn/components/select#selectprops)

| 属性        | 描述         | 类型                  | 可选值 | 默认    |
| :---------- | :----------- | :-------------------- | :----- | :------ |
| modelValue  | 选择器的值   | `'string','string[]'` | `-`    | `-`     |
| placeholder | 占位文本内容 | `string`              | `-`    | `-`     |
| multiple    | 是否支持多选 | `Boolean`             | `-`    | `false` |

| width | 设置组件宽度 | `string` | `-` | `initial` |
| clearable | 是否展示移除图标 | `Boolean` | `-` | `true` |
| disabled | 是否禁用交互 | `Boolean` | `-` | `false` |
| change | 选项被选中所触发的事件 | `(e)=>void` | `-` | `-` |

### [Option Props](https://vue.miaya.art/zh-cn/components/select#optionprops)

| 属性     | 描述           | 类型      | 可选值 | 默认    |
| :------- | :------------- | :-------- | :----- | :------ |
| value    | 唯一鉴别值     | `string`  | `-`    | `-`     |
| label    | 展示的文本内容 | `string`  | `-`    | `-`     |
| disabled | 是否禁用交互   | `Boolean` | `-`    | `false` |

### [NormalSizes](https://vue.miaya.art/zh-cn/components/select#normalsizes)

| 类型 可选值 |                                      |
| :---------- | :----------------------------------- |
| NormalSizes | `'mini', 'small', 'medium', 'large'` |
