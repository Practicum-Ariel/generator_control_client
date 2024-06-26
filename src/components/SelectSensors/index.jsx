import React, { useEffect, useState } from 'react'
import styles from './style.module.css'


export default function SelectSensors({ arraySensors, sensors, setSensors, nameBtn }) {

    const [show, setShow] = useState(false)
    const newSensorsArray = arraySensors.reduce((prev, current, temp, array) => {
        if (current.includes('t') && (!prev.find((value) => value.name === 'טמפרטורה')))
            return [...prev, { name: "טמפרטורה", sensors: array.filter(v => v.includes('t')) }]
        else if (current.includes('v') && (!prev.find((value) => value.name === 'רעידות')))
            return [...prev, { name: "רעידות", sensors: array.filter(v => v.includes('v')) }]
        else if (current.includes('s') && (!prev.find((value) => value.name === 'קול')))
            return [...prev, { name: "קול", sensors: array.filter(v => v.includes('s')) }]
        return prev
    }, [])

    console.log(sensors)
    function handelAllChecked(value) {
        let obj = {}
        arraySensors.forEach((name) => {
            obj[name] = value;
        });
        setSensors(obj)
    }



    function handelCheckBox(e) {
        setSensors({
            ...sensors,
            [e.target.name]: e.target.checked
        })
    }


    return (
        <div className={styles.mainContainer}>
            <button type="button" className={styles.btn} onClick={() => { setShow(!show) }}>{nameBtn}</button>

            <div className={styles.container} style={show ? null : { display: "none" }}>
                <div className={styles.selectAll} >
                    <div className={styles.selectAllContainer}>
                        <input type="checkbox" onChange={(e) => handelAllChecked(e.target.checked)} />
                        <h3>בחר הכל</h3>
                    </div>
                    {newSensorsArray.map((type, index) => <div key={index} className={styles.direction}>
                        <h3 className={styles.name}>{type.name}</h3>
                        {type.sensors.map((sens, i) => {
                            return (
                                <div key={i} className={styles.containerCheckBox} >
                                    <div className={styles.CheckBox}>

                                        <input type="checkbox" name={sens} checked={sensors[sens] || false} onChange={(e) => handelCheckBox(e)} />
                                        <label >{sens}</label>
                                    </div>
                                </div>
                            )
                        })}
                    </div>)}
                </div>
            </div>
        </div>
    )
}

