import React from 'react';
import NavBar from './app/NavBar';
import {BrowserRouter as Router,
        Route,
      Routes,
       Navigate} from 'react-router-dom'
import PostList from './features/posts/PostList';
import UsersList from './features/users/UsersList';
import NotificationsList from './features/notifications/NotificationsList';
import AddPostForm from './features/posts/AddPostForm';
import style from './App.module.scss'
import clsx from 'clsx';
import { useGetPostsQuery } from './features/api/apiSlice';
import { data } from 'msw/lib/types/context';
import { Post } from './type';


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
console.log(posts)


  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <div className={clsx(style.container)}>
            <AddPostForm/> 
            <PostList Posts={posts} />
          </div>
        } />
        <Route path="/Users" element={<UsersList />} />
        <Route path="/NotificationsList" element={<NotificationsList />} />
        <Route path="*" element={<Navigate to ="/" />} />
      </Routes> 
    </Router>
  )
}

export default App;
