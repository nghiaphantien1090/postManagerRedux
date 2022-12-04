import React from "react";
import { useGetPostsQuery } from "../api/apiSlice";
import clsx from "clsx";
import style from "../style.module.scss"

export default function AddPostForm(){
// const post=useGetPostsQuery()
    return(
        <section className={clsx(style.addPostForm)}>
            <div className={clsx(style.container)}>
            <h1>
                Add a new post
            </h1>
            <form>
                <h2>
                    Post title:
                </h2>
                <input type="text" placeholder="What 's on your mind?" />
                <h2>
                    Author:
                </h2>
                <select>
                    <option value="0">name1</option>
                    <option value="1">name2</option>
                    <option value="2">name1</option>
                    <option value="3">name1</option>
                </select>
                <h2>
                    Content:
                </h2>
                <textarea></textarea>
            </form>
            </div>
        </section>
    )
}