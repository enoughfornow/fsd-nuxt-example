<script setup lang="ts">
import { UIButton } from '@/ui';

const classes = {
  button: 'w-max-content',
};

definePageMeta({
  layout: 'home', // так мы можем указать какой layout будет использоваться для этой страницы
});
</script>

<template>
  <div>
    <h1>Main</h1>
    <UIButton
      :class="classes.button"
      variant="primary"
      @click="navigateTo('/')"
    >
      на главную
    </UIButton>
  </div>
</template>
