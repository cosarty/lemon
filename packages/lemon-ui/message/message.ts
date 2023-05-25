import { PropType, ExtractPropTypes } from 'vue'


export type messageType = 'waring' | 'success' | 'error' | 'info' | 'default'

export const messageProps = {
  message: { type: [String, Number] },
  type: {
    type: String as PropType<messageType>,
    default: 'default'
  },
  duration: {
    type: Number,
    default: 3000
  },
  showClose: {
    type: Boolean,
    default: true
  },
  center: {
    type: Boolean,
    default: false
  },
  offset: {
    type: Number,
    default: 20
  },
  id: {
    type: Number,
    require: true
  },
  zIndex: {
    type: Number
  },
  onClose: {
    type: Function as PropType<() => void>
  }
}

export const messageEmit = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  destory: () => true
}

export type MessageProps = ExtractPropTypes<typeof messageProps>

export type MessageOptions = Partial<Omit<MessageProps, 'id' | 'zIndex'>>


export type MessageEmit = typeof messageEmit