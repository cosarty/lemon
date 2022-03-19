import { unref } from 'vue'
import type { Ref } from 'vue'
export type UseTimeOutOptions = {
  stop: () => void,
  start: () => void
}

export type DelayType = number | Ref<number>


const useTimeOut = (cb: (...arg: unknown[]) => void, delay: DelayType): UseTimeOutOptions => {
  let timer: any = null
  const clear = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  const start = (...arg: unknown[]) => {
    clear()
    timer = setTimeout(() => {
      timer = null
      cb(...arg)

    }, unref(delay))
  }
  start()
  const stop = () => {
    clear()
  }
  return {
    stop,
    start
  }
}


export { useTimeOut }



