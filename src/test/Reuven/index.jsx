import styles from './style.module.css'
import Loader from '../../components/Loader'
import TechCheck from '../../components/TechCheck'
import TechCheckList from '../../components/TechCheckList'
import MainRoutes from '../../layout/MainRoutes'
import MainNavigator from '../../components/MainNavigator'
import { FaExclamation } from "react-icons/fa";
import ProfileIcon from '../../components/ProfileIcon'
// creator: Reuven
//<FaExclamation />
// props: { title: string, mode : 'big' || 'small' }
export default function Reuven() {
  const items = [{
    fullName: 'Josh Cohen',
    date: '2024-06-25T09:36:26.814+00:00',
    content: 'שדה 1\nשדה 2\nשדה 3\nשדה 4'


  },
  {
    fullName: 'Adam Levi',
    date: '2024-06-25T09:36:26.814+00:00',
    content: 'שדה 1\nשדה 2'
  },
  {
    fullName: 'John Smith',
    date: '2024-06-25T09:36:26.814+00:00',
    content: 'שדה 1\nשדה 2\nשדה 3\nשדה 4'
  },
  {
    fullName: 'James Bond',
    date: '2024-06-25T09:36:26.814+00:00',
    content: 'שדה 1\nשדה 2\nשדה 3\nשדה 4'
  },
  {
    fullName: 'Robin Hood',
    date: '2024-06-25T10:37:28.433+00:00',
    content: 'שדה 1\nשדה 2\nשדה 3\nשדה 4'
  },
  ]





  return (
    <div className={styles.Reuven}>
      { /* <TechCheckList items={items} />*/}
      <ProfileIcon />

    </div>
  )
}
