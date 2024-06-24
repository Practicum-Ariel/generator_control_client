import styles from './style.module.css'

export default function Input({ name,...props}) {

    return (
        <div className={styles.input}>
            
            <input name={name} className={styles.inp} {...props}/>

        </div>
    )
}
