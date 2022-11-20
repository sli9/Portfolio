import React from "react";
import style from "./Conacts.module.scss"
import container from "../common/styles/ContainerStyle.module.scss"

const Contacts = () => {
    return <section id={'contact'} className={style.contactsBlock}>
        <div className={`${style.freelance} ${container.container}`}>
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
                        <textarea placeholder={'Your message..'} rows={4}/>
                    </div>
                    <div>
                        <button type={'submit'}>SEND</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
}

export default Contacts;