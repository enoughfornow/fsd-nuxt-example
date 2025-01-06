import {
  defineConfig,
  presetUno,
  presetWind,
} from 'unocss';

export default defineConfig({
  // ваши настройки UnoCSS
  // в NuxtUI под капотом используется unocss, надо изучить и возможно безопасно внедрить
  presets: [
    // https://unocss.dev/presets
    presetUno(),
    presetWind(),
  ],
  rules: [
    // https://unocss.dev/config/rules
    ['w-min-content', { width: 'min-content' }],
    ['w-max-content', { width: 'max-content' }],
  ],
});
