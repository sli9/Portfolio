import React from "react";
import style from "./Skill.module.scss"

type PropsType = {
    title: string
    description: string
    children: React.ReactNode
}

const Skill = (props: PropsType) => {
    return <div className={style.skillBlock}>
        <div className={style.icon}>
            {props.children}
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
}

export default Skill;