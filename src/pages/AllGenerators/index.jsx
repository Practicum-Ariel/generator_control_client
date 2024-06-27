import React from 'react';
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader'
import { useState } from 'react'
import BoxSensorType from '../../components/BoxSensorType';



// creator: Shahar

function AllGenerators() {

  const getColor = (status) => {
    let color = ''
    status === 'available' ? color = 'green' :
      status === 'repair' ? color = 'orange' : color = 'red'
    return color
  }

  const [checked, setChecked] = useState([]);
  const [statusBoxType, setStatusBoxType] = useState('')
  const statuses = [{ text: "הכל", value: '' }, { text: "פעיל", value: 'available' }, { text: "בתיקון", value: 'repair' }, { text: "מושבת", value: 'off' }];

  const { data, loading, error } = useApi(`/generator/all-gen?status=${statusBoxType}`)

  const handleChange = (id) => {
    if (checked.includes(id))
      setChecked(checked.filter(v => v != id)); // remove id from array
    else if (checked.length < 2)
      setChecked([...checked, id])
  };


  if (loading) return <Loader />
  if (error) return <>{error || "error"}</>

  return (
    <div className={styles.allGen}>
      <div className={styles.buttons} style={{width:"400px"}}>
        {checked.length == 2 ? <Link to={`/generator/compare?ids=${checked[0]},${checked[1]}`} className={styles.compare_button}>בצע השוואה</Link> : ''}
        <BoxSensorType setSelected={setStatusBoxType} types={statuses} selected={statusBoxType} />
      </div>
      <div className={styles.genList}>
        {data?.map(gen => <div key={gen._id} className={styles.gen}>
          <input type="checkbox" checked={checked.includes(gen._id)} onChange={() => handleChange(gen._id)} />
          <Link to={`/generator/${gen.name}`} className={styles.link}>
            <h1>{gen.name}</h1>
            <h4>{gen.location}</h4>
            <h5 className={styles.status} style={{ color: getColor(gen.status) }}>{gen.status}</h5>
            {gen.status == 'available' &&
              <>
                <h5>{gen.message ?? <u>'Avg'</u>}</h5>
                {gen.tempAvg && <h5>temperature: {gen.tempAvg}</h5>}
                {gen.vibAvg && <h5>vibrtion: {gen.vibAvg}</h5>}
                {gen.soundAvg && <h5>sound: {gen.soundAvg}</h5>}
              </>}
          </Link>
        </div>)}
      </div>
    </div>
  )
}

export default AllGenerators;
