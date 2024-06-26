import { useParams } from 'react-router-dom';
import styles from './style.module.css'



// creator: Shahar
// props: { title: string }
export default function Shahar() {

  let { id } = useParams();

  return (<>
    <div className={styles.grid_container}>
      <div className={styles.gen_details}>
        <h2>גנרטור gen700</h2>
        <div>ירוחם מרכז</div>
        <div>מזהה: 1234</div>
        <div>
          <div>גנרטור</div>
          <select name="chooseGen" id="chooseGen">
            {genList.map(gen => <option value={gen}>{gen}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.insights}>תובנות AI</div>
      <div className={styles.charts}>גרפים</div>
      <div className={styles.live_info}>מידע בזמן אמת</div>
    </div>
  </>
  )
}
