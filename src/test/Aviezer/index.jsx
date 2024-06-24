import styles from './style.module.css'
import InputPassword from '../../components/InputPassword'
import Input from '../../components/Input'
import TechnicianLogin from '../../components/TechnicianLogin'


// creator: Aviezer
// props: { title: string }
export default function Aviezer() {
  return (
    <div className={styles.Aviezer}>
      <TechnicianLogin />
    </div>
  )
}
