import styles from './style.module.css'
import { useState } from 'react'



export default function ProfileIcon() {
    const [showFields, setShowFields] = useState(false)
    function clicked() {

        setShowFields(!showFields)
    }

    return (
        <div className={styles.picture} >
            <img className={styles.image} src='https://avataaars.io/' alt="person" onClick={clicked}></img>
            <ul className={styles.details} style={{ opacity: showFields && '100' }} >

                <li><a className={styles.link} href="/">פרטים</a> </li>
                <li> <button><div className={styles.btn}>התנתקות</div></button></li>
            </ul>
        </div>
    )
}