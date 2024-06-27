import styles from './style.module.css'
import Loader from '../../components/Loader'
import TechCheck from '../../components/TechCheck'
import TechCheckList from '../../components/TechCheckList'
// creator: Reuven
// props: { title: string, mode : 'big' || 'small' }
export default function Reuven() {
  const items = [{
    fullName: 'Josh Cohen',
    date: Date('02/02/2024'),
    check: true,
    avatar: 'https://avataaars.io/',
    content: 'שדה 1\nשדה 2\nשדה 3\nשדה 4'


  },
  {
    fullName: 'Adam Levi',
    date: Date('02/03/2024'),
    check: false,
    avatar: 'https://avataaars.io/',
    content: 'שדה 1\nשדה 2'
  },
  {
    fullName: 'John Smith',
    date: Date('02/05/2024'),
    check: true,
    avatar: 'https://avataaars.io/',
    content: 'שדה 1\nשדה 2\nשדה 3\nשדה 4'
  },

  ]





  return (
    <div className={styles.Reuven}>
      <TechCheckList />

    </div>
  )
}
