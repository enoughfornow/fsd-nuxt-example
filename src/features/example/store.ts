export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0);
  const name = ref('Eduardo');

  // getters
  const doubleCount = computed(() => count.value * 2);

  // actions
  function increment() {
    count.value++;
  }
  async function asyncIncrement() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    count.value++;
  }

  return { count, name, doubleCount, increment, asyncIncrement };
});
