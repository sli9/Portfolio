import React from "react";
import style from "./Conacts.module.css"
import container from "../common/styles/ContainerStyle.module.css"

const Contacts = () => {
    return <div className={`${style.freelance} ${container.container}`}>
        <h2>Contact</h2>
        <div className={style.form}>
            <form>
                <div>
                    <input type={'text'} placeholder={'Your name'}/>
                </div>
                <div>
                    <input type={'email'} placeholder={'Your email'}/>
                </div>
                <div>
                    <input type={'text'} placeholder={'Your subject..'}/>
                </div>
                <div>
                    <textarea  placeholder={'Your message..'} rows={4}/>
                </div>
                <div>
                    <button type={'submit'}>SEND</button>
                </div>
            </form>
        </div>
    </div>
}

export default Contacts;