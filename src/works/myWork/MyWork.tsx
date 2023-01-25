import React from "react";
import style from "./MyWork.module.scss"

type PropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
    codeLink: string
    siteLink: string
}

const MyWork = (props: PropsType) => {
    return <div className={style.myWorkBlock}>
        <a href={`${props.siteLink}`} target='_blank' rel={"noopener noreferrer"}>
            <div className={style.image} style={props.style}/>
        </a>

        <a href={`${props.codeLink}`} target='_blank'>
            <div className={style.myWorkInfo}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </a>

    </div>
}

export default MyWork;