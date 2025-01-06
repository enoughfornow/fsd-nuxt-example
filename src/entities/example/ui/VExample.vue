<script setup lang="ts">
import { UIButton } from '@/ui';

// стилизация в данном слое может касаться позиционирования, указания размеров или мнипуляций с текстом
const classes = {
  // таким образом мы избегаем длинных записей классов, разделяя их на группы
  root: [
    'flex flex-col',
    'justify-center items-center',
    'border-solid border-black rounded',
    'w-max-content',
    'p-4 m-0 m-auto',
  ],
  text: 'text-red text-center',
  buttonsContainer: 'flex gap-2 w-full justify-center',
  button: 'w-max-content',
};
</script>

<template>
  <div :class="classes.root">
    <h1 :class="classes.text">
      Example ModelView
    </h1>
    <div :class="classes.buttonsContainer">
      <UIButton
        variant="primary"
        :class="classes.button"
      >
        primary
      </UIButton>
      <UIButton
        variant="secondary"
        :class="classes.button"
        @click="navigateTo('/main')"
      >
        to main
      </UIButton>
    </div>
  </div>
</template>
