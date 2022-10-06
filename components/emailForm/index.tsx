import { useState } from "react";
import Image from "next/image";

import styles from "./EmailForm.module.css";

const EmailForm = (): JSX.Element => {
    const [value, setValue] = useState("");
    const [activeClass, setActiveClass] = useState(false)
    const [error, setError] = useState(false)

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!regex.test(value)) {
            setError(true)
            return
        } else {
            setError(false)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.emailFormTitle}>
                Ready to watch? Enter your email to create or restart your membership.
            </div>
            <div className={styles.emailContainer}>
                <div className={`${styles.floatContainer} ${activeClass && styles.active}`}>
                    <label className={styles.label} htmlFor="email">Email address</label>
                    <input
                        className={`${styles.input} ${error && styles.errorBorder}`}
                        id="email"
                        type="email"
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                        onFocus={() => setActiveClass(true)}
                        onBlur={() => {
                            if (value.length === 0) {
                                setActiveClass(false)
                            }
                        }}
                    ></input>
                </div>
                <button className={styles.button} type="submit">
                    <span>Get Started</span>
                    <Image src='/email-arrow.svg' width={9.7} height={19.5} />
                </button>
            </div>
            <div className={`${styles.error} ${error && styles.active}`}>Email is required.</div>
        </form>
    );
};

export default EmailForm;
