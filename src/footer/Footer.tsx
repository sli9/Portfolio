import React from "react";
import style from "./Footer.module.scss"


const Footer = () => {
    return <footer className={style.footer}>
        <div className={style.container}>
            <div className={style.footerText}>
                <p>© 2023. All rights reserved.</p>
            </div>
        </div>
    </footer>
}

export default Footer;