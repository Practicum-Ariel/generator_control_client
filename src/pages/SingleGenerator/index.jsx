import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css'
import useApi from '../../hooks/useApi';

function SingleGenerator() {
  let { id } = useParams();
  let nav = useNavigate()

  let genList = [{
    _id: '6678464e815884d6e23a4542',
    name: 'gen300',
    location: 'באר שבע',
    status: 'פעיל'
  },
  {
    _id: '667a89dde30b38c5dad90560',
    name: 'gen102',
    location: 'תל אביב',
    status: 'פעיל'
  },
  {
    _id: '667a8c00e30b38c5dad90562',
    name: 'gen103',
    location: 'ירושלים',
    status: 'בתיקון'
  }]

  const handleChange = (e) => {
    console.log(e.target.value);
    nav(`/generator/${e.target.value}`)
  }

  // const { data, loading, error } = useApi(`generator/${genName}`)

  // if (loading) return <Loader />
  // if(error) return error

  let currentGen = genList.find(gen => gen.name == id)

  return (<>
    <div className={styles.grid_container}>
      <div className={styles.gen_details}>
        <h2>גנרטור {id}</h2>
        <div>{currentGen.location}</div>
        <div>מזהה : {id}</div>
        <div>
          <div>גנרטור</div>
          <select name="chooseGen" id="chooseGen" onChange={handleChange}>
            {genList.map(g => <option value={g.name}>{g.name}</option>)}
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

export default SingleGenerator;
