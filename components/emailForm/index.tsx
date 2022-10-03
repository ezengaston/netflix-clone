import { useState } from "react";

import styles from "./EmailForm.module.css";

const EmailForm = (): JSX.Element => {
    const [value, setValue] = useState("");
    const [activeClass, setActiveClass] = useState(false)

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        console.log(value);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.emailFormTitle}>
                Ready to watch? Enter your email to create or restart your membership.
            </div>
            <div className={`${styles.floatContainer} ${activeClass && styles.active}`}>
                <label className={styles.label} htmlFor="email">Email address</label>
                <input
                    className={styles.input}
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
            <button className={styles.button} type="submit">Get Started</button>
        </form>
    );
};

export default EmailForm;
