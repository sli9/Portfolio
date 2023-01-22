import React, {FormEvent, useRef} from "react";
import style from "./Conacts.module.scss"
import container from "../common/styles/ContainerStyle.module.scss"
import Title from "../common/components/title/Title";
import emailjs from '@emailjs/browser';
import {ShowSnackbarType, Snackbar} from "../common/components/snackbar/Snackbar";

const Contacts = () => {

    const snackRef = useRef<ShowSnackbarType>(null)
    const form = useRef<HTMLFormElement | null>(null)
    const ref = useRef(null)

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_pvb3j7a', 'portfolio_iyeirg4', form.current as HTMLFormElement, 'XcHDBiyQwVq72FYRK')
            .then((result) => {
                if (result.text === 'OK') {
                    snackRef.current?.showSnackbar({type: 'success', message: 'Thanks! I answer as soon as possible'})
                    form.current?.reset()
                }
            }, (error) => {
                snackRef.current?.showSnackbar({type: 'fail', message: 'Something went wrong'})
                console.log(error.text)
            });
    };

    return <section id={'contact'} className={style.contactsBlock}>
        <div className={container.container}>

            <Title bgtext={'contact'} text={'Get in Touch'}/>
            <Snackbar ref={snackRef}/>

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

            <form ref={form} onSubmit={sendEmail} className={style.contactForm}>
                <div className={style.contactInputs}>
                    <div className={style.contactContent}>
                        <input ref={ref} type={'email'} name={'email'} className={style.contactInput}/>
                        <label className={style.contactLabel}>Email</label>
                        <span></span>
                    </div>
                    <div className={style.contactContent}>
                        <input type={'text'} name={'text'} className={style.contactInput}/>
                        <label className={style.contactLabel}>Subject</label>
                        <span></span>
                    </div>
                    <div className={style.contactContent} style={{height: '7rem'}}>
                        <textarea name={'message'} className={style.contactInput}/>
                        <label className={style.contactLabel}>Message</label>
                        <span></span>
                    </div>
                </div>
                <div className={style.btn}>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    </section>
}

export default Contacts;