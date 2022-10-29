import React from "react";
import style from "./Title.module.scss"

type PropsType = {
    text: string
}

const Title = ({text}: PropsType) => {

    return <h2 className={style.title}>{text}</h2>

}

export default Title