<script setup lang="ts">
import { VExample } from 'entities/example';
import { FExample } from 'features/example';

// в виджете мы можем выполнить запрос и результат передать в модель(VExample) пропсами для отображения
// либо в фичу(FExample) передать пропсами необходимые данные полученные с сервера при рендере(например id)
</script>

<template>
  <FExample />
  <VExample />
</template>
