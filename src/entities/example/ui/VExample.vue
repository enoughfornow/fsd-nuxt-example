<script setup lang="ts">
import { UIButton } from '@/ui'

// стилизация в данном слое может касаться позиционирования, указания размеров или мнипуляций с текстом
const classes = {
  text: 'text-red',
}
</script>

<template>
  <div>
    <h1 :class="classes.text">
      Example ModelView
    </h1>
    <UIButton variant="primary">
      primary
    </UIButton>
    <UIButton variant="secondary">
      secondary
    </UIButton>
  </div>
</template>
