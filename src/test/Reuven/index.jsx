import styles from './style.module.css'
import Loader from '../../components/Loader'

// creator: Reuven
// props: { title: string, mode : 'big' || 'small' }
export default function Reuven() {
  return (
    <div className={styles.Reuven}>

      <Loader />
    </div>
  )
}
