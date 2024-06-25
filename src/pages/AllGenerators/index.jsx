import React from 'react';
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader'
import { useState } from 'react'

// creator: Shahar

function AllGenerators() {
  let data = [{
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
  // const { data, loading, error } = useApi('generator/all-gen')
  const loading = false

  const getColor = (status) => {
    let color = ''
    status === 'פעיל' ? color = 'green' :
      status === 'בתיקון' ? color = 'orange' : color = 'red'
    return color
  }

  const [checked, setChecked] = useState([]);

  const handleChange = (id) => {
    if (checked.includes(id))
      setChecked(checked.filter(v => v != id)); // remove id from array
    else if (checked.length < 2)
      setChecked([...checked, id])
  };


  if (loading) return <Loader />
  // if(error) return error

  return (
    <div className={styles.allGen}>
      <div className={styles.compare}>
        {checked.length == 2 ? <Link to={`/generator/compare?ids=${checked[0]},${checked[1]}`} className={styles.compare_button}>בצע השוואה</Link> : ''}
      </div>
      <div className={styles.genList}>
        {data.map(gen => <div className={styles.gen}>
          <input type="checkbox" checked={checked.includes(gen._id)} onChange={() => handleChange(gen._id)} />
          <Link to={`/generator/${gen._id}`} className={styles.link}>
            <h2>{gen.name}</h2>
            <h4>{gen.location}</h4>
            <h5 className={styles.status} style={{ color: getColor(gen.status) }}>{gen.status}</h5>
            <img src='/public/images/Indicator_clock.jpg' alt="Indicator_clock" />
          </Link>
        </div>)}
      </div>
    </div>
  )
}

export default AllGenerators;
