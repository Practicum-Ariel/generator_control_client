import { io } from 'socket.io-client'
import React, { useEffect, useState } from 'react'
import ScaleChart from '../../components/ScaleChart'
import styles from './style.module.css';
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader';

const socketIO = io()

export default function ScaleLive({ generatorId = "6678464e815884d6e23a4542" }) {
  const [socket, setSocket] = useState(socketIO)
  const [genSensorsData, setgenSensorsData] = useState({})
  const { data = [], loading, error } = useApi(`/generator/${generatorId}/sensors`)
  console.log({ data, loading, error });
  const dict = {
    "temperature": "טמפרטורה",
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

    socket.emit('start-data', generatorId);

    return () => {
      socket.disconnect();
    }

  }, [socket])

  const getAllsensors = (sensorsData = []) => {
    let groupedSensors = []
    sensorsData.forEach(sensor => {
      if (!groupedSensors[sensor.sensorType]) {
        groupedSensors[sensor.sensorType] = []
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


  if (loading) return (<Loader />)
  return (
    <div className={styles.types}>
      {sensors.map((s, i) => {
        return (
          <div key={i}>
            <h3 className={styles.title}>{dict[Object.keys(s)]}</h3>
            <div className={styles.sensorByType}>
              {s[Object.keys(s)].map((n, index) => {
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
                    <ScaleChart key={index} size={genSensorsData[n.name] ? genSensorsData[n.name] : 50} unit={n.unitOfMeasure} name={n.name} rangeObject={{ normalMin, normalMax, mildMin, mildMax, moderateMin, moderateMax, severe }} />
                  </div>
                )
              }
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}































