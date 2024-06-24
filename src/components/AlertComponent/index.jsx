import React, {useState} from "react";
import styles from "./style.module.css";
import {MdOutlineArrowLeft} from "react-icons/md";
import {TiArrowSortedDown} from "react-icons/ti";

export default function index({status, title, context ,handlleClick }) { 
 
  
  const [details, setDetails] = useState(true);
  return (
  // statuses[status] ? 
    <div
      className={`${styles.main} ${styles[status]} `}
      onClick={() => setDetails(!details)}

>
      <div className={styles.title}>
        {details ? <TiArrowSortedDown /> : <MdOutlineArrowLeft />}
        {title}
      </div>

      {details && (
        <>
          <div className="">{context}</div>
          <button onClick={()=>handleClick}className={styles.but}>לפתיחת טיפול</button>
        </>
      )}
    </div>
  ) 
  // : (
  //   "?"
  // );
}
