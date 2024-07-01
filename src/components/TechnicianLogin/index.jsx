import styles from './style.module.css'
import Input from '../Input'
import InputPassword from '../InputPassword'
import { Link } from "react-router-dom";
import { apiReq } from '../../helpers/apiReq';
import { useAuth } from '../../hooks/useAuth';
import useAuthContext from '../../helpers/useAuthContext';
import { useLogout } from '../../hooks/useLogout';
import Loader from '../Loader';


export default function TechnicianLogin() {
    const {logout} = useLogout();
    const { login, error, loading } = useAuth();
    const {user} = useAuthContext();
    const handleSubmit = async(e)=> {
        e.preventDefault(); //מרענן את הדף. מונע את זה.
        const formData = new FormData(e.target);
        const idNum = formData.get("userName")
        const password = formData.get("password")
        apiReq({url: "/auth/login", method: "POST", data: {idNum, password}})
        .then(res =>{}
            // save  user in context
            // save token in local storage
            // nav to dashboard
        )
        .catch(err => console.error(err))

        const credetials = {idNum , password}
        console.log(credetials);

        await login(idNum, password);

    }
    if(loading && !user) return <Loader/>
    
    
    return (
        <>
        {user && (<h1>ברוך הבא {user.name} <button onClick={logout}>logout</button></h1>
    )}
        {!user && (
        <form className={styles.container} onSubmit={handleSubmit}>
            <img className={styles.Air_force_logo} src="/images/Air_force_logo.png" alt="Air_force_logo" />
            <h1 className={styles.loginText}>כניסה למערכת</h1>
            <div className={styles.username}>
                <label htmlFor='nameInput'>ת.ז</label>
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
            <button className={styles.loginButton} type='submit' /*disabled={loading}*/>התחבר</button>
            {console.log(`error: ${error}`)}
            {error && <div className={styles.error}>{error}</div>}
            
        </form>
    )}
        </>
    )
}


