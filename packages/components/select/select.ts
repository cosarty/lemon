import { turthProps, unknowProps, NumericProps, StringProps } from '../utils'
import { PropType, InjectionKey, Ref } from 'vue'


export const selectDropDownProps = {
  visible: turthProps(true),
  width: NumericProps(0),
  prentRef: {
    type: Object as PropType<HTMLDivElement>,
    require: true
  }

}

export const selectDropDownEmit = {
  'update:visible': (val: boolean): val is boolean => typeof val === 'boolean'
}

export const selectProps = {
  modelValue: unknowProps,
  multiple: turthProps(false),
  clearable: turthProps(false),
  width: NumericProps(160),
  placeholder: StringProps('请输入'),
  disabled: turthProps(false)
}


export const selectOptionProps = {
  lable: StringProps<string | null>(null),
  disabled: turthProps(false),
  value: unknowProps
}


export type dependType = {
  lable: string,
  value: any
}

export type injectKeyType = {
  updateDepends: (val: dependType) => void,
  readonly prentValue: Ref<unknown>,
  updatePrentValue: (val: any) => void,

}


export const selectKey = Symbol('select') as InjectionKey<injectKeyType>