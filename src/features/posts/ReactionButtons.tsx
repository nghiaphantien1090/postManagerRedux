import React from "react";
import style from '../style.module.scss'
import clsx from "clsx";
import { Reactions } from "../../type";

export const ReactionButton = function ({reactions}:{reactions:Reactions}) {
    return (
        <div key={reactions.id} className={clsx(style.reactionButtons)}>
            <button className={clsx(style.reactionButton)}>
                👍 <span>{reactions.hooray}</span>
            </button>
            <button className={clsx(style.reactionButton)}>
                 🎉 <span>{reactions.thumbsUp}</span>
            </button>
            <button className={clsx(style.reactionButton)}>
                ❤️ <span>{reactions.heart}</span>
            </button>
            <button className={clsx(style.reactionButton)}>
                🚀 <span>{reactions.rocket}</span>
            </button>
            <button className={clsx(style.reactionButton)}>
                 👀 <span>{reactions.eyes}</span>
            </button>
        </div>
    )
}

