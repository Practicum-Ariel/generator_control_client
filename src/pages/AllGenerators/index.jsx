import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader'
import { useState, useContext } from 'react'
import BoxSensorType from '../../components/BoxSensorType'
import capitalizeFirstLetter from '../../helpers/utilFunctions'
import { MdCompareArrows } from "react-icons/md"

// creator: Shahar

export default function AllGenerators() {
  const [generators, setGenerators] = useState([])
  const [filteredGens, setFilteredGens] = useState([])
  const [checked, setChecked] = useState([])
  const [statusBoxType, setStatusBoxType] = useState('all')
  
  const statuses = [{ text: "הכל", value: 'all' }, { text: "תקין", value: 'proper' }, { text: "אנומליה", value: 'anomaly' }, { text: "תקלה", value: 'error' }, { text: "לא מחובר", value: 'disconnected' }]
  
  let { data, loading, error } = useApi(`/generator/all-gen`)
  // const { data, loading, error } = useApi(`/generator/all-gen?status=${statusBoxType}`)


  // useEffect(() => { // i call the api directly because i can't use useApi (hook) inside inner function of the component 
  //   axios.get(`http://localhost:3000/api//generator/all-gen`).then(res => setGenerators(res.data))
  // }, [])

  useEffect(() => {
    setGenerators(data)
    setFilteredGens(data)
  }, [data])

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
    if (checked.length < 2) setChecked([...checked, id])
  }

  const handleFilter = (e, filter) => {
    e.preventDefault()
    setFilteredGens(filter === 'all' ? generators : generators.filter(gen => gen.status === filter))
    setStatusBoxType(filter)
  }

  if (loading) return <Loader />
  if (error) return error

  return (
    <div className={styles.allGen}>
      <div className={styles.buttons}>
        <div className={styles.box_button}>
          <BoxSensorType handleFilter={handleFilter} types={statuses} selected={statusBoxType} />
        </div>
        {checked.length == 2 ? <Link to={`/generators/compare?filter=${checked[0]}-${checked[1]}`} className={styles.compare_button}>בצע השוואה</Link> : ''}
      </div>
      <div className={styles.genList}>
        {filteredGens?.map(gen =>
          <div key={gen._id} className={styles.gen}>
            <div className={styles.gen_top}>
              <MdCompareArrows className={styles.compare_btn} onClick={() => handleChange(gen._id)} title='compare generator' />
              <div className={`${styles.gen_status} ${styles[gen.status]}`} />
            </div>
            <Link to={`/generator/${gen.name}`} className={styles.link}>
              <div className={styles.gen_header}>
                <span>{gen.name}</span>
                <span>{gen.location}</span>
              </div>
              {(gen.status === 'proper' || gen.status === 'anomaly') &&
                <div className={styles.sensor_avgs}>
                  {Object.keys(sensorAnomalies).map(sa =>
                    <div className={styles.sensor_type} key={sa}>{capitalizeFirstLetter(sa)}
                      <div className={`${styles.avg_badge} ${styles[getBadgeColor(sa, gen[`${sa}Avg`])]}`}>{gen[`${sa}Avg`] ? roundNum(gen[`${sa}Avg`]) : '-'}
                      </div>
                    </div>)}
                </div>}
              {(gen.status !== 'proper' && gen.status !== 'anomaly') &&
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
