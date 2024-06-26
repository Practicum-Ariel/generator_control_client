// import styles from './style.module.css'
// import Input from '../Input'
// import InputPassword from '../InputPassword'
// import { Link } from "react-router-dom";
// import { apiReq } from '../../helpers/apiReq';

import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import styles from './style.module.css'
import { apiReq } from '../../helpers/apiReq';

export default function TechnicianLoginTest() {

    const handleSubmit = (e)=> {
        e.preventDefault(); //מרענן את הדף. מונע את זה.
        const formData = new FormData(e.target);
        const userName = formData.get("userName")
        const password = formData.get("password")
        //change
        apiReq({url: "/login", method: "POST", data: {userName, password}})
        .then(res => console.log(res))

        const credetials = {userName , password}
        console.log(credetials);

    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <img className={styles.Air_force_logo} src="/images/Air_force_logo.png" alt="Air_force_logo" />
            <h1 className={styles.loginText}>כניסה למערכת</h1>
            <div className={styles.username}>
                <label htmlFor='nameInput'>שם משתמש</label>
                <Input id='nameInput' name="userName" placeholder="שם משתמש" />
            </div>
            <div className={styles.password}>
                <label htmlFor="pwd">סיסמא</label>
                <InputPassword name="password" id='pwd' />
            </div>
            <div className={styles.midLevel}>
                <label htmlFor=""> <input type="checkbox" /> זכור אותי</label>
                <Link style={{ color: 'blue' }}>שכחת סיסמא?</Link>
            </div>
            <button className={styles.loginButton} type='submit'>התחבר</button>
        </form>
    )
}