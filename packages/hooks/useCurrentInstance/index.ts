/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'

const useCurrentInstance = (): Record<string, any> => {
  const { appContext } = getCurrentInstance() as unknown as ComponentInternalInstance
  const globalProperties = appContext.config.globalProperties
  return globalProperties
}

export { useCurrentInstance }