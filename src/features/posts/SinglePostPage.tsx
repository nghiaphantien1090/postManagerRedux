import react from 'react'
import React from "react";
import style from '../style.module.scss'
import clsx from "clsx";
import { ReactionButton } from "./ReactionButtons";
import { Post } from "../../type";
import { userStore } from "../users/usersSlice";
import { selectUserById } from "../users/usersSlice";
import { useGetPostQuery } from '../api/apiSlice';
import el from 'date-fns/esm/locale/el/index.js';
import { Params } from 'react-router-dom';
import { Props } from '../../type';
import { useParams } from 'react-router-dom';
import { postParams } from '../../type';
export default function SinglePostPage() {
    const { postId } = useParams<postParams>() as postParams
    const { data: post } = useGetPostQuery(postId)
    const stateUsers = userStore.getState()

    return (

        post ?
            <div>
                <div className={clsx(style.container)}>

                <div key={post.id} className={clsx(style.postExcerpt)}>
                    <h3 >
                        {post.title}
                    </h3>
                    <div className={clsx(style.my1)}>
                        <span>by {selectUserById(stateUsers, post.user)?.name}</span>&nbsp;&nbsp;
                        <i> about 2 hours ago</i>
                    </div>
                    <div> 
                        <p className={clsx(style.overflowVisible)}>{post.content}</p>
                    </div>
                    <ReactionButton reactions={post.reactions} />
                    <div className={clsx(style.btnViewPost)}>
                        Edit Post
                    </div>
                </div>
                </div>
            </div>
            :
            
            <div>

            Loading
            </div>

    )
}
