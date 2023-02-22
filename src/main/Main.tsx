import React from "react";
import style from "./Main.module.scss"
import container from "../common/styles/ContainerStyle.module.scss"
import BGImage from "../assets/images/mainBackground.jpg"
import mainPhoto from "../assets/images/mainPhoto.jpg"
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-tilt'

const Main = () => {
    return <section id={'home'} className={style.mainBlock} style={{backgroundImage: `url(${BGImage})`}}>
        <div className={container.container}>
            <div className={style.text}>
                <p>Hello, I'm</p>
                <ReactTypingEffect
                    text={['Selilo Andrey', 'Front-end developer']}
                    className={style.typingText}
                    eraseSpeed={100}
                    typingDelay={30}
                />
                <div className={style.downloadBtn}>
                    <a href={`${window.location.origin}/Selilo_FE_DEV_CV.pdf`} download>Download CV</a>
                </div>
            </div>
            <div className={style.photo}>
                 <Tilt options={{max: 25}}><img src={mainPhoto} alt={'photo'}/></Tilt>
            </div>
        </div>
    </section>
}

export default Main;