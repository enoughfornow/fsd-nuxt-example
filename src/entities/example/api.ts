import type * as types from './types';

const { get } = useRequest();

export default {
  getExample(id: number) {
    return get<types.TExample>(`/example/{id}`, {
      params: {
        path: {
          id,
        },
      },
    });
  },
};
// const { get } = useRequest();

// export default {
//   async getExample(id: number) {
//     const response = await get<types.TExample>(`/example/{id}`, {
//       params: {
//         path: {
//           id,
//         },
//       },
//     });
//     // тут можно добавить кастомный логгер
//     // например log.success('entities/example/api/getExample', response);
//     return response;
//   },
// };
