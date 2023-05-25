import { createVNode, ref, render } from 'vue'
import modalControl from './modal.vue'
import type { ModalOptions } from './modal'

const modalCall = (options: ModalOptions) => {

  if (typeof options !== 'object') return
  const visible = ref<boolean>(true)

  console.log('fsd')

  const props = {
    modelValue: true,
    ...options
  }


}


export default modalCall