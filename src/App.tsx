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


function App() {
 const { data:post
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
  console.log('post',isSuccess,post)
  
  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <div className={clsx(style.container)}>
            <AddPostForm /> <PostList />
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
