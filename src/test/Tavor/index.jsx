import { useState } from 'react'
import BoxSensorType from '../../components/BoxSensorType'
import styles from './style.module.css'
import SensorsCharts from '../../components/SensorsCharts'


// creator: Tavor
// props: { title: string }
export default function Tavor() {

  return (
     <div className={styles.Tavor}>
      <SensorsCharts/>
    </div>
  )
}
