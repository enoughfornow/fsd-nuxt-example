export default function useMultipleToggle(id: number) {
  const state = ref<number[]>([]);
  const isOpened = computed(() => state.value.includes(id));
  function toggle() {
    if (id !== 0) {
      const index = state.value.indexOf(id);
      if (index === -1) {
        state.value.push(id);
      }
      else {
        state.value.splice(index, 1);
      }
    }
  }
  return {
    isOpened,
    toggle,
  };
}
