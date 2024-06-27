import { useContext, useEffect, useState } from 'react'
import styles from './style.module.css'
import Input from '../Input';
import { apiReq } from '../../helpers/apiReq';
import { PopupContext } from '../../context';



function TechnicianForm({ action, setTechnicians }) {

    const [isNew, setIsNew] = useState("");
    const { setPopupContent } = useContext(PopupContext);

    useEffect(() => {
        action === "addNew" ? setIsNew(true) : setIsNew(false);
    },[])

    const handleSubmit = (e) => {
        e.preventDefault(); //זה מונע את ריענון הדף
        const formData = new FormData(e.target);
        const fullName = formData.get("fullName");       //name
        const idNum = formData.get("idNum");                   //name
        const phoneNumber = formData.get("phoneNumber"); //name
        // new --> post 
        // edit --> put
        apiReq({
            url: "/technician", method: "POST",
            data: { idNum: idNum, fullName: fullName, phoneNumber: phoneNumber }
        }).then( res => setTechnicians(prev => [...prev, res] ))

        // getTechniciansList();
        setPopupContent(null);  //close pop-up
    }

    function getTechniciansList() {
        apiReq({ url: "/technician", method: "GET" })
            .then(res => {
                console.log("res: ", res);
                setTechnicians(res)
            })
    }

    return (
        <>
            <h3>Technician</h3>

            <form className={styles.container} onSubmit={handleSubmit}>
                <div className={styles.fullName}>
                    <label htmlFor='fullName'>שם מלא</label>
                    <Input id='fullName' name="fullName" placeholder="שם מלא" />
                </div>
                <div className={styles.id}>
                    <label htmlFor='idNum'>מספר זהות</label>
                    <Input id='idNum' name="idNum" placeholder="מספר זהות" />
                </div>
                <div className={styles.phoneNumber}>
                    <label htmlFor='phoneNumber'>מספר טלפון</label>
                    <Input id='phoneNumber' name="phoneNumber" placeholder="מספר טלפון" />
                </div>

                <button className={styles.submit} type="submit">אישור</button>
            </form>
        </>)
}

export default TechnicianForm

/*  
אביעד אמר להוריד:
סיסמא
טיפול
*/