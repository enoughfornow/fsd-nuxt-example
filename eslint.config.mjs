import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    // Здесь можно указать опции для @antfu/eslint-config
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
    rules: {
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 1,
          multiline: 1,
        },
      ],
    },
  }),
  // необходимо подумать как добавить проверки unocss
  // Здесь можно добавить другие правила, если нужно
)
