import { PropType, ExtractPropTypes } from 'vue'


export type messageType = 'waring' | 'success' | 'error' | 'info' | 'default'

export const messageProps = {
  message: { type: [String, Number] },
  type: {
    type: String as PropType<messageType>,
    default: 'default'
  },
  duration: {
    type: Number
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
    type: [Number, String],
    default: 20
  },
  id: {
    type: Number,
    require: true
  }
}

export type MessageProps = ExtractPropTypes<typeof messageProps>