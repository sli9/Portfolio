import React, {useEffect, useState} from "react";
import style from "./Nav.module.scss"
import {Link} from "react-scroll";

const Nav = () => {

    const [stickyStyle, setStickyStyle] = useState<boolean>(false)
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false)

    useEffect(() => {
        if (window.scrollY >= 200) {
            setStickyStyle(true)
            document.querySelector("nav ul li a")?.classList.remove(style.active)
        } else {
            document.querySelector("nav ul li a")?.classList.add(style.active)
        }
    }, [])


    /*<!--Highlight menu on scroll with IntersectionObserver-->*/

    // useEffect(() => {
    //
    //     const observer = new IntersectionObserver((entries, observer) => {
    //
    //         entries.forEach((entry) => {
    //             let id = entry.target.getAttribute('id')
    //
    //             if (entry.isIntersecting) {
    //                 entry.target.id !== 'home' ? setStickyStyle(true): setStickyStyle(false)
    //
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
    //     }, [])

    /*<!--Highlight menu on scroll with addEventListener-->*/

    // useEffect(() => {
    //
    //     window.addEventListener('scroll', stickyNav)
    //
    //     return () => {
    //         window.addEventListener('scroll', stickyNav)
    //     }
    // }, [])
    //
    //
    // const stickyNav = () => {
    //     if (window !== undefined) {
    //
    //         let windowHeight = window.scrollY
    //         const sections = document.querySelectorAll('section')
    //
    //         sections.forEach(s => {
    //             const sectionHeight = s.offsetHeight
    //             const sectionTop = s.offsetTop - 190
    //             const sectionId = s.getAttribute('id')
    //
    //             if (windowHeight > sectionTop && windowHeight <= sectionTop + sectionHeight) {
    //                 document.querySelector(`a[href*=${sectionId}]`)?.classList.add(`${style.active}`)
    //             } else {
    //                 document.querySelector(`a[href*=${sectionId}]`)?.classList.remove(`${style.active}`)
    //             }
    //         })
    //
    //         windowHeight >= 200 ? setStickyStyle(true) : setStickyStyle(false)
    //     }
    // }

    return <nav className={`${style.nav} ${stickyStyle ? style.scrolled : ''}`}
                style={isActiveMenu ? {backgroundColor: '#111418'} : {backgroundColor: "transparent"}}>

        <ul className={`${style.navList} ${isActiveMenu ? style.active : ''}`}>
            <li>
                <Link activeClass={`${stickyStyle || style.active}`}
                      to="home"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                      onSetActive={() => {
                          setStickyStyle(false)
                      }}
                      onSetInactive={() => {
                          setStickyStyle(true)
                      }
                      }>Home
                </Link>
            </li>
            <li>
                <Link activeClass={style.active}
                      to="skills"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}>Skills
                </Link>
            </li>
            <li>
                <Link activeClass={style.active}
                      to="projects"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}>Projects
                </Link>
            </li>
            <li>
                <Link activeClass={style.active}
                      to="contact"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={0}
                      duration={500}>Contact
                </Link>
            </li>
        </ul>

        <div className={`${style.headerBurger} ${ isActiveMenu ? style.active : ''}`}
             onClick={() => setIsActiveMenu(!isActiveMenu)}>
            <span></span>
        </div>

    </nav>
}

export default Nav;