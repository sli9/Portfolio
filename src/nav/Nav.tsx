import React, {useEffect, useState} from "react";
import style from "./Nav.module.scss"

const Nav = () => {

    const [stickyStyle, setStickyStyle] = useState<boolean>(false)

    // useEffect(() => {
    //
    //     const observer = new IntersectionObserver((entries, observer) => {
    //
    //         if (entries[0].target.id !== 'home') {
    //             setStickyStyle(true)
    //         } else setStickyStyle(false)
    //
    //
    //         entries.forEach((entry) => {
    //
    //             let id = entry.target.getAttribute('id')
    //
    //             if (entry.isIntersecting) {
    //                 document.querySelector(`a[href*=${id}]`)?.classList.add(`${style.active}`)
    //             } else {
    //                 document.querySelector(`a[href*=${id}]`)?.classList.remove(`${style.active}`)
    //             }
    //
    //         })
    //     }, {
    //         threshold: 0.5,
    //     })
    //
    //     const sections = document.querySelectorAll('section')
    //     sections.forEach((section) => {
    //         observer.observe(section)
    //     })
    //
    //     return () => {
    //         observer.disconnect()
    //     }
    // }, [])


    useEffect(() => {

        window.addEventListener('scroll', stickyNav)

        return () => {
            window.addEventListener('scroll', stickyNav)
        }
    }, [])


    const stickyNav = () => {
        if (window !== undefined) {

            let windowHeight = window.scrollY
            const sections = document.querySelectorAll('section')

            sections.forEach(s => {
                const sectionHeight = s.offsetHeight
                const sectionTop = s.offsetTop - 90
                const sectionId = s.getAttribute('id')

                if (windowHeight > sectionTop && windowHeight <= sectionTop + sectionHeight) {
                    document.querySelector(`a[href*=${sectionId}]`)?.classList.add(`${style.active}`)
                } else {
                    document.querySelector(`a[href*=${sectionId}]`)?.classList.remove(`${style.active}`)
                }
            })

            windowHeight >= 200 ? setStickyStyle(true) : setStickyStyle(false)
        }
    }

    return <nav className={`${stickyStyle ? `${style.nav} ${style.scrolled}` : style.nav}`}>
        <ul className={style.navList}>
            <li><a href='#home' className={style.active}>Home</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </nav>
}

export default Nav;