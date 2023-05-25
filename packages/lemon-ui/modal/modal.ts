

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
    type: String,
    default: 'body'
  },
  showClose: {
    type: Boolean,
    default: false
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  cancel: {
    type: String,
    default: '取消'
  },
  done: {
    type: String,
    default: '确认'
  },
  content: {
    type: String,
    default: ''
  }
}

export const modalEmit = {
  'update:modelValue': (modelValue: boolean): boolean => typeof modelValue === 'boolean',
  close: (): boolean => true,
  confirm: (): boolean => true
}

export type ModalOptions = Partial<Omit<typeof modalProps, 'destroyOnClose' | 'maskCloseClick' | 'appendTo' | 'modelValue'>>