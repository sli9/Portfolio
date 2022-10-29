import React from "react";
import style from "./Skills.module.css"
import container from "../common/styles/ContainerStyle.module.css"
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return <div className={style.skillsBlock}>
        <div className={`${ style.skillsContainer} ${container.container}`}>

            <Title text={'Skills'}/>

            <div className={style.skills}>
                <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor earum illo magni molestiae. Ab ?'}/>
                <Skill title={'CSS'} description={' consectetur adipisicing elit. Commodi dolor earum illo magni molestiae. Ab ?'}/>
                <Skill title={'React'} description={'Lorem ipsum dolor sitipisicin earum illo magni mole'}/>
            </div>
        </div>
    </div>
}

export default Skills;