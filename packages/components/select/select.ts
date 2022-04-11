import { turthProps, numericType } from '../utils'
import { PropType } from 'vue'


export const selectDropDownProps = {
  visible: turthProps(true),
  width: numericType,
  prentRef: {
    type: Object as PropType<HTMLDivElement>,
    require: true
  }

}

export const selectDropDownEmit = {
  'update:visible': (val: boolean): val is boolean => typeof val === 'boolean'
}