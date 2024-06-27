import styles from './style.module.css'


function Confirm({ text, onOK, onCancel, messageType }) {


    //
    return (
        <div className={styles.container} >

            <div className={styles.msgType}>{messageType}</div>
            <h3>
                {text}
            </h3>
            <div className={styles.buttons}> 
                <button className={styles.btn} onClick={onOK}>אישור</button>
                <button className={styles.btn} onClick={onCancel}>ביטול</button>
            </div>

        </div>
    )
}

export default Confirm
