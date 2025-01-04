<script setup lang="ts">
interface IProps {
  variant: 'primary' | 'secondary'
}
const props = defineProps<IProps>()

// существует несколько кейсов работы с классами
// если надо динамически менять классы, то нужно использовать computed
// надо продумать как добавлять дефолтные классы, возможно просто :class="`${classes.default} ${classes.button}`"

const classes = computed(() => ({
  default: 'cursor-pointer',
  button: {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
  }[props.variant],
}))
</script>

<template>
  <button :class="classes.button">
    <slot />
  </button>
</template>
