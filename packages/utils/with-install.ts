import type { App, Plugin } from 'vue'


export type WithInstall<T> = T & Plugin

export const withInstall = <T>(component: T): T => {


  (component as WithInstall<T>).install = (app: App): void => {
    const { name } = component as Record<string, unknown>

    if (name)
      app.component(name as string, component)
  }

  return component

}