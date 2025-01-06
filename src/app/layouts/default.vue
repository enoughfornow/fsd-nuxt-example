<script setup lang="ts">
import { UILayout } from '@/ui';
</script>

<template>
  <UILayout>
    <template #header>
      <h1>Default Layout header</h1>
      <slot name="default-header" />
    </template>
    <h1>Default Layout main</h1>
    <slot name="default-main" />
    <template #footer>
      <h1>Default Layout footer</h1>
      <slot name="default-footer" />
    </template>
  </UILayout>
</template>
