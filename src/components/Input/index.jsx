import styles from './style.module.css'

export default function Input({ name, value ,...props}) {

    return (
        <input name={name} className={styles.inp} defaultValue={value} {...props}/>
    )
}

// <div className={styles.input}>
// </div>