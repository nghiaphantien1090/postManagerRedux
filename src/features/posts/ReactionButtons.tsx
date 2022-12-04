import React from "react";
import style from '../style.module.scss'
import clsx from "clsx";

export const ReactionButton = function () {
    return (
        <div className={clsx(style.reactionButtons)}>
            <button className={clsx(style.reactionButton)}>
                👍 <span>0</span>
            </button>
            <button className={clsx(style.reactionButton)}>
                 🎉 <span>0</span>
            </button>
            <button className={clsx(style.reactionButton)}>
                ❤️ <span>0</span>
            </button>
            <button className={clsx(style.reactionButton)}>
                🚀 <span>0</span>
            </button>
            <button className={clsx(style.reactionButton)}>
                 👀 <span>0</span>
            </button>
        </div>
    )
}

