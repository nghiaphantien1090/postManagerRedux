import React from "react";
import { useGetPostsQuery } from "../api/apiSlice";
import clsx from "clsx";
import style from "../style.module.scss"

export default function AddPostForm(){
// const post=useGetPostsQuery()
    return(
        <section className={clsx(style.container)}>
            AddPostForm
        </section>
    )
}