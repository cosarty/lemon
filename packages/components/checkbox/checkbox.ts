import { StringProps, turthProps, unknowProps } from '../utils'


export const checkboxProps = {
  modelValue: turthProps(false),
  value: unknowProps,
  disabled: turthProps(false),
  bindGroup: turthProps(true),
  lable: StringProps<string | null>(null)
}


export const checkboxEmit = {
  change: (v: boolean) => typeof v === 'boolean',
  'update:modelValue': (v: boolean) => typeof v === 'boolean'

}