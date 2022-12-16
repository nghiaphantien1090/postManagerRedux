import React from "react";
import style from '../style.module.scss'
import clsx from "clsx";
import { ReactionButton } from "./ReactionButtons";
import { Post } from "../../type";
import { useGetUsersQuery } from "../users/usersSlice";
import { userStore } from "../users/usersSlice";
import { selectUserById } from "../users/usersSlice";
import { Link } from "react-router-dom";
import { useGetPostQuery } from "../api/apiSlice";
import { RouterProviderProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelectAllUsers } from "../users/usersSlice";
function PostList({ Posts }: { Posts: Post[] }) {
    const { data } = useGetUsersQuery()
    const stateUsers = userStore.getState()
    const users  = createSelectAllUsers(stateUsers)
    console.log(JSON.stringify(users))
    const PostExcept = Posts.map(post =>
    (
        <div key={post.id} className={clsx(style.postExcerpt)}>
            <h3 >
                {post.title}
            </h3>
            <div className={clsx(style.my1)}>
                <span>by {selectUserById(stateUsers, post.user)?.name}</span>&nbsp;&nbsp; 
                <i> about 2 hours ago</i>
            </div>
            <div className={clsx(style.postContent)}>
                <p>{post.content}</p>
            </div>
            <ReactionButton reactions={post.reactions} />
            <div className={clsx(style.btnViewPost)}>
                <Link to={`/posts/${post.id}`} >
                     View post
                </Link>
            </div>
        </div>
    )
    )
    return (
        <>
            <h1 className={clsx(style.my1)}>
                Post List
            </h1>
            {PostExcept}
        </>
    )
}
export default PostList