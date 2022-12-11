import React from "react";
import style from '../style.module.scss'
import clsx from "clsx";
import { ReactionButton } from "./ReactionButtons";
import { useSelector } from "react-redux";
import { Post } from "../../type";
import store from "../../app/store";
import { useGetUsersQuery } from "../api/apiSlice";


function PostList({Posts}:{Posts:Post[]}) {
    const {data:Users=[]}=useGetUsersQuery()

    const {api} = store.getState()

    console.log('api query',api.queries)

    const PostExcept =Posts.map(post=>
    (
        <div key={post.id} className={clsx(style.postExcerpt)}>
            <h3 >
                {post.title}
            </h3>
            <div className={clsx(style.my1)}>
                <span>by</span>
                <span> {Users.find(user => user.id === post.user)?.firstName}</span>
                <i>about 2 hours ago</i>
            </div>
            <div className={clsx(style.postContent)}>
                <p>{post.content}</p>
            </div>
            <ReactionButton reactions={post.reactions} />
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