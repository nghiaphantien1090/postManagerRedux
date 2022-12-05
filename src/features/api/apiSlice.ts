import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../../type'

type PostsResponse = Post[]
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
    endpoints: (builder) => ({
      getPosts: builder.query<Post[],void>({
        query: () => '/posts',
      }),
    }),
  })
  // Export hooks for usage in function components, which are
  // auto-generated based on the defined endpoints
  export const { useGetPostsQuery } = apiSlice