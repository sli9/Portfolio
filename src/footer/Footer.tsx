import React from "react";
import style from "./Footer.module.css"
import container from "../common/styles/ContainerStyle.module.css"

type PropsType = {
    title: string
    description: string
    img: string
}

const Footer = (props: PropsType) => {
    return <div className={`${style.myWorkBlock} ${container.container}`}>

    </div>
}

export default Footer;