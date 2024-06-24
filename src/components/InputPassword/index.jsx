import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './style.module.css'

export default function InputPassword({ name, ...props }) {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.inputPassword} >

            <input className={styles.password}
                type={showPassword ? 'text' : 'password'}
                placeholder="סיסמה"
                {...props}
            />

            <span className={styles.eye} onClick={togglePasswordVisibility} >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

        </div>
    )
}
