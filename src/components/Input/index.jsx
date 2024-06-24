import styles from './style.module.css'

export default function Input({ name,...props}) {

    return (
        <input name={name} className={styles.inp} {...props}/>
    )
}

// <div className={styles.input}>
// </div>