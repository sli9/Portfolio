import React from "react";
import style from "./Title.module.scss"

type PropsType = {
    text: string
    bgtext: string
}

const Title = ({text, bgtext}: PropsType) => {

    return <div className={style.titleBlock}>
        <h2 className={style.title}>{bgtext}</h2>
        <p>{text}</p>
    </div>

}

export default Title