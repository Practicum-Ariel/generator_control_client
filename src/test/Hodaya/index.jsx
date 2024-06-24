import { io } from 'socket.io-client'
import React, { useEffect,useState } from 'react'
import ScaleChart from '../../components/ScaleChart'
import styles from './style.module.css';

const socketIO = io()

export default function Hodaya() {
    const [socket, setSocket] = useState(socketIO)
    
    const [genertorSensors, setGenertorSensors] = useState([])


    const genertorSensorsExmp = [
      { name: "T1", 
        value: 50,
        lasrRecords: [],
        type: "temp"
      },
      { name: "T2", 
        value: 60,
        lasrRecords: [],
        type: "temp"

      },
      { name: "T3", 
        value: 70,
        lasrRecords: [],
        type: "temp"

      },
      { name: "T4", 
        value: 80,
        lasrRecords: [],
        type: "temp"

      },
      { name: "T1", 
        value: 50,
        lasrRecords: [],
        type: "vib"

      },
      { name: "T2", 
        value: 60,
        lasrRecords: [],
        type: "vib"

      },
      { name: "T3", 
        value: 70,
        lasrRecords: [],
        type: "vib"

      },
      { name: "T4", 
        value: 80,
        lasrRecords: [],
        type: "vib"

      },
      { name: "T1", 
        value: 50,
        lasrRecords: [],
        type: "vib"

      },
      { name: "T2", 
        value: 60,
        lasrRecords: [],
        type: "voice"

      },
      { name: "T3", 
        value: 70,
        lasrRecords: [],
        type: "voice"

      },
      { name: "T4", 
        value: 80,
        lasrRecords: [],
        type: "voice"

      }
    ]

    useEffect(() => {
        setSocket(io('http://localhost:3000'))
        setGenertorSensors(genertorSensorsExmp)
    }, [])

    useEffect(() => {
        socket.on('get-data', (data) => {
            console.log(data);
        })

    }, [socket])

    const groupedSensors = genertorSensorsExmp.reduce((acc, sensor) => {
      if (!acc[sensor.value]) {
        acc[sensor.value] = [];
      }
      acc[sensor.value].push(sensor);
      return acc;
    }, {});

    const groupedArray = Object.keys(groupedSensors).map(value => {
      return { [value]: groupedSensors[value] };
    });

    console.log(groupedArray)


  return (
    <>
      <div className={styles.live}>
      {genertorSensors.map(g => {
        return (
          <div className={styles.liveScale}>
          <ScaleChart size ={g.value} unit = {"temp"} rangeObject = {  {
            normalMin:70,
            normlMax:90,
            mildMin:90,
            mildMax:100,
            moderateMin:100,
            moderateMax:110,
            severe:110
          }}/>
          </div>
        )
      })}
    </div>
    </>

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