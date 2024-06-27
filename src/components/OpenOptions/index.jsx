import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css'
import OptionRow from '../OptionRow';
// import { HiOutlineDotsHorizontal } from "react-icons/hi";

function OpenOptions({icon, options}){

    const [isOpen, setIsOpen] = useState(false)
    const [isLeft, setIsLeft] = useState()
    const [isUp, setIsUp] = useState()

    const btnRef = useRef(null);

    // useEffect(() => {
    //     console.log("add outside click event listener");
    //     document.addEventListener('click', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //       };
    // }, [])

    useEffect(() => {
        const rect = btnRef.current.getBoundingClientRect()
        const xPosition = rect.left
        const yPosition = rect.top

        const width = window.innerWidth
        const height = window.innerHeight

        setIsLeft(xPosition < width / 2)
        setIsUp(yPosition < height / 2)
        console.log("left: ", xPosition, "top: ", yPosition)
        console.log("is up: ", isUp, "is left: ", isLeft)
    }, [btnRef])

    const toggleOptions = (e) => {
        console.log("toggle is open")
        setIsOpen(!isOpen)
    }

    // const handleClickOutside = (event) => {
    //     if(btnRef.current && !btnRef.current.contains(event.target)){
    //         console.log("outside click event")
    //         setIsOpen(false)
    //     }
    // }

    return (
        <div className={styles.optionsContainer}>
            <button className={styles.openBtn} onClick={toggleOptions} ref={btnRef}>
                {icon}
                {/* <HiOutlineDotsHorizontal /> */}
            </button>
            {
                isOpen && <>
                    <div className={`${styles.optionsBox} ${isUp ? styles.positionDown : styles.positionUp} ${isLeft ? styles.positionRight : styles.positionLeft }`}>
                        {options.map((o,i) => <OptionRow key={i+o.text} option={o}/>)}
                    </div>
                    <div onClick={() => setIsOpen(false)} className={styles.fixed}></div>
                </>
            }
        </div>
        
    )
}

export default OpenOptions