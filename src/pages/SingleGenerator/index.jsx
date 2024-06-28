import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css'
import useApi from '../../hooks/useApi';
import Loader from '../../components/Loader';
import AlertComponent from '../../components/AlertComponent';
import BoxSensorType from '../../components/BoxSensorType';
import SensorsCharts from '../../components/SensorsCharts';
import TechCheckList from '../../components/TechCheckList';
import ScaleLive from '../ScaleLive'

// creator: Shahar

function SingleGenerator() {
  let nav = useNavigate()
  let { id } = useParams();
  const [insightBoxType, setInsightBoxType] = useState('all')
  const [graphsBoxType, setGraphsBoxType] = useState('live')

  let statuses = ['success', 'warning', 'danger']

  // #### fake data ####
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

  // let insights = [{
  //   insight: 'The vibration readings show a pattern where the levels are within normal or mildly anomalous ranges but occasionally enter the moderate anomaly range. This indicates the need for regular monitoring and possible future maintenance.',
  //   fault_name: 'Vibration Anomaly',
  //   level_risk: 3,
  //   fault_description: 'Vibration sensor readings indicating mild to moderate anomaly',
  //   treatments: ['Monitor vibration levels regularly sagi audtae'],
  //   based_on_data: ['Normal vibration range is 0-10 mm/s².', 'Mild anomaly range is defined as 10-15 mm/s².', 'Moderate anomaly range is 15-20 mm/s², indicating that readings occasionally entering this range suggests a trend.']
  // },
  // {
  //   insight: 'Sound levels have been recorded near or slightly above the threshold for mild anomalies. Regular inspection and maintenance could help prevent further escalation.',
  //   fault_name: 'Sound Anomaly',
  //   level_risk: 2,
  //   fault_description: 'Sound sensor readings indicating mild anomaly',
  //   treatments: ['Monitor sound levels regularly', 'Inspect components near sound sensors for potential issues', 'Ensure all parts are well-lubricated and functioning properly', 'Schedule maintenance if sound levels consistently exceed the mild threshold'],
  //   based_on_data: ['Normal sound range is 60-70 dB.', 'Mild anomaly range is defined as 70-75 dB.', 'The sound levels recorded are close to or slightly above 70 dB, indicating a potential trend towards mild anomalies.', 'Potential causes for increased sound levels include bearing noise, fan malfunction, or other mechanical issues.']
  // },
  // {
  //   insight: 'Temperature readings are within the normal operating range, indicating that the generator is maintaining proper thermal conditions.',
  //   fault_name: 'Temperature Normal',
  //   level_risk: 1,
  //   fault_description: 'Temperature sensor readings within normal range',
  //   treatments: ['Continue regular monitoring of temperature levels', 'Ensure coolant levels are maintained', 'Inspect cooling system components for wear and tear'],
  //   based_on_data: ['Normal temperature range is 70-90°C.', 'The temperature readings were 75, 90, 80, and 81°C, which are within the normal range.', 'Proper thermal conditions indicate good cooling system performance and adequate ventilation.']
  // }]

  const insightTypes = [{ text: "הכל", value: 'all' }, { text: "קל", value: 'success' }, { text: "בינוני", value: 'warning' }, { text: "קריטי", value: 'danger' }];
  const graphsTypes = [{ text: "מידע בזמן אמת", value: 'live' }, { text: "היסטוריה", value: 'history' }];

  const handleChange = (e) => {
    console.log(e.target.value);
    nav(`/generator/${e.target.value}`)
  }

  const { data, loading : loadingAll, error } = useApi('/generator/all-gen')
  const { data: insights, loading: loadingInsightes } = useApi('/aiapiserver')

  if (loadingAll || loadingInsightes) return <Loader />
  console.log(data, insights);
  // if (loadingInsightes) return <Loader />
  if (error) return error
  
  let currentGen = data?.find(gen => gen.name == id)
  // const { data : currentGen, loading} = useApi(`/generator/:${id}`)
  console.log(currentGen);
  // if (loading) return <Loader />

  return (<>
    <div className={styles.grid_container}>
      <div className={styles.gen_details}>
        <h3>גנרטור {id}</h3>
        <div>{currentGen?.location}</div>
        <div> <strong> מזהה :</strong>  {id} </div>
        <div className={styles.select}>
          <div>גנרטור</div>
          <select name="chooseGen" id="chooseGen" defaultValue={id} onChange={handleChange}>
            {data?.map(g => <option value={g.name}>{g.name}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.insights}>
        <h3>תובנות Ai</h3>
        <div className={styles.box_button}>
          <BoxSensorType setSelected={setInsightBoxType} types={insightTypes} selected={insightBoxType} />
        </div>
        <div className={styles.all_insights}>
          {insightBoxType == 'all' ?
            insights?.map(ins => <AlertComponent {...ins} status={statuses[ins.level_risk - 1]} key={ins._id}/>)
            :
            insights?.filter(ins => insightBoxType == statuses[ins.level_risk - 1]).map(ins => <AlertComponent {...ins} status={statuses[ins.level_risk - 1]} key={ins._id}/>)}
          <button className={styles.all_insights_but} >לכל התובנות</button>
        </div>
      </div>
      <div className={styles.switch_box}>
        <div className={styles.box_button}>
          <BoxSensorType setSelected={setGraphsBoxType} types={graphsTypes} selected={graphsBoxType} />
        </div>
      </div>
      <div className={styles.charts}>
        {graphsBoxType == 'live' ? <ScaleLive /> : <SensorsCharts />}
      </div>
      <div className={styles.last_treatments}>
      <h3>טיפולים אחרונים</h3>
      {/* {<TechCheckList />} */}
      </div>
    </div>
  </>
  )
}

export default SingleGenerator;
