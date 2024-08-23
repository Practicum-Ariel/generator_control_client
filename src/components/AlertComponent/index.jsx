import React, { useState } from "react";
import styles from "./style.module.css";
import { MdOutlineArrowLeft } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import TechVisitForm from "../TechVisitForm";
import { useNavigate } from "react-router-dom";

export default function index({ _id, insight, fault_name, fault_description, treatments, based_on_data, status, genList }) {
  const [isClose, setIsClose] = useState(true);
  let nav = useNavigate();

  return (
    // statuses[status] ?
    <div
      className={`${styles.main} ${styles[status]} `}
      onClick={() => setIsClose(!isClose)}>
      <div className={styles.title}>
        {isClose ? <MdOutlineArrowLeft /> : <TiArrowSortedDown />}
        {fault_name}
        <div className={styles.context}>: {genList}</div>
      </div>

      {!isClose && (
        <>
          <div className="">{fault_description}</div>
          <div className="">{insight}</div>
          <div className={styles.treatments}>
            <h5>Reasons:</h5>
            {Object.values(based_on_data).map(t => <li>{t}</li>)}
          </div>
          <div className={styles.buttons}>
            <button onClick={() => nav('/tech-check/form', { state: { treatments: treatments, insightId: _id } })} className={styles.but}>
              Open Treatment
            </button>
            <button onClick={() => nav(`/generator/${genList[0]}`)} className={styles.but}>
              Pass to generator
            </button>
          </div>
        </>
      )}
    </div>
  );
  // : (
  //   "?"
  // );
}
