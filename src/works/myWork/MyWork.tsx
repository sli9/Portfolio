import React from "react";
import style from "./MyWork.module.scss"

type PropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
    link: string
}

const MyWork = (props: PropsType) => {
    return <div className={style.myWorkBlock}>

        <a href={`${props.link}`} target='_blank'>
            <div className={style.image} style={props.style}></div>
        </a>

        <div className={style.myWorkInfo}>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>

    </div>
}

export default MyWork;