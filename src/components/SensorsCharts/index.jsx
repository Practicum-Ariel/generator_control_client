import { useState } from 'react';
import styles from './style.module.css'
import BoxSensorType from '../BoxSensorType';
import useApi from '../../hooks/useApi';
import Loader from '../Loader';


// creator: Tavor
// props: { title: string }
export default function SensorsCharts() {
  const [selected, setSelected] = useState('temperature');
  const types = [{text:"טמפרטורה",value:'temperature'},{text:"ויברציה",value:'vibration'},{text:"קול",value:'sound'}];

  const {data, loading, error} = useApi(`/generator/6678464e815884d6e23a4542/data?time=day&sensor_type=${selected}`)
  console.log(data,loading, error)

  return (
     <div className={styles.SensorsCharts}>
      <BoxSensorType setSelected={setSelected} selected={selected} types={types}/>
      {loading?<Loader/>: error? <div>Error</div> : <div>Data </div>}
      
    </div>
  )
}
