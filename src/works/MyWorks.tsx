import React from "react";
import style from "./MyWorks.module.scss"
import container from "../common/styles/ContainerStyle.module.scss"
import MyWork from "./myWork/MyWork";
import Title from "../common/components/title/Title";
import socialPicture from "../assets/images/_Social_media_.jpg"
import todoPicture from "../assets/images/todo-list.jpg"

const MyWorks = () => {

    const socialImg = {
        backgroundImage: `url(${socialPicture})`
    }
    const todoImg = {
        backgroundImage: `url(${todoPicture})`
    }

    return <section id={'projects'} className={style.myWorksBlock}>
        <div className={`${style.myWorksContainer} ${container.container}`}>

            <Title bgtext={'My works'} text={'Portfolio'}/>

            <div className={style.myWorks}>
                <MyWork style={socialImg}
                        link={'https://github.com/sli9/Setka'}
                        title={'Social network'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor earum illo magni molestiae. Ab ?'}
                />
                <MyWork style={todoImg}
                        link={'https://github.com/sli9/Todolist'}
                        title={'Todolist'}
                        description={' Loremconsectetur adipisicing elit. Commodi dolor earum illo magni molestiae. Ab ?'}
                />

            </div>
        </div>
    </section>
}

export default MyWorks;