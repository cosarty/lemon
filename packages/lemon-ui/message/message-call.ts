import { createVNode, render, VNode } from 'vue'
import messageControl from './message.vue'
import type { MessageOptions, MessageProps } from './message'


const messageInsitance: VNode[] = []
let deep = 0
let zIndex = 10000




const messageCall = (options: MessageOptions | string = {}) => {
  // if (typeof options === 'object' && messageInsitance.length) {
  //   // 
  // }

  if (typeof options === 'string') {
    options = { message: options }
  }

  let verticalOffset = options.offset || 20

  messageInsitance.forEach(vm => {
    verticalOffset += (vm.el?.offsetHeight || 40) + 16
  })

  const id = ++deep
  const props: Partial<MessageProps> = {
    id,
    zIndex: ++zIndex,
    offset: verticalOffset,
    ...options,
    onClose: () => { colse(id) }
  }


  // 手动创建一个实例
  const vm = createVNode(messageControl, props, { default: () => props.message ? props.message : null })

  vm.props!.onDestory = () => {
    render(null, container)
  }

  const container = document.createElement('div')

  render(vm, container)

  document.body.append(container.firstElementChild!)


  messageInsitance.push(vm)
}

const colse = (id: number) => {
  const vmIdx = messageInsitance.findIndex(vm => vm.props?.id === id)
  if (vmIdx === -1) return

  const vm = messageInsitance[vmIdx]
  const removeHeight = vm.el?.offsetHeight || 0
  messageInsitance.splice(vmIdx, 1)

  messageInsitance.forEach((vm, index) => {
    if (index < vmIdx) return
    const pos = parseInt(messageInsitance[index].el?.style['top'], 10) - removeHeight - 16
    messageInsitance[index]!.component!.props.offset = pos
  })


}



export default messageCall