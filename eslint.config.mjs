import antfu from '@antfu/eslint-config';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu({
    // Здесь можно указать опции для @antfu/eslint-config
    typescript: true,
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
    rules: {
      'style/object-curly-newline': ['error', {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      }],
      'style/semi': ['error', 'always'],
      'style/indent': ['error', 2, {
        ArrayExpression: 1,
        ObjectExpression: 1,
      }],
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
);
