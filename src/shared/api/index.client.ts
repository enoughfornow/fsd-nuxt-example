// import type { paths } from '@/api/v1';
// import { defineNuxtPlugin, navigateTo, useCookie, useRuntimeConfig } from '#app';
// import createClient from 'openapi-fetch';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const accessToken = useCookie('accessToken');

  const createFetchWrapper = (method: string) => {
    return (url: string, options: any = {
    }) => () => {
      let fullUrl = `${config.public.apiBaseUrl}${url}`;

      if (options.params && options.params.path) {
        Object.entries(options.params.path).forEach(([key, value]) => {
          fullUrl = fullUrl.replace(`{${key}}`, value as string);
        });
      }

      return $fetch(fullUrl, {
        method,
        ...options,
        headers: {
          ...options.headers,
          Authorization: accessToken.value,
        },
      });
    };
  };

  return {
    provide: {
      apiClient: {
        get: createFetchWrapper('GET'),
        post: createFetchWrapper('POST'),
        delete: createFetchWrapper('DELETE'),
        put: createFetchWrapper('PUT'),
        patch: createFetchWrapper('PATCH'),
      },
    },
  };
});

// export default defineNuxtPlugin(() => {
//   const config = useRuntimeConfig();
//   const accessToken = useCookie('accessToken');

//   const client = createClient<paths>({
//     baseUrl: config.public.apiBaseUrl,
//     headers: {
//       Authorization: accessToken.value,
//     },
//     async fetch(request: Request) {
//       return useFetch(request.url, {
//         method: request.method as any,
//         body: request.body,
//         headers: request.headers as any,
//         onResponse({ response }) {
//           if (response.status === 401 || response.status === 403) {
//             const currentRoute = useRoute();
//             if (!['/home', '/'].includes(currentRoute.path)) {
//               navigateTo('/');
//             }
//             accessToken.value = null;
//             localStorage.clear();
//           }
//         },
//       });
//     },
//   });

//   return {
//     provide: {
//       apiClient: {
//         get: client.GET,
//         post: client.POST,
//         del: client.DELETE,
//         put: client.PUT,
//         patch: client.PATCH,
//       },
//     },
//   };
// });

// // import { defineNuxtPlugin, navigateTo, useCookie, useRuntimeConfig } from '#app';

// export default defineNuxtPlugin(() => {
//   const config = useRuntimeConfig();
//   const accessToken = useCookie('accessToken');

//   const createFetchWrapper = (method: string) => {
//     return async (url: string, options: any = {
//     }) => {
//       let fullUrl = `${config.public.apiBaseUrl}${url}`;

//       // Заменяем параметры пути
//       if (options.params && options.params.path) {
//         Object.entries(options.params.path).forEach(([key, value]) => {
//           fullUrl = fullUrl.replace(`{${key}}`, value as string);
//         });
//       }

//       const fetchOptions = {
//         method,
//         ...options,
//         headers: {
//           ...options.headers,
//           Authorization: accessToken.value,
//         },
//       };

//       // Удаляем параметры пути из options, чтобы они не попали в query string
//       if (fetchOptions.params && fetchOptions.params.path) {
//         delete fetchOptions.params.path;
//       }

//       return useFetch(fullUrl, {
//         ...fetchOptions,
//         onResponse({ response }) {
//           if (response.status === 401 || response.status === 403) {
//             const currentRoute = useRoute();
//             if (!['/home', '/'].includes(currentRoute.path)) {
//               navigateTo('/');
//             }
//             accessToken.value = null;
//             if (import.meta.client) {
//               localStorage.clear();
//             }
//           }
//         },
//       });
//     };
//   };

//   return {
//     provide: {
//       apiClient: {
//         get: createFetchWrapper('GET'),
//         post: createFetchWrapper('POST'),
//         delete: createFetchWrapper('DELETE'),
//         put: createFetchWrapper('PUT'),
//         patch: createFetchWrapper('PATCH'),
//       },
//     },
//   };
// });
