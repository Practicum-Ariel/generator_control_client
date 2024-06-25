
import styles from './style.module.css'


// creator: Reuven
//props{backgroundColor}
export default function Loader({ backgroundColor }) {
    return (
        <div className={styles.load} style={{ borderLeftColor: backgroundColor == 'blue' && 'green' }} >


        </div>
    )
}
