import { io } from 'socket.io-client'
import React, { useEffect,useState } from 'react'
import ScaleChart from '../../components/ScaleChart'
import styles from './style.module.css';
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader';

const socketIO = io()

export default function Hodaya({generatorId = "6678464e815884d6e23a4542"}) {
    const [socket, setSocket] = useState(socketIO)
    const [genSensorsData, setgenSensorsData] = useState({})
    const {data=[], loading, error} = useApi(`/generator/${generatorId}/sensors`)

    const dict = {
      "temperature" : "טמפרטורה",
      "vibration": "ויברציות",
      "sound": "קול" 
    }

    useEffect(() => {
        setSocket(io('http://localhost:3000'))        
    }, [])


    useEffect(() => {
      socket.on('get-data', (data) => {
          setgenSensorsData(data.message)
          // console.log(data.message);
      })

      socket.emit('start-data',generatorId);
      
      return () => {
        socket.disconnect();
      }

    }, [socket])

    const getAllsensors = (sensorsData) => {
      let groupedSensors = []
      sensorsData.forEach(sensor =>  {      
      if (!groupedSensors[sensor.sensorType]) {
        groupedSensors[sensor.sensorType] =[]
      }
      
      groupedSensors[sensor.sensorType].push(sensor);
      })

      let result = Object.keys(groupedSensors).map(sensorType => ({
        [sensorType]: groupedSensors[sensorType]
      }));
    
      return result;
    }

  //get the exist sensors name and type
  const sensors = getAllsensors(data)


  if(loading) return(<Loader/>)
  return (
    <div className={styles.live}>
      <h1>שידור חי</h1>
    <div className={styles.types}>
      {sensors.map((s,i) => {
        return (
          <div key={i}>
            <h2>{dict[Object.keys(s)]+ ":"}</h2>
            <div className={styles.sensorByType}>
            {s[Object.keys(s)].map((n,index) => {
              const {
                normalAnomalyMin: normalMin,
                normalAnomalyMax: normalMax, 
                mildAnomalyMin: mildMin,
                mildAnomalyMax: mildMax,
                moderateAnomalyMin: moderateMin,
                moderateAnomalyMax: moderateMax,
                severeAnomalyMin: severe 
                } = n;
                return ( 
                  <div key={index} className={styles.scaleChart}>
                  <ScaleChart  key={index} size={genSensorsData[n.name]? genSensorsData[n.name] : 80  } unit={n.unitOfMeasure} name={n.name} rangeObject={{normalMin,normalMax,mildMin,mildMax,moderateMin,moderateMax,severe}}/>            
                  </div>
                )}
              )}
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}



































// import ScaleChart from '../../components/ScaleChart';
// import styles from './style.module.css';
// import React from 'react';

// export default function Hodaya() {

//   const rangeObjectVib = 
//   {
//     normalMin:0,
//     normlMax:10,
//     mildMin:10,
//     mildMax:15,
//     moderateMin:15,
//     moderateMax:20,
//     severe:20
//   }

  
//   const rangeObjectTemp = 
  // {
  //   normalMin:70,
  //   normlMax:90,
  //   mildMin:90,
  //   mildMax:100,
  //   moderateMin:100,
  //   moderateMax:110,
  //   severe:110
  // }

// return(
//   <ScaleChart rangeObject={rangeObjectTemp }/>
//   );
// }




// // background: linear-gradient(90deg,
// //   rgba(241, 0, 0, 1) 0%,
// //   rgba(233, 82, 17, 1) 20%,
// //   rgba(23, 167, 9, 1) 58%, /*normal range*/
// //   rgba(187, 232, 57, 1) 75%, /*mild anomaly*/
// //   rgba(240, 167, 8, 1) 83%, /*moderat anomaly*/
// //   rgba(191, 68, 3, 1) 91%, /*severe anomaly*/
// //   rgba(240, 8, 8, 1) 100%); 