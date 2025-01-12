<script setup lang="ts">
import { VExample } from 'entities/example';

function onClickGetLog() {
  console.log('click');
}
</script>

<template>
  <VExample @event="onClickGetLog" />
</template>
