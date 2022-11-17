import React from "react";
import style from "./Nav.module.scss"

const Nav = () => {
    return <div className={style.nav}>
        <ul className={style.navList}>
            <li><a href='#'>Главная</a></li>
            <li><a href='#'>Проекты</a></li>
            <li><a href='#'>Скилы</a></li>
            <li><a href='#'>Контакты</a></li>
        </ul>
    </div>
}

export default Nav;