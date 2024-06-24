import Input from '../Input'
import InputPassword from '../InputPassword'
import styles from './style.module.css'
import { Link } from "react-router-dom";


export default function TechnicianLogin() {


    return (
        <div className={styles.container}>
            <div className={styles.Air_force_logo_wrapper}>
                <img src="/images/Air_force_logo.png" alt="Air_force_logo" className={styles.Air_force_logo} />
            </div>
            <h1>כניסה למערכת</h1>
            <Input placeholder={"שם משתמש"} />
            <InputPassword />
                <div className={styles.midLevel}>
                    <label htmlFor=""> <input type="checkbox" /> זכור אותי</label>
                    <Link style={{color: 'blue'}}>שכחת סיסמא?</Link>
                </div>
                <button className={styles.loginButton}>התחבר</button>
        </div>
    )
}
// <div className={styles.midLevelWrapper}>
// </div>