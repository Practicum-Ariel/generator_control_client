import styles from './style.module.css'
import { useContext, useEffect, useState } from 'react'
import { apiReq } from '../../helpers/apiReq'
import TechnicianForm from '../TechnicianForm';
import TechnicianRow from '../TechnicianRow';
import { PopupContext } from '../../context';


function Technicians() {

    const [technicians, setTechnicians] = useState([])
    const { setPopupContent } = useContext(PopupContext);

    // apiReq method
    // it returns a promise
    function getTechniciansList() {
        apiReq({ url: "/technician", method: "GET" })
            .then(res => {
                setTechnicians(res)
            })
    }

    useEffect(() => {
        getTechniciansList();
    }, [])


    const addNewTechnician = () => {
        setPopupContent(<TechnicianForm text={"הוסף טכנאי"} setTechnicians={setTechnicians} />)
    }


    return (
        <div className={styles.container}>
            <h1>טכנאים</h1>
            <div className={styles.techniciansList}>
                {technicians.map((t, i) => <TechnicianRow key={t._id} index={i + 1}
                    technician={t} setTechnicians={setTechnicians} />)}
            </div>
            <button className={styles.addTechButton} onClick={addNewTechnician}>הוסף טכנאי חדש</button>
        </div>
    )
}

export default Technicians