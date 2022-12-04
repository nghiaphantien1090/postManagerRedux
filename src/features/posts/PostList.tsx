import React from "react";
import style from '../style.module.scss'
import clsx from "clsx";

function PostList() {


    return (
        <>
            <h1 className={clsx(style.my1)}>
                Post List
            </h1>
            <div className={clsx(style.postExcerpt)}>
                <h3 >
                    perferendis adipisci perferendis
                </h3>
                <div className={clsx(style.postContent)}>
                    <p>Ut animi ex facere veritatis dolorum fuga doloremque. Debitis sunt ipsam. Consequuntur expedita amet</p>
                </div>
            </div>
        </>
    )
}
export default PostList