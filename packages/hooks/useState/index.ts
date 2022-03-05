import { ref, readonly } from 'vue'
import type { UnwrapRef, Ref } from 'vue'


export type setStateAction<S> = S | ((prevState: S) => S)
export type Dispatch<T> = (next: setStateAction<T>) => void


const useState = <T>(value?: T) => {
  const state = ref<T | undefined>(value)

  const dispatch = (next: setStateAction<T>) => {

    const drf = typeof next === 'function' ? (next as (v: T) => T)(state.value as T) : next
    state.value = drf as UnwrapRef<T>
  }

  return [readonly(state), dispatch] as [Ref<T>, Dispatch<T>]
}

export { useState }