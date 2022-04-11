import { unref, CreateComponentPublicInstance, nextTick } from 'vue'
import type { Ref } from 'vue'
import { userEventListener } from '../userEventListener'

type EvTarget = Element | Ref<Element | undefined>

type AwayOption = {
  type: keyof WindowEventMap
}

const defaultAwayOption: AwayOption = {
  type: 'click'
}

/**
 * 监听事件是否在元素上
 * @param el 要监听的元素
 * @param lisitener 事件函数
 * @param option  选项
 */
const useAway = (el: EvTarget, lisitener: EventListener, option: AwayOption = defaultAwayOption): void => {

  const onClick = async (evt: Event) => {
    await nextTick()
    let element = unref(el);


    ('$el' in element!) && (element = (element as unknown as CreateComponentPublicInstance).$el)

    if (element && !element.contains(evt.target as Node)) {
      lisitener(evt)
    }
  }
  userEventListener(option.type, onClick, { event: document })

}

export { useAway }