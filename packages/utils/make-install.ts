import type { App, Plugin } from 'vue';




export const makeInstall = <T>(components: T): Plugin => {


  const install = (app: App) => {
    (components as unknown as Plugin[]).forEach(c => app.use(c))
  }

  return { install }
}