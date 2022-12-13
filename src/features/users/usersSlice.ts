import { configureStore, createEntityAdapter, createSelector, } from '@reduxjs/toolkit'
import { User } from '../../type'
import { apiSlice } from '../api/apiSlice'
import { createSlice } from '@reduxjs/toolkit'

const usersAdapter = createEntityAdapter<User>({
  selectId: user => user.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
})

const userSlice = createSlice(
  {
    name: 'users',
    initialState: usersAdapter.getInitialState(),
    reducers: {
      usersReceived(state, action) {
        usersAdapter.setAll(state, action.payload)
      }
    }
  }
)
export const userStore = configureStore({
  reducer: {
    users: userSlice.reducer
  }
})
export type RootState = ReturnType<typeof userStore.getState>
const { usersReceived } = userSlice.actions
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      transformResponse: (result: User[]) => {
        userStore.dispatch(usersReceived(result))
        return result
      }
    }),
  }),
})
//Select user by id
const usersSelector = usersAdapter.getSelectors<RootState>(state=>state.users)
export const selectAllUSers=(state:RootState) => usersSelector.selectAll(state)
export const selectUserById =(state:RootState,id:string)=> usersSelector.selectById(state,id)
export const createSelectAllUsers= createSelector(selectAllUSers,(users:User[])=>{  console.log('re-select');return users})
export const { useGetUsersQuery } = extendedApiSlice
