import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    // Здесь можно указать опции для @antfu/eslint-config
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
  }),
  // необходимо подумать как добавить проверки unocss
  // Здесь можно добавить другие правила, если нужно
)
