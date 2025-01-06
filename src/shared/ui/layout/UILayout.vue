<script setup lang="ts">
const classes = {
  header: 'bg-gray-500 h-100px',
  main: 'bg-gray-100 h-400px',
  footer: 'bg-gray-500 h-100px',
};
</script>

<template>
  <header :class="classes.header">
    <slot name="header" />
  </header>
  <main :class="classes.main">
    <slot />
  </main>
  <footer :class="classes.footer">
    <slot name="footer" />
  </footer>
</template>
