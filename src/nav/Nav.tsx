import React, {useEffect, useState} from "react";
import style from "./Nav.module.scss"

const Nav = () => {

    const [stickyStyle, setStickyStyle] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', stickyNav)

        return () => {
            window.addEventListener('scroll', stickyNav)
        }
    }, [])

    const stickyNav = () => {
      if (window !== undefined) {
          let windowHeight = window.scrollY
          console.log(window.location.hash)
          windowHeight >= 500 ? setStickyStyle(true) : setStickyStyle(false)
      }
    }

    return <div className={`${stickyStyle ? `${style.nav} ${style.scrolled}` : style.nav}`} >
        <ul className={style.navList}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </div>
}

export default Nav;