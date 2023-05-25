/* eslint-disable @typescript-eslint/no-empty-function */
import { onBeforeUnmount, onMounted, unref, watch } from 'vue'
import type { Ref } from 'vue'
import { useState } from '../useState'


type EvntType = keyof WindowEventMap

export type EvTarget = Ref<EventTarget | undefined> | EventTarget

export type Options = {
  event: EvTarget
} & AddEventListenerOptions

type Remove = () => void


/**
 * 监听事件
 * @param type  事件类型 
 * @param listener  事件函数
 * @param options  事件对象
 */
const userEventListener = (type: EvntType, listener: EventListener, options: Options): void => {

  const { event = window } = options
  const [snapshoot, setSnapshoot] = useState<EventTarget | Element | Window>()

  let remove: Remove = () => { };

  onMounted(() => {
    const element = unref(event)
    if (element) setSnapshoot(element)
  })

  watch(snapshoot, (el) => {

    if (!el) return
    el.addEventListener(type, listener)
    remove = () => { el.addEventListener(type, listener) }
  })


  onBeforeUnmount(remove)

}

export { userEventListener }