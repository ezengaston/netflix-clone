import { useState } from 'react'

import styles from './FloatInput.module.css'

const FloatInput = (props: { error: boolean, setValue: any, value: string, type: string, text: string, modifier: string }) => {
    const [activeClass, setActiveClass] = useState(false);

    return (
        <div className={`${styles.floatContainer} ${activeClass ? styles.active : ''} ${styles[props.modifier]}`}>
            <label className={styles.label} htmlFor={props.type}>{props.text}</label>
            <input
                className={`${styles.input} ${props.error && styles.errorBorder}`}
                id={props.type}
                type={props.type}
                onChange={(e) => {
                    props.setValue(e.target.value)
                }}
                onFocus={() => setActiveClass(true)}
                onBlur={() => {
                    if (props.value.length === 0) {
                        setActiveClass(false)
                    }
                }}
            ></input>
        </div>
    )
}

export default FloatInput