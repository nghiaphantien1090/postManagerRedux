import React from "react";
import style from '../style.module.scss'
import clsx from "clsx";
import { ReactionButton } from "./ReactionButtons";
import { useSelector } from "react-redux";

function PostList() {

    return (
        <>
            <h1 className={clsx(style.my1)}>
                Post List
            </h1>
            <div className={clsx(style.postExcerpt)}>
                <h3 >
                    perferendis adipisci perferendis{1}
                </h3>
                <div className={clsx(style.my1)}>
                <span>by Greg Marquardt</span> <i>about 2 hours ago</i>
                </div>
                <div className={clsx(style.postContent)}>
                    <p>Ut animi ex facere veritatis dolorum fuga doloremque. Debitis sunt ipsam. Consequuntur expedita amet</p>
                </div>
                <ReactionButton/>
            </div>
        </>
    )
}
export default PostList