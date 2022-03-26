import { PropType, InjectionKey } from 'vue'

type radioSizetype = 'medium' | 'small' | 'small'

export const radioBasicProps = {
  modelValue: {
    type: [Boolean, Number, String],
    default: false
  },
  disabled: {
    type: [Boolean],
    default: false
  }
}

export const radioProps = {
  ...radioBasicProps,
  size: {
    type: String as PropType<radioSizetype>,
    default: 'small'
  },
  value: {
    type: [Boolean, Number, String]
  }
}



export const radioGroupProps = {
  ...radioBasicProps,
  size: {
    type: String as PropType<radioSizetype>,
    default: 'small'
  },
  usecol: {
    type: Boolean,
    default: false
  }
}

export const radioEmit = {
  'update:modelValue': () => true,
  change: (val: string | number | boolean): boolean => ['string', 'number', 'boolean'].includes(typeof val)

}

export const radioGroupKey = Symbol('radiogroup') as InjectionKey<Partial<typeof radioBasicProps> & { parenValue?: unknown, radioGroupChangeHanle: (val?: Pick<typeof radioBasicProps, 'modelValue'>) => void }>

