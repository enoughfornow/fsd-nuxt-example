<script setup lang="ts">
interface IProps {
  error: {
    statusCode: number
    message: string
  }
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="flex flex-col justify-center h-100vh">
    <iframe
      src="https://giphy.com/embed/QfPdIVqn41bag"
      pointerEvents="none"
      frameBorder="0"
      allowFullScreen
    />
    <p class="font-size-20 text-center text-red m-0 p-0">
      {{ props.error.statusCode }}
    </p>
    <p class="text-center m-0 p-0">
      {{ props.error.message }}
    </p>
  </div>
</template>
