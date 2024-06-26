import { io } from 'socket.io-client'
import React, { useEffect,useState } from 'react'
import ScaleChart from '../../components/ScaleChart'
import styles from './style.module.css';
import useApi from '../../hooks/useApi'

const socketIO = io()

export default function Hodaya({generatorId = "6678464e815884d6e23a4542"}) {
    const [socket, setSocket] = useState(socketIO)
    const [genSensorsData, setgenSensorsData] = useState({})
    const [genSensors,setGenSensors] = useState([])
    
    useEffect(() => {
        setSocket(io('http://localhost:3000'))        
    }, [])

    useEffect(() => {
      const {data, loading, error} = useApi(`/generator/${generatorId}/sensors`)
      console.log(data,loading, error)
      setGenSensors(data)

      socket.on('get-data', (data) => {
          setgenSensorsData(data.message)
          console.log(data.message);
      })

      socket.emit('start-data',generatorId);

    }, [socket])


    const sensorsData = [{
      "_id": {
        "$oid": "66782147502144fe911c79f6"
      },
      "sensorType": "temperature",
      "name": "t1",
      "location": "Near the generator's combustion chamber",
      "unitOfMeasure": "c",
      "normalAnomalyMin": 70,
      "normalAnomalyMax": 90,
      "mildAnomalyMin": 90,
      "mildAnomalyMax": 100,
      "moderateAnomalyMin": 100,
      "moderateAnomalyMax": 110,
      "severeAnomalyMin": 110,
      "severeAnomalyMax": 150,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c79f9"
      },
      "sensorType": "temperature",
      "name": "t4",
      "location": "Near the exhaust outlet",
      "unitOfMeasure": "C",
      "normalAnomalyMin": 70,
      "normalAnomalyMax": 90,
      "mildAnomalyMin": 90,
      "mildAnomalyMax": 100,
      "moderateAnomalyMin": 100,
      "moderateAnomalyMax": 110,
      "severeAnomalyMin": 110,
      "severeAnomalyMax": 150,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c79fa"
      },
      "sensorType": "sound",
      "name": "s1",
      "location": "Near the combustion chamber",
      "unitOfMeasure": "db",
      "normalAnomalyMin": 60,
      "normalAnomalyMax": 70,
      "mildAnomalyMin": 70,
      "mildAnomalyMax": 75,
      "moderateAnomalyMin": 75,
      "moderateAnomalyMax": 80,
      "severeAnomalyMin": 80,
      "severeAnomalyMax": 90,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c79fb"
      },
      "sensorType": "sound",
      "name": "s2",
      "location": "Close to the generator bearings",
      "unitOfMeasure": "db",
      "normalAnomalyMin": 60,
      "normalAnomalyMax": 70,
      "mildAnomalyMin": 70,
      "mildAnomalyMax": 75,
      "moderateAnomalyMin": 75,
      "moderateAnomalyMax": 80,
      "severeAnomalyMin": 80,
      "severeAnomalyMax": 90,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c79fc"
      },
      "sensorType": "sound",
      "name": "s3",
      "location": "Near the generator's cooling fan",
      "unitOfMeasure": "db",
      "normalAnomalyMin": 60,
      "normalAnomalyMax": 70,
      "mildAnomalyMin": 70,
      "mildAnomalyMax": 75,
      "moderateAnomalyMin": 75,
      "moderateAnomalyMax": 80,
      "severeAnomalyMin": 80,
      "severeAnomalyMax": 90,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c79f7"
      },
      "sensorType": "temperature",
      "name": "t2",
      "location": "On the coolant inlet",
      "unitOfMeasure": "C",
      "normalAnomalyMin": 70,
      "normalAnomalyMax": 90,
      "mildAnomalyMin": 90,
      "mildAnomalyMax": 100,
      "moderateAnomalyMin": 100,
      "moderateAnomalyMax": 110,
      "severeAnomalyMin": 110,
      "severeAnomalyMax": 150,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c79fe"
      },
      "sensorType": "vibration",
      "name": "v1",
      "location": "On the generator base frame (X-axis)",
      "unitOfMeasure": "mms",
      "normalAnomalyMin": 0,
      "normalAnomalyMax": 10,
      "mildAnomalyMin": 10,
      "mildAnomalyMax": 15,
      "moderateAnomalyMin": 15,
      "moderateAnomalyMax": 20,
      "severeAnomalyMin": 20,
      "severeAnomalyMax": 30,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c79f8"
      },
      "sensorType": "temperature",
      "name": "t3",
      "location": "On the coolant outlet",
      "unitOfMeasure": "C",
      "normalAnomalyMin": 70,
      "normalAnomalyMax": 90,
      "mildAnomalyMin": 90,
      "mildAnomalyMax": 100,
      "moderateAnomalyMin": 100,
      "moderateAnomalyMax": 110,
      "severeAnomalyMin": 110,
      "severeAnomalyMax": 150,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c7a00"
      },
      "sensorType": "vibration",
      "name": "v3",
      "location": "On the generator bearings (Z-axis)",
      "unitOfMeasure": "mms",
      "normalAnomalyMin": 0,
      "normalAnomalyMax": 10,
      "mildAnomalyMin": 10,
      "mildAnomalyMax": 15,
      "moderateAnomalyMin": 15,
      "moderateAnomalyMax": 20,
      "severeAnomalyMin": 20,
      "severeAnomalyMax": 30,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c7a01"
      },
      "sensorType": "vibration",
      "name": "v4",
      "location": "Near the coupling between the generator and the drive motor (3-axis measurement)",
      "unitOfMeasure": "mms",
      "normalAnomalyMin": 0,
      "normalAnomalyMax": 10,
      "mildAnomalyMin": 10,
      "mildAnomalyMax": 15,
      "moderateAnomalyMin": 15,
      "moderateAnomalyMax": 20,
      "severeAnomalyMin": 20,
      "severeAnomalyMax": 30,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c79fd"
      },
      "sensorType": "sound",
      "name": "s4",
      "location": "Near the exhaust system",
      "unitOfMeasure": "db",
      "normalAnomalyMin": 60,
      "normalAnomalyMax": 70,
      "mildAnomalyMin": 70,
      "mildAnomalyMax": 75,
      "moderateAnomalyMin": 75,
      "moderateAnomalyMax": 80,
      "severeAnomalyMin": 80,
      "severeAnomalyMax": 90,
      "isActive": true,
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66782147502144fe911c79ff"
      },
      "sensorType": "vibration",
      "name": "v2",
      "location": "On the generator shaft (Y-axis)",
      "unitOfMeasure": "mms",
      "normalAnomalyMin": 0,
      "normalAnomalyMax": 10,
      "mildAnomalyMin": 10,
      "mildAnomalyMax": 15,
      "moderateAnomalyMin": 15,
      "moderateAnomalyMax": 20,
      "severeAnomalyMin": 20,
      "severeAnomalyMax": 30,
      "isActive": true,
      "__v": 0
    }]

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
  const sensors = getAllsensors(sensorsData)

  // console.log(sensors);


  return (
    <div className={styles.live}>
      {sensors.map((s,i) => {
        return (
          <div key={i}>
            <h2>{Object.keys(s)}</h2>
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
                  <ScaleChart  key={index} size={genSensorsData[n.name]? genSensorsData[n.name] : 80  } unit={n.unit} rangeObject={{normalMin,normalMax,mildMin,mildMax,moderateMin,moderateMax,severe}}/>            
                  </div>
                )}
              )}
            </div>
          </div>
        )
      })}
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