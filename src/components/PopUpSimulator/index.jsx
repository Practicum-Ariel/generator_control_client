import { useContext, useState } from 'react'
import styles from './style.module.css'
import BoxSensorType from '../BoxSensorType'
import PopupProvider from '../../layout/Popup/PopupProvider';
import { apiReq } from '../../helpers/apiReq'
import { PopupContext } from '../../context';



export default function PopUpSimulator({ testGraphs, setTestGraph }) {
    const { setPopupContent } = useContext(PopupContext);
    const [scenario, setScenario] = useState({
        time: "",
        temperature: "",
        vibration: "",
        sound: ""
    })


    const updateData = (type, value) => {
        setScenario({ ...scenario, [type]: value })
    }
    const updateTime = value => updateData("time", value)
    const updateTemperature = value => updateData("temperature", value)
    const updateVibration = value => updateData("vibration", value)
    const updateSound = value => updateData("sound", value)

    const sendData = () => {
        if (!scenario.time || scenario.sound || !scenario.temperature || scenario.vibration)
            console.log("")
        setPopupContent(<NextComponent setTestGraph={setTestGraph} testGraphs={testGraphs} scenario={scenario} />)
    }




    const timeOptions = [{ text: "יום", value: "day" }, { text: "שבוע", value: "week" }, { text: "חודש", value: "month" }]
    const scenarioOption = [{ text: "רגיל", value: "normal" }, { text: "בינוני", value: "mild" }, { text: "גבוהה", value: "moderate" }, { text: "קריטי", value: "severe" }]


    return (
        < div className={styles.container} >
            <div className={styles.row}>
                <div className={styles.box}>
                    <label>זמן:</label>
                    <BoxSensorType selected={scenario.time} setSelected={updateTime} types={timeOptions} />
                </div>
                <div className={styles.box}>
                    <label> חיישן טמפרטורה</label>
                    <BoxSensorType selected={scenario.temperature} setSelected={updateTemperature} types={scenarioOption} />
                </div>
                <div className={styles.box}>
                    <label> חיישן רטט</label>
                    <BoxSensorType selected={scenario.vibration} setSelected={updateVibration} types={scenarioOption} />
                </div>
                <div className={styles.box}>
                    <label> חיישן קול</label>
                    <BoxSensorType selected={scenario.sound} setSelected={updateSound} types={scenarioOption} />
                </div>
            </div>
            <div className={styles.btnContainer}>
                <div className={styles.circleBox} >
                    <div className={styles.fullCircle}></div>
                    <div className={styles.emptyCircle}></div>
                </div>

                <button className={styles.btn} type='submit' onClick={sendData}>הבא</button>
            </div>
        </div >
    )
}