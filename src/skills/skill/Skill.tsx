import React from "react";
import style from "./Skill.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faJsSquare} from "@fortawesome/free-brands-svg-icons";

type PropsType = {
    title: string
    description: string
}

const Skill = (props: PropsType) => {
    return <div className={style.skillBlock}>
        <div className={style.icon}>
            <FontAwesomeIcon icon={faJsSquare}/>
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
}

export default Skill;