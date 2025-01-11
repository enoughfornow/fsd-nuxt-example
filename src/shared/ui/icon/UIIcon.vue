<script setup lang="ts">
import type * as types from './types';
import { defineAsyncComponent } from 'vue';

interface IProps {
  name: types.EIconTypes
  size?: 'sm' | 'md' | 'l'
}

const props = withDefaults(defineProps<IProps>(), {
  size: 'md',
});

const classes = {
  icon: [
    'cursor-pointer hover:color-orange-1',
    {
      'w-4 h-4': props.size === 'sm',
    },
    {
      'w-max-content': props.size === 'md',
    },
  ],
};

const Icon = defineAsyncComponent(
  /// ATTENTION - используется относительный импорт из за особенностей сборщика
  /// https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#imports-must-start-with--or-
  () => import(`../../images/icons/${props.size}/${props.name}.svg`),
);
</script>

<template>
  <Icon :class="classes.icon" />
</template>
