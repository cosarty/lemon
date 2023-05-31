import DefaultTheme from 'vitepress/theme';
import './custom.scss';
import { EnhanceAppContext } from 'vitepress';
import Wave from './Wave.vue';
export default {
  ...DefaultTheme,
  enhanceApp: (ctx: EnhanceAppContext) => {
    ctx.app.component('Wave', Wave);
  },
};
