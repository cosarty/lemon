/* eslint-disable @typescript-eslint/ban-types */
import { turthProps, ArrayProps } from '../utils'
import { InjectionKey, ExtractPropTypes } from 'vue'

export const checkboxGroupProps = {
  modelValue: ArrayProps(),
  disabled: turthProps(false)
}


export const checkboxGroupEmit = ['update:modelValue', 'change']

export const checkBoxGroupKey = Symbol('checkgroup') as InjectionKey<Partial<{ setPrentValue: (v: unknown) => void, props?: ExtractPropTypes<typeof checkboxGroupProps> }>>