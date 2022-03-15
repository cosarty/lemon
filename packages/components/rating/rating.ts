

export const ratingProps = {
  modelValue: Number,
  disabled: Boolean,
  max: Number,
  texts: {
    type: Array
  },
  showText: Boolean

}





export const ratingEmit = {
  change: (value: number) => typeof value === 'number',
  'update:modelValue': (modelValue: number) => typeof modelValue === 'number'
}