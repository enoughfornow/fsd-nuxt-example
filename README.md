<!-- eslint-disable no-irregular-whitespace -->
# Архитектура FE

[**Feature-Sliced Design**](https://feature-sliced.design/ru/) (FSD) — это архитектурная методология для проектирования фронтенд-приложений. Проще говоря, это набор правил и соглашений по организации кода. Главная цель этой методологии — сделать проект понятнее и стабильнее в условиях постоянно меняющихся бизнес-требований.

### [​Слои](https://feature-sliced.design/ru/docs/get-started/overview#layers "Прямая ссылка на этот заголовок")

Слои стандартизированы во всех проектах FSD. Не обязательно использовать все слои, но их названия важны. На данный момент их шесть (сверху вниз):

1.  **App***  — всё, благодаря чему приложение запускается — роутинг, точки входа, глобальные стили, провайдеры и т. д.
2.  **Pages**  (страницы) — полные страницы или большие части страницы при вложенном роутинге.
3.  **Widgets**  (виджеты) — большие самодостаточные куски функциональности или интерфейса, обычно реализующие целый пользовательский сценарий.
4.  **Features**  (фичи) —  _повторно используемые_  реализации целых фич продукта, то есть действий, приносящих бизнес-ценность пользователю.
5.  **Entities**  (сущности) — бизнес-сущности, с которыми работает проект, например  `user`  или  `product`.
6.  **Shared***  — переиспользуемый код, особенно когда он отделён от специфики проекта/бизнеса, хотя это не обязательно.

_* — эти слои,  **App**  и  **Shared**, в отличие от других слоев, не имеют слайсов и состоят из сегментов напрямую._

Фишка слоев в том, что модули на одном слое могут знать только о модулях со слоев строго ниже, и как следствие, импортировать только с них.
|Layer|Can use|Can be used by
|--|--|--|
|app |`shared`, `entities`, `features`, `widgets`, `pages`|`-`|
|pages|`shared`, `entities`, `features`, `widgets`|`app`|
|widgets|`shared`, `entities`, `features`|`pages`, `app`|
|features|`shared`, `entities`|`widgets`, `pages`, `app`|
|entities|`shared`|`features`, `widgets`, `pages`, `app`|
|shared|`-`| `entities`, `features`, `widgets`, `pages`, `app`|

# FE Vue SSR Framework

[**Nuxt**](https://nuxt.com)

# CSS

UnoCSS - это атомарный CSS-движок, который оптимизирует использование классов в проекте. Рассмотрим ключевые аспекты:

1. Атомарные классы

UnoCSS создает атомарные (единичные) классы CSS, которые можно переиспользовать во всем проекте.
Это значительно уменьшает размер итогового CSS-файла.

2. Отсутствие конфликтов

Благодаря атомарному подходу, классы UnoCSS не конфликтуют друг с другом.
Каждый класс отвечает за одно конкретное свойство CSS.

3. Специфичность

UnoCSS не нарушает специфичность CSS.
Все атомарные классы имеют одинаковую специфичность,
что упрощает их использование и предсказуемость.

4. Оптимизация

UnoCSS автоматически генерирует только те классы, которые фактически используются в проекте,
что помогает оптимизировать размер итогового CSS.

**Стилизация в компоненте Vue**

Таким образом мы избегаем длинных записей классов, разделяя их на группы

```js
const classes = {
  root: [
    'flex flex-col', // display
    'justify-center items-center', // position
    'border-solid border-black rounded', // border
    'w-max-content', // width
    'p-4 m-0 m-auto', // padding/margin
  ],
  text: 'text-red text-center',
  buttonsContainer: 'flex gap-2 w-full justify-center', // в данном месте классы читаемы, не обязательно разделять
  button: 'w-max-content',
};
```

# Структура компонента Vue с Composition API

**Для обеспечения согласованности и читаемости кода, следуйте этой структуре при создании компонентов Vue с использованием Composition API:**

1. Типизация пропсов и эмитов
2. Определение пропсов и эмитов
3. Стилизация (если используются объекты классов)
4. Реактивные переменные
5. Вычисляемые свойства
6. Методы
7. Хуки жизненного цикла
8. Отслеживание изменений (watch)

```html
<script setup lang="ts">
// типизация пропсов
interface IProps {
  prop: unknown
}
// типизация эмитов(событий)
interface IEmits {
  (e: 'event', payload: unknown): void
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

// стилизация
const classes = {
  root: 'flex flex-col',
};

// реактивная переменная
const reactiveVariale = ref(null);

// импользуем если необходимо кешировать значение или не потерять реактивность
const computedVariable = computed(() => reactiveVariale.value);

// метод
function onClick() {
  console.log('click');
}
// если нужно выполнить какое то действие при монтировании на клиенте
onMounted(() => {
  console.log('mounted');
});
// отслеживание изменений на основании reactiveVariale
watch(reactiveVariale, () => {
  console.log('watch');
});
</script>

<template>
  <div :class="classes.root">
    <h1 @click="emit('event', reactiveVariale)">
      Example Feature
    </h1>
    <button @click="onClick">
      Click
    </button>
  </div>
</template>
```
# State Management

[**Pinia**](https://pinia.vuejs.org/core-concepts/)

**Структура стора Pinia в стиле Composition API**
```js
export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0);
  const name = ref('Eduardo');

  // getters
  const doubleCount = computed(() => count.value * 2);

  // actions
  function increment() {
    count.value++;
  }
  // async actions
  async function asyncIncrement() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    count.value++;
  }

  return {
    count,
    name,
    doubleCount,
    increment,
    asyncIncrement,
  };
});
```

# OpenAPI TS

Необходимо чтобы бекенд генерировал документацию для API через [**Swagger**](https://swagger.io)

[**OpenAPI-fetch**](https://openapi-ts.dev/openapi-fetch/) - это легковесный и типобезопасный клиент для работы с API, который использует вашу схему OpenAPI для автоматической генерации типов и обеспечения правильности запросов. Он идеально подходит для использования в проектах на React, Vue, Svelte и обычном JavaScript, и не влияет на производительность приложения.

**Пример реализации будет позже**
