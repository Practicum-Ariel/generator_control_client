import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
//import axios from 'axios';
import { apiReq } from '../../helpers/apiReq';

function AddGenerator() {


  const [sensorsList, setSensorsList] = useState([
    {name: "t1", id: "1234"},
    {name: "t2", id: "2234"},
    {name: "t3", id: "3234"},
    {name: "t4", id: "4234"},
    {name: "t5", id: "5234"},
    {name: "t6", id: "6234"},
    {name: "t7", id: "7234"},
    {name: "t8", id: "8234"},
    {name: "t9", id: "9234"},
    {name: "t10", id: "1134"},
    {name: "t11", id: "1334"},
    {name: "t12", id: "1434"},
  ])//{sensor name, senosr id, optionally - type}

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [selectedSensors, setSelectedSensors] = useState([])

  //const sensorsListUrl = ""
  const addGenUrl = "http://localhost:3000/api/gen"

  useEffect(() => {
    //axios.get(sensorsListUrl).then(res => setSensorsList(res.data))
    //apiReq({})
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(selectedSensors)
    //const result = apiReq({url: addGenUrl, method:  "POST", data: {name, location, sensors: selectedSensors} })
    apiReq({url: addGenUrl, method:  "POST", data: {name, location, sensorsIds: selectedSensors} })
    .then(res => console.log(res))
    

    // console.log({
    //   name,
    //   location,
    //   sensors: selectedSensors,
    // });
    // const formData = new FormData(e.target)
    // const objFormData = Object.fromEntries(formData)
  }

  const handleSensorChange = (sensorId) => {
    if (selectedSensors.includes(sensorId)) {
      setSelectedSensors(selectedSensors.filter((id) => id !== sensorId));
    } else {
      setSelectedSensors([...selectedSensors, sensorId]);
    }
  }

  return <form className={styles.newGenForm} onSubmit={handleSubmit}>
    AddGenerator
    <div className={styles.formRow}>
      <label>
        <h2>שם</h2>
        <input type="text" name='nameInput' onChange={(e) => setName(e.target.value)}/>
      </label>
    </div>
    <div className={styles.formRow}>
      <label>
          <h2>מיקום</h2>
          <input type="text" name='locationInput' onChange={(e) => setLocation(e.target.value)}/>
      </label>
    </div>
    <div className={styles.formRow}>
      <h2>סנסורים</h2>
      <div className={styles.formRow}>
        {sensorsList.map(s => 
          <div key={s.id}  className={styles.sensorSelect}>
            <label>
              <input 
                type="checkbox" 
                value={s.id} 
                checked={selectedSensors.includes(s.id)}
                onChange={() => handleSensorChange(s.id)}
              />
              {s.name}
            </label>
          </div>)
        }
      </div>
    </div>
    <div className={styles.selectedRow}>
        <h2>נבחרו</h2>
      <div className={styles.selected}>
        {selectedSensors.map(s => s + " ")}
      </div>
    </div>
    <div className={styles.btnRow}>
      <button type="submit">אישור</button>
    </div>
  </form>;
}

export default AddGenerator;
