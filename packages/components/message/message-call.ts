import { createVNode, render } from 'vue'
import messageControl from './message.vue'

const messageCall = () => {



  const vm = createVNode(messageControl)

  const dv = document.createElement('div')

  render(vm, dv)

  document.body.append(dv.firstElementChild!)
}


export default messageCall