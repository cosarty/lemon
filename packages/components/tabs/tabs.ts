import { StringProps, NumericProps, turthProps } from '../utils'
import { InjectionKey, Ref, ExtractPropTypes } from 'vue'

export type placement = 'top' | 'left' | 'right'


export type positionType = 'left' | 'right' | 'center'

export type animationType = 'fading' | 'sliding'

export const tabsProps = {
  active: NumericProps(0),
  activeColor: StringProps("#409EFF"),
  border: turthProps(true),
  tabPostision: StringProps<positionType>('left'),
  animation: StringProps<animationType>('fading')
}
export const tabProps = {
  name: NumericProps(undefined),
  title: StringProps(undefined),
  disabled: turthProps(false)
}

export type keyType = string | number

export const checkKey = (val: keyType): boolean => ["string", "number"].includes(typeof val)


export type mountTabType = {
  key?: number | string
  title?: string
}

export const tabsEmit = {
  'update:active': checkKey,
  'change': checkKey
}

export type tabPropsType = Partial<ExtractPropTypes<typeof tabProps>>


type TabkeyType = {
  transmitTab: (info: tabPropsType, cb?: (idx: number) => void) => void,
  destoryKey: (key?: keyType) => void,
  currentActive: Ref<keyType>
}


export const tabsKey = Symbol('tabs') as InjectionKey<TabkeyType>