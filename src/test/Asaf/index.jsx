import React from "react";
import style from "./style.module.css";
import AlertComponent from "../../components/AlertComponent";
import {TiArrowSortedDown} from "react-icons/ti";
import {MdOutlineArrowLeft} from "react-icons/md";

export default function Asaf() {
  return (
    <>
      <div className={style.main}>
        <AlertComponent
          status={"succcess"}
          title={"חישן לא תקן"}
          context={"פרטי אזהרה ראשונית."}
          handleClick={"handleClick"}
        />
        <TiArrowSortedDown />
        <MdOutlineArrowLeft />
      </div>
    </>
  );
}
