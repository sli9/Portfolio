import React from "react";
import style from "./Skills.module.scss"
import container from "../common/styles/ContainerStyle.module.scss"
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {faCss3, faGitSquare, faHtml5, faReact, faSquareJs} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Skills = () => {
    return <section id={'skills'} className={style.skillsBlock}>
        <div className={`${style.skillsContainer} ${container.container}`}>

            <Title bgtext={'Skills'} text={'What I know'}/>

            <div className={style.skills}>
                <Skill title={'JS'}
                       description={'ES6, Cycles, Conditionals, Event, Promise, TS, etc.'}>
                    <FontAwesomeIcon icon={faSquareJs}/>
                </Skill>
                <Skill title={'CSS'}
                       description={'BEM, Sass, Specificity, Cascade, Inheritance, Position, Flex, Grid, Forms, etc.'}>
                    <FontAwesomeIcon icon={faCss3}/>
                </Skill>
                <Skill title={'React'}
                       description={'Functional components, Higher Order Components, React hooks, Class-based components, etc.'}>
                    <FontAwesomeIcon icon={faReact}/>
                </Skill>
                <Skill title={'HTML5'}
                       description={'Semantics, Tags, Forms, etc.'}>
                    <FontAwesomeIcon icon={faHtml5}/>
                </Skill>
                <Skill title={'Git'}
                       description={'Branching, Merging, GitHub Pages, etc.'}>
                    <FontAwesomeIcon icon={faGitSquare}/>
                </Skill>
                <Skill title={'Redux'}
                       description={'Redux toolkit, Flux, React-Redux, Selectors, etc.'}>
                    <svg width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ee6817"
                              d="M22.177 22.005c1.161-0.099 2.057-1.12 2-2.339-0.063-1.219-1.063-2.197-2.276-2.197h-0.084c-1.255 0.041-2.239 1.099-2.197 2.359 0.041 0.641 0.301 1.156 0.661 1.536-1.401 2.719-3.495 4.715-6.677 6.396-2.135 1.115-4.391 1.537-6.588 1.235-1.839-0.255-3.276-1.077-4.156-2.396-1.319-2-1.439-4.151-0.339-6.312 0.801-1.557 2-2.699 2.796-3.256-0.197-0.52-0.437-1.395-0.557-2.057-5.916 4.235-5.312 10.032-3.515 12.767 1.339 2 4.072 3.276 7.067 3.276 0.803 0 1.641-0.057 2.459-0.261 5.199-1 9.131-4.115 11.385-8.708zM29.307 17.011c-3.093-3.636-7.651-5.636-12.843-5.636h-0.683c-0.333-0.735-1.115-1.197-1.995-1.197h-0.057c-1.26 0-2.24 1.083-2.199 2.339 0.043 1.197 1.057 2.197 2.276 2.197h0.1c0.9-0.041 1.677-0.599 2-1.401h0.739c3.079 0 5.991 0.901 8.652 2.657 2.031 1.337 3.495 3.099 4.312 5.197 0.719 1.713 0.677 3.396-0.063 4.797-1.135 2.192-3.057 3.353-5.588 3.353-1.599 0-3.156-0.5-3.959-0.859-0.479 0.396-1.281 1.057-1.86 1.459 1.761 0.796 3.537 1.255 5.256 1.255 3.896 0 6.792-2.193 7.891-4.312 1.197-2.396 1.099-6.433-1.959-9.891zM8.651 22.724c0.043 1.197 1.057 2.197 2.281 2.197h0.079c1.281-0.041 2.255-1.099 2.197-2.359 0-1.199-1.036-2.199-2.255-2.199h-0.084c-0.077 0-0.197 0-0.301 0.043-1.656-2.797-2.355-5.797-2.095-9.032 0.157-2.437 0.959-4.552 2.396-6.312 1.199-1.495 3.453-2.24 4.995-2.276 4.313-0.084 6.115 5.296 6.251 7.432l2 0.599c-0.464-6.552-4.536-9.989-8.432-9.989-3.656 0-7.032 2.656-8.391 6.552-1.855 5.199-0.636 10.188 1.64 14.188-0.197 0.255-0.317 0.719-0.281 1.156z"/>
                    </svg>

                </Skill>
                {/*<Skill title={'TS'} description={'Lorem ipsum dolor sitipisicin earum illo magni mole'}>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg"*/}
                {/*         aria-label="TypeScript" role="img"*/}
                {/*         viewBox="-120 -120 740 740">*/}
                {/*        <rect*/}
                {/*            width="500" height="500"*/}
                {/*            rx="7%"*/}
                {/*            fill="#ee6817"/>*/}
                {/*        <path fill="#292121d9"*/}
                {/*              d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"/>*/}
                {/*    </svg>*/}
                {/*</Skill>*/}
            </div>
        </div>
    </section>
}

export default Skills;