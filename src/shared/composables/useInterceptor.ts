// Interceptors (перехватчики) в Nuxt обычно реализуются на уровне плагина или в пользовательском composable,
// который оборачивает функциональность HTTP-клиента. В контексте Nuxt и использования $fetch или useFetch,
// вот как вы можете реализовать interceptors:
// Создайте плагин для настройки глобальных interceptors:

// plugins/api.ts

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    const { $fetch } = nuxtApp;

    $fetch.create = (defaultOptions = {
    }) => {
      const fetchInstance = (request, options) => {
        const mergedOptions = {
          ...defaultOptions,
          ...options,
        };

        // Request Interceptor
        mergedOptions.onRequest = (ctx) => {
          // Например, добавление токена авторизации
          const token = useCookie('accessToken');
          if (token.value) {
            ctx.options.headers = {
              ...ctx.options.headers,
              Authorization: `Bearer ${token.value}`,
            };
          }
        };

        // Response Interceptor
        mergedOptions.onResponse = (ctx) => {
          // Обработка ответа
          if (ctx.response.status === 401) {
            // Например, перенаправление на страницу входа
            navigateTo('/login');
          }
        };

        // Error Interceptor
        mergedOptions.onResponseError = (ctx) => {
          // Обработка ошибок
          console.error('API Error:', ctx.error);
        };

        return $fetch(request, mergedOptions);
      };

      return fetchInstance;
    };
  });
});
// Используйте этот настроенный экземпляр $fetch в вашем API-клиенте:

// composables/useApiClient.ts
export function useApiClient() {
  const nuxtApp = useNuxtApp();
  const config = useRuntimeConfig();

  const apiClient = nuxtApp.$fetch.create({
    baseURL: config.public.apiBaseUrl,
  });

  return {
    get: (url, options) => apiClient(url, {
      method: 'GET',
      ...options,
    }),
    post: (url, options) => apiClient(url, {
      method: 'POST',
      ...options,
    }),
    // Добавьте другие методы по необходимости
  };
}
// Теперь вы можете использовать этот API-клиент в ваших компонентах или сторах:

const { get } = useApiClient();

const { data } = await get('/api/example');
// Этот подход позволяет вам централизованно управлять interceptors для всех HTTP-запросов в вашем приложении.
// Вы можете добавлять логику для обработки токенов, ошибок, логирования и т.д.
