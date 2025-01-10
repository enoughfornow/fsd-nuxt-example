# Middleware

**Глобальное применение** Если вы хотите, чтобы middleware применялось ко всем маршрутам, добавьте суффикс `.global` к имени файла.
Например:

```
src/
  shared/
    middleware/
      auth.global.ts
```

Этот middleware будет автоматически применяться ко всем маршрутам.

**Применение к конкретным страницам**

В компоненте страницы вы можете использовать `definePageMeta` для указания middleware:

```html
<script setup lang='ts'>
definePageMeta({
  middleware: ['auth']
})
</script>
```

Здесь `auth` - это имя файла middleware без расширения.

**Программное применение**

Вы также можете применять middleware программно с помощью `addRouteMiddleware`

```js
import { addRouteMiddleware } from '#app';
import auth from '~/shared/middleware/auth';

addRouteMiddleware('auth', auth);
```

**Использование в nuxt.config.ts**

Вы можете указать глобальные middleware в конфигурации Nuxt:

```js
export default defineNuxtConfig({
  // ...другие настройки
  router: {
    middleware: ['auth']
  }
});
```
