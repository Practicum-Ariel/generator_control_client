import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css'
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function Dots(){

    const [isOpen, setIsOpen] = useState(false)
    const [isLeft, setIsLeft] = useState()
    const [isUp, setIsUp] = useState()

    const btnRef = useRef(null);

    useEffect(() => {
        const rect = btnRef.current.getBoundingClientRect()
        const xPosition = rect.left
        const yPosition = rect.top

        const width = window.innerWidth
        const height = window.innerHeight

        // isLeft = xPosition < width / 2
        // isUp = yPosition < height / 2
        setIsLeft(xPosition < width / 2)
        setIsUp(yPosition < height / 2)
        console.log("left: ", xPosition, "top: ", yPosition)
        console.log("is up: ", isUp, "is left: ", isLeft)
    }, [btnRef])

    const toggleOptions = (e) => {
        setIsOpen(!isOpen)
    }

    
    
    // let isLeft;
    // let isUp

    // console.log(height)

    // const isLeft = xPosition < width / 2
    // const isUp = yPosition < height / 2

    return (
        <div className={styles.optionsContainer}>
            <button onClick={toggleOptions} ref={btnRef}>
                <HiOutlineDotsHorizontal />
            </button>
            {
                isOpen &&
                <div className={`${styles.optionsBox} ${isUp ? styles.positionDown : styles.positionUp} ${isLeft ? styles.positionRight : styles.positionLeft }`}></div>
            }
        </div>
        
    )
}

export default Dots