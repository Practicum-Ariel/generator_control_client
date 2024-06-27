import React from "react";
import style from "./style.module.css";
import AddTestGraph from "../../components/AddTestGraph";
import Toastify from "../../components/Toastify";
import {TiArrowSortedDown} from "react-icons/ti";
import {MdOutlineArrowLeft} from "react-icons/md";

export default function Asaf() {
  // TODO // כפתור גדול // גאפ לטקסט האפור
  return (
    <div className={style.main}>
      <AddTestGraph textOnGraph={'bla bla bla'} />
 
    </div>
  );
}
