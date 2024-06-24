import styles from './style.module.css'
import InputPassword from '../../components/InputPassword'
import Input from '../../components/Input'


// creator: Aviezer
// props: { title: string }
export default function Aviezer() {
  return (
     <div className={styles.Aviezer}>
        <InputPassword />
        <Input placeholder={"שם פרטי"} />
    </div>
  )
}
