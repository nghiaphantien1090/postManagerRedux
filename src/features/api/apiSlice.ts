import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post,} from '../../type'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/'}),

//  baseQuery: fetchBaseQuery({ baseUrl: 'fakeApi/'}),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
    getPost: builder.query<Post, string>({
      query: (postId) => `posts/${postId}`,

      providesTags: (result, error, arg) => [{ type: 'Post', id: arg }],
    })

  }),
})
export const { useGetPostsQuery,useGetPostQuery} = apiSlice
