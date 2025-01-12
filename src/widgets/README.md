# src/widgets -  слой виджетов

Виджет - это компонент с изолированной бизес-логикой, который можно переиспользовать в разных частях приложения.
Это структура, которая работает "Из коробки" -  то есть просто воткнул куда нужно без лишних манипуляций и виджет отображается.

У виджета могут быть **только пропсы** для кастомизации.
Виджет отдает **только один компонент** во вне, поэтому все виджет реэкспортятся в файле index.ts

Виджет может использовать модели (src/entities) и фичи(src/features)

У компонентов-виджетов префикс `W`, например `WPage`

Отличие от **features**

Получение данных при рендере (initial data fetching)

Для виджетов, которые нуждаются в данных при начальном рендеринге, можно использовать `useFetch` или `useAsyncData`. Эти composables обеспечивают получение данных на стороне сервера (если включен SSR) и предотвращают повторную загрузку данных на клиенте.

Если необходимо на основании полученных при рендере данных делать другие запросы, то можно передать item пропсами в `feature` компонент.

```html
<script setup lang='ts'>
  import { api } from 'entities/example'
  import { FExample, useExampleStore } from 'features/example'

    const store = useExampleStore()
    await store.getExampleList()

    const storeData = computed(() => store.data) // если используем store
    const { data } = await useFetch(() => api.getExampleList()) // если нет необходимости использовать store

</script>

<template>
  <div
  v-for="item in data"
  :key="item.id"
  >
    <FExample :data="item"/>
  </div>
</template>
```
