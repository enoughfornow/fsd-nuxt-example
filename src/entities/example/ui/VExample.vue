<script setup lang="ts">
import { UIButton } from '@/shared/ui'

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
