
export const switchProps = {
  modelValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  disabled: Boolean,
  checkedValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  size: { type: String, default: 'medium' },
  activeColor: { type: String, default: '#409EFF' },
  inactiveColor: { type: String, default: '#C0CCDA' },
  inlinePrompt: {
    type: Boolean,
    default: false,
  }
}


