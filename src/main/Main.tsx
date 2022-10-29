import React from "react";
import style from "./Main.module.css"
import container from "../common/styles/ContainerStyle.module.scss"

const Main = () => {
    return <div className={style.mainBlock}>
        <div className={container.container}>
            <div className={style.text}>
                <h1>Я Селило Андрей</h1>
            </div>
            <div className={style.photo}>

            </div>
        </div>
    </div>
}

export default Main;