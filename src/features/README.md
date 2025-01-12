# src/features - слой с фичами

Фича - это какая то полезная пользователю функция приложения, зачастую такая функция может быть "размазана" по разным страницам, виджетам

Фича содержит в себе взаимодействие различных моделей(src/entities), у фичи может быть свое хранилище для сохранения состояния и взаимодействия с фичей, в фиче могут быть расположены различные компоненты которые касаются этой фичи

У компонентов-фичей префикс `F`, например `FAuth`

Отличие от **widgets**

В `features` данные с сервера можно получить только по действию юзера(обработчику события).

Когда нужно сделать сетевой запрос на основе взаимодействия с пользователем необходимо использовать [`$fetch`](https://nuxt.com/docs/getting-started/data-fetching#fetch). Подробнее в видео [`Nuxt 3. You are using useFetch WRONG!`](https://www.youtube.com/watch?v=njsGVmcWviY)

Это подтверждается в документации Nuxt: Docs > Getting-started > [Data Fetching](https://nuxt.com/docs/getting-started/data-fetching)

useFetch предназначен для использования в setup-функции компонента, плагине или middleware маршрута. Он не предназначен для использования в обработчиках событий.
useFetch следует использовать на уровне setup-функции компонента для начальной загрузки данных.

```html
<script setup lang='ts'>
const userData = ref(null)

async function fetchUserData() {
  userData.value = await $fetch('/api/user-data')
}
</script>

<template>
  <button @click="fetchUserData">Загрузить данные пользователя</button>
  <div v-if="userData">
    <!-- Отображение userData -->
  </div>
</template>
