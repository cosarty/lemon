import { PropType } from 'vue'


export const numericType = [Number, String]

export const turthProps = (defaultVal: boolean) => ({
  type: Boolean,
  default: defaultVal
})

export const unknowProps = {
  type: null as unknown as PropType<unknown>
}

export const NumberProps = <T>(defaultVal: T) => ({
  type: Number,
  default: defaultVal
})

export const NumericProps = <T>(defaultVal: T) => ({
  type: numericType,
  default: defaultVal
})
export const StringProps = <T>(defaultVal: T) => ({
  type: String as unknown as PropType<T>,
  default: defaultVal
})

export const ArrayProps = <T>() => ({
  type: Array as unknown as PropType<T[]>,
  default: () => []
})


export const requireProps = <T>(type: T) => ({
  type,
  require: true
})





