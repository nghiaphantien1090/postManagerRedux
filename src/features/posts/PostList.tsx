import React from "react";
import style from '../style.module.scss'
import clsx from "clsx";
import { ReactionButton } from "./ReactionButtons";
import { useSelector } from "react-redux";
import { Post } from "../../type";
import store from "../../app/store";

function PostList({Posts}:{Posts:Post[]}) {
    
    console.log(store.getState())
    const PostExcept =Posts.map(post=>
    (
            <div className={clsx(style.postExcerpt)}>
                <h3 >
                   {post.title} 
                </h3>
                <div className={clsx(style.my1)}>
                <span>by Greg Marquardt</span> <i>about 2 hours ago</i>
                </div>
                <div className={clsx(style.postContent)}>
                    <p>{post.content}</p>
                </div>
                <ReactionButton/>
            </div>
    )
    )
    console.log(PostExcept)
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