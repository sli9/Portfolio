import React, {FormEvent, useRef, useState} from "react";
import style from "./Conacts.module.scss"
import container from "../common/styles/ContainerStyle.module.scss"
import Title from "../common/components/title/Title";
import {ShowSnackbarType, Snackbar} from "../common/components/snackbar/Snackbar";
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const snackRef = useRef<ShowSnackbarType>(null)
    const form = useRef<HTMLFormElement | null>(null)
    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    const isValid = () => {
        if (form.current?.checkValidity()) {
            setIsDisabled(false)
        } else setIsDisabled(true)
    }

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_pvb3j7a', 'portfolio_iyeirg4', form.current as HTMLFormElement, 'XcHDBiyQwVq72FYRK')
            .then((result) => {
                if (result.text === 'OK') {
                    snackRef.current?.showSnackbar({type: 'success', message: `Thanks! I'll answer as soon as possible`})
                    form.current?.reset()
                    setIsDisabled(true)
                }
            }, (error) => {
                snackRef.current?.showSnackbar({type: 'fail', message: 'Something went wrong'})
                console.log(error.text)
            });
    };

    return <section id={'contact'} className={style.contactsBlock}>
        <div className={`${style.contactsContainer} ${container.container}`}>

            <Title bgtext={'contact'} text={'Get in Touch'}/>
            <Snackbar ref={snackRef}/>

            <div className={style.contactBox}>
                <div className={style.contactData}>
                    <div className={style.information}>
                        <h3 className={style.contactSubtitle}>Call me</h3>
                        <span className={style.contactDescription}>
                            <i className="lni lni-phone"></i>
                            <a href={'tel:+375292846599'}>+375292846599</a>
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

            <form name={'contactForm'} ref={form} onSubmit={sendEmail} onChange={isValid}
                  className={style.contactForm}>
                <div className={style.contactInputs}>
                    <div className={style.contactContent}>
                        <input type={'text'} name={'name'} autoComplete={'off'}
                               className={style.contactInput} required minLength={3}/>
                        <label className={style.contactLabel}>Your name</label>
                        <span></span>
                    </div>
                    <div className={style.contactContent}>
                        <input type={'email'} name={'email'} className={style.contactInput} required/>
                        <label className={style.contactLabel}>Your email</label>
                        <span></span>
                    </div>
                    <div className={style.contactContent} style={{height: '7rem'}}>
                        <textarea name={'message'} className={style.contactInput} required
                                  minLength={1} maxLength={2000}/>
                        <label className={style.contactLabel}>Message</label>
                        <span></span>
                    </div>
                </div>
                <div className={style.btn}>
                    <button disabled={isDisabled}>Send Message</button>
                </div>
            </form>
        </div>
    </section>
}

export default Contacts;