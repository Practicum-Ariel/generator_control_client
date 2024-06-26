import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css'
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader';
import AlertComponent from '../../components/AlertComponent';

// creator: Shahar

function SingleGenerator() {
  let { id } = useParams();
  let nav = useNavigate()

  // fake data
  // let allGen = [{
  //   _id: '6678464e815884d6e23a4542',
  //   name: 'gen300',
  //   location: 'באר שבע',
  //   status: 'פעיל'
  // },
  // {
  //   _id: '667a89dde30b38c5dad90560',
  //   name: 'gen102',
  //   location: 'תל אביב',
  //   status: 'פעיל'
  // },
  // {
  //   _id: '667a8c00e30b38c5dad90562',
  //   name: 'gen103',
  //   location: 'ירושלים',
  //   status: 'בתיקון'
  // }]

  const handleChange = (e) => {
    console.log(e.target.value);
    nav(`/generator/${e.target.value}`)
  }

  // const { data, loading, error } = useApi(`generator/${genName}`)
  const { data, loading, error } = useApi('/generator/all-gen')

  if (loading) return <Loader />
  if (error) return error

  let currentGen = data?.find(gen => gen.name == id)

  return (<>
    <div className={styles.grid_container}>
      <div className={styles.gen_details}>
        <h3>גנרטור {id}</h3>
        <div>{currentGen?.location}</div>
        <div>מזהה : {id}</div>
        <div className={styles.select}>
          <div>גנרטור</div>
          <select name="chooseGen" id="chooseGen" defaultValue={id} onChange={handleChange}>
            {data?.map(g => <option value={g.name}>{g.name}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.insights}>
        <h3>תובנות Ai</h3>
        <div className={styles.all_insights}>
          <AlertComponent status={'danger'} title={'קריטי'} context={'הקירור בחריגות דלק, יש להחליף סנן ראשי במנוע. הקירור בחריגות דלק, יש להחליף סנן ראשי במנוע. הקירור בחריגות דלק, יש להחליף'} />
          <AlertComponent status={'succcess'} title={'הערה'} context={'האיזור חם'} />
          <AlertComponent status={'warning'} title={'לשים לב'} context={'הגנרטור מתחמם'} />
          <AlertComponent status={'danger'} title={'קריטי'} context={'הקירור בחריגות דלק, יש להחליף סנן ראשי במנוע'} />
          <AlertComponent status={'warning'} title={'לשים לב'} context={'רעידות מתחזקות'} />
          <AlertComponent status={'succcess'} title={'אזהרה'} context={''} />
        </div>
      </div>
      <div className={styles.charts}>
        <h3>גרפים</h3>
      </div>
      <div className={styles.live_info}>
        <h3>מידע בזמן אמת</h3>
      </div>
    </div>
  </>
  )
}

export default SingleGenerator;
