import React, { useEffect, useState } from 'react'
import styles from './style.module.css'

export default function AddMachine() {
  const [machine, setMachine] = useState({
    name: '',
    model: '',
    serialNumber: '',
    location: '',
    relatedSensors: []
  })

  const textInputs = [
    { id: 'name', labelText: 'Name' },
    { id: 'model', labelText: 'Model' },
    { id: 'serialNumber', labelText: 'Serial No.' },
    { id: 'location', labelText: 'Location' },
  ]

  const relatedSensors = [
    { id: 'temperature', labelText: 'Temperature' },
    { id: 'sound', labelText: 'Sound' },
    { id: 'vibration', labelText: 'Vibration' },
  ]

  const handleInput = (target, inputId) => {
    switch (target.type) {
      case 'text':
        setMachine(prev => ({ ...prev, [inputId]: target.value }))
      case 'checkbox':
        setMachine(prev => {
          if (target.checked) return {...prev, relatedSensors: [...prev.relatedSensors, inputId]}
          else return {...prev, relatedSensors: prev.relatedSensors.filter(rs => rs !== inputId)}
        })
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(machine)
  }

  return (
    <section className={styles.add_machine_container}>
      <form className={styles.add_machine_form} onSubmit={handleSubmit}>
        <section className={styles.text_inputs}>
          {textInputs.map(ti =>
            <div className={styles.machine_input} key={ti.id}>
              <label htmlFor={ti.id}>{ti.labelText}</label>
              <input type="text" name={ti.id} id={ti.id} value={machine[ti.id]} onInput={(e) => handleInput(e.target, ti.id)} />
            </div>
          )}
        </section>

        <section className={styles.related_sensors}>
          <p>Related sensors</p>
          {relatedSensors.map(rs =>
            <div className={styles.machine_input} key={rs.id}>
              <input type="checkbox" name={rs.id} id={rs.id} onClick={(e) => handleInput(e.target, rs.id)} />
              <label htmlFor={rs.id}>{rs.labelText}</label>
            </div>
          )}
        </section>

        <button className={styles.submit_btn} type="submit">Add machine</button>
      </form>
    </section>
  )
}
