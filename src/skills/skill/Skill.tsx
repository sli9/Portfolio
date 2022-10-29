import React from "react";
import style from "./Skill.module.css"

type PropsType = {
    title: string
    description: string
}

const Skill = (props: PropsType) => {
    return <div className={style.skillBlock}>
        <div className={style.icon}></div>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
    </div>
}

export default Skill;