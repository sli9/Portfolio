import React from "react";
import style from "./Title.module.scss"

type PropsType = {
    text: string
}

const Title = ({text}: PropsType) => {

    return <div className={style.titleBlock}>
        <h2 className={style.title}>{text}</h2>
        <p>{text}</p>
    </div>

}

export default Title