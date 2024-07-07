import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader'
import { useState } from 'react'
import BoxSensorType from '../../components/BoxSensorType'
import capitalizeFirstLetter from '../../helpers/utilFunctions'

// creator: Shahar

function AllGenerators() {
  const [checked, setChecked] = useState([])
  const [statusBoxType, setStatusBoxType] = useState('')
  const statuses = [{ text: "הכל", value: '' }, { text: "פעיל", value: 'available' }, { text: "בתיקון", value: 'repair' }, { text: "מושבת", value: 'off' }]

  const { data, loading, error } = useApi(`/generator/all-gen?status=${statusBoxType}`)

  const sensorAnomalies = {
    temp: {
      normal: [70, 90],
      mild: [90, 100],
      moderate: [10, 110],
      severe: [110, Infinity]
    },
    vib: {
      normal: [0, 10],
      mild: [10, 15],
      moderate: [15, 20],
      severe: [20, Infinity]
    },
    sound: {
      normal: [60, 70],
      mild: [70, 75],
      moderate: [75, 80],
      severe: [80, Infinity]
    }
  }

  const roundNum = (num) => Math.ceil(num)

  const getBadgeColor = (sensorType, sensorAvg) => {
    if (!sensorAvg) return
    return Object.keys(sensorAnomalies[sensorType]).find(key => sensorAvg > sensorAnomalies[sensorType][key][0] && sensorAvg < sensorAnomalies[sensorType][key][1])
  }

  const formatTime = (date) => {
    date = new Date(date)
    return `${date.getHours()}:${date.getMinutes()}  ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  }

  const handleChange = (id) => {
    if (checked.includes(id))
      setChecked(checked.filter(v => v != id)) // remove id from array
    else if (checked.length < 2)
      setChecked([...checked, id])
  }


  if (loading) return <Loader />
  if (error) return <>{error || "error"}</>

  return (
    <div className={styles.allGen}>
      <div className={styles.buttons}>
        <div className={styles.box_button}><BoxSensorType setSelected={setStatusBoxType} types={statuses} selected={statusBoxType} /></div>
        {checked.length == 2 ? <Link to={`/generators/compare?filter=${checked[0]}-${checked[1]}`} className={styles.compare_button}>בצע השוואה</Link> : ''}
      </div>
      <div className={styles.genList}>
        {data?.map(gen =>
          <div key={gen._id} className={styles.gen}>
            <div className={styles.gen_top}>
              <input type="checkbox" checked={checked.includes(gen._id)} onChange={() => handleChange(gen._id)} />
              <div className={`${styles.gen_status} ${styles[gen.status]}`} />
            </div>
            <Link to={`/generator/${gen.name}`} className={styles.link}>
              <div className={styles.gen_header}>
                <span>{gen.name}</span>
                <span>{gen.location}</span>
              </div>
              {gen.status === 'available' &&
                <div className={styles.sensor_avgs}>
                  {Object.keys(sensorAnomalies).map(sa =>
                    <div className={styles.sensor_type} key={sa}>{capitalizeFirstLetter(sa)}
                      <div className={`${styles.avg_badge} ${styles[getBadgeColor(sa, gen[`${sa}Avg`])]}`}>{gen[`${sa}Avg`] ? roundNum(gen[`${sa}Avg`]) : '-'}
                      </div>
                    </div>)}
                </div>}
              {gen.status !== 'available' &&
                <div className={styles.last_update}>
                  <span>Last Update</span>
                  <span>{formatTime(gen.lastUpdate)}</span>
                </div>}
            </Link>
          </div>)}
      </div>
    </div>
  )
}

export default AllGenerators
