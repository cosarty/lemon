

export const modalProps = {
  modelValue: { type: Boolean, default: false },
  title: {
    type: String
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  width: {
    type: [Number, String],
    default: 400
  },
  maskCloseClick: {
    type: Boolean,
    default: true
  },
  appendTo: {
    type: String
  }
}

export const modalEmit = {
  'update:modelValue': (modelValue: boolean): boolean => typeof modelValue === 'boolean',
  close: () => true,
  confirm: () => true
}