import React from "react";
import style from "./Main.module.css"
import container from "../common/styles/ContainerStyle.module.scss"
import BGImage from "../assets/images/mainBackground.jpg"

const Main = () => {
    return <section id={'home'} className={style.mainBlock} style={{backgroundImage: `url(${BGImage})`}}>
        <div className={container.container}>
            <div className={style.text}>
                <h1>Я Селило Андрей</h1>
            </div>
            <div className={style.photo}>

            </div>
        </div>
    </section>
}

export default Main;