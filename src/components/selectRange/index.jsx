import { useEffect, useState } from 'react'
import styles from './style.module.css'
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

function SelectRange({time, setTime}){
    const [isOpen, setIsOpen] = useState(false)
    // const [range, setRange] = useState("select range")

    return(
        <div className={styles.selectContainer}>
            <div className={styles.selectedRow}>
                {
                    isOpen ? 
                    <button onClick={() => setIsOpen(false)}><MdExpandLess /></button> : 
                    <button onClick={() => setIsOpen(true)}><MdOutlineExpandMore /></button>
                }
                <div className={styles.selectMsg}>
                    {!time && "בחר טווח זמן "}
                    {time == "month" && 
                    <>
                        חודש אחרון
                        <CiCalendar />
                    </>}
                    {time == "week" && 
                    <>
                        שבוע אחרון
                        <CiCalendar />
                    </>}
                    {time == "day" && 
                    <>
                        24 שעות אחרונות
                        <GoClock />
                    </>}
                </div>
            </div>
            {
                isOpen && <div className={styles.selectOptions}>
                    <button onClick={() => {setTime("month");setIsOpen(false)}} className={styles.option}>
                        חודש אחרון
                        <CiCalendar />
                    </button>
                    <button onClick={() => {setTime("week");setIsOpen(false)}} className={styles.option}>
                        שבוע אחרון
                        <CiCalendar />
                    </button>
                    <button onClick={() => {setTime("day");setIsOpen(false)}} className={styles.option}>
                        24 שעות אחרונות
                        <GoClock />
                    </button>
                </div>
            }
        </div>
    )
}

export default SelectRange