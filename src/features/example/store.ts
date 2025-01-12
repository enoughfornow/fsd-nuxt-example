import type { types } from 'entities/example';
import { api } from 'entities/example';

export const useExampleStore = defineStore('example', () => {
  // state
  const count = ref(0);
  const name = ref('Eduardo');
  const serverData = ref<types.TExample[]>([]);
  const isLoading = ref(false);

  // getters
  const doubleCount = computed(() => count.value * 2);

  // actions
  function increment() {
    count.value++;
  }

  // Добавление уникального ключа имеет несколько преимуществ:
  // Кэширование: Nuxt использует этот ключ для кэширования результатов.
  // Если вы вызываете useAsyncData с тем же ключом в другом месте вашего приложения,
  // Nuxt может вернуть кэшированные данные вместо повторного выполнения запроса.
  // Дедупликация: Если несколько компонентов запрашивают одни и те же данные одновременно,
  // Nuxt выполнит только один запрос и вернет результат всем компонентам.
  // Обновление данных: Вы можете использовать этот ключ для принудительного обновления данных с помощью refreshNuxtData(key).

  async function getServerData(id: number) {
    const { data: serverData, error } = await useAsyncData(
      `example-${id}`, // уникальный ключ, при использовании useAsyncData необходим, для useFetch можно не указывать
      () => api.getExample(id),
    );

    // Теперь serverData, isLoading и error - это реактивные ссылки,
    // которые автоматически обновляются

    if (error.value) {
      // Обработка ошибки
      console.error('Error in getServerData:', error.value);
    }

    // Логирование, если необходимо
    if (serverData.value) {
      console.log('Data fetched successfully:', serverData.value);
    }
  }

  return {
    count,
    name,
    serverData,
    doubleCount,
    increment,
    getServerData,
  };
});
