import styles from './style.module.css'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";

//props{fullName, date, check, avatar, content}
export default function TechCheck({ fullName = 'Bob', date, content }) {
    const avatar = 'https://avataaars.io/'
    //extract date and time from  the date props.

    let date1 = new Date(date).toLocaleDateString('pt-PT')
    let time = new Date(date).toISOString().substring(11, 16)

    const [showFields, setShowFields] = useState(true)


    function clicked() {
        {
            setShowFields(!showFields)
        }

    }

    return (

        <ul className={styles.technician}>
            <li className={styles.details}>
                <div className={styles.right}>
                    <img className={styles.img} src={avatar} />
                    <h3>{fullName}</h3>
                    <div className={styles.date}>
                        <p>{date1}</p>
                        <time>{time}</time>
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.checkBox}><FaCheck /></div>
                    <div onClick={clicked}> <IoIosArrowDown /></div>
                </div>
            </li>
            <div className={styles.fields} style={{ display: !showFields && 'none' }}>
                <h2>{content}</h2>

            </div>
        </ul>

    )
}

