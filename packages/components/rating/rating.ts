


export const ratingProps = {
  modelValue: { type: Number, default: 0 },
  disabled: Boolean,
  max: Number,
  texts: {
    type: Array
  },
  showText: Boolean

}





export const ratingEmit = {
  change: (value: number): boolean => typeof value === 'number',
  'update:modelValue': (modelValue: number): boolean => typeof modelValue === 'number'
}