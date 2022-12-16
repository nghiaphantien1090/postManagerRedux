import React from 'react';
import NavBar from './app/NavBar';
import {BrowserRouter as Router,
        Route,
        Routes,
        Navigate,useParams,
        useLocation,
        RouteProps
      } from 'react-router-dom'
import PostList from './features/posts/PostList';
import UsersList from './features/users/UsersList';
import  SinglePostPage  from './features/posts/SinglePostPage';
import NotificationsList from './features/notifications/NotificationsList';
import AddPostForm from './features/posts/AddPostForm';
import style from './App.module.scss'
import clsx from 'clsx';
import { useGetPostsQuery,useGetPostQuery} from './features/api/apiSlice';
import { Post } from './type';
import { postParams } from './type';
function App() {
 const { data:posts=[]
,endpointName
,fulfilledTimeStamp
,status
,isError
,isFetching
,isLoading
,isSuccess
,isUninitialized
,refetch
,requestId
,startedTimeStamp} = useGetPostsQuery()
const {postId}= useParams<keyof postParams>() as postParams
  console.log(posts)
const postJson = JSON.stringify(posts)
console.log(postJson)



  return(
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div className={clsx(style.container)}>
            <AddPostForm />
            <PostList Posts={posts} />
          </div>
        } />
        <Route path="/Users" element={<UsersList />} />
        <Route path="/NotificationsList" element={<NotificationsList />} />
        <Route path={`/posts/:postId`} element={<SinglePostPage/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}
export default App;
