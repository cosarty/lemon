import DefaultTheme from 'vitepress/theme';
import './custom.scss';
import { EnhanceAppContext } from 'vitepress';
import Wave from './Wave.vue';
import { AntDesignContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
export default {
  ...DefaultTheme,
  enhanceApp: (ctx: EnhanceAppContext) => {
    ctx.app.component('Wave', Wave);
    ctx.app.component('demo-preview', AntDesignContainer);
  },
};
