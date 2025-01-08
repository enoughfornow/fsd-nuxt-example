// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  // errorPage: 'src/error.vue', вроде можно явно указать путь к этому компоненту
  alias: {
    '@': '~/shared',
    'app': '~/app',
    'entities': '~/entities',
    'widgets': '~/widgets',
    'features': '~/features',
  },
  imports: {
    dirs: ['./shared/composables'],
  },
  dir: {
    layouts: './app/layouts',
    pages: './pages',
  },
  modules: ['@nuxt/eslint', '@unocss/nuxt', '@pinia/nuxt'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  // Это рекомендуемый способ добавления глобальных стилей в проектах Nuxt.
  // Использование nuxt.config.ts для импорта глобальных стилей имеет несколько преимуществ:
  // Централизованное управление: все глобальные стили определены в одном месте, что упрощает их поддержку и обновление.
  // Оптимизация производительности: Nuxt может лучше оптимизировать загрузку стилей, когда они определены в конфигурации.
  // Последовательность: стили применяются ко всему приложению единообразно.
  css: [
    '@unocss/reset/sanitize/sanitize.css',
    '@unocss/reset/sanitize/assets.css',
  ],
});
