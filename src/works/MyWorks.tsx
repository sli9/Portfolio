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
                        codeLink={'https://github.com/sli9/Setka'}
                        siteLink={'https://sli9.github.io/Setka/'}
                        title={'Social network'}
                        description={'React, Redux, RestAPI, TS, Thunk, Ant design, Redux Form'}
                />
                <MyWork style={todoImg}
                        codeLink={'https://github.com/sli9/Todolist'}
                        siteLink={'https://sli9.github.io/Todolist/'}
                        title={'Todolist'}
                        description={'React, Redux toolkit, TS, RestAPI, Thunk, Material UI, Unit Tests, formik'}
                />

            </div>
        </div>
    </section>
}

export default MyWorks;