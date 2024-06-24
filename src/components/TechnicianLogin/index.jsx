import Input from '../Input'
import InputPassword from '../InputPassword'
import styles from './style.module.css'
import { Link } from "react-router-dom";


export default function TechnicianLogin() {


    return (
        <div className={styles.container}>
            <img src="/images/Air_force_logo.png" alt="Air_force_logo" className={styles.Air_force_logo} />
            <h1 className={styles.loginText}>כניסה למערכת</h1>
            <div className={styles.username}>
                <label htmlFor='nameInput'>שם משתמש</label>
                <Input id='nameInput' placeholder="שם משתמש" />
            </div>
            <div className={styles.password}>
                <label htmlFor="pwd">סיסמא</label>
                <InputPassword id='pwd' />
            </div>
            <div className={styles.midLevel}>
                <label htmlFor=""> <input type="checkbox" /> זכור אותי</label>
                <Link style={{ color: 'blue' }}>שכחת סיסמא?</Link>
            </div>
            <button className={styles.loginButton}>התחבר</button>
        </div>
    )
}

// <div className={styles.Air_force_logo_wrapper}>
// </div>
// <div className={styles.midLevelWrapper}>
// </div>