import React, {forwardRef, useImperativeHandle, useState} from "react";
import style from "./Snackbar.module.scss"

type SnackbarPropsType = {
    message: string
    type: 'success' | 'fail'
}

export type ShowSnackbarType = {
    showSnackbar: (props: SnackbarPropsType) => void
}


export const Snackbar = forwardRef<ShowSnackbarType>((props, ref) => {

    const [visibility, setVisibility] = useState(false)
    const [type, setType] = useState('success')
    const [message, setMessage] = useState('')

    useImperativeHandle(ref, () => {
        return {
            showSnackbar(props) {debugger
                setType(props.type)
                setMessage(props.message)
                setVisibility(true)
                setTimeout(() => {
                    setVisibility(false)
                }, 3000)
            }
        }
    })

    return <> {visibility &&
    <div className={style.snackbar} style={{background: type === 'success' ? '#01995f' : '#FF0033'}}>
        <div className={style.symbol}>{type === 'success' ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}</div>
        <div className={style.message}>{message}</div>
    </div>}
    </>
})