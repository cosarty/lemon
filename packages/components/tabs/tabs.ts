import { StringProps, NumericProps, turthProps } from '../utils'

export type placement = 'top' | 'bottom' | 'left' | 'right'

export type tabsType = "card" | "line"

export type positionTYpe = 'left' | 'right' | 'center'

export type animationType = 'fading' | 'sliding'

export const tabsProps = {
  active: NumericProps(0),
  placement: StringProps<placement>('top'),
  activeColor: StringProps("#409EFF"),
  type: StringProps('card'),
  border: turthProps(false),
  tabGutter: NumericProps(0),
  tabPostision: StringProps<positionTYpe>('left'),
  animation: StringProps<animationType>('sliding')
}
export const tabProps = {
  key: NumericProps(null),
  title: StringProps(null),
  disabled: turthProps(false)
}

export type keyType = string | number

export const checkKey = (val: keyType): boolean => ["string", "number"].includes(typeof val)


export const tabsEmit = {
  'update:active': checkKey,
  'change': checkKey
}