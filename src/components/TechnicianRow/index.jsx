import styles from './style.module.css'
import { TiPencil } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import TechnicianForm from '../TechnicianForm';
import Confirm from '../Confirm';
import { apiReq } from '../../helpers/apiReq';
import { PopupContext } from '../../context';
import { useContext } from 'react';
import { IoWarning } from "react-icons/io5";


function TechnicianRow({ index, technician, setTechnicians }) {

    const { setPopupContent } = useContext(PopupContext);

    const editTechnician = () => {
        setPopupContent(<TechnicianForm text={"ערוך טכנאי"} technician={technician} setTechnicians={setTechnicians}/>)
    }

    const onCancel = () => {
        setPopupContent(null);
    }

    const onOK = () => {
        
        //apireq
        //.then => api delete - from table
        //.then => delete from array technicians - client
            //
        //finally => setPopupContent(null);
        apiReq({ url: `/technician/${technician.idNum}`, method: "DELETE" })
            .then(res => {
                console.log("res: ", res);
                setTechnicians(prev =>{
                  const newTechnicians = prev.filter(t => technician.idNum != t.idNum)
                  return  newTechnicians
                })
            })
            .finally( () =>  setPopupContent(null)) //must return error function

    }

    const deleteTechnician = () => {
        setPopupContent(<Confirm messageType={<IoWarning />} text={`האם אתה בטוח שברצונך למחוק את הטכנאי ${technician.fullName}?`} onOK={onOK} onCancel={onCancel} />)
    }

    return (<div className={styles.row}>
        {index + '.' + '  ' + technician.fullName + '  '}
        <div>
            <button onClick={editTechnician}> {<TiPencil />} </button>
            <button onClick={deleteTechnician}> {<MdDelete />} </button>
        </div>
    </div>)
}

export default TechnicianRow