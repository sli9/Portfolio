import React from "react";
import style from "./Conacts.module.scss"
import container from "../common/styles/ContainerStyle.module.scss"
import Title from "../common/components/title/Title";

const Contacts = () => {
    return <section id={'contact'} className={style.contactsBlock}>
        <div className={container.container}>

            <Title bgtext={'contact'} text={'Get in Touch'}/>

            <div className={style.contactBox}>
                <div className={style.contactData}>
                    <div className={style.information}>
                        <h3 className={style.contactSubtitle}>Call me</h3>
                        <span className={style.contactDescription}>
                            <i className="lni lni-phone"></i>
                            +375292846599
                        </span>
                    </div>
                    <div className={style.information}>
                        <h3 className={style.contactSubtitle}>Write me by mail</h3>
                        <span className={style.contactDescription}>
                            <i className="lni lni-envelope"></i>
                            sil9gosys@gmail.com
                        </span>
                    </div>
                </div>
            </div>

            <form className={style.contactForm}>
                <div className={style.contactInputs}>
                    <div className={style.contactContent}>
                        <input type={'email'} className={style.contactInput}/>
                        <label className={style.contactLabel}>Email</label>
                        <span></span>
                    </div>
                    <div className={style.contactContent}>
                        <input type={'text'} className={style.contactInput}/>
                        <label className={style.contactLabel}>Subject</label>
                        <span></span>
                    </div>
                    <div className={style.contactContent} style={{height: '7rem'}}>
                        <textarea className={style.contactInput}/>
                        <label className={style.contactLabel}>Message</label>
                        <span></span>
                    </div>
                </div>
                <a className={style.btn}>Send Message</a>
            </form>
        </div>
    </section>
}

export default Contacts;